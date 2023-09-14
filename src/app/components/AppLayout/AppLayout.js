import styles from './AppLayout.module.css';

export function AppLayout({ header, content, footer }) {
  return `
    <div class=${styles.container}>
      <header class=${styles.header}>
        ${header}
      </header>
      <main class=${styles}>
        ${content}
      </main>
      <footer class=${styles}>
        ${footer}
      </footer>
    </div>
  `;
}
