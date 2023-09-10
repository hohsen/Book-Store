import './vendor';
import './_zeroing.css';
import './index.css';

import { AppHeader, AppLayout } from './components';

function App() {
  return AppLayout({
    header: AppHeader({ title: 'BOOKSTORE' }),
  });
}
const root = document.getElementById('root');
root.innerHTML = App();
