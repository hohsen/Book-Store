import './vendor';
import './_zeroing.css';
import './index.css';

import { AppHeader } from './components';

function App() {
  return `
    <div>
      ${AppHeader({ title: 'BOOKSTORE' })};
    </div>
  `;
}
const root = document.getElementById('root');
root.innerHTML = App();
