const ShoppingCard = (props) => {
    const { cardData } = props;
    const { image, title, price, category, id } = cardData;

    return (
        <div className="m-10 p-4 w-[300px] h-full  cursor-pointer hover:bg-gray-300 shadow-2xl rounded-lg ">
            <img
                className="rounded-lg w-[250px] h-[200px] p-4"
                src={image}
                alt={id}
            ></img>
            <h3 className="font-bold py-4 text-lg text-center">{title}</h3>
            <h2 className="text-md text-center text-xl mb-4">₹{price}</h2>
            <h2 className="text-md text-center text-lg">{category}</h2>
        </div>
    );
};
export default ShoppingCard;
