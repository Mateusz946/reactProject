import React from 'react';
import {NavLink, Link} from 'react-router-dom';
import styles from './Header.scss';
import Container from '../Container/Container';
import Icon from '../Icon/Icon';
import {settings, info, faq} from '../../data/dataStore';

class Header extends React.Component {
  render(){
    return (
      <header className={styles.component}>
        <Container>
          <div className={styles.wrapper}>
            <Link className={styles.logo} to='/'>
              <Icon name={settings.nameIcon} />
            </Link>
            <nav>
              <NavLink exact to='/' activeClassName='active'>
                {settings.homePage}
              </NavLink>
              <NavLink exact to='/info' activeClassName='active'>
                {info.subtitle}
              </NavLink>
              <NavLink exact to='/FAQ' activeClassName='active'>
                {faq.subtitle}
              </NavLink>
            </nav>
          </div>
        </Container>
      </header>
    );
  }
}

export default Header;