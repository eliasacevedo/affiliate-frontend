import { UseFormReturn } from "react-hook-form";
import { Affiliate } from "../../../core/affiliate";
import { CrudBaseResult } from "../../crudBase/useCrudBase";

export interface UseAffiliateFormProps<Affiliate> {
    context: CrudBaseResult<Affiliate>
}

function useAffiliateForm({context}: UseAffiliateFormProps<Affiliate>) {

    const onSubmit = async (form: UseFormReturn<Affiliate, any>, element: Affiliate) => {
        console.log(form, context, element)
        // await context.CreateElement(element)
    }

    return {
        onSubmit: onSubmit
    }
}

export default useAffiliateForm