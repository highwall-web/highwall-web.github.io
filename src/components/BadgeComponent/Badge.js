import "./Badge.css"
import VerticalProgressBar from "../VerticalProgressBarComponent/VerticalProgressBar";

const Badge = ({badgeLogo, badgeDesc, badgeProgress}) => {

    return (
        <div className={"badge"}>
            <div className={"badge-logo-container"}>
                <img className={"badge-logo"} src={badgeLogo} alt={"JavaScript"}/>
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
