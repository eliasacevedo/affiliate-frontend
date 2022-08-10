import BaseForm from "../base/FormBase"
import InputBase from "../base/InputBase"
import { CrudBaseResult } from "../../crudBase/useCrudBase";
import useConsumedAmountForm from "./useConsumedAmountForm";
import { Affiliate } from "../../../core/affiliate";

export interface ConsumedAmountFormProps {
    initValue: Affiliate,
}

function ConsumedAmountForm({initValue}: ConsumedAmountFormProps) {
    const { onSubmit, getDefaultValue } = useConsumedAmountForm({})
    console.log(initValue)
    return (
        <>
            <h1 className="mb-5 font-bold text-2xl">Agregar monto a {initValue.firstname} {initValue.lastname}</h1>
            <BaseForm onSubmit={onSubmit} defaultValues={getDefaultValue(initValue)}>
                <div className="max-w-xs">
                    <InputBase id="id" name="Id" show={false} />
                    <p className="mb-3">Monto consumido: {initValue.consumedAmount}</p>
                    <InputBase id="amount" type="number" name="Monto a agregar" />
                    <button className="btn" type="submit">Agregar</button>
                </div>
            </BaseForm>
        </>
    )
}

export default ConsumedAmountForm