import React from 'react';
import styles from './OrderOption.scss';

const OrderOptionNumber = ({currentValue, setOptionValue, price, limits}) => (
  console.log('Price', price, limits),
  <div className={styles.number}>
    <input type="number" className={styles.inputSmall} value={currentValue} min={limits.min} max={limits.max} onChange={event => setOptionValue(event.currentTarget.value)} />
    {price}
  </div>
);

export default OrderOptionNumber;