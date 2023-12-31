import React, {useRef, useState} from 'react'
import "./AddBadgeModal.css"
import GradientText from "../GradientTextComponent/GradientText";
import Button from "../ButtonComponent/Button";
import {setDoc, doc} from "firebase/firestore"
import {db, storage} from "../../firebase";
import {getDownloadURL, ref, uploadBytes} from "firebase/storage";
import CloseButton from "../CloseButtonComponent/CloseButton";
import {v4} from "uuid";

const AddBadgeModal = ({openAdd, setDocs}) => {

    const [badgeName, setBadgeName] = useState("");
    const [badgeImage, setBadgeImage] = useState(null);
    const [badgePercentage, setBadgePercentage] = useState("0");

    //referenza input file invisibile
    const hiddenFileInput = useRef(null);

    //gestisce il click del pulsante per aprire i file
    function handleClick(event) {
        hiddenFileInput.current.click();
    }

    const saveImage = async () => {
        if (badgeImage == null) {
            console.error("immagine non presente");
            return null;
        } else {
            const imageRef = ref(storage, `images/${badgeImage.name}`);
            try {
                const snapshot = await uploadBytes(imageRef, badgeImage);
                return await getDownloadURL(snapshot.ref);
            } catch (error) {
                console.error("Errore nel caricamento dell'immagine");
                return null;
            }
        }


    }

    const saveData = async (e) => {
        e.preventDefault();

        const imageUrl = await saveImage();
        const documentId = v4();

        if (imageUrl) {
            try {
                const dataToSave = {
                    idDoc: documentId,
                    name: badgeName,
                    image: imageUrl,
                    percentage: badgePercentage,
                };
                const docRef = doc(db, "badges", documentId);
                await setDoc(docRef, dataToSave);
                setDocs((prev) => [...prev, dataToSave]);
                openAdd(false);
            } catch (e) {
                console.error("errore durante il salvataggio dei dati")
            }
        } else {
            console.error("URL Immagine non disponibile")
        }
    }

    //gestisce il file uploadato
    function handleChange(event) {
        const fileUploaded = event.target.files[0];
        setBadgeImage(fileUploaded);
    }

    return (
        <div className="modal-background">
            <div className="modal">
                <div className="close-btn-container">
                    <CloseButton openModal={openAdd}/>
                </div>
                <form className="badge-form">
                    <GradientText value="AGGIUNGI BADGE" size="1"/>
                    <input className={"general-input"}
                           id={"badge-name"}
                           type={"text"}
                           value={badgeName}
                           onChange={(e) => {
                               setBadgeName(e.target.value);
                           }}
                           placeholder={"Nome badge"}
                           required
                    />
                    <button className={"upload-button"} onClick={handleClick}>
                        <span style={{
                            whiteSpace: "nowrap",

                        }}>
                            {badgeImage != null ? "Caricata immagine: " + badgeImage.name : "Carica immagine"}
                        </span>
                    </button>
                    <input className={"general-input"}
                           ref={hiddenFileInput}
                           type={"file"}
                           accept={"image/png"}
                           onChange={handleChange}
                           style={{
                               display: "none"
                           }}
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
                        <Button value="Aggiungi" width="5" height="3" handleClick={saveData}/>
                    </div>
                </form>
            </div>
        </div>
    )
}
export default AddBadgeModal
