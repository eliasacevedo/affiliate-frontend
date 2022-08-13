import { Dispatch, SetStateAction } from "react";
import { UseFormReturn } from "react-hook-form";
import { ModalContextInterface } from "../../../contexts/modalContext";
import { Affiliate } from "../../../core/affiliate";
import { AFFILIATE_ADD_AMOUNT_PATH } from "../../../services/api/paths";
import BaseQuery from "../../../services/baseQuery/baseQuery";
import { CrudBaseResult } from "../../crudBase/useCrudBase";

export interface UseConsumedAmountFormProps<ConsumedAmount> {
    context: CrudBaseResult<Affiliate>,
    setModalInfo: Dispatch<SetStateAction<ModalContextInterface>>
}

export interface AmountFormModel {
    UserId: string,
    ConsumedAmount: number
}

function getDefaultValue(affiliate: Affiliate): AmountFormModel {
    return {
        UserId: affiliate.id,
        ConsumedAmount: 0
    }
}

function useConsumedAmountForm({context, setModalInfo}: UseConsumedAmountFormProps<AmountFormModel>) {
    const onSubmit = async (form: UseFormReturn<AmountFormModel, any>, element: AmountFormModel) => {
        const init: RequestInit = {
            body: JSON.stringify(element),
            method: "POST"
        }

        await BaseQuery<null>({path: AFFILIATE_ADD_AMOUNT_PATH, init: init})
        await context.RefreshElements()

        setModalInfo(() => {return {
            visible: false,
            children: null
        }})
    }

    return {
        onSubmit: onSubmit,
        getDefaultValue: getDefaultValue
    }
}

export default useConsumedAmountForm