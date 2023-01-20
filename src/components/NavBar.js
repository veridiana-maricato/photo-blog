import styles from "./NavBar.module.css"

import { NavLink } from "react-router-dom";


const NavBar = () => {
    return (
        <nav className={styles.navbar}>
            <NavLink to='/' className={styles.brand}>
                Photo <span>Blog</span>
            </NavLink>
            <ul className={styles.links_list}>
                <li>
                    <NavLink to='/' className={({ isActive }) => (isActive ? styles.active : "")}>Home</NavLink>
                </li>
                <li>
                    <NavLink to='/about' className={({ isActive }) => (isActive ? styles.active : "")}>About</NavLink>
                </li>
                <li>
                    <NavLink to='/login' className={({ isActive }) => (isActive ? styles.active : "")}>Login</NavLink>
                </li>
                <li>
                    <NavLink to='/register' className={({ isActive }) => (isActive ? styles.active : "")}>Register</NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar



