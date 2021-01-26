import React from 'react';
import { Col, Row, Grid } from 'react-flexbox-grid';
import PropTypes from 'prop-types';
import pricing from '../../../data/pricing.json';
import PageTitle from '../../common/PageTitle/PageTitle';
import OrderSummary from '../OrderSummary/OrderSummary';
import OrderOption from '../OrderOption/OrderOption';
import Button from '../../common/Button/Button';
import { formatPrice } from '../../../utils/formatPrice';
import { calculateTotal } from '../../../utils/calculateTotal';
import settings from '../../../data/settings';

const sendOrder = (options, tripCost, id, countryCode) => {
  const totalCost = formatPrice(calculateTotal(tripCost, options));

  const payload = {
    ...options,
    totalCost,
    tripId: id,
    countryCode,
  };

  const url = settings.db.url + '/' + settings.db.endpoint.orders;

  const fetchOptions = {
    cache: 'no-cache',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  };

  fetch(url, fetchOptions)
    .then(function (response) {
      return response.json();
    }).then(function (parsedResponse) {
      console.log('parsedResponse', parsedResponse);
    });
};

const OrderForm = ({ tripCost, options, setOrderOption, tripId, tripCountryCode }) => (
  <Grid>
    <Row>
      {pricing.map(option => (
        <Col md={4} key={option.id}>
          <OrderOption {...option} currentValue={options[option.id]} setOrderOption={setOrderOption} />
        </Col>
      ))}
      <Col xs={12}>
        <PageTitle text='Trip options' />
        <OrderSummary tripCost={tripCost} options={options} />
      </Col>
    </Row>
    <Button onClick={() => sendOrder(options, tripCost, tripId, tripCountryCode)}>Order now!</Button>
  </Grid>

);

OrderForm.propTypes = {
  tripCost: PropTypes.string,
  options: PropTypes.any,
  setOrderOption: PropTypes.func,
  tripId: PropTypes.string,
  tripCountryCode: PropTypes.string,
};

export default OrderForm;