import { useEffect, useState } from "react";
import { products } from "./mockData";

const useCardItem = (cardId) => {
    const [cardItem, setCardItem] = useState(null);
    useEffect(() => {
        products.map((item) => {
            // eslint-disable-next-line eqeqeq
            if (item.id == cardId) {
                setCardItem(item);
            }
        });
    }, [cardId]);
    return cardItem;
};

export default useCardItem;
