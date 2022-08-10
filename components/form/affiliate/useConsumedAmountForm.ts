import { UseFormReturn } from "react-hook-form";
import { Affiliate } from "../../../core/affiliate";
import { CrudBaseResult } from "../../crudBase/useCrudBase";

export interface UseConsumedAmountFormProps<ConsumedAmount> {
    // context: CrudBaseResult<ConsumedAmount>
}

export interface AmountFormModel {
    id: string,
    amount: number
}

function getDefaultValue(affiliate: Affiliate): AmountFormModel {
    return {
        id: affiliate.id,
        amount: 0
    }
}

function useConsumedAmountForm({}: UseConsumedAmountFormProps<AmountFormModel>) {

    const onSubmit = async (form: UseFormReturn<AmountFormModel, any>, element: AmountFormModel) => {
        console.log(form, element)
        // await context.CreateElement(element)
    }

    return {
        onSubmit: onSubmit,
        getDefaultValue: getDefaultValue
    }
}

export default useConsumedAmountForm