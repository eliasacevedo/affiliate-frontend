import { Affiliate } from "../../../core/affiliate"
import BaseQuery from "../../../services/baseQuery/baseQuery"
import { CrudBaseResult } from "../../crudBase/useCrudBase"

export interface useAffiliateSearchFormProps {
    context: CrudBaseResult<Affiliate>
}
function useAffiliateSearchForm({context}: useAffiliateSearchFormProps) {

    function search(filter: Affiliate) {
        context.RefreshElements(filter)
    }

    function onSubmit(_: any, data: any) {
        search(data)
    }

    return {
        search: search,
        onSubmit: onSubmit
    }
}

export default useAffiliateSearchForm