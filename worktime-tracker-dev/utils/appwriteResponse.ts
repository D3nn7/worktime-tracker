//more infos about appwrites responses: https://appwrite.io/docs/response-codes

export enum AppwriteResponseCode {
    // 2xx Codes
    OK = 200,
    CREATED = 201,
    ACCEPTED = 202,
    NO_CONTENT = 204,

    // 3xx Codes
    MOVED_PERMANENTLY = 301,
    NOT_MODIFIED = 304,

    // 4xx Codes
    BAD_REQUEST = 400,
    UNAUTHORIZED = 401,
    FORBIDDEN = 403,
    NOT_FOUND = 404,
    CONFLICT = 409,
    PAYLOAD_TOO_LARGE = 413,
    INVALID_RANGE = 416,
    TOO_MANY_REQUESTS = 429,

    // 5xx Codes
    INTERNAL_SERVER_ERROR = 500,
    NOT_IMPLEMENTED = 501,
    SERVICE_UNAVAILABLE = 503,
    GATEWAY_TIMEOUT = 504,
}

export enum AppwriteErrorType {
    GENERAL_MOCK = 'general_mock',
    GENERAL_ARGUMENT_INVALID = 'general_argument_invalid',
    GENERAL_QUERY_LIMIT_EXCEEDED = 'general_query_limit_exceeded',
    GENERAL_QUERY_INVALID = 'general_query_invalid',
    GENERAL_CURSOR_NOT_FOUND = 'general_cursor_not_found',

    USER_PASSWORD_MISMATCH = 'user_password_mismatch',
    USER_PHONE_NOT_FOUND = 'user_phone_not_found',
    USER_MISSING_ID = 'user_missing_id',

    STORAGE_DEVICE_NOT_FOUND = 'storage_device_not_found',
    STORAGE_FILE_EMPTY = 'storage_file_empty',
    STORAGE_FILE_TYPE_UNSUPPORTED = 'storage_file_type_unsupported',
    STORAGE_INVALID_FILE_SIZE = 'storage_invalid_file_size',
    STORAGE_INVALID_CONTENT_RANGE = 'storage_invalid_content_range',

    BUILD_NOT_READY = 'build_not_ready',
    BUILD_IN_PROGRESS = 'build_in_progress',

    COLLECTION_LIMIT_EXCEEDED = 'collection_limit_exceeded',
    
    DOCUMENT_INVALID_STRUCTURE = 'document_invalid_structure',
    DOCUMENT_MISSING_PAYLOAD = 'document_missing_payload',

    ATTRIBUTE_UNKNOWN = 'attribute_unknown',
    ATTRIBUTE_NOT_AVAILABLE = 'attribute_not_available',
    ATTRIBUTE_FORMAT_UNSUPPORTED = 'attribute_format_unsupported',
    ATTRIBUTE_DEFUALT_UNSUPPORTED = 'attribute_default_unsupported',
    ATTRIBUTE_LIMIT_EXCEEDED = 'attribute_limit_exceeded',
    ATTRIBUTE_VALUE_INVALID = 'attribute_value_invalid',

    INDEX_LIMIT_EXCEEDED = 'index_limit_exceeded',

    PROJECT_UNKNOWN = 'project_unknown',
    PROJECT_INVALID_SUCCESS_URL = 'project_invalid_success_url',
    PROJECT_INVALID_FAILTURE_URL = 'project_invalid_failture_url',
    PROJECT_RESERVED_PROJECT =  'project_reserved_project',

    GRAPHQL_NO_QUERY = 'graphql_no_query',
    GRAPHQL_TOO_MANY_REQUESTS = 'graphql_too_many_requests',

    GENERAL_ACCESS_FORBIDDEN = 'general_access_forbidden',
    GENERAL_UNAUTHORIZED_SCOPE = 'general_unauthorized_scope',

    USER_JWT_INVALID = 'user_jwt_invalid',
    USER_BLOCKED = 'user_blocked',
    USER_INVALID_TOKEN = 'user_invalid_token',
    USER_EMAIL_NOT_WHITELISTED = 'user_email_not_whitelisted',
    USER_INVALID_CREDENTIALS = 'user_invalid_credentials',
    USER_ANONYMOUS_CONSOLE_PROHIBITED = 'user_anonymous_console_prohibited',
    USER_SESSION_ALREADY_EXISTS = 'user_session_already_exists',
    USER_UNAUTHORIZED = 'user_unauthorized',
    
    TEAM_INVALID_SECRET = 'team_invalid_secret',
    TEAM_INVITE_MISMATCH = 'team_invite_mismatch',

    PROJECT_KEY_EXPIRED = 'project_key_expired',

    DOMAIN_VERIFICATION_FAILED = 'domain_verification_failed',

    GENERAL_UNKNOWN_ORIGIN = 'general_unknown_origin',

    STORAGE_INVALID_FILE = 'storage_invalid_file',

    GENERAL_ROUTE_NOT_FOUND = 'general_route_not_found',

    USER_NOT_FOUND = 'user_not_found',
    USER_SESSION_NOT_FOUND = 'user_session_not_found',

    TEAM_NOT_FOUND = 'team_not_found',
    TEAM_INVITE_NIOT_FOUND = 'team_invite_not_found',
    TEAM_MEMBERSHIP_MISMATCH = 'team_membership_mismatch',

    MEMBERSHIP_NOT_FOUND = 'membership_not_found',

    AVATAR_SET_NOT_FOUND = 'avatar_set_not_found',
    AVATAR_NOT_FOUND = 'avatar_not_found',
    AVATAR_IMAGE_NOT_FOUND = 'avatar_image_not_found',
    AVATAR_REMOTE_URL_FAILED = 'avatar_remote_url_failed',
    AVATAR_ICON_NOT_FOUND = 'avatar_icon_not_found',

    STORAGE_FILE_NOT_FOUND = 'storage_file_not_found',
    STORAGE_BUCKET_NOT_FOUND = 'storage_bucket_not_found',

    FUNCTION_NOT_FOUND = 'function_not_found',
    FUNCTION_RUNTIME_NOT_FOUND = 'function_runtime_not_found',

    BUILD_NOT_FOUND = 'build_not_found',

    DEPLOYMENT_NOT_FOUND = 'deployment_not_found',
    EXECUTION_NOT_FOUND = 'execution_not_found',
    DATABASE_NOT_FOUND = 'database_not_found',
    COLLECTION_NOT_FOUND = 'collection_not_found',
    DOCUMENT_NOT_FOUND = 'document_not_found',
    ATTRIBUTE_NOT_FOUND = 'attribute_not_found',
    INDEX_NOT_FOUND = 'index_not_found',
    PROJECT_NOT_FOUND = 'project_not_found',
    WEBHOOK_NOT_FOUND = 'webhook_not_found',
    KEY_NOT_FOUND = 'key_not_found',
    PLATFORM_NOT_FOUND = 'platform_not_found',
    DOMAIN_NOT_FOUND = 'domain_not_found',
    VARIABLE_NOT_FOUND = 'variable_not_found',

    USER_ALREADY_EXISTS = 'user_already_exists',
    USER_EMAIL_ALREADY_EXISTS = 'user_email_already_exists',
    USER_PHONE_ALREADY_EXISTS = 'user_phone_already_exists',

    TEAM_INVITE_ALREADY_EXISTS = 'team_invite_already_exists',

    MEMBERSHIPT_ALREADY_CONFIRMED = 'membership_already_confirmed',

    STORAGE_BUCKET_ALREADY_EXISTS = 'storage_bucket_already_exists',
    DATABASE_ALREADY_EXISTS = 'database_already_exists',
    COLLECTION_ALREADY_EXISTS = 'collection_already_exists',
    DOCUMENT_ALREADY_EXISTS = 'document_already_exists',
    ATTRIBUTE_ALREADY_EXISTS = 'attribute_already_exists',
    INDEX_ALREADY_EXISTS = 'index_already_exists',
    DOMAIN_ALREADY_EXISTS = 'domain_already_exists',
    VARIABLE_ALREADY_EXISTS = 'variable_already_exists',

    USER_PASSWORD_REQUIRED = 'user_password_required',

    PROJECT_PROVIDER_DISABLED = 'project_provider_disabled',

    STORAGE_INVALID_RANGE = 'storage_invalid_range',

    GENERAL_RATE_LIMIT_EXCEEDED = 'general_rate_limit_exceeded',
    GENERAL_UNKNOWN = 'general_unknown',
    GENERAL_SERVER_ERROR = 'general_server_error',
    GENERAL_PROTOCOL_UNSUPPORTED = 'general_protocol_unsupported',

    USER_COUNT_EXCEEDED = 'user_count_exceeded',

    USER_AUTH_METHOD_UNSUPPORTED = 'user_auth_method_unsupported',
    PROJECT_PROVIDER_UNSUPPORTED = 'project_provider_unsupported',

    GENERAL_SERVICE_DISABLED = 'general_service_disabled',
    GENERAL_SMTP_DISABLED = 'general_smtp_disabled',
    GENERAL_PHONE_DISABLED = 'general_phone_disabled',
}