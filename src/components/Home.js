import Header from "./Header";
import Shopping_Card from "./Shopping_Card";

import { products } from "../utils/mockData";

const Home = () => {
    const productList=products;
    
    return (
        <div>
          
            <div className=" bg-stone-300 h-[500px]">
            <Header />
            <div className="flex flex-col m-6 ">
                <span className="font-bold text-[70px] font-serif">YOUR FAVORITES </span>
                <span className="font-bold text-[70px] font-serif">ARE BACK!</span>
                <span className="text-[20px] font-sans text-yellow-900 font-bold">Shop these Original Tees with bestsellers!</span>
            </div>
            </div>
            <div className="flex flex-wrap">
                {productList.map((carts)=>(
                    <Shopping_Card cartData={carts} /> 
                ))}
            
                
                 </div>
            </div>
             );
};

export default Home;
