import { ReactComponent as Star } from "./assets/star.svg";
import { MAX_STARS } from "./constants";

function ProductCard({ title, image, price, rating }) {
    const filledStars = new Array(rating).fill();
    const emptyStars = new Array(MAX_STARS - rating).fill();

    const onClick = () => {
        console.log('CLICKED!');
    };

    return (
        <div className="product-card">
            <div className="relative mb-2">
                <img
                    className="product-card__img"
                    src={image}
                    alt={title}
                />
                <button
                    className="product-card__btn"
                    onClick={onClick}
                >
                    Add to cart
                </button>
            </div>
            <div className="flex flex-col items-center">
                <p className="text-center text-gray-800">{title}</p>
                <p className="mb-3 text-gray-600">{price}</p>
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
