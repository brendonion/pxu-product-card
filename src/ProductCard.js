import { useState } from 'react';
import { ReactComponent as Star } from "./assets/star.svg";
import { MAX_STARS } from "./constants";

function ProductCard({ title, variants, rating }) {
    const filledStars = new Array(rating).fill();
    const emptyStars = new Array(MAX_STARS - rating).fill();
    
    const [variantIndex, setVariantIndex] = useState(0);
    const [soldOut, setSoldOut] = useState(false);

    const onCartClick = () => {
        setSoldOut(true);
    };

    const onSwatchClick = (index) => {
        setVariantIndex(index);
    }

    return (
        <div className={`product-card ${soldOut ? 'product-card--sold-out' : ''}`}>
            <div className="relative mb-2">
                <img
                    className="product-card__img"
                    src={variants[variantIndex].image}
                    alt={title}
                />
                {!soldOut &&
                    <button
                        className="product-card__btn"
                        onClick={onCartClick}
                    >
                        Add to cart
                    </button>
                }
                {soldOut &&
                    <div className="product-card__badge">
                        <span>SOLD OUT</span>
                    </div>
                }
            </div>
            <div className="flex flex-col items-center">
                <div className="flex justify-center items-center space-x-1">
                    {variants.map((variant, i) => (
                        <button
                            key={i}
                            className={`product-card__swatch-btn ${variantIndex === i ? 'product-card__swatch-btn--active' : ''}`}
                            onClick={() => onSwatchClick(i)}
                        >
                            <span
                                className="product-card__swatch-btn__color"
                                style={{ backgroundColor: variant.color }}
                            ></span>
                        </button>
                    ))}
                </div>
                <p className="product-card__title">{title}</p>
                <p className="product-card__price">{variants[variantIndex].price}</p>
                <span className="flex justify-center">
                    {filledStars.map((_, i) => (
                        <Star key={i} className="mr-0.5" />
                    ))}
                    {emptyStars.map((_, i) => (
                        <Star key={i} className="opacity-10" />
                    ))}
                </span>
            </div>
        </div>
    );
}

export default ProductCard;
