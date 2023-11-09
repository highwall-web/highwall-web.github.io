import React, {useEffect} from "react";
import "./Knowledge.css"
import Badge from "../BadgeComponent/Badge";
import Button from "../ButtonComponent/Button";
import GradientText from "../GradientTextComponent/GradientText";
import {collection, getDocs} from "firebase/firestore"
import {db} from "../../firebase";

export default function Knowledge({isAddingBadge, setDoc, doc, isAdmin, setBadge, badge, isEditingBadge}) {


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


    function handleBadgeClick(badgeName, badgeImage, badgePercentage, id) {
        if (isAdmin) {
            setBadge({
                ...badge,
                idDoc: id,
                name: badgeName,
                image: badgeImage,
                percentage: badgePercentage,
            });
            isEditingBadge(true);
        }
    }


    function handleClick() {
        isAddingBadge(true);
    }

    return (
        <section className="knowledge">
            <GradientText value={"Skills e Conoscenze"} size={"1.5"}/>
            <div className={"knowledge-content"}>
                {doc.map((doc) => (
                    <Badge
                        key={doc.idDoc}
                        id={doc.idDoc}
                        badgeDesc={doc.name}
                        badgeLogo={doc.image}
                        badgeProgress={doc.percentage}
                        handleClick={handleBadgeClick}
                        isAdmin={isAdmin}
                    />
                ))}
                {isAdmin &&
                    <div className={"add-badge-button-container"}>
                        <Button
                            width={"2"}
                            height={"2"}
                            value={`+`}
                            borderRadius={"25"}
                            handleClick={handleClick}
                        />
                    </div>
                }

            </div>
        </section>
    );
}