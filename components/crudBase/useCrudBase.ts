import React, { Dispatch, SetStateAction, useState } from "react"
import BaseQuery, { BaseQueryResult } from "../../services/baseQuery/baseQuery"
import { convertObjectInURLParamsString } from "../../utility/url"

export interface Element{
    id: string,
    [key: string]: React.ReactNode
}

export interface CrudPath {
    create: string,
    update: string,
    delete: string,
    get: string,
}

export interface UseCrudBaseProps<T>{
    paths: CrudPath,
    refresh?: boolean,
    initialSync?: boolean,
    initialFilter?: T,
    initialState?: T[],
}

export interface CrudBaseResult<T> {
    Elements: T[],
    CreateElement(element: T): Promise<BaseQueryResult<T>>,
    DeleteElement(id: string): Promise<BaseQueryResult<T>>,
    UpdateElement(element: T): Promise<BaseQueryResult<T>>,
    RefreshElements(filter?: T): Promise<void>
}

function refreshElements<T>(path: CrudPath, setState: Dispatch<SetStateAction<T[]>>) {
    return async (element?: T) => {
        const result = await GetElements(path)(element)
        if (!result.success) { 
            // show notification
            return
        }

        setState(result.data as T[])
    }
}

function CreateElement<T>(path: CrudPath, setState: Dispatch<SetStateAction<T[]>>, refresh: boolean){
    return async (element: T) => {
        const props = {
            path: path.create,
            init: { 
                body: JSON.stringify(element),
                method: "POST"
            }
        }
    
        const result = await BaseQuery<T>(props)
        if (!result.success) { // show notification
            return result
        }

        if (refresh) {
            await refreshElements(path, setState)()
        }

        return result
    }
}

function DeleteElement<T>(path: CrudPath, setState: Dispatch<SetStateAction<T[]>>, refresh: boolean) {
    return async (id: string) => {
        const props = {
            path: `${path.delete}?id=${id}`,
            init: { 
                method: "POST"
            }
        }
    
        const result = await BaseQuery<T>(props)

        if (!result.success) { // show notification
            return result
        }

        if (refresh) {
            await refreshElements(path, setState)()
        }

        return result
    }
}

function UpdateElement<T>(path: CrudPath, setState: Dispatch<SetStateAction<T[]>>, refresh: boolean) {
    return async (element: T) => {
        const props = {
            path: path.update,
            init: { 
                body: JSON.stringify(element),
                method: "POST"
            }
        }
    
        const result = await BaseQuery<T>(props)

        if (!result.success) { // show notification
            return result
        }

        if (refresh) {
            await refreshElements(path, setState)()
        }
        return result
    }
}

function GetElements<T>(path: CrudPath) {
    return async(element?: T) => {
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

function useCrudBase<T>({paths, refresh = true, initialSync = true, initialFilter, initialState = []}: UseCrudBaseProps<T> ): CrudBaseResult<T> {
    const state = useState(initialState)
    const refreshFunction = refreshElements(paths, state[1])

    if (initialSync) {
        initialSync = false
        refreshFunction(initialFilter)
    }

    return {
        Elements: state[0],
        CreateElement: CreateElement<T>(paths, state[1], refresh),
        DeleteElement: DeleteElement<T>(paths, state[1], refresh),
        UpdateElement: UpdateElement<T>(paths, state[1], refresh),
        RefreshElements: refreshFunction
    }
}

export default useCrudBase