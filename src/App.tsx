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
      {/* <TransitionGroup>
        <CSSTransition key={location.pathname} classNames="fade" timeout={300} unmountOnExit mountOnEnter>{elements}</CSSTransition>
      </TransitionGroup> */}
      {elements}
    </>
  );
}

export default App;
