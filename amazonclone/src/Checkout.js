import React from 'react'
import { useStateValue } from './StateProvider';
import './Checkout.css';
import CheckoutProduct from './CheckoutProduct';
import Subtotal from './Subtotal';

function Checkout() {
//setup the basket
//if we ahve to maniluplate the data layer 
//we pull in dispatch
const [{ basket }] = useStateValue();




    return (
        <div className="checkout">
            <div className="checkout__left">
            <img className="checkout__ad" src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
             alt=""/>
         {basket?.length === 0 ?(
             <div>

                 <h2>your shopping basket is empty</h2>
            <p>You have no items in your basket
                "Add to basket" next to the item</p>
            
             </div>
         ):(
            <div>
                <h2 className="checkout__title">Your shopping basket</h2>
           
           {/*list out all the checkout products*/}
           {basket.map((item) => ( <CheckoutProduct
            id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}

           
           />
           
           
           
           ))}
          
           
            </div> 
         )}
         </div>
         {basket.length >0 &&(
<div className="checkout__right">
<Subtotal/>
</div>

         )}
            
        </div>
    )
}

export default Checkout
