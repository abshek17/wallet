export enum ErrorMessages {
  TRANSACTION_FAILED = 'transactionFailed',
  TRANSACTION_TIMEOUT = 'transactionTimeout',
  EXCHANGE_FAILED = 'exchangeFailed',
  INVALID_INVITATION = 'invalidInvite',
  INCORRECT_PIN = 'incorrectPin',
  PIN_INPUT_CANCELED = 'pinInputCanceled',
  SET_PIN_FAILED = 'setPinFailed',
  NSF_GOLD = 'notEnoughGoldError',
  NSF_STABLE = 'notEnoughStableError',
  NSF_TO_SEND = 'needMoreFundsToSend',
  INSUFFICIENT_BALANCE = 'insufficientBalance',
  INVALID_AMOUNT = 'invalidAmount',
  INVALID_BACKUP_PHRASE = 'invalidBackupPhrase',
  INVALID_WORDS_IN_BACKUP_PHRASE = 'invalidWordsInBackupPhrase',
  IMPORT_BACKUP_FAILED = 'importBackupFailed',
  BACKUP_QUIZ_FAILED = 'backupQuizFailed',
  FAILED_FETCH_MNEMONIC = 'failedFetchMnemonic',
  INVALID_PHONE_NUMBER = 'invalidPhone',
  MISSING_FULL_NAME = 'missingFullName',
  NOT_READY_FOR_CODE = 'notReadyForCode',
  EMPTY_ATTESTATION_CODE = 'emptyVerificationCode',
  INVALID_ATTESTATION_CODE = 'invalidVerificationCode',
  REPEAT_ATTESTATION_CODE = 'repeatVerificationCode',
  REVEAL_ATTESTATION_FAILURE = 'revealAttestationFailure',
  VERIFICATION_FAILURE = 'verificationFailure',
  CANT_VERIFY_REVOKED_ACCOUNT = 'cantVerifyRevokedAccount',
  VERIFICATION_TIMEOUT = 'verificationTimeout',
  ADDRESS_LOOKUP_FAILURE = 'addressLookupFailure',
  ODIS_QUOTA_ERROR = 'odisQuotaError',
  SALT_FETCH_FAILURE = 'saltFetchFailure',
  SALT_QUOTA_EXCEEDED = 'saltQuotaExceededError',
  MAX_ACTIONABLE_ATTESTATIONS_EXCEEDED = 'maxActionableAttestationsExceededError',
  ODIS_INSUFFICIENT_BALANCE = 'odisInsufficientBalance',
  MATCHMAKING_QUOTA_EXCEEDED = 'matchmakingQuotaExceededError',
  INVALID_ACCOUNT = 'invalidAccount',
  ACCOUNT_UNLOCK_FAILED = 'accountUnlockFailed',
  CANT_SELECT_INVALID_PHONE = 'cantSelectInvalidPhone',
  CAN_NOT_REQUEST_FROM_UNVERIFIED = 'canNotRequestFromUnverified',
  REFRESH_FAILED = 'refreshFailedUnexpectedly',
  INVITE_FAILED = 'inviteFailed',
  INVITE_OPEN_APP_FAILED = 'inviteOpenAppFailed',
  SEND_PAYMENT_FAILED = 'sendPaymentFailed',
  PAYMENT_LIMIT_REACHED = 'paymentLimitReached',
  REQUEST_LIMIT = 'requestLimitError',
  PAYMENT_REQUEST_FAILED = 'paymentRequestFailed',
  ESCROW_TRANSFER_FAILED = 'escrowTransferFailed',
  ESCROW_WITHDRAWAL_FAILED = 'escrowWithdrawalFailed',
  RECLAIMING_ESCROWED_PAYMENT_FAILED = 'reclaimingEscrowedPaymentFailed',
  EXCHANGE_RATE_FAILED = 'errorRefreshingRate',
  EXCHANGE_RATE_CHANGE = 'exchangeRateChange',
  EMPTY_INVITE_CODE = 'emptyInviteCode',
  REDEEM_INVITE_FAILED = 'redeemFailed',
  REDEEM_INVITE_TIMEOUT = 'redeemInviteTimeout',
  ACCOUNT_SETUP_FAILED = 'accountSetupFailed',
  FIREBASE_DISABLED = 'firebaseDisabled',
  FIREBASE_FAILED = 'firebaseFailed',
  IMPORT_CONTACTS_FAILED = 'importContactsFailed',
  GAS_PRICE_UPDATE_FAILED = 'gasPriceUpdateFailed',
  QR_FAILED_INVALID_ADDRESS = 'qrFailedInvalidAddress',
  QR_FAILED_INVALID_RECIPIENT = 'qrFailedInvalidRecipient',
  QR_FAILED_NO_PHONE_NUMBER = 'qrFailedNoPhoneNumber',
  CORRUPTED_CHAIN_DELETED = 'corruptedChainDeleted',
  CONTRACT_KIT_INIT_FAILED = 'contractKitInitFailed',
  CALCULATE_FEE_FAILED = 'calculateFeeFailed',
  FAILED_TO_SWITCH_SYNC_MODES = 'failedToSwitchSyncModes',
  PAYMENT_REQUEST_UPDATE_FAILED = 'paymentRequestUpdateFailed',
  ADDRESS_VALIDATION_ERROR = 'addressValidationError',
  ADDRESS_VALIDATION_NO_MATCH = 'addressValidationNoMatch',
  ADDRESS_VALIDATION_FULL_POORLY_FORMATTED = 'addressValidationFullPoorlyFormatted',
  ADDRESS_VALIDATION_PARTIAL_POORLY_FORMATTED = 'addressValidationPartialPoorlyFormatted',
  ADDRESS_VALIDATION_FULL_OWN_ADDRESS = 'addressValidationFullOwnAddress',
  ADDRESS_VALIDATION_PARTIAL_OWN_ADDRESS = 'addressValidationPartialOwnAddress',
  KEYCHAIN_STORAGE_ERROR = 'keychainStorageError',
  PROVIDER_RATE_FETCH_FAILED = 'providerRateFetchFailed',
  ACCOUNT_CLEAR_FAILED = 'accountClearFailed',
  GETH_FETCH_ACCOUNTS = 'gethFetchAccounts',
  GETH_ACCOUNT_ALREADY_EXISTS = 'gethAccountAlreadyExists',
  GETH_UNEXPECTED_ADDRESS_ON_ADD = 'gethUnexpectedAddressOnAdd',
  COUNTRY_NOT_AVAILABLE = 'countryNotAvailable',
  MAX_ESCROW_TRANSFER_EXCEEDED = 'maxEscrowTransferExceeded',
  FETCH_FAILED = 'fetchFailed',
  PICTURE_LOAD_FAILED = 'pictureLoadFailed',
  SIMPLEX_PURCHASE_FETCH_FAILED = 'simplexPurchaseFetchFailed',
  PROVIDER_FETCH_FAILED = 'providerFetchFailed',
  CASH_OUT_LIMIT_EXCEEDED = 'cashOutLimitExceeded',
  RAISE_LIMIT_EMAIL_NOT_SENT = 'raiseLimitEmailNotSent',
  PERSONA_ACCOUNT_ENDPOINT_FAIL = 'personaAccountEndpointFail',
  PLAID_CREATE_LINK_TOKEN_FAIL = 'plaidCreateLinkTokenFail',
  GET_BANK_ACCOUNTS_FAIL = 'getBankAccountsFail',
  DELETE_BANK_ACCOUNT_FAIL = 'deleteBankAccountFail',
  SUPERCHARGE_FETCH_REWARDS_FAILED = 'superchargeFetchRewardsFailed',
  SUPERCHARGE_CLAIM_FAILED = 'superchargeClaimFailure',
}
