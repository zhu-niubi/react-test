import Head from "next/head";
import styles from "./layout.module.css";

type LayoutProps = {
  children: React.ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Head>
        <title>布局案例</title>
      </Head>
      <main className={styles.main}>{children}</main>
    </>
  );
}
