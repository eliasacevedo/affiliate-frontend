import { HTMLInputTypeAttribute, useContext, useState } from "react"
import { FormContext } from "./FormBase"
import { RegisterOptions } from "react-hook-form";
import { Element } from "../../crudBase/useCrudBase";

export interface InputBaseProps<T> {
    id: string,
    name?: string,
    type?: HTMLInputTypeAttribute,
    placeholder?: string,
    options?: RegisterOptions<T>
    show?: boolean
}

function InputBase<T>({id, placeholder = "", options, type = "text", name="", show=true}: InputBaseProps<T>) {
    const { register, formState: {errors} } = useContext(FormContext)
    const errorMessage = errors[id]?.message as unknown as string
    return (
        <div className={`form-control w-full ${!show ? "hidden" : ""}`}>
            <label className="label">
                <span className="label-text">{name}</span>
            </label>
            <input type={type} placeholder={placeholder} className="input input-bordered w-full " {...register(id, options)} />
            <label className="label">
                <span className="label-text-alt text-error">{errorMessage}</span>
            </label>
        </div>
    )
}

export default InputBase