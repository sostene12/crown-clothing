import React from 'react';
import "./collection.scss";
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectCollection } from '../../redux/shop/shop-selector'

import CollectionItem from '../../components/collection-item/collection-item';

const CollectionPage = () => {
    let { collectionId } = useParams();

    const collection = useSelector(state => {
        const collect = selectCollection(collectionId)(state);
        return collect
    });

    const { title,items } = collection;

    return ( 
        <div className="collection-page">
            <h2 className='title'>{title}</h2>
            <div className="items">
                {items.map(item =>(
                         <CollectionItem key={item.id} item={item} />
                )
                )}
            </div>
        </div>
     );
}
 
export default CollectionPage;