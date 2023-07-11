import Link from "next/link";

import styles from "./navbar.module.css";

const NavBar = ({ username }) => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <Link className={styles.logoLink} href="/">
          <div className={styles.logoWrapper}>Netflix</div>
        </Link>
        <ul className={styles.navItems}>
          <Link className={styles.navItem} href="/">
            Home
          </Link>
          <Link className={styles.navItem2} href="/browse/my-list">
            My List
          </Link>
        </ul>
        <nav className={styles.navContainer}>
          <div>
            <button className={styles.usernameBtn}>
              <p className={styles.username}>{username}</p>
              {/* expand more icon here */}
            </button>
            <div className={styles.navDropdown}>
              <div>
                <Link className={styles.linkName} href="/login">
                  Sign Out
                </Link>
                <div className={styles.lineWrapper} />
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default NavBar;
