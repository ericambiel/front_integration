import Layout from '../components/Layout';
import style from '../styles/Home.module.css';

export default () => {
  const title = <h1>JSX is a Main concept</h1>;
  const subTitle = () => <h2>{'All in upper case!'.toUpperCase()}</h2>;
  return (
    <Layout title="Understanding JSX">
      <div className={style.roxo}>
        {title}
        {subTitle()}
        <p>{JSON.stringify({ name: 'Eric', age: 18 })}</p>
      </div>
    </Layout>
  );
};
