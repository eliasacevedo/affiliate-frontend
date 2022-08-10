import { useContext } from "react"
import { CrudContext } from "../../contexts/crudContext"
import { CrudBaseResult } from "./useCrudBase"

export interface HeaderBaseProps<T> {
    name: string,
    onCreate: (context: CrudBaseResult<T>) => void
}

function HeaderBase<T>({name, onCreate}: HeaderBaseProps<T>) {
    const contextCrud = useContext(CrudContext)
    return (
        <div className="flex justify-between w-full items-center p-5 bg-cyan-500 mb-2 rounded-t">
            <h3 className="text-white font-bold text-2xl">{name}</h3>
            <button className="btn bg-green-800 hover:bg-green-900" onClick={() => onCreate(contextCrud)}>Crear</button>
        </div>
    )
}

export default HeaderBase