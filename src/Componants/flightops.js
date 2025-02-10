import React from 'react';
import styles from './Styles/flightops.module.css';


const FlightOperations = () => {
  	return (
		<div className={styles.flightOperations}>
<div className={styles.flightOperationsChild} />
<b className={styles.flightOperations1}>Flight Operations</b>
<div className={styles.flightTimeEntry}>
<div className={styles.addAircraftMx}>Add Aircraft Flight Time Entry</div>
<img className={styles.addCircleIcon} alt="" src="add_circle.svg" />
</div>
<div className={styles.flightTimeEntry1}>
<div className={styles.addAircraftMx}>Power Check</div>
<img className={styles.addCircleIcon} alt="" src="add_circle.svg" />
</div>
<div className={styles.flightTimeEntry2}>
<div className={styles.addAircraftMx}>Weight And Balance</div>
<img className={styles.addCircleIcon} alt="" src="add_circle.svg" />
</div>
<div className={styles.flightTimeEntry3}>
<div className={styles.addAircraftMx}>Flight Manifests</div>
<img className={styles.addCircleIcon} alt="" src="add_circle.svg" />
</div>
</div>);
};

export default FlightOperations;
