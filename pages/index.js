import Layout from "../components/Layout";
import axios from "axios";

import Prices from "../components/Prices";

const Index = (props) => (
  <Layout>
    <div>
      <h1>Getting familiar with next.js</h1>
      <p>Check current bitcoin rates</p>
      <Prices bpi={props.bpi} />
    </div>
  </Layout>
);

Index.getInitialProps = async function () {
  const res = await axios.get(
    "https://api.coindesk.com/v1/bpi/currentprice.json"
  );
  const data = await res.data;

  return {
    bpi: data,
  };
};

export default Index;
