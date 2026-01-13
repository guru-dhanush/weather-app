import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "@/app/Layout";
import WeatherPage from "@/pages/Weather";
import { ErrorBoundary } from "@/shared/components/ErrorBoundary/ErrorBoundary";

const App = () => {
  return (
    <ErrorBoundary>
      <Layout>
        <Routes>
          <Route path="/" element={<Navigate to="/dashboard" replace />} />
          <Route path="/dashboard" element={<WeatherPage />} />
          <Route path="*" element={<Navigate to="/dashboard" replace />} />
        </Routes>
      </Layout>
    </ErrorBoundary>
  );
};

export default App;
