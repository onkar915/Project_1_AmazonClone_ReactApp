import React, { useEffect } from "react";
import './App.css';
import {BrowserRouter as Router ,Switch ,Route} from "react-router-dom"
import Header from "./Header";
import Home from "./Home";
import Checkout from "./Checkout";
import Login from "./Login";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";

function App() {

//datalayer
const [{user}, dispatch] = useStateValue();
//useeffect
//pieace of code which runs based on a given condition
//second argument is dependency
//blank to runs  onece when the app component loads n not load again
//if keep basket it will run once when app component loads and everttime it load the basket when  chaneg
//it is blank run once bcoz the listener will listen to user signin or signned out once

useEffect(() => {

  const unsubscribe  = auth.onAuthStateChanged((authUser)=> {
    if (authUser){
//use is logged in ...

dispatch({
  type:"SET_USER",
  user: authUser
})
//if presnt then set that response to user object
//pushed in the data layer   
}else {
      //user is logged out...
      dispatch({
  type:"SET_USER",
  user: null
})
    }
  })

  return () => {
    //any clean up operations go in here
unsubscribe();

  }
 
}, []);

console.log(user);









  //router is the parent we have to wrap all the childreen in it route
  //ruote is what to load on page url
  return (
    <Router>


 <div className="app">
    
     {/*react router to acces multpile pages in spacsingle page
     without reloading or refresging to other pages*/ }
    <Switch>
<Route path="/checkout">
   <Header />
<Checkout/>
</Route>

<Route path = "/login">
  <Login/>
</Route>

<Route path = "/">
  {/**nav header components */}
  <Header />
  <Home/>
  
   
</Route>

    </Switch>
    
    </div>
      
  </Router> 
  );

}

export default App;
