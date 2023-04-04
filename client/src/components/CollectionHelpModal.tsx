import React, { useEffect, useRef } from "react";
import colleHelpModalInterface from "../utils/interfaces/colleHelpModalPropInterface";
import "../styles/CollectionHelpModal.css";

function CollectionHelpModal(prop: colleHelpModalInterface){

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
        <aside className={`collection-help-modal ${prop.modalIsOpen?"active":""}`} ref={modalRef}>
            <div className="collection-help-modal-header">
                <div></div>
                <h3 className="collection-help-modal-title">Help</h3>
                <button className="collection-help-close-btn" onClick={prop.handleCloseModal}>x</button>
            </div>
            <div className="collection-help-modal-body">
                
            </div>
        </aside>
    )
}

export default CollectionHelpModal;