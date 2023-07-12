import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import styles from "./navbar.module.css";

const NavBar = ({ username }) => {
  const [showDropdown, setShowDropdown] = useState(false);

  const handleOnClick = () => setShowDropdown(!showDropdown);

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
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
            <button className={styles.usernameBtn} onClick={handleOnClick}>
              <p className={styles.username}>{username}</p>
              <Image
                alt="expand dropdown"
                height={24}
                src="/static/expand_more.svg"
                width={24}
              />
            </button>
            {showDropdown && (
              <div className={styles.navDropdown}>
                <div>
                  <Link className={styles.linkName} href="/login">
                    Sign Out
                  </Link>
                  <div className={styles.lineWrapper} />
                </div>
              </div>
            )}
          </div>
        </nav>
      </div>
    </div>
  );
};

export default NavBar;
