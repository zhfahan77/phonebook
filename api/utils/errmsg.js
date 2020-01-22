const NotFound = {
    "message": "No records Found",
    "statusCode": 404
}

const RequiredFieldNotFound = {
    "message": "Required Field Not Found",
    "statusCode": 404
}

const AddPetRequiredFieldsNotFound = {
    "message": "Required Fields Not Found; name, color, age, breed, owner_id fields are required",
    "statusCode": 404
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

module.exports = {
    NotFound,
    RequiredFieldNotFound,
    AddPetRequiredFieldsNotFound,
    DefaultRouteException,
    BadRequest,
    OK,
    SomethingWentWrong,
}