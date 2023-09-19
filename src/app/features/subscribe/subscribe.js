import '../../index.css';

import styles from './subscribe.module.css';

export function Subscribe(){
  return `
    <div class=${styles.subscribe}>
      <div class=${styles.container}>
        <h2>Subscribe to Newsletter</h2>
        <p>Be the first to know about new IT books, upcoming releases, exclusive offers and more.</p>
        <form class=${styles.subscribe__form}>
          <input class=${styles.form_input} placeholder="Your email"></input>
          <button class=${styles.form_btn}>Subscribe</button>
        </form>
      </div>
    </div>
  `;
}
