import React from 'react';
import { Route,Routes } from 'react-router-dom';

import CollectionsOverview from '../../components/collections-overview/collections-overview';
import CollectionPage from '../collection/collection';

const ShopPage = ( {collections} ) => {

        return <div className='shop-page'> 
        
        <Routes>
        <Route path='/' element={<CollectionsOverview /> } />
        <Route path='/collection' element={<CollectionPage />} /> 
        </Routes>
        </div>

}


export default ShopPage;