import { CrudContext } from "../../contexts/crudContext"
import HeaderBase, { HeaderBaseProps } from "./headerBase"
import TableBase, { TableBaseProps } from "./tableBase"
import useCrudBase, { UseCrudBaseProps, Element } from "./useCrudBase"

export interface CrudBaseProps<T extends Element> {
    hookProps: UseCrudBaseProps<T>,
    headerProps: HeaderBaseProps<T>
    tableProps: TableBaseProps<T>
}

function CrudBase<T extends Element>({ hookProps, tableProps, headerProps }: CrudBaseProps<T>) {
    const crud = useCrudBase<T>(hookProps)
    return (
        <CrudContext.Provider value={crud}>
            <div className="h-full">
                <HeaderBase {...headerProps} />
                <TableBase {...tableProps} elements={crud.Elements} />
            </div>
        </CrudContext.Provider> 
    )
}

export default CrudBase