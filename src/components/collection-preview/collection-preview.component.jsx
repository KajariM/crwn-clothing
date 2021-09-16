import React from "react";
import "./collection-preview.styles.scss";
import CollectionItem from "../collection-item/collection-item.component";

const CollectionPreview = ({ title, id, items }) => (
  <div className="collection-preview">
    <h1 className="title">{title.toUpperCase()}</h1>
    <div className="preview">
      {items
        .filter((item, idx) => {
          return idx < 4;
        })
        .map((item) => (
          <CollectionItem key={item.id} item={item}>
            {item.name.toUpperCase()}
          </CollectionItem>
        ))}
    </div>
  </div>
);
export default CollectionPreview;
