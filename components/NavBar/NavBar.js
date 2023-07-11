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
          <li className={styles.navItem}>Home</li>
          <li className={styles.navItem2}>My List</li>
        </ul>
        <nav className={styles.navContainer}>
          <div>
            <button className={styles.usernameBtn}>
              <p className={styles.username}>{username}</p>
              {/* expand more icon here */}
            </button>
            <div className={styles.navDropdown}>
              <div>
                <a className={styles.linkName}>Sign Out</a>
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
