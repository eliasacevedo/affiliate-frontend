import { createContext, ReactNode } from "react"
import { useForm, UseFormReturn, SubmitHandler, DeepPartial } from "react-hook-form";

export interface BaseFormProps<T> {
    onSubmit: (formState: UseFormReturn<T, any>, element: T) => void,
    children: ReactNode,
    defaultValues?: DeepPartial<T>,
}

export const FormContext = createContext({} as unknown as UseFormReturn<any, any>)

function BaseForm<T>({onSubmit, children, defaultValues}: BaseFormProps<T>) {
    const formState = useForm({defaultValues: defaultValues})
    
    const manageSubmit: SubmitHandler<T> = (data) => {
        onSubmit(formState, data)
    }

    return (
        <FormContext.Provider value={formState}>
            <form onSubmit={formState.handleSubmit(manageSubmit)}>
                {children}
            </form>
        </FormContext.Provider>
    )
}

export default BaseForm