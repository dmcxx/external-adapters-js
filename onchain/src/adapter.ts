import { Execute } from '@chainlink/types'
import { Requester, Validator } from '@chainlink/external-adapter'

const customError = (data: any) => data.Response === 'Error'

const customParams = {
  market: ['market', 'from', 'future'],
}

const commonKeys: Record<string, string> = {
  brent: 'BRN',
}

export const execute: Execute = async (input) => {
  const validator = new Validator(input, customParams)
  if (validator.error) throw validator.error

  const jobRunID = validator.validated.id
  let market = validator.validated.data.market.toLowerCase()
  if (market in commonKeys) market = commonKeys[market]

  const url = `https://api.onchain.com.au/api/Quote/oil/${market}`

  const headers = {
    'x-api-key': process.env.API_KEY,
  }

  const config = {
    url,
    headers,
  }

  const response = await Requester.request(config, customError)
  response.data.result = Requester.validateResultNumber(response.data, ['price'])
  return Requester.success(jobRunID, response)
}
