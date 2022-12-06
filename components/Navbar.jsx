import React from "react";
import { useState } from "react";
import styles from "../styles/components/Navbar.module.scss";
import Image from "next/image";
import logo from "../images/logo primary.svg";
import Link from "next/link";

const Navbar = () => {
  const [burger, setBurger] = useState(false);

  const handleNav = () => {
    setBurger(!burger);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.nav_wrapper}>
        <Link href="/">
          <div className={styles.logo_con}>
            <div className={styles.logo}>
              <Image src={logo} width="16" height="16" alt="logo" />
              <h1 className={styles.author}>Mehedi</h1>
            </div>
          </div>
        </Link>
        <div className={styles.nav_menu}>
          <ul className={styles.nav_items}>
            <Link href="/">
              <li className={styles.nav_item}>
                <span>#</span>home
              </li>
            </Link>
            <Link href="/about">
              <li className={styles.nav_item}>
                <span>#</span>about
              </li>
            </Link>
            <Link href="./projects">
              <li className={styles.nav_item}>
                <span>#</span>projects
              </li>
            </Link>
            <Link href="/contacts">
              <li className={styles.nav_item}>
                <span>#</span>contacts
              </li>
            </Link>
          </ul>

          {burger && (
            <ul className={styles.burger_items}>
              <Link href="/">
                <li className={styles.nav_item}>
                  <span>#</span>home
                </li>
              </Link>
              <Link href="/about">
                <li className={styles.nav_item}>
                  <span>#</span>about
                </li>
              </Link>
              <Link href="./projects">
                <li className={styles.nav_item}>
                  <span>#</span>projects
                </li>
              </Link>
              <Link href="/contacts">
                <li className={styles.nav_item}>
                  <span>#</span>contacts
                </li>
              </Link>
            </ul>
          )}
          <div className={styles.humBurger} onClick={handleNav}>
            <div className={styles.item}></div>
            <div className={styles.item}></div>
            <div className={styles.item}></div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
