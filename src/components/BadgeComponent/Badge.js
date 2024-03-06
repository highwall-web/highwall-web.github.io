import "./Badge.css"
import VerticalProgressBar from "../VerticalProgressBarComponent/VerticalProgressBar";

const Badge = ({badgeLogo, badgeDesc, badgeProgress, handleClick, id, isAdmin}) => {

    function handleClickBadge() {
        if (handleClick) {
            handleClick(badgeDesc, badgeLogo, badgeProgress, id);
        }
    }

    return (
        <div className={"badge"} onClick={handleClickBadge} style={{
            cursor: isAdmin ? "pointer" : "default"
        }}>
            <div className={"badge-logo-container"}>
                <img className={"badge-logo"} src={badgeLogo} alt={badgeDesc}/>
            </div>
            <div className={"badge-description-container"}>
                <p className={"badge-description"}>{badgeDesc}</p>
            </div>
            <div className={"progress-bar-container"}>
                <VerticalProgressBar progress={badgeProgress}/>
            </div>
        </div>
    )
}
export default Badge
