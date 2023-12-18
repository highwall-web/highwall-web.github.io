import React, {useState} from 'react'
import "./EditBadgeModal.css"
import CloseButton from "../CloseButtonComponent/CloseButton";
import GradientText from "../GradientTextComponent/GradientText";
import Button from "../ButtonComponent/Button";
import {doc, updateDoc} from "firebase/firestore";
import {db} from "../../firebase";

const EditBadgeModal = ({setOpenEdit, badge, setDocs, docs}) => {

    const [badgeName, setBadgeName] = useState(badge.name);
    const [badgePercentage, setBadgePercentage] = useState(badge.percentage);

    async function checkData(e) {

        e.preventDefault();

        let isUpdated = false;
        const badgeRef = doc(db, "badges", badge.idDoc);
        const updatedBadge = {...badge};


        if (badgeName !== badge.name) {
            isUpdated = true;
            updatedBadge.name = badgeName;
            try {
                await updateDoc(badgeRef, {
                    name: badgeName
                })

            } catch (error) {
                console.error("Nome non modificato", error)
            }

        }

        if (badgePercentage !== badge.percentage) {
            isUpdated = true;
            updatedBadge.percentage = badgePercentage;
            try {
                await updateDoc(badgeRef, {
                    percentage: badgePercentage
                })
            } catch (error) {
                console.error("Percentuale non modificata", error)
            }

        }


        if (!isUpdated) {
            console.log("non ha modificato nulla");
        } else {
            const updatedDocuments = [...docs];
            const indexToUpdate = updatedDocuments.findIndex((badge) => badge.idDoc = updatedBadge.idDoc)
            if (indexToUpdate !== -1) {
                updatedDocuments[indexToUpdate] = updatedBadge;
                setDocs(updatedDocuments);
                setOpenEdit(false);
            } else {
                console.error("Indice non trovato");
            }
        }

    }

    return (
        <div className="modal-background">
            <div className="modal">
                <div className="close-btn-container">
                    <CloseButton openModal={setOpenEdit}/>
                </div>
                <form className="badge-form">
                    <GradientText value="MODIFICA BADGE" size="1"/>
                    <input className={"general-input"}
                           id={"badge-name"}
                           type={"text"}
                           value={badgeName}
                           onChange={(e) => {
                               setBadgeName(e.target.value);
                           }}
                           placeholder="Nome Badge"
                           required
                    />
                    <label>Percentuale completamento:</label>
                    <input className={"general-input range"}
                           id={"badge-percentage"}
                           type={"range"}
                           value={badgePercentage}
                           step={"10"}
                           onChange={(e) => {
                               setBadgePercentage(e.target.value);
                           }}
                           required
                    />
                    <div className={"button-container"}>
                        <Button value="Modifica" width="5" height="3" handleClick={checkData}/>
                    </div>
                </form>
            </div>
        </div>
    )
}
export default EditBadgeModal
