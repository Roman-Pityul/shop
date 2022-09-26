import { Outlet } from "react-router-dom";

import "./container.scss";

const Container: React.FC = () => {
  return (
    <div className="container">
      <Outlet />
    </div>
  );
};

export default Container;
