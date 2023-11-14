

const Shopping_Card=(props)=>{
    const {cartData}=props;
    const {image,title,price,category}=cartData;
    
return(
    
    <div className='m-8 p-4 w-[300px] h-fit  cursor-pointer hover:bg-gray-300 shadow-2xl rounded-lg '>
   <img  className="rounded-lg w-[250px] " src={image}></img>
    <h3  className="font-bold py-4 text-lg text-center">{title}</h3>
    <h2  className="text-md text-center">{price}</h2>
    <h2 className="text-md text-center">{category}</h2>
</div>

    )

}
export default Shopping_Card;