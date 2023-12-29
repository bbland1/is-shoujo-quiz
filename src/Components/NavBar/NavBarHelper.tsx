import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./navbar.module.css";

export default function createNavLink(path: string, label: string, testid: string) {
  return (
    <NavLink to={path} data-testid={testid} className={({isActive}) => isActive ? styles.activeNav : undefined}>
      {label}
    </NavLink>
  );
}