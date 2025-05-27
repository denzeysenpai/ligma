import "./Dashboard.css"
import { Link } from "react-router-dom";
import user_img from "../../../lib/assets/common/user.png";
import { FetchImage, FetchThemeColor } from "../../../lib/utils/themes";

const sample_projects = [
    {
        name: "Potato Tracker App",
        description: "This is a sample project description.",
        organization: "Organization A",
        membersCount: 5,
        lastUpdated: "2025-10-01 14:21:15",
        id: "1",
        themeId: "japanese-theme-1.vue-green",
    },
    {
        name: "Toilet Rating App",
        description: "This is a sample project description.",
        organization: "Organization B",
        membersCount: 2,
        lastUpdated: "2025-10-02 15:01:05",
        id: "2",
        themeId: "japanese-theme-2.ocean-blue",
    },
]

function GetProjects() {
    return sample_projects.map((recent) => (
        <Link to={`/authenticated/project?id=${recent.id}`} style={{ textDecoration: "none", width: "fit-content", height: "fit-content" }} className="project-link">
            <button className="link">
            <div className="top-div">
                <h2 className="h2">{recent.name}</h2>
                <span className="organization">{recent.organization}</span>
            </div>
            <div className="bottom-div">
                {/* <p className="description">{recent.description}</p> */}
                <div className="bottom-info">
                    <span className="members-count">
                        <img src={user_img} alt="" />
                        <p>
                        {recent.membersCount}
                        </p>
                    </span>
                    <span className="last-updated">Last Updated: {recent.lastUpdated}</span>
                </div>
            </div>
            <span className="vignette"></span>
            <span className={"color-theme " + FetchThemeColor(recent.themeId)}></span>
            <img src={FetchImage(recent.themeId)} alt="" className="background" draggable="false"/>
            </button>
        </Link>
    ))
}
function Dashboard() {
  return (
    <div className="dashboard-page fade-in-animation">
        <div className="row">
            <div className="block cyan-border">
                <h1 className="h1">My Projects</h1>
                <div className="projects-holder">
                {GetProjects()}
                </div>
            </div>
            <div className="block cyan-border">
                <h1 className="h1">Starred Projects</h1>
                <p>Here are your projects:</p>
            </div>
        </div>
        <div className="row seventy-auto-bento-columm">
            <div className="block cyan-border">
                <h1 className="h1">Recent Projects</h1>
                <p>Here are your projects:</p>
            </div>
            <div className="right-box">
                <div className="block cyan-border">
                    <h1 className="h1">Updates</h1>
                    <p>Here are your projects:</p>
                </div>
                <div className="block cyan-border">
                    <h1 className="h1">Upcoming Events</h1>
                    <p>Here are your projects:</p>
                </div>
            </div>
        </div>
    </div>
  );
}


export default Dashboard;