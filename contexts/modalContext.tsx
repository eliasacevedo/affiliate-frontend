import React, { createContext, Dispatch, SetStateAction } from "react";

export interface ModalContextInterface {
    children: React.ReactNode,
    visible: boolean
}

export const defaultValue = {children: <></>, visible: false}

export const ModalContext = createContext<[ModalContextInterface, Dispatch<SetStateAction<ModalContextInterface>>]>([defaultValue, () => {}])
