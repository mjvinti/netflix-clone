import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

import styles from "@/styles/Login.module.css";

const Login = () => {
  const handleOnSubmit = (e) => {
    e.preventDefault();
    console.log("onSubmit");
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Netflix SignIn</title>
      </Head>
      <header className={styles.header}>
        <div className={styles.headerWrapper}>
          <Link className={styles.logoLink} href="/">
            <div className={styles.logoWrapper}>
              <Image
                alt="netflix logo"
                height={34}
                src="/static/netflix.svg"
                width={128}
              />
            </div>
          </Link>
        </div>
      </header>
      <main className={styles.main}>
        <div className={styles.mainWrapper}>
          <h1 className={styles.signinHeader}>Sign In</h1>
          <form onSubmit={handleOnSubmit}>
            <input
              className={styles.emailInput}
              placeholder="Email Address"
              type="email"
            />
            <p className={styles.userMsg}></p>
            <button className={styles.loginBtn} type="submit">
              Sign In
            </button>
          </form>
        </div>
      </main>
    </div>
  );
};

export default Login;
