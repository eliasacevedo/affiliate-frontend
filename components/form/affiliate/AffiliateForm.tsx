import BaseForm from "../base/FormBase"
import InputBase from "../base/InputBase"
import { CrudBaseResult } from "../../crudBase/useCrudBase";
import useAffiliateForm from "./useAffiliateForm";
import { Affiliate } from "../../../core/affiliate";

export interface AffiliateFormProps {
    initValue?: Affiliate,
    context: CrudBaseResult<Affiliate>
}

function AffiliateForm({initValue, context}: AffiliateFormProps) {
    const affiliateFormHook = useAffiliateForm({context})
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
                    </div>
                    <div className="w-2/4 relative">
                        <InputBase id="phoneNumber" name="Numero de telefono" />
                        <InputBase id="socialSecurity" name="No. Seguridad social" />
                        <InputBase id="registryDate" type="date" name="Fecha de registro" />
                        <InputBase id="consumedAmount" type="number" name="Monto consumido" />
                        <button className="btn absolute right-0 bottom-0" type="submit">Guardar</button>
                    </div>
                </div>
            </BaseForm>
        </>
    )
}

export default AffiliateForm