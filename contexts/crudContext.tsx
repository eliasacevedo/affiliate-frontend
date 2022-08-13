import { createContext } from "react";
import { CrudBaseResult } from "../components/crudBase/useCrudBase";

export const defaultValue: CrudBaseResult<any> = {
    Elements: [],
    CreateElement: function (element: any): Promise<any> {
        throw new Error("Function not implemented.");
    },
    DeleteElement: function (id: string): Promise<any> {
        throw new Error("Function not implemented.");
    },
    UpdateElement: function (element: any): Promise<any> {
        throw new Error("Function not implemented.");
    },
    RefreshElements: function (filter?: any): Promise<void> {
        throw new Error("Function not implemented.");
    }
}

export const CrudContext = createContext<CrudBaseResult<any>>(defaultValue)
