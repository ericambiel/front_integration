import type { NextPage } from 'next';
import Nav from '../components/Nav';

const Index: NextPage = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexWrap: 'wrap',
        height: '100vh',
      }}
    >
      <Nav linkDescription="Home Page" destination="/home" color="crimson" />
      <Nav
        linkDescription="Home Page 2"
        destination="/home2"
        color="9400D3FF"
      />
      <Nav linkDescription="Navigation #01" destination="/navigation" />
      <Nav
        linkDescription="Navigation #02"
        destination="/dynamic-navigation/sp-01/client150"
        color="#FF00AB"
      />
      <Nav linkDescription="Increment" destination="/state" color="red" />
      <Nav
        linkDescription="Increment"
        destination="/get-from-api"
        color="pink"
      />
    </div>
  );
};

export default Index;
