import React from 'react';
import styles from './DaysToSummer.scss';

class DaysToSummer extends React.Component {
  getCountdownDate() {

    const currentDate = new Date();
    // if summer start 21. June and end 22. september
    const summer = new Date(Date.UTC(currentDate.getUTCFullYear(), 5, 21));

    if (currentDate.getMonth() > 8 || (currentDate.getUTCMonth() === 8 && currentDate.getUTCDate() > 22)) {
      summer.setUTCFullYear(summer.getUTCFullYear() + 1);
    }

    const daysToSummer = Math.round((summer.getTime() - currentDate.getTime()) / (1000 * 60 * 60 * 24)); // 1000ms, 60s, 60min, 24hours

    // at 20. June
    if (daysToSummer === 1) {
      return 'only 1 day to summer!';
      // between 21. June and 22. September
    } else if (daysToSummer <= 0 && daysToSummer >= -93) {
      return 'summer time :-)';
    } else return daysToSummer + ' days to summer...';
  }

  render() {
    const countDownDate = this.getCountdownDate();
    return (
      <div className={styles.component}>
        <h3 className={styles.title}>{countDownDate}</h3>
      </div>
    );
  }
}

export default DaysToSummer;