import { useContext } from 'react'
import { CrudContext } from '../../contexts/crudContext'
import {CrudBaseResult, Element} from './useCrudBase'

const actionIdentifier: string = "__________action"
const actionValue = "Acciones"

export interface OptionMenu<T> {
    id: string,
    children: React.ReactNode,
    onClick: (element: T, contextCrud: CrudBaseResult<T>) => void
}

type SchemaAll = {[key: string]: string}
// type SchemaBase<T> = keyof T | typeof actionIdentifier | string 
// type Schema<T> = SchemaAll //| Record<SchemaBase<T>, string> 

export interface TableBaseProps<T extends Element> {
    elements: T[]
    schema: SchemaAll
    options: OptionMenu<T>[]
}



function TableBase<T extends Element>({elements, schema, options}: TableBaseProps<T>) {
    if (elements.length <= 0) {
        return (
            <div className="h-full w-full flex justify-center items-center p-10 ">
                No hay elementos
            </div>
        )
    }
    const keys = Object.keys(elements[0])

    if (options.length > 0) {
        schema[actionIdentifier] = actionValue
        keys.push(actionIdentifier)
    }

    const contextCrud = useContext(CrudContext)

    return (
        <div className='w-full h-full overflow-x-auto'>
            <table className="table">
                <thead>
                    <tr>
                        {keys.map(e => (
                            <th key={e}>{schema[e]}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {elements.map((element: T) => (
                        <tr key={element.id}>   
                            {
                                keys.map((e: string) => {
                                    if (e == actionIdentifier) {
                                        return <th className='flex' key={e}>{dropdownButton<T>(options, element, contextCrud)}</th>
                                    }

                                    return <th key={e}>{element[e]}</th>
                                })
                            }
                            
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
    
}

function dropdownButton<T>(options: OptionMenu<T>[], element: T, context: CrudBaseResult<T>) {
    return options.map(option => (
        <div onClick={() => option.onClick(element, context)} key={option.id}>{option.children}</div>
    ))
}

export default TableBase