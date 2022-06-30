import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import "./collections-overview.scss";
import { selectCollections } from '../../redux/shop/shop-selector';
import CollectionPreview from '../collection-preview/collection-preview';

const CollectionsOverview = ({ collections }) => {
    return (
        <div className="collections-overview">
              {collections.map(({id,...collection}) => (
                <CollectionPreview key={id} {...collection}/>
            ))}
        </div>
    );
}

const mapStateToProps = createStructuredSelector({
    collections:selectCollections
});

export default connect(mapStateToProps)(CollectionsOverview);