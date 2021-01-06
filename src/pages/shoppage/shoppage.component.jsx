import React from 'react';
import './shoppage.styles.scss';
import SHOP_DATA from './shopModel';
import CollectionPreview from '../../components/collection-preview/collection-preview.component'
class Shoppage extends React.Component{
   constructor(){
    super();
    this.state= {
        Collections : SHOP_DATA
    }
    console.log(this.state.Collections)
 }
    render(){
        
        return(
            
            <div className='shop-page'>
            {
                this.state.Collections.map(({  id, ...otherCollectionProps })=>(
                    <CollectionPreview key={id} {...otherCollectionProps}></CollectionPreview>)
                    )
            }
            </div>
        )
    }
}
    export default Shoppage;