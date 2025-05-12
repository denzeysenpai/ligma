import { Outlet, Link } from "react-router-dom";
import ligmaLogo from "../../../lib/assets/common/ligma-logo.png";
import menu from "../../../lib/assets/home/dashboard.png"
import home from "../../../lib/assets/home/home.png"
import settings from "../../../lib/assets/home/settings.png"
import events from "../../../lib/assets/home/events.png"
import "./Home.css";
import arrow from "../../../lib/assets/common/arrow.png";
import LigmaButton from "../../../lib/components/button-with-dropdown/LigmaButton";

const recents = [
    { id: 1, name: "Project 1", img: ligmaLogo },
    { id: 2, name: "Project 2", img: ligmaLogo },
    { id: 3, name: "Project 3", img: ligmaLogo }
]

const notebooks = [
    { id: 1, name: "Notebook 1", img: ligmaLogo },
    { id: 2, name: "Notebook 2", img: ligmaLogo },
    { id: 3, name: "Notebook 3", img: ligmaLogo }
]

function GetRecents() {
    return recents.map((recent) => (
        <Link to={`/authenticated/project?id=${recent.id}`} className="link">
            <img src={recent.img} alt="img" />
            <span>
            {recent.name}
            </span>
        </Link>
    ))
}

function GetNotebooks() {
    return notebooks.map((recent) => (  
        <Link to={`/authenticated/notebook?id=${recent.id}`} className="link">
            <img src={recent.img} alt="img" />
            <span>
            {recent.name}
            </span>
        </Link>
    ))
}

function Home() {
  return (
    <div className="home-page grid-background">
        <header>
            <button>
                <img src={menu} alt="" />
            </button>
            <img src={ligmaLogo} alt="" className="logo" />
            <nav>
                {LigmaButton("button", "Projects", "create-new")}
                {LigmaButton("button", "Starred", "create-new")}
                {LigmaButton("button", "Recent", "create-new")}
            </nav>
            <div className="right-float">
                
                {/* <button>
                    <img src={settings} alt="" />
                </button> */}
                <div className="search-bar">
                    <input type="text" placeholder="Search"/>
                </div>
                <button>
                    <img src={settings} alt="" />
                </button>
            </div>
        </header>
        <div className="page-body">
            <div className="nav-container">
                <nav>
                    <button>
                        <span>Create new</span>
                        <img src={arrow} alt=""/>
                    </button>
                    <h2>Workspace</h2>
                    <Link to="/authenticated" className="link">
                        <img src={home} alt=""/>
                        <span> Home </span>
                    </Link>
                    <Link to="/authenticated/calendar" className="link">
                        <img src={events} alt=""/>
                        <span> My Calendar </span>
                    </Link>
                    <h2>My Projects</h2>
                    <GetRecents />
                    <h2>My Notebooks</h2>
                    <GetNotebooks />
                </nav>
            </div>
            <div className="outlet-container">
                <Outlet/>
            </div>
        </div>
    </div> 
  );
}

export default Home;