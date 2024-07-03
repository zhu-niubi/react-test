import type { NextPageWithLayout } from "./_app";
import Layout from "../components/layout";
import Sidebar from "../components/sidebar";

const Index: NextPageWithLayout = () => {
  return (
    <section>
      <h2>(Index)</h2>
      <p>
        This example adds a property <code>getLayout</code> to your page,
        allowing you to return a React component for the layout. This allows you
        to define the layout on a per-page basis. Since we're returning a
        function, we can have complex nested layouts if desired.
      </p>
    </section>
  );
};

export default Index;

Index.getLayout = function getLayout(page: React.ReactElement) {
  return (
    <Layout>
      <Sidebar />
      {page}
    </Layout>
  );
};
