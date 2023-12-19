import Header from "./Header";
import { useParams } from "react-router-dom";
import useCardItem from "../utils/useCardItem";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

const Card = () => {
    const { cardId } = useParams();
    const cardItem = useCardItem(cardId);
    const dispatch = useDispatch();

    const handleAddToCart = () => {
        dispatch(addItem(cardItem));
    };

    return (
        <div>
            <Header />
            <div className="flex p-6 m-6">
                <div className="m-4 p-4 w-1/2">
                    <img
                        className="h-[400px] ml-9"
                        src={cardItem?.image}
                        alt="product-img"
                    />
                </div>
                <div className="m-6 p-6">
                    <h1 className="text-3xl font-medium">{cardItem?.title}</h1>
                    <p className="text-lg mt-4">{cardItem?.description}</p>
                    <h2 className="text-2xl mt-6">₹{cardItem?.price}</h2>
                    <button
                        className="mt-6 p-2 bg-green-700 hover:bg-green-900 text-white rounded-sm shadow-lg"
                        onClick={handleAddToCart}
                    >
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    );
};
export default Card;
