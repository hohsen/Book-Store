import styles from './AppLayout.module.css';

export function AppLayout({ header }) {
  return `
    <div class=${styles.container}>
      <header class=${styles.header}>
        ${header}
      </header>
    </div>
  `;
}
