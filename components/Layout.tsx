import Link from 'next/link';
import styles from 'styles/Layout.module.css';

export default function Layout(props: any) {
  return (
    <div className={styles.Layout}>
      <div className={styles.head}>
        <h1>{props.title ?? 'One more exemple'}</h1>
        <Link href="/">Voltar</Link>
      </div>
      <div className={styles.body}>{props.children}</div>
    </div>
  );
}
