import React from 'react';
import './collection.styles.scss';
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { collectionSelector } from '../../redux/shop/shop.selectors';
const CollectionPage = ({collection}) => {
    console.log('collection',collection);
    return (
    <div className='collection-page'>
        <h2>COLLECTION PAGE</h2>
    </div>
    )
}
const mapStateToProps = (state,ownProps)=>createStructuredSelector({
    collection : collectionSelector(ownProps.match.params.collectionId)(state)
})
export default connect(mapStateToProps)(CollectionPage);