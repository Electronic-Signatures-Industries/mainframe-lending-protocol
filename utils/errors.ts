export enum AdminErrors {
  NotAdmin = "ERR_NOT_ADMIN",
}

export enum BalanceSheetErrors {
  BelowCollateralizationRatio = "ERR_BELOW_COLLATERALIZATION_RATIO",
  DepositCollateralZero = "ERR_DEPOSIT_COLLATERAL_ZERO",
  DepositCollateralNotAllowed = "ERR_DEPOSIT_COLLATERAL_NOT_ALLOWED",
  FreeCollateralInsufficientLockedCollateral = "ERR_FREE_COLLATERAL_INSUFFICIENT_LOCKED_COLLATERAL",
  FreeCollateralZero = "ERR_FREE_COLLATERAL_ZERO",
  GetHypotheticalCollateralizationRatioDebtZero = "ERR_GET_HYPOTHETICAL_COLLATERALIZATION_RATIO_DEBT_ZERO",
  LockCollateralInsufficientFreeCollateral = "ERR_LOCK_COLLATERAL_INSUFFICIENT_FREE_COLLATERAL",
  LockCollateralZero = "ERR_LOCK_COLLATERAL_ZERO",
  WithdrawCollateralInsufficientFreeCollateral = "ERR_WITHDRAW_COLLATERAL_INSUFFICIENT_FREE_COLLATERAL",
  WithdrawCollateralZero = "ERR_WITHDRAW_COLLATERAL_ZERO",
}

export enum CarefulMathErrors {
  NoError = 0,
}

export enum Erc20PermitErrors {
  Expired = "ERR_ERC20_PERMIT_EXPIRED",
  InvalidSignature = "ERR_ERC20_PERMIT_INVALID_SIGNATURE",
  OwnerZeroAddress = "ERR_ERC20_PERMIT_OWNER_ZERO_ADDRESS",
  RecoveredOwnerZeroAddress = "ERR_ERC20_PERMIT_RECOVERED_OWNER_ZERO_ADDRESS",
  SpenderZeroAddress = "ERR_ERC20_PERMIT_SPENDER_ZERO_ADDRESS",
}

export enum FintrollerErrors {
  BondNotListed = "ERR_BOND_NOT_LISTED",
  SetCollateralizationRatioOverflow = "ERR_SET_COLLATERALIZATION_RATIO_OVERFLOW",
  SetCollateralizationRatioUnderflow = "ERR_SET_COLLATERALIZATION_RATIO_UNDERFLOW",
  SetDebtCeilingZero = "ERR_SET_DEBT_CEILING_ZERO",
  SetOracleZeroAddress = "ERR_SET_ORACLE_ZERO_ADDRESS",
}

export enum GenericErrors {
  CollateralPriceZero = "ERR_COLLATERAL_PRICE_ZERO",
  Initialized = "ERR_INITALIZED",
  NotInitialized = "ERR_NOT_INITALIZED",
  UnderlyingPriceZero = "ERR_UNDERLYING_PRICE_ZERO",
  VaultOpen = "ERR_VAULT_OPEN",
  VaultNotOpen = "ERR_VAULT_NOT_OPEN",
}

export enum Erc20RecoverErrors {
  RecoverZero = "ERR_RECOVER_ZERO",
  RecoverNonRecoverableToken = "ERR_RECOVER_NON_RECOVERABLE_TOKEN",
  SetNonRecoverableTokensEmptyArray = "ERR_SET_NON_RECOVERABLE_TOKENS_EMPTY_ARRAY",
}

export enum RedemptionPoolErrors {
  RedeemUnderlyingBurn = "ERR_REDEEM_UNDERLYING_BURN",
  RedeemUnderlyingInsufficientUnderlying = "ERR_REDEEM_UNDERLYING_INSUFFICIENT_UNDERLYING",
  RedeemUnderlyingNotAllowed = "ERR_REDEEM_UNDERLYING_NOT_ALLOWED",
  RedeemUnderlyingZero = "ERR_REDEEM_UNDERLYING_ZERO",
  SupplyUnderlyingMint = "ERR_SUPPLY_UNDERLYING_MINT",
  SupplyUnderlyingNotAllowed = "ERR_SUPPLY_UNDERLYING_NOT_ALLOWED",
  SupplyUnderlyingZero = "ERR_SUPPLY_UNDERLYING_ZERO",
}

export enum YTokenErrors {
  BondMatured = "ERR_BOND_MATURED",
  BondNotMatured = "ERR_BOND_NOT_MATURED",
  BorrowInsufficientLiquidity = "ERR_REDEEM_UNDERLYING_INSUFFICIENT_LIQUIDITY",
  BorrowDebtCeilingOverflow = "ERR_BORROW_DEBT_CEILING_OVERFLOW",
  BorrowLockedCollateralZero = "ERR_BORROW_LOCKED_COLLATERAL_ZERO",
  BorrowNotAllowed = "ERR_BORROW_NOT_ALLOWED",
  BorrowSetVaultDebt = "ERR_BORROW_SET_VAULT_DEBT",
  BorrowZero = "ERR_BORROW_ZERO",
  ConstructorCollateralDecimalsOverflow = "ERR_CONSTRUCTOR_COLLATERAL_DECIMALS_OVERFLOW",
  ConstructorUnderlyingDecimalsOverflow = "ERR_CONSTRUCTOR_UNDERLYING_DECIMALS_OVERFLOW",
  RepayBorrowInsufficientBalance = "ERR_REPAY_BORROW_INSUFFICIENT_BALANCE",
  RepayBorrowInsufficientDebt = "ERR_REPAY_BORROW_INSUFFICIENT_DEBT",
  RepayBorrowNotAllowed = "ERR_REPAY_BORROW_NOT_ALLOWED",
  RepayBorrowZero = "ERR_REPAY_BORROW_ZERO",
}