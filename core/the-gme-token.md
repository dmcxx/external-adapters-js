# The GME Token

### `VaultETH`

#### `depositInBankRouter()`

#### `canWithdraw()`

#### `constructor(address _token)` \(public\)

#### `checkLock(address _usr) → uint256` \(public\)

#### `balance() → uint256` \(public\)

#### `setMin(uint256 _min)` \(external\)

#### `setGovernance(address _governance)` \(public\)

#### `setBank(address _bank)` \(public\)

#### `setLockTime(uint256 _lockTime)` \(public\)

#### `available() → uint256` \(public\)

#### `userShares(address _user) → uint256` \(public\)

View to see the shares for each User

### Parameters:

| Parameter Name | Description |
| :--- | :--- |
| `_user` | User Address |

#### `effectivePoolOwnership(address _user) → uint256` \(public\)

Use only for UI purposes. It isn't precision-proof for calculations.

### Parameters:

| Parameter Name | Description |
| :--- | :--- |
| `_user` | The address we want to search |
|  |  |

#### `depositAll()` \(external\)

#### `deposit(uint256 _amount)` \(public\)

function deposit here

### Parameters:

| Parameter Name | Description |
| :--- | :--- |
| `_amount` | Amount param |

#### `depositETH()` \(public\)

#### `withdrawAll()` \(external\)

#### `withdrawAllETH()` \(external\)

#### `withdraw(uint256 _shares)` \(public\)

#### `withdrawETH(uint256 _shares)` \(public\)

#### `getPricePerFullShare() → uint256` \(public\)

#### `fallback()` \(external\)

#### `receive()` \(external\)

