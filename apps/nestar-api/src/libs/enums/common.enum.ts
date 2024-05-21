import { registerEnumType } from "@nestjs/graphql";

export enum Message {
    SOMETHING_WENT_WRONG = "Something went wrong!",
    NO_DATA_FOUND = "No data is found!",
    BLOCKED_USER = "Your account has been disactivated, please contact the administration!",
    CREATE_FAILED = "Create is failed!",
    UPDATE_FAILED = "Update is failed!",
    USED_NICK_PHONE = "You are inserting already used nick or phone!",
    NO_MEMBER_NICK = "No member with this member nick!",
    WRONG_PASSWORD = "Wrong password!",
    NOT_AUTHENTICATED = "You are not authenticated, Please login first!",
    TOKEN_CREATION_FAILED = "Token creation error",
    NO_MEMBER_FOUND = "No member found",
    INVALID_DATA = "Invalid input data",
    TOKEN_NOT_EXIST = "Bearer token is not provided!",
    NOT_ALLOWED_REQUEST = "Not allowed request!",
    ONLY_SPECIFIC_ROLES_ALLOWED = "Allowed only for members with specific roles!",
    PROVIDE_ALLOWED_FORMAT = "Please provide jpg, jpeg or png images!",
    SELF_SUBSCRIPTION_DENIED = "Self subscription is denied!",
    UPLOAD_FAILED = "UPLOAD_FAILED"
}

export enum Direction {
    ASC = 1,
    DESC = -1
}

registerEnumType(Direction, {
    name: 'Direction'
})