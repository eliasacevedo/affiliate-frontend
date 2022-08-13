import { useContext } from "react"
import { CrudContext } from "../../../contexts/crudContext"
import useAffiliateSearchForm from "./useAffiliateSearchForm"
import BaseForm from "../base/FormBase"
import InputBase from "../base/InputBase"

function AffiliateSearchForm() {
    const crudContext = useContext(CrudContext)
    const utility = useAffiliateSearchForm({context: crudContext})

    return (
        <div className="affiliate-search-form">
            <BaseForm onSubmit={utility.onSubmit}>
                <div className="flex items-center">
                    <div className="mr-2">
                        <InputBase id="firstname" name="Nombre" />
                    </div>
                    <div className="mr-2">
                        <InputBase id="lastname" name="Apellido" />
                    </div>
                    <div className="mr-2">
                        <InputBase id="identificationId" name="Cedula" />
                    </div>

                    <button type="submit" className="btn mt-5">Buscar</button>
                </div>
            </BaseForm>
        </div>
    )
}

export default AffiliateSearchForm