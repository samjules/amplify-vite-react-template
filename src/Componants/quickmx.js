import React from 'react';
import styles from './Styles/quickmx.module.css';

	

const QuickMXItems = () => {
  	return (
    		<div className={styles.quickMxItems}>
      			<div className={styles.quickMxItemsChild} />
      			<b className={styles.quickMaintananceActions}>Quick Maintanance Actions</b>
      			<div className={styles.discrepancy}>
        				<div className={styles.addAircraftMx}>Add Discrepancy</div>
        				<img className={styles.addCircleIcon} alt="" src="public/img/add_circle.jpg" />
      			</div>
      			<div className={styles.discrepancy1}>
        				<div className={styles.addAircraftMx}>Search Parts</div>
        				<img className={styles.addCircleIcon} alt="" src="search.svg" />
      			</div>
      			<div className={styles.mxEntry}>
        				<div className={styles.addAircraftMx}>Add Aircraft MX Entry</div>
        				<img className={styles.addCircleIcon} alt="" src="public/img/add_circle.jpg" />
      			</div>
      			<div className={styles.discrepancy2}>
        				<div className={styles.addAircraftMx}>Open Aircraft Logbook</div>
        				<img className={styles.addCircleIcon} alt="" src="search.svg" />
      			</div>
    		</div>);
};


export default QuickMXItems;
