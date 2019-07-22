import React, { Component } from 'react';
import CollectionPreview from '../../components/collection-preview/collection-preview.jsx';
import data from './shop.data.js';

export class ShopPage extends Component {
	state = {
		collections: data
	};

	render() {
		const { collections } = this.state;
		return (
			<div className="shop-page">
				<hi>SHOP PAGE</hi>
				{collections.map(({ id, ...collectionProps }) => (
					<CollectionPreview key={id} {...collectionProps} />
				))}
			</div>
		);
	}
}

export default ShopPage;
