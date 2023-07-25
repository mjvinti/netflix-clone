import { useState } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

import { magic } from "@/lib/magicClient";

import styles from "@/styles/Login.module.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const { push } = useRouter();

  const handleOnChange = (e) => setEmail(e.target.value);

  const handleOnSubmit = async (e) => {
    e.preventDefault();

    if (email.length) {
      try {
        const didToken = await magic.auth.loginWithMagicLink({ email });
        if (didToken) {
          push("/");
        }
      } catch (err) {
        console.error("Something went wrong!", err);
      }
    }
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
              onChange={handleOnChange}
              placeholder="Email Address"
              type="email"
            />
            <button
              className={styles.loginBtn}
              disabled={!email.length}
              type="submit"
            >
              Sign In
            </button>
          </form>
        </div>
      </main>
    </div>
  );
};

export default Login;
