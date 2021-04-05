import { Layout } from 'antd';
import ShoppingCart from "../components/ShoppingCart";
import CartProduct from "../components/CartProduct";
import NavBar from "../components/NavBar";
const { Content } = Layout;

function Cart() {
   return (
      <Layout className="container main-layout">
         <Layout className="bg-gray">
            <NavBar />
         </Layout>
         <Layout className="cart-container main-layout">
            <Layout className="bg-gray">       
               <ShoppingCart />
               <Content className="layout-content">
                  <CartProduct />
               </Content>
            </Layout>
         </Layout>
      </Layout>
   );
}

export default Cart;