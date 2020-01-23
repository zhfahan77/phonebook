const NotFound = {
    "message": "No records Found",
    "statusCode": 404
}

const RequiredFieldNotFound = {
    "message": "Required Field Not Found",
    "statusCode": 404
}

const AddContactRequiredFieldsNotFound = {
    "message": "Required Fields Not Found; name, mobileNumber fields are required",
    "statusCode": 404
}

const ContactAlreadyAdded = {
    "message": "Contact Already Added with this name",
    "statusCode": 422
}

const DefaultRouteException = {
    "message": "Oops! Nothing found",
    "statusCode": 404
}

const BadRequest = {
    "message": "404 Bad Request, please check your specified endpoint and request method",
    "statusCode": 404
}

const OK = {
    "message": "OK",
    "statusCode": 200
}

const SomethingWentWrong = {
    "message": "Something Went Wrong",
    "statusCode": 500
}

const NotAValidPhoneNumber = {
	"message": "Phone Number is not valid, it should be a valid BD Phone Number 8801XXXXXXXXX/01XXXXXXXXX",
    "statusCode": 422
}

module.exports = {
    NotFound,
    RequiredFieldNotFound,
    AddContactRequiredFieldsNotFound,
    DefaultRouteException,
    BadRequest,
    OK,
    SomethingWentWrong,
    ContactAlreadyAdded,
    NotAValidPhoneNumber
}