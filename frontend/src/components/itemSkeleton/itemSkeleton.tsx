import React from "react";
import ContentLoader from "react-content-loader";

const ItemSkeleton: React.FC = () => (
  <ContentLoader
    speed={2}
    width={272}
    height={350}
    viewBox="0 0 272 350"
    backgroundColor="#DFDFDF"
    foregroundColor="#B8B7B7"
  //backgroundColor="#f3f3f3"
  //foregroundColor="#ecebeb"
  >
    <rect x="165" y="210" rx="0" ry="0" width="1" height="14" />
    <rect x="5" y="2" rx="7" ry="7" width="255" height="165" />
    <rect x="188" y="191" rx="7" ry="7" width="72" height="48" />
    <rect x="4" y="189" rx="7" ry="7" width="65" height="48" />
    <rect x="5" y="260" rx="7" ry="7" width="256" height="10" />
    <rect x="5" y="278" rx="7" ry="7" width="256" height="10" />
    <rect x="4" y="297" rx="7" ry="7" width="255" height="40" />
  </ContentLoader>
);

export default ItemSkeleton;
