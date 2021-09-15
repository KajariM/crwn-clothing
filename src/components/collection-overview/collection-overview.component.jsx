import React from 'react';
import './collection-overview.styles.scss';
import CollectionPreview from '../../components/collection-preview/collection-preview.component'
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { shopSelector } from '../../redux/shop/shop.selectors';
const CollectionOverview = ({collections}) => {        
        return(
            <div className='shop-page'>
            {
                collections.map(({  id, ...otherCollectionProps })=>(
                    <CollectionPreview key={id} {...otherCollectionProps}></CollectionPreview>)
                    )
            }
            </div>
        )
    }
    const mapStateToProps = createStructuredSelector({
        collections:shopSelector
    })
    export default connect(mapStateToProps)(CollectionOverview);