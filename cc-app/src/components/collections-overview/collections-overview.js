import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectCollectionsForPreview } from '../../redux/shop/shop.selectors.js';

import CollectionPreview from '../../components/collection-preview/collection-preview.jsx';

import './collections-overview.scss';

const CollectionsOverview = ({ collections }) => {
	return (
		<div className="collections-overview">
			{collections.map(({ id, ...collectionProps }) => (
				<CollectionPreview key={id} {...collectionProps} />
			))}
		</div>
	);
};

const mapStateToProps = createStructuredSelector({
	collections: selectCollectionsForPreview
});

export default connect(mapStateToProps)(CollectionsOverview);
