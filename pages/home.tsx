import Layout from '../components/Layout';
import style from '../styles/Home.module.css';

export default () => {
  return (
    <Layout title="Modularized CSS example">
      <div className={style.roxo}>
        <h1>Style using modularized CSS</h1>
      </div>
    </Layout>
  );
};
