import React, {useEffect} from "react";
import "./Knowledge.css"
import Badge from "../components/Badge";
import Button from "../components/Button";
import GradientText from "../components/GradientText";
import {collection, getDocs} from "firebase/firestore"
import {db} from "../firebase";

export default function Knowledge({isAddingBadge, setDoc, doc, isAdmin}) {


    async function fetchData() {
        try {
            const dataRef = collection(db, "badges");
            return await getDocs(dataRef);
        } catch (error) {
            console.error("Errore recupero dati", error);
        }

    }

    useEffect(() => {
        fetchData().then(r => {
            const badgeData = [];
            r.forEach((doc) => {
                badgeData.push(doc.data());
            })
            setDoc(badgeData);
        });
    }, [setDoc])


    function handleClick() {
        isAddingBadge(true);
    }

    return(
        <section className="knowledge">
            <GradientText value={"Skills e Conoscenze"} size={"1.5"}/>
            <div className={"knowledge-content"}>
                    {doc.map((doc) => (
                        <Badge
                            key={doc.badgeName}
                            badgeDesc={doc.badgeName}
                            badgeLogo={doc.badgeImageUrl}
                            badgeProgress={doc.badgePercentage}
                        />
                    ))}
                <div className={"add-badge-button-container"}>
                    {isAdmin && <Button
                        width={"2"}
                        height={"2"}
                        value={`+`}
                        borderRadius={"25"}
                        handleClick={handleClick}/>}
                </div>

            </div>
        </section>
    );
}