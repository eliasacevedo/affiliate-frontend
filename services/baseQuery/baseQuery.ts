
export interface BaseQueryProps {
    path: RequestInfo | URL,
    init?: RequestInit
}

export interface BaseQueryResult<T> {
    data: T,
    success: boolean,
    message?: string,
    code: number
}

function addDefaultInitRequest(init?: RequestInit): RequestInit {
    const result: RequestInit = init ? init : {}
    
    if (!result.headers) {
        result.headers = {
            'Content-Type': 'application/json'
        }
    }

    if (!result.method) {
        result.method = 'GET'
    }

    if (!result.mode) {
        result.mode = 'cors'
    }

    return result
}

async function generateQueryResult<T>(response: Response): Promise<BaseQueryResult<T>> {
    if (!response.ok) {
        return {
            code: response.status,
            success: response.ok,
            data: null as unknown as T,
            message: "Problemas de conexion, reintentar nuevamente"
        }
    } 

    return await response.json()
}

async function BaseQuery<T>({path, init}: BaseQueryProps): Promise<BaseQueryResult<T>> {
    const defaultInit = addDefaultInitRequest(init)
    const result = await fetch(path, defaultInit)
    return await generateQueryResult(result)
}

export default BaseQuery