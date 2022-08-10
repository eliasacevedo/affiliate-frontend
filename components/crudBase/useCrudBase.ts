import { Dispatch, SetStateAction, useState } from "react"
import BaseQuery, { BaseQueryResult } from "../../services/baseQuery/baseQuery"
import { convertObjectInURLParamsString } from "../../utility/url"

export interface Element{
    id: string,
    [key: string]: any 
}

export interface CrudPath {
    create: string,
    update: string,
    delete: string,
    get: string,
}

export interface UseCrudBaseProps{
    paths: CrudPath,
    refresh?: boolean,
    initialSync?: boolean,
    initialFilter?: Element,
    initialState?: Element[],
}

export interface CrudBaseResult {
    Elements: Element[],
    CreateElement(element: Element): Promise<BaseQueryResult>,
    DeleteElement(id: string): Promise<BaseQueryResult>,
    UpdateElement(element: Element): Promise<BaseQueryResult>,
    RefreshElements(filter?: Element): Promise<void>
}

function refreshElements(path: CrudPath, setState: Dispatch<SetStateAction<Element[]>>) {
    return async (element?: Element) => {
        const result = await GetElements(path)(element)
        if (!result.success) { 
            // show notification
            return
        }

        setState(result.data)
    }
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
            await refreshElements(path, setState)()
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
            await refreshElements(path, setState)()
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
            await refreshElements(path, setState)()
        }
        return result
    }
}

function GetElements(path: CrudPath) {
    return async(element?: Element) => {
        const props = {
            path: `${path.get}${convertObjectInURLParamsString(element)}`,
        }
    
        const result = await BaseQuery(props)
        if (!result.success) { // show notification
            return result
        }

        return result
    }
}

function useCrudBase({paths, refresh = true, initialSync = true, initialFilter = {id: ""}, initialState = []}: UseCrudBaseProps ): CrudBaseResult {
    const state = useState(initialState)
    const refreshFunction = refreshElements(paths, state[1])

    if (initialSync) {
        refreshFunction(initialFilter)
    }

    return {
        Elements: state[0],
        CreateElement: CreateElement(paths, state[1], refresh),
        DeleteElement: DeleteElement(paths, state[1], refresh),
        UpdateElement: UpdateElement(paths, state[1], refresh),
        RefreshElements: refreshFunction
    }
}

export default useCrudBase