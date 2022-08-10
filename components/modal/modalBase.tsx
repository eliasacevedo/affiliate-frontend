import React, { useContext } from "react"
import { ModalContext } from "../../contexts/modalContext"


function ModalBase() {
    const [ modalInfo ] = useContext(ModalContext)
    
    return (
        <>
            <input type="checkbox" id="modal" className="modal-toggle" checked={modalInfo.visible}/>
            <label htmlFor="modal" className="modal cursor-pointer">
                <label className="modal-box relative" htmlFor="">
                    {modalInfo.children}
                </label>
            </label>
        </>
    )
}

export default ModalBase