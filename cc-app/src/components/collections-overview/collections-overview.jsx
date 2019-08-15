import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectCollectionsForPreview } from '../../redux/shop/shop.selectors.js';

import CollectionPreview from '../../components/collection-preview/collection-preview.jsx';

import { CollectionsOverviewContainer } from './collections-overview.styles.jsx';

const CollectionsOverview = ({ collections }) => {
	return (
		<CollectionsOverviewContainer>
			{collections.map(({ id, ...collectionProps }) => (
				<CollectionPreview key={id} {...collectionProps} />
			))}
		</CollectionsOverviewContainer>
	);
};

const mapStateToProps = createStructuredSelector({
	collections: selectCollectionsForPreview
});

export default connect(mapStateToProps)(CollectionsOverview);
