import { useRouter } from 'next/router';
import Layout from '../../../components/Layout';

export default () => {
  const router = useRouter();

  /*query names is the same from the file and folder name*/
  return (
    <Layout title="Navigation dynamically">
      <div>Subsidiary: {router.query.subsidiary}</div>
      <div>Client: {router.query.client}</div>
    </Layout>
  );
};
