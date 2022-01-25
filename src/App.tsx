import { useRoutes, useLocation } from "react-router-dom";
import { Navigation, RouteConfig } from "./components";
import "./styles/root.scss";
import { isHiddenNavigation } from "./utils/hiddenNavigation";

function App() {
  const elements = useRoutes(RouteConfig);
  const location = useLocation();
  return (
    <>
      {isHiddenNavigation(location.pathname) && <Navigation />}
      {elements}
    </>
  );
}

export default App;
