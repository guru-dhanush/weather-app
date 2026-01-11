import Layout from "@/app/Layout";
import { initLocation } from "@/shared/hooks/useCurrentLocation";
import { useEffect } from "react";
import WeatherPage from "@/pages/Weather";

const App = () => {
  useEffect(() => {
    initLocation();
  }, []);

  return (
    <Layout>
      <WeatherPage />
    </Layout>
  );
};

export default App;
