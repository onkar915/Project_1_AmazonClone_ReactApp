import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { useStateValue } from './StateProvider';
import { auth } from './firebase';

function Header() {
  //[state, dispatch]
  //const [{basket}] = useStateValue();
  const [{ basket, user }] = useStateValue();

  //console.log(basket);

  const login = () => {
    if (user) {
      auth.signOut();
    }
  };

  return (
    <nav className='header'>
      {/**logo left img*/}
      {/**for ligin page to go to home page  use link
       * it will go to home page
       */}

      <Link to='/'>
        <img className='header__logo ' src='' alt='logo' />
      </Link>

      {/**search box
       * npm install @material-ui/icons
       * npm install @material-ui/core
       * css is of BEM type*/}
      <div className='header__search'>
        <input type='text' className='header__searchInput' />
        <SearchIcon className='header__searchIcon' />
      </div>

      {/**3 links href= cuases a refresh
       * spa transitaion
       * link will not refresh the page
       */}

      <div className='header__Nav'>
        {/**1st link */}
        <Link to={!user && '/login'} className='header__link'>
          <div onClick={login} className='header__option'>
            <span className='header__optionLineOne'>Hello {user?.email}</span>
            <span className='header__optionLineTwo'>
              {user ? 'Sign out' : 'Sign In '}
            </span>
          </div>
        </Link>

        {/**2 link */}

        <Link to='/' className='header__link'>
          <div className='header__option'>
            <span className='header__optionLineOne'>Returns</span>
            <span className='header__optionLineTwo'>& Orders</span>
          </div>
        </Link>

        {/**3 link */}

        <Link to='/' className='header__link'>
          <div className='header__option'>
            <span className='header__optionLineOne'>Your</span>
            <span className='header__optionLineTwo'>Prime</span>
          </div>
        </Link>

        {/**4 link always wrap child in parent contianer so you can aplpy style rules*/}

        <Link to='/checkout' className='header__link'>
          <div className='header__optionBasket'>
            {/**shopping basket icons*/}
            <ShoppingBasketIcon />
            {/**number of items in the basket*/}
            <span className='header__optionLineTwo header__basketCount'>
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>

      {/**basket with number */}
    </nav>
  );
}

export default Header;
