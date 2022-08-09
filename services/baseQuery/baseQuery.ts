
export interface BaseQueryProps {
    path: RequestInfo | URL,
    init?: RequestInit
}

export interface BaseQueryResult {
    data: any,
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

async function generateQueryResult(response: Response): Promise<BaseQueryResult> {
    if (!response.ok) {
        return {
            code: response.status,
            success: response.ok,
            data: null,
            message: "Problemas de conexion, reintentar nuevamente"
        }
    } 

    return await response.json()
}

async function BaseQuery({path, init}: BaseQueryProps): Promise<BaseQueryResult> {
    const defaultInit = addDefaultInitRequest(init)
    const result = await fetch(path, defaultInit)
    return await generateQueryResult(result)
}

export default BaseQuery