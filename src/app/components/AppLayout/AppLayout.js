import styles from './AppLayout.module.css';

export function AppLayout({ header, content, footer }) {
  return `
    <div class=${styles.container}>
      <header>
        ${header}
      </header>
      <main>
        ${content}
      </main>
      <footer>
        ${footer}
      </footer>
    </div>
  `;
}
