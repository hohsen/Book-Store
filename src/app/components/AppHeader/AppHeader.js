import bookstore from '../../../assets/images/bookstore.svg';
import heart from '../../../assets/images/heart-black.svg';
import search from '../../../assets/images/search.svg';
import shoppingBag from '../../../assets/images/shopping-bag.svg';
import user from '../../../assets/images/user.svg';
import styles from './AppHeader.module.css';

export function AppHeader() {
  return `
    <header class=${styles.header}>
      <div class=${styles.container}>
          <a class=${styles.header__logo} href="#"><img src=${bookstore} alt="BOOKSTORE"></a>
          <form class=${styles.header__search}>
              <input type="text" id="search-input" name="" placeholder="Search">
              <button><img src=${search} alt="search"></button>
          </form>
          <div class=${styles.header__actions}>
              <a href="#" class=${styles.icon}>
                  <img src=${heart} alt="favorite">
              </a>
              <a href="#" class=${styles.icon}>
                  <img src=${shoppingBag} alt="cart">
              </a>
              <a href="#" class=${styles.icon}>
                  <img src=${user} alt="user">
              </a>
          </div>
      </div>
    </header>
  `;
}
