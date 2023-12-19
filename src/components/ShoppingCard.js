const ShoppingCard = (props) => {
  const { cardData } = props;
  const { image, title, price, category,id } = cardData;

  return (
    
    <div className="m-8 p-4 w-[300px] h-fit  cursor-pointer hover:bg-gray-300 shadow-2xl rounded-lg ">
      <img className="rounded-lg w-[250px]" src={image} alt={id}></img>
      <h3 className="font-bold py-4 text-lg text-center">{title}</h3>
      <h2 className="text-md text-center">{price}</h2>
      <h2 className="text-md text-center">{category}</h2>
    </div>
  );
};
export default ShoppingCard;
