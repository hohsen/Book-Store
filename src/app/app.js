import './vendor';
import './_zeroing.css';
import './index.css';

import { CartPage } from './pages/cart';
import { FavotirePage } from './pages/favorite';
import { HomePage } from './pages/home';
import { ProfilePage } from './pages/profile';
import { ROUTES } from './routes';
import { RouteService } from './services/router';

const root = document.getElementById('root');

RouteService.init()
  .on({
    route: ROUTES.HOME.path,
    run: () => {
      root.innerHTML = HomePage();
    },
  })
  .on({
    route: ROUTES.CART.path,
    run: () => {
      root.innerHTML = CartPage();
    },
  })
  .on({
    route: ROUTES.FAVORITES.path,
    run: () => {
      root.innerHTML = FavotirePage();
    },
  })
  .on({
    route: ROUTES.PROFILE.path,
    run: () => {
      root.innerHTML = ProfilePage();
    },
  })
  .start();
