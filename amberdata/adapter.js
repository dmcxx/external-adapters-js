const { Requester, Validator } = require('@chainlink/external-adapter')
const { util } = require('@chainlink/ea-bootstrap')

const customError = (data) => {
  return Object.keys(data.payload).length === 0
}

const customParams = {
  base: ['base', 'from', 'coin'],
  quote: ['quote', 'to', 'market'],
}

const execute = (input, callback) => {
  const validator = new Validator(input, customParams)
  if (validator.error) return callback(validator.error.statusCode, validator.errored)

  const jobRunID = validator.validated.id
  const coin = validator.validated.data.base
  const market = validator.validated.data.quote
  const url = `https://web3api.io/api/v2/market/spot/prices/pairs/${coin.toLowerCase()}_${market.toLowerCase()}/latest`

  const params = {
    includeCrossRates: true,
  }

  const config = {
    url,
    params,
    headers: {
      'x-api-key': util.getRandomRequiredEnv('API_KEY'),
    },
  }
  Requester.request(config, customError)
    .then((response) => {
      response.data.result = Requester.validateResultNumber(response.data, ['payload', 'price'])
      callback(response.status, Requester.success(jobRunID, response))
    })
    .catch((error) => callback(500, Requester.errored(jobRunID, error)))
}

module.exports.execute = execute
