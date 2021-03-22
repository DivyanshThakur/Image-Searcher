import React from 'react';
import ImageCard from './ImageCard';
import './ImageList.css';

class ImageList extends React.Component {
    render() {
        const images = this.props.images.map( image => {
            return <ImageCard key={image.id} image={image} />;
        })
        return (
            <div class="image-list">
                {images}
            </div>
        );
    }
}

export default ImageList;
