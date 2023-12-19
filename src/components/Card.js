import Header from "./Header";
import { products } from "../utils/mockData";
import { useParams } from "react-router-dom";

  

const Card=()=>{
    const {cardId}=useParams();
   
    
    return(
        <div>
            <Header />
            <div>
            <div>
                
            </div>
            <div>

            </div>


            </div>
            
        </div>
        //discription
        //

    )
}
export default Card;