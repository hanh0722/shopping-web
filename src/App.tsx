import { useRoutes } from "react-router-dom";
import { Navigation, RouteConfig } from "./components";
import "./styles/root.scss";

function App() {
  const elements = useRoutes(RouteConfig);
  return (
    <>
      <Navigation />
      {elements}
    </>
  );
}

export default App;
