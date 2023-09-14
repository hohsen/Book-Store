import styles from './AppFooter.module.css';

export function AppFooter() {
  return `
    <div class=${styles.footer}>
      <div class=${styles.container}>
        <div class=${styles.copyright}>
          <span>©2022 Bookstore</span>
          <span>All rights reserved</span>
        </div>
      </div>
    </div>
  `;
}
