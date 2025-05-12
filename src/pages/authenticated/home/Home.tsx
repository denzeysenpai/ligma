import { Outlet } from "react-router-dom";

function Home() {
  return (
    <div>
      {/* <h1>Home</h1>
      <p>Welcome to the home page!</p> */}
      <Outlet/>
    </div>
  );
}

export default Home;