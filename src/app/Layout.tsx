import Header from "@/shared/components/Header";
import styles from "./Layout.module.css";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={styles.dashboard}>
      <Header className={styles.header} />
      <main className={styles.main}>
        <div className={styles.container}>{children}</div>
      </main>
    </div>
  );
};

export default Layout;
