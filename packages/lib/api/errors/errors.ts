/**
 * 400	BadRequest
 * 401	Unauthorized
 * 402	PaymentRequired
 * 403	Forbidden
 * 404	NotFound
 * 405	MethodNotAllowed
 * 406	NotAcceptable
 * 407	ProxyAuthenticationRequired
 * 408	RequestTimeout
 * 409	Conflict
 * 410	Gone
 * 411	LengthRequired
 * 412	PreconditionFailed
 * 413	PayloadTooLarge
 * 414	URITooLong
 * 415	UnsupportedMediaType
 * 416	RangeNotSatisfiable
 * 417	ExpectationFailed
 * 418	ImATeapot
 * 421	MisdirectedRequest
 * 422	UnprocessableEntity
 * 423	Locked
 * 424	FailedDependency
 * 425	TooEarly
 * 426	UpgradeRequired
 * 428	PreconditionRequired
 * 429	TooManyRequests
 * 431	RequestHeaderFieldsTooLarge
 * 451	UnavailableForLegalReasons
 * 500	InternalServerError
 * 501	NotImplemented
 * 502	BadGateway
 * 503	ServiceUnavailable
 * 504	GatewayTimeout
 * 505	HTTPVersionNotSupported
 * 506	VariantAlsoNegotiates
 * 507	InsufficientStorage
 * 508	LoopDetected
 * 509	BandwidthLimitExceeded
 * 510	NotExtended
 * 511	NetworkAuthenticationRequired
 */
import createError from "http-errors";

// GENERIC ERRORS

export const BadRequest = createError(400, "Bad Request");
export const Unauthorized = createError(401, "Unauthorized");
export const Forbidden = createError(403, "Forbidden");
export const NotFound = createError(404, "Not Found");
export const Conflict = createError(409, "Record Already Exists");
export const InternalServerError = createError(500, "Internal Server Error");
export const ResourceNotFound = createError(501, "Resource Not Found");

// ENVIRONMENT ERRORS

export const DatabaseURIMissing = createError(500, "Missing Database URI");

// API ERRORS

export const NotImplemented = createError(501, "Not Implemented");
export const UnableToImportCollectionSnapshot = createError(
  500,
  "Unable to import collection snapshot"
);

// CONTRACT ERRORS
export const SignatureNotFound = createError(500, "Signature not found");
export const SignatureConfirmationNotFound = createError(
  500,
  "Signature confirmation not found"
);
export const MissingSigner = createError(500, "Please connect your wallet.");
export const MissingToken = createError(500, "You have not selected a token.");
