//data layer logic

export const initialState = {
  basket: [{
       id:"3254354345",
            title:"New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)",

            price:598.99,
            rating:4,
            image:"https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
  },
],
  user:null,
 
};
//start is 0 and amount will be 0 item is it ireate through the basket items
export const getBasketTotal = (basket) =>
basket?.reduce((amount, item) => item.price + amount,0);






function reducer (state ,action){
    console.log(action);
    switch(action.type){
        case "SET_USER": 
        return{
            ...state,
            //no user came  or user authenticatted n it will be remain throuth the data layer to used in the companonent tree
            user: action.user
        }
        case 'ADD_TO_BASKET':
            //logic to add item
            //state is the actual state is 0 
            //action item si the item that is passed
            return {
                ...state
            ,
            basket: [...state.basket,action.item]
        };
            
            case 'REMOVE_FROM_BASKET':
                //logic
                //clone basket
let newBasket = [...state.basket];
//check if the product exits in the new basket remove ut
const index = state.basket.findIndex
((basketitem)=>basketitem.id ===action.id);

if (index>=0){
  //item exits in basket remove it..
newBasket.splice(index,1);

}else{
    console.warn(
        `Cant remove product (id: ${action.id}) as its not in basket`

    )
}


                 return {...state, 
                    basket: newBasket};
               
                default:
                    return state;
    }

}

export default reducer;
