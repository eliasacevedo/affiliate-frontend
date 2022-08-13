import { Dispatch, SetStateAction } from "react";
import { UseFormReturn } from "react-hook-form";
import { ModalContextInterface } from "../../../contexts/modalContext";
import { Affiliate } from "../../../core/affiliate";
import { CrudBaseResult } from "../../crudBase/useCrudBase";

export interface UseAffiliateFormProps<Affiliate> {
    context: CrudBaseResult<Affiliate>,
    setModalInfo: Dispatch<SetStateAction<ModalContextInterface>>
}

export interface AffiliateForm {
    id: string,
    firstname: string
    lastname: string
    birthDate: string
    sex: string
    identificationId: string
    phoneNumber: string
    socialSecurity: string
    registryDate: string
    consumedAmount: string
    planId: string
    statusId: string
}

export function affiliateFormToAffiliate(element: AffiliateForm) {
    const affiliate: Affiliate = {
        id: element.id,
        firstname: element.firstname,
        lastname: element.lastname,
        birthDate: element.birthDate,
        sex: element.sex === 'true'? true : false, 
        identificationId: element.identificationId,
        phoneNumber: element.phoneNumber,
        socialSecurity: element.socialSecurity,
        registryDate: element.registryDate,
        consumedAmount: parseFloat(element.consumedAmount),
        planId: element.planId,
        statusId: element.statusId
    }
    return affiliate
}

export function affiliateToAffiliateForm(element: Affiliate) {
    const affiliate: AffiliateForm = {
        id: element.id,
        firstname: element.firstname,
        lastname: element.lastname,
        birthDate: element.birthDate,
        sex:  element.sex ? "true": "false", 
        identificationId: element.identificationId,
        phoneNumber: element.phoneNumber,
        socialSecurity: element.socialSecurity,
        registryDate: element.registryDate,
        consumedAmount: element.consumedAmount.toString(),
        planId: element.planId,
        statusId: element.statusId
    }
    return affiliate
}


function useAffiliateForm({context, setModalInfo}: UseAffiliateFormProps<Affiliate>) {

    const onSubmit = async (form: UseFormReturn<AffiliateForm, any>, element: AffiliateForm) => {
        console.log(element)
        if (element.id) {
            await context.UpdateElement(affiliateFormToAffiliate(element))
        } else {
            await context.CreateElement(affiliateFormToAffiliate(element))
        }
        setModalInfo(() => { return {
            visible: false,
            children: null
        }})
    }

    return {
        onSubmit: onSubmit
    }
}

export default useAffiliateForm