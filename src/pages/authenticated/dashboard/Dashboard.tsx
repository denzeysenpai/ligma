import "./Dashboard.css"
import { Link } from "react-router-dom";
import user_img from "../../../lib/assets/common/user.png";
import { FetchImage, FetchThemeColor } from "../../../lib/utils/themes";
import type React from "react";

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
    {
        name: "BubbleMe",
        description: "This is a sample project description.",
        organization: "Organization B",
        membersCount: 2,
        lastUpdated: "2025-10-02 15:01:05",
        id: "2",
        themeId: "japanese-theme-2.ocean-blue",
    },
]

function GetProjects() {
    const STYLE: React.CSSProperties = { 
        textDecoration: "none", 
        width: "fit-content", 
        height: "fit-content", 
        display: "flex", 
        margin: "0px", 
        position: "relative" 
    }
    return sample_projects.map((recent) => (
        <Link to={`/authenticated/project?id=${recent.id}`} style={STYLE} className="project-link">
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
                <img src={FetchImage(recent.themeId)} alt="" className="background" draggable="false" />
            </button>
        </Link>
    ))
}
function Dashboard() {
    const has_my_projects = !true
    const has_starred_projects = !true
    const has_recent_projects = !true
    // const has_upcoming_events = true
    // const has_updates = true 

    // has everything
    if (has_my_projects && has_starred_projects && has_recent_projects) {
        return <></>
    } 


    // no owned pojects but has starred and has visited other projects
    if (!has_my_projects && has_starred_projects && has_recent_projects) {
        return <></>
    } 


    // has personal projects, no starred and has visited projects
    if (has_my_projects && !has_starred_projects && has_recent_projects) {
        return <></>
    } 


    // user visited a project but has no starred and has no personal projects
    if (!has_my_projects && !has_starred_projects && has_recent_projects) {
        return <></>
    } 

    // no anything at all
    return (
        <div className="dashboard-page no-content fade-in-animation">
            <div className="content">
                <img src="" alt="" />
                <h1>Pretty spacious in here...</h1>
                <p>What would you like to do?</p>
                <button>New Project</button>
                <button id="org">New Organization</button>
            </div>
        </div>
    );
}
export default Dashboard;