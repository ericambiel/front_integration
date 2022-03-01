import Layout from '../components/Layout';
import { useState } from 'react';
import { Client } from './api/clients/[id]';

export default () => {
  const [cod, setCod] = useState(1);
  const [client, setClient] = useState<Client>({ email: '', id: 0, nome: '' }); // React Hook

  function getClient() {
    fetch(`http://localhost:3000/api/clients/${cod}`)
      .then((res) => res.json())
      .then((data) => setClient(data));
  }

  return (
    <Layout title="Integration with API">
      <div>
        <input
          type="number"
          value={cod}
          onChange={(event) => setCod(+event.target.value)}
        />
        <button onClick={getClient}>Get User</button>
      </div>
      <ul>
        <li>Cod: {client.id}</li>
        <li>Cod: {client.nome}</li>
        <li>Cod: {client.email}</li>
      </ul>
    </Layout>
  );
};
