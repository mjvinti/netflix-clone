import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

import styles from "@/styles/Login.module.css";

const Login = () => {
  const handleOnClick = (e) => {
    e.preventDefault();
    console.log("onClick");
  };

  return (
    <div>
      <Head>
        <title>Netflix SignIn</title>
      </Head>
      <header>
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
        <main className={styles.main}>
          <div className={styles.mainWrapper}>
            <h1 className={styles.signinHeader}>Sign In</h1>
            <input
              className={styles.emailInput}
              placeholder="Email Address"
              type="email"
            />
            <p className={styles.userMsg}></p>
            <button className={styles.loginBtn} onClick={handleOnClick}>
              Sign In
            </button>
          </div>
        </main>
      </header>
    </div>
  );
};

export default Login;
