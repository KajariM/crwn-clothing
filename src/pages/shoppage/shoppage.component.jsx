import React from "react";
import "./shoppage.styles.scss";
import CollectionOverview from "../../components/collection-overview/collection-overview.component";
import { Route } from "react-router-dom";
import CollectionPage from "../collection/collection.component";

const Shoppage = ({match}) => (
  <div className='shop-page'>
   <Route exact path={`${match.path}`} component={CollectionOverview} />
   <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
   </div>
);
export default Shoppage;
