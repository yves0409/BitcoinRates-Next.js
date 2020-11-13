import Navbar from "./Navbar";
import Head from "next/head";

//Layout component allows us to wrap the pages in the Layout component (see index,about) , there the navbar is seen

const Layout = (props) => {
  return (
    <div>
      {/* Importing head for next/js where you can add style cdn , title etc... */}
      <Head>
        <title>My Next app</title>
        <link
          rel="stylesheet"
          href="https://bootswatch.com/4/cerulean/bootstrap.min.css"
        />
      </Head>
      <Navbar />
      <div className="container">{props.children}</div>
    </div>
  );
};

export default Layout;
