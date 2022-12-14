import { Element } from "../components/crudBase/useCrudBase"
export interface Affiliate extends Element {
    firstname: string
    lastname: string
    birthDate: string
    sex: boolean
    identificationId: string
    phoneNumber: string
    socialSecurity: string
    registryDate: string
    consumedAmount: number,
    planId: string,
    statusId: string
}

export const getDefaultValue = () => {
    return {
        id: "",
        firstname: "",
        lastname: "",
        birthDate: "",
        sex: false,
        identificationId: "",
        phoneNumber: "",
        socialSecurity: "",
        registryDate: "",
        consumedAmount: 0,
        planId: "",
        statusId: ""
    } as Affiliate
}