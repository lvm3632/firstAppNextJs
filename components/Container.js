import Head from "next/head";
import Navigation from "./navigation";

const Container = (props) => {
  return (
    <div>
      <Head>
        <title>Nextjs Project</title>
        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/bootswatch/4.4.1/flatly/bootstrap.min.css"
        />
      </Head>

      <Navigation />

      <div className="container p-4">
        <div>{props.children}</div>
      </div>
    </div>
  );
};

export default Container;
