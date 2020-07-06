import React from 'react';

import './HeaderStyle.scss';

import CartDropdown from '../cart-dropdown/CartDropdown';

import {Link} from 'react-router-dom';

import {ReactComponent as Logo} from '../../assets/crown.svg';

import {auth} from '../../firebase/firebase.utils';

import {connect} from 'react-redux';

import CartIcon from '../cart-icon/CartIcon';

import {createStructuredSelector} from 'reselect';

import { selectCurrentUser} from '../../redux/user/user-selector';

import { selectCartHidden } from '../../redux/cart/cart-selector';

import { HeaderContainer, LogoContainer, OptionsContainer, OptionLink } from './Header.styled'; 

const Header = ({currentUser,hidden}) => (

    <HeaderContainer>

        <LogoContainer  to='/'>
            <Logo className='logo'/>
        </LogoContainer>

        <OptionsContainer>
            <OptionLink to='/shop'>
                SHOP
            </OptionLink>

            <Link to='contact'>
                CONTACT
            </Link>
            {
            currentUser? 
            <OptionLink as='div' onClick={()=> auth.signOut()}>
                    SIGN OUT
            </OptionLink>
                :
            <OptionLink  to='/signin'>
                    SIGN IN
            </OptionLink>
            }

            <CartIcon/>
            
        </OptionsContainer>
        {hidden? 
        null:
        <CartDropdown/>
        }

    </HeaderContainer>
)

const mapStateToProps = createStructuredSelector({
    currentUser : selectCurrentUser,
    hidden: selectCartHidden
});

export default connect(mapStateToProps)(Header);