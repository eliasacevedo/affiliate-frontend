export function convertObjectInURLParamsString(object?: Object): string {
    
    if (!object) {
        return ""
    }

    if (Array.isArray(object)) { // show notification arrays are not valid as params
        return ""
    }

    return Object.keys(object).reduce((pv, cv, i) => {
        let addedValue = ""

        if (i == 0) {
            addedValue += "?"
        } else {
            addedValue += "&"
        }

        addedValue += `${pv}${addedValue}=${cv}`
        return addedValue
    })

}
