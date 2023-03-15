import { FC, ReactElement } from "react";

interface ProductItemRatingPros {
    rating: number,
    numReviews: number
}

const ProductItemRating: FC<ProductItemRatingPros> = ({ rating, numReviews }): ReactElement => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = (rating - fullStars) >= 0.5;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
    const stars = [];

    for (let i = 0; i < fullStars; i++) {
        stars.push(<i key={i} className="fas fa-star"></i>);
    }

    if (hasHalfStar) {
        stars.push(<i key="half-star" className="fas fa-star-half-alt"></i>);
    }

    for (let i = 0; i < emptyStars; i++) {
        stars.push(<i key={`empty-star-${i}`} className="far fa-star"></i>);
    }

    return (
        <div className="product-m__rating gl-rating-style">
            {stars}
            <span className="product-m__review">({numReviews})</span>
        </div>
    );
}

export default ProductItemRating