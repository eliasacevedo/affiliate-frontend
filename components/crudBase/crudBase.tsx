import HeaderBase, { HeaderBaseProps } from "./headerBase"
import TableBase, { TableBaseProps } from "./tableBase"
import useCrudBase, { UseCrudBaseProps, Element } from "./useCrudBase"

export interface CrudBaseProps {
    hookProps: UseCrudBaseProps,
    headerProps: HeaderBaseProps
    tableProps: TableBaseProps
}

function CrudBase({ hookProps, tableProps, headerProps }: CrudBaseProps) {
    const crud = useCrudBase(hookProps)
    
    return (
        <div className="overflow-x-auto h-full">
            <HeaderBase {...headerProps} />
            <TableBase {...tableProps} elements={crud.Elements} />
        </div>
    )
}

export default CrudBase