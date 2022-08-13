export function convertObjectInURLParamsString(object?: Object): string {
    
    if (!object) {
        return ""
    }

    if (Array.isArray(object)) { // show notification arrays are not valid as params
        return ""
    }

    let result = "?"

    const values = Object.values(object)
    let parametersAdded = 0
    Object.keys(object).forEach((key, i, arr) => {
        const value = values[i]
        if (value == null || value == undefined || value == "") {
            return
        }

        const prefix = parametersAdded > 0 ? "&":""
        result += `${prefix}${key}=${value}`
        parametersAdded++
    })

    console.log(result)
    return result

}
