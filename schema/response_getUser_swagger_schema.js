const getUserSwaggerSchemaResponse = {
    "title": "Root Schema",
    "type": "object",
    "required": [
        "id",
        "firstName",
        "lastName",
        "age",
        "occupation",
        "nationality",
        "hobbies",
        "gender",
        "createdDate",
        "updatedDate"
    ],
    "additionalProperties": true,
    "properties": {
        "id": {
            "title": "The id Schema",
            "type": "string"
        },
        "firstName": {
            "title": "The firstName Schema",
            "type": "string"
        },
        "lastName": {
            "title": "The lastName Schema",
            "type": "string"
        },
        "age": {
            "title": "The age Schema",
            "type": "integer"
        },
        "occupation": {
            "title": "The occupation Schema",
            "type": "string"
        },
        "nationality": {
            "title": "The nationality Schema",
            "type": "string"
        },
        "hobbies": {
            "title": "The hobbies Schema",
            "type": "array",
            "additionalItems": true,
            "items": {
                "title": "A Schema",
                "type": "string"
            }
        },
        "gender": {
            "title": "The gender Schema",
            "type": "string"
        },
        "createdDate": {
            "title": "The createdDate Schema",
            "type": "string"
        },
        "updatedDate": {
            "title": "The updatedDate Schema",
            "type": "string"
        }
    }
};

module.exports = {
    getUserSwaggerSchemaResponse,
};