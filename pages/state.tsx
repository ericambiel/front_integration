import Layout from '../components/Layout';
import { useState } from 'react';

export default () => {
  const [number, setNumber] = useState(0); // React Hook

  function increment() {
    setNumber(number + 1);
  }

  return (
    <Layout title="Component with State">
      <div>{number}</div>
      <button onClick={increment}>Increment</button>
    </Layout>
  );
};
