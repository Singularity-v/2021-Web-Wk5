import { useContext } from "react";
import { Select } from 'antd';
import { StoreContext } from "../store"

const { Option } = Select;

function ShoppingCart() {
   const { state: { productDetail: { product, qty} }, dispatch } = useContext(StoreContext);

   return (
       
    <div className="cart-header">
        <h1 className="cart-tital">
            Shopping Cart
        </h1>
        <h1 className="cart-tital-price">
            Price
        </h1>
        
    </div>
      
   );
}

export default ShoppingCart;