import React, { useEffect, useRef } from "react";
import retreatModalPropInterface from "../utils/interfaces/retreatModalPropInterface";
import "../styles/RetreatModal.css";

function RetreatModal(prop: retreatModalPropInterface){

    const modalRef = useRef<any>(null);

    useEffect(() => {
        const handleEvent = (e: any) => {
            if((!modalRef.current.contains(e.target)) && (prop.modalIsOpen)){
                prop.handleCloseModal();
            }
        }

        document.addEventListener("mousedown", handleEvent);

        return () => document.removeEventListener("mousedown", handleEvent);
    })

    return(
        <aside className={`retreat-modal ${prop.modalIsOpen?"active":""}`} ref={modalRef}>
            <div className="retreat-modal-header">
                <div></div>
                <h3 className="retreat-modal-title">Retreat?</h3>
                <button className="retreat-close-btn" onClick={prop.handleCloseModal}>x</button>
            </div>
            <div className="retreat-modal-body">
                <span className="retreat-modal-text">
                </span>
                <div className="retreat-modal-btns">
                    <button className="retreat-yes-btn" onClick={prop.handleRetreat}>yes</button>
                    <button className="retreat-no-btn" onClick={prop.handleCloseModal}>no</button>
                </div>
            </div>
        </aside>
    )
}

export default RetreatModal;