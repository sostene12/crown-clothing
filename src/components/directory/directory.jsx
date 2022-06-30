import React from 'react';
import MenuItem from '../menu-item/menu-item';
import './directory.scss';

import { connect } from "react-redux";
import { createStructuredSelector } from 'reselect';
import { selectDirectorySection } from "../../redux/directory/directory-selector";

const Directory = ( { sections } ) => {
        return(
            <div className="directory-menu">
                {sections.map(({id,...sections}) => <MenuItem key={id} {...sections} />)}
            </div>
        );
}

const mapStateToProps = createStructuredSelector({
  sections:selectDirectorySection,
});

export default connect(mapStateToProps)(Directory);

