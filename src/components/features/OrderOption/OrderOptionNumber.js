import React from 'react';
import PropTypes from 'prop-types';
import styles from './OrderOption.scss';
import { formatPrice } from '../../../utils/formatPrice';

const OrderOptionNumber = ({limits, currentValue, setOptionValue,price}) => (
  <div className={styles.number}>
    <input className={styles.inputSmall}
      type='number'
      min={limits.min}
      max={limits.max}
      onChange={event => setOptionValue(event.currentTarget.value)}
      value={currentValue}
    >
      {formatPrice(price)}
    </input>
  </div>
);

OrderOptionNumber.propTypes = {
  limits: PropTypes.node,
  currentValue: PropTypes.node,
  setOptionValue: PropTypes.func,
  price: PropTypes.string,
};


export default OrderOptionNumber;