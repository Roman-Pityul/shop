import { Link } from "react-router-dom";
import useBreadcrumbs from "use-react-router-breadcrumbs";

import "./breadCrumbs.scss";

const BreadCrumbs = () => {
  const routes = [
    {
      path: "/items/Bread",
      breadcrumb: "Home > Bread",
    },
  ];

  const breadcrumbs = useBreadcrumbs(routes);
  console.log(breadcrumbs);

  return (
    <div className="breadcrumbs">
      {breadcrumbs.map(({ match, breadcrumb }) => (
        <span key={match.pathname}>
          <Link to={match.pathname}>{breadcrumb}</Link>
        </span>
      ))}
    </div>
  );
};

export default BreadCrumbs;
