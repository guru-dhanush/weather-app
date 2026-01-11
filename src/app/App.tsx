import Dashboard from "@/pages/dashboard";
import Layout from "@/shared/components/Layout";
import { initLocation } from "@/shared/hooks/useCurrentLocation";
import { useEffect } from "react";

const App = () => {
  useEffect(() => {
    initLocation();
  }, []);

  return (
    <Layout>
      <Dashboard />
    </Layout>
  );
};

export default App;
