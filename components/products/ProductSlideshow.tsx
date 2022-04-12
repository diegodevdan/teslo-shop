import React, {FC} from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import {Carousel} from 'react-responsive-carousel';

interface Props {
    images: string[]
}

const ProductSlideshow: FC<Props> = ({images}) => {
    return (
        <Carousel
            showArrows={true}
        >
            {
                images.map(image => {
                    const url = `/products/${image}`;
                    return (
                        <div
                            style={{
                                height: '650px',
                            }}
                            key={image}
                        >
                            <img src={url} alt={image}/>
                        </div>
                    )
                })
            }
        </Carousel>
    );
};

export default ProductSlideshow;
