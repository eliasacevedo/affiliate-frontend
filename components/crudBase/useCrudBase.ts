import { Dispatch, SetStateAction, useState } from "react"
import BaseQuery, { BaseQueryResult } from "../../services/baseQuery/baseQuery"
import { convertObjectInURLParamsString } from "../../utility/url"

interface Element{
    id: string,
    [key: string]: any 
}

interface CrudPath {
    create: string,
    update: string,
    delete: string,
    get: string,
}

interface UseCrudBaseProps{
    paths: CrudPath,
    refresh: boolean
}

export interface CrudBaseResult {
    Elements: Element[],
    CreateElement(element: Element): Promise<BaseQueryResult>,
    DeleteElement(id: string): Promise<BaseQueryResult>,
    UpdateElement(element: Element): Promise<BaseQueryResult>,
    GetElements(element?: Element): Promise<BaseQueryResult>
}

async function refreshElements(path: CrudPath, setState: Dispatch<SetStateAction<Element[]>>, element?: Element) {
    const result = await GetElements(path, setState)(element)
    if (!result.success) { 
        // show notification
        return
    }

    setState(result.data)
}

function CreateElement(path: CrudPath, setState: Dispatch<SetStateAction<Element[]>>, refresh: boolean){
    return async (element: Element) => {
        const props = {
            path: path.create,
            init: { 
                body: JSON.stringify(element),
                method: "POST"
            }
        }
    
        const result = await BaseQuery(props)
        if (!result.success) { // show notification
            return result
        }

        if (refresh) {
            await refreshElements(path, setState)
        }

        return result
    }
}

function DeleteElement(path: CrudPath, setState: Dispatch<SetStateAction<Element[]>>, refresh: boolean) {
    return async (id: string) => {
        const props = {
            path: `${path.delete}?id=${id}`,
            init: { 
                method: "POST"
            }
        }
    
        const result = await BaseQuery(props)

        if (!result.success) { // show notification
            return result
        }

        if (refresh) {
            await refreshElements(path, setState)
        }

        return result
    }
}

function UpdateElement(path: CrudPath, setState: Dispatch<SetStateAction<Element[]>>, refresh: boolean) {
    return async (element: Element) => {
        const props = {
            path: path.update,
            init: { 
                body: JSON.stringify(element),
                method: "POST"
            }
        }
    
        const result = await BaseQuery(props)

        if (!result.success) { // show notification
            return result
        }

        if (refresh) {
            await refreshElements(path, setState)
        }
        return result
    }
}

function GetElements(path: CrudPath, setState: Dispatch<SetStateAction<Element[]>>) {
    return async(element?: Element) => {
        const props = {
            path: `${path.get}${convertObjectInURLParamsString(element)}`,
        }
    
        const result = await BaseQuery(props)
        if (!result.success) { // show notification
            return result
        }

        await refreshElements(path, setState)
        return result
    }
}

function useCrudBase({paths, refresh = true}: UseCrudBaseProps ): CrudBaseResult {
    const state = useState([] as Element[])
    return {
        Elements: state[0],
        CreateElement: CreateElement(paths, state[1], refresh),
        DeleteElement: DeleteElement(paths, state[1], refresh),
        GetElements: GetElements(paths, state[1]),
        UpdateElement: UpdateElement(paths, state[1], refresh)
    }
}

export default useCrudBase