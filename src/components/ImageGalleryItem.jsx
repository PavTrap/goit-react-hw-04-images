import React, { Component } from 'react';
import css from './styles.module.css';

export class ImageGalleryItem extends Component {
	handlClick = largeImageURL => {
		this.props.onImageClick(largeImageURL)
	};
	render(){
		const { images } = this.props;
		return(
			<>
			{images.map(({ id, webformatURL, largeImageURL, tags }) => (
			  <li key={id} className={css.ImageGalleryItem}>
				 <img
					className={css.ImageGalleryItemImage}
					src={webformatURL}
					alt={tags}
					onClick={() => this.handlClick(largeImageURL)}
				 />
			  </li>
			))}
		 </>
		)
	}
}
export default ImageGalleryItem;