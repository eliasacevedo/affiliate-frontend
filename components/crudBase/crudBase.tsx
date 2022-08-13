import { CrudContext } from "../../contexts/crudContext"
import HeaderBase, { HeaderBaseProps } from "./headerBase"
import SearchBase, { SearchBaseProps } from "./searchBase"
import TableBase, { TableBaseProps } from "./tableBase"
import useCrudBase, { UseCrudBaseProps, Element } from "./useCrudBase"

export interface CrudBaseProps<T extends Element> {
    hookProps: UseCrudBaseProps<T>
    headerProps: HeaderBaseProps<T>
    searchProps: SearchBaseProps
    tableProps: TableBaseProps<T>
}

function CrudBase<T extends Element>({ hookProps, tableProps, headerProps, searchProps }: CrudBaseProps<T>) {
    const crud = useCrudBase<T>(hookProps)
    return (
        <CrudContext.Provider value={crud}>
            <div className="h-full">
                <HeaderBase {...headerProps} />
                <SearchBase { ...searchProps } />
                <TableBase {...tableProps} elements={crud.Elements} />
            </div>
        </CrudContext.Provider> 
    )
}

export default CrudBase