import Header from "../shared/components/Header";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="dashboard">
      <Header />
      <main className="main">{children}</main>
    </div>
  );
};

export default Layout;
