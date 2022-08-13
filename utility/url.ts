export function convertObjectInURLParamsString(object?: Object): string {
    
    if (!object) {
        return ""
    }

    if (Array.isArray(object)) { // show notification arrays are not valid as params
        return ""
    }

    let addedValue = "?"

    const values = Object.values(object)

    const result = Object.keys(object).reduce((pv, cv, i, arr) => {
        addedValue += `${addedValue}=${values[i]}`
        return addedValue
    })
    console.log(result)
    return result

}
