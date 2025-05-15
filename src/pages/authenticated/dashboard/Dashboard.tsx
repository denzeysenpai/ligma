import "./Dashboard.css"


function Dashboard() {
  return (
    <div className="dashboard-page fade-in-animation">
        <div className="row">
            <div className="block cyan-border">
                <h1 className="h1">My Projects</h1>
                <p>Welcome to the dashboard!</p> 
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