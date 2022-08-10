import {Element} from './useCrudBase'

export interface OptionMenu {
    id: string,
    children: React.ReactNode,
    onClick: (element: Element) => void
}

export interface TableBaseProps {
    elements: Element[]
    schema: Element
    options: OptionMenu[]
}

const actionIdentifier = "__________action"
const actionValue = "Acciones"

function TableBase({elements, schema, options}: TableBaseProps) {
    if (elements.length <= 0) {
        return (
            <div className="w-full h-full flex justify-center items-center p-10">
                No hay elementos
            </div>
        )
    }
    const keys = Object.keys(elements[0])

    if (options.length > 0) {
        schema[actionIdentifier] = actionValue
        keys.push(actionIdentifier)
    }

    return (
        <table className="table w-full h-full">
            <thead>
                <tr>
                    {keys.map(e => (
                        <th key={e}>{schema[e]}</th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {elements.map(element => (
                    <tr key={element.id}>   
                        {
                            keys.map(e => {
                                if (e == actionIdentifier) {
                                    return <th className='flex' key={e}>{dropdownButton(options, element)}</th>
                                }

                                return <th key={e}>{element[e]}</th>
                            })
                        }
                        
                    </tr>
                ))}
            </tbody>
        </table>
    )
    
}

function dropdownButton(options: OptionMenu[], element: Element) {
    return options.map(option => (
        <div onClick={() => option.onClick(element)} key={option.id}>{option.children}</div>
    ))
}

export default TableBase