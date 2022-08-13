import BaseForm from "../base/FormBase"
import InputBase from "../base/InputBase"
import useConsumedAmountForm from "./useConsumedAmountForm";
import { Affiliate } from "../../../core/affiliate";
import { useContext } from "react";
import { CrudBaseResult } from "../../crudBase/useCrudBase";
import { ModalContext } from "../../../contexts/modalContext";

export interface ConsumedAmountFormProps {
    context: CrudBaseResult<Affiliate>
    initValue: Affiliate,
}

function ConsumedAmountForm({initValue, context}: ConsumedAmountFormProps) {
    const [_, setModalInfo] = useContext(ModalContext)
    const { onSubmit, getDefaultValue } = useConsumedAmountForm({context, setModalInfo})
    return (
        <>
            <h1 className="mb-5 font-bold text-2xl">Agregar monto a {initValue.firstname} {initValue.lastname}</h1>
            <BaseForm onSubmit={onSubmit} defaultValues={getDefaultValue(initValue)}>
                <div className="max-w-xs">
                    <InputBase id="UserId" name="Id" show={false} />
                    <p className="mb-3">Monto consumido: {initValue.consumedAmount}</p>
                    <InputBase id="ConsumedAmount" type="number" name="Monto a agregar" />
                    <button className="btn" type="submit">Agregar</button>
                </div>
            </BaseForm>
        </>
    )
}

export default ConsumedAmountForm