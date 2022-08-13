import BaseForm from "../base/FormBase"
import InputBase from "../base/InputBase"
import { CrudBaseResult } from "../../crudBase/useCrudBase";
import useAffiliateForm, { AffiliateForm } from "./useAffiliateForm";
import { Affiliate } from "../../../core/affiliate";
import { useContext } from "react";
import { ModalContext } from "../../../contexts/modalContext";

export interface AffiliateFormProps {
    initValue?: AffiliateForm,
    context: CrudBaseResult<Affiliate>
}

function AffiliateForm({initValue, context}: AffiliateFormProps) {
    const [_, setModalInfo] = useContext(ModalContext)
    const affiliateFormHook = useAffiliateForm({context, setModalInfo})
    return (
        <>
            <h1>Afiliados</h1>
            <BaseForm onSubmit={affiliateFormHook.onSubmit} defaultValues={initValue}>
                <div className="flex">
                    <InputBase id="id" name="Id" show={false} />
                    <div className="w-2/4 mr-4">
                        <InputBase id="firstname" name="Nombre"  />
                        <InputBase id="lastname" name="Apellido" />
                        <InputBase id="birthDate" type="date" name="Fecha de nacimiento" />
                        <InputBase id="sex" name="Sexo" /> 
                        <InputBase id="identificationId" name="Cedula" />
                        <InputBase id="planId" name="Plan" />
                    </div>
                    <div className="w-2/4 relative">
                        <InputBase id="phoneNumber" name="Numero de telefono" />
                        <InputBase id="socialSecurity" name="No. Seguridad social" />
                        <InputBase id="registryDate" type="date" name="Fecha de registro" />
                        <InputBase id="consumedAmount" type="number" name="Monto consumido" />
                        <InputBase id="statusId" name="Estado" />
                        <button className="btn absolute right-0 bottom-0" type="submit">Guardar</button>
                    </div>
                </div>
            </BaseForm>
        </>
    )
}

export default AffiliateForm