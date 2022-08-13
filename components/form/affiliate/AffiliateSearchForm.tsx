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
                <InputBase id="firstname" name="Nombre" />
                <InputBase id="lastname" name="Apellido" />
                <InputBase id="identificationId" name="Cedula" />
                <button type="submit" className="btn">Buscar</button>
            </BaseForm>
        </div>
    )
}

export default AffiliateSearchForm