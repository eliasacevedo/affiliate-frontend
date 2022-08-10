import React, { useContext } from "react"
import { ModalContext } from "../../contexts/modalContext"


function ModalBase() {
    const [ modalInfo, setModalInfo ] = useContext(ModalContext)
    
    const closeModal = () => {
        setModalInfo(() => {
            return {
                visible: false,
                children: null
            }
        })
    }

    return (
        <>
            <input onChange={()=>{}} type="checkbox" id="modal" className="modal-toggle" checked={modalInfo.visible}/>
            <label htmlFor="modal" className="modal ">
                <label className="modal-box w-11/12 max-w-5xl relative" htmlFor="">
                    <button onClick={closeModal} className="btn btn-sm btn-circle absolute right-2 top-2">✕</button>
                    {modalInfo.children}
                </label>
            </label>
        </>
    )
}

export default ModalBase