const ObjectId = require('mongoose').Types.ObjectId

function validateString(input) {
    if (
        typeof (input) !== "string" ||
        input === null ||
        input === undefined ||
        input.trim() === ""
    )
        return false
    return true
}

function validateNumber(input) {
    if (
        typeof (input) !== "number" ||
        input === null ||
        input === undefined
    )
        return false
    return true
}

function validateArray(input) {
    if (
        typeof (input) !== "object" ||
        input === null ||
        input === undefined ||
        input.length <= 0
    )
        return false
    return true
}

function validateEnum(Enum, input) {
    return Object.values(Enum).includes(input)

}

function validateObjectId(input) {
    if (
        ObjectId.isValid(input)
    )
        return false
    return true
}

function validateObject(input) {
    if (
        typeof input !== "object" ||
        input === null ||
        input === undefined ||
        Object.keys(input).length <= 0
    )
        return false
    return true
}

function validatePhone(input) {
    const checkPhone = input.match(/(84|0[3|5|7|8|9])+([0-9]{8})\b/g)
    if(
        typeof input !== "string" || 
        input === null ||
        input === undefined ||
        !checkPhone
    )
        return false
    return true
}

module.exports = { validateObject, validateObjectId, validateArray, validateNumber, validateString, validateEnum }

