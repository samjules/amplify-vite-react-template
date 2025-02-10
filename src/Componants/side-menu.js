
import React from "react";
import styles from './Styles/side-menu.module.css';

const SideMenu = () => {
    return (

        <div className={styles.sideMenu}>
        <div className={styles.sideMenuChild} />
        <div className={styles.sideMenu1}>
        <div className={styles.aircraft}>Aircraft</div>
        <div className={styles.dispatch}>Dispatch</div>
        <div className={styles.maintanance}>Maintanance</div>
        <div className={styles.parts}>Parts</div>
        <div className={styles.records}>Records</div>
        <div className={styles.staff}>Staff</div>
        <div className={styles.logsAndEntries}>Logs and Entries</div>
        <div className={styles.settings}>Settings</div>
        </div>
        <div className={styles.userWelcome}>
        <img className={styles.userWelcomeChild} alt="" src="public/img/heli.jpg" />
        <div className={styles.welcomeSam}>{`Welcome, Sam `}</div>
        </div>
        </div>);

    };
    export default SideMenu;