import React from 'react';
import {Col, Row} from 'react-flexbox-grid';
import PropTypes from 'prop-types';

import OrderSummary from '../OrderSummary/OrderSummary';


const OrderForm = ({tripCost, options}) => (
    <Grid>
    <Row>
      <Col xs={12}>
        <PageTitle text='Trip options' />
        <OrderForm tripCost={cost} />
      </Col>
    </Row>
  </Grid>
);

export default OrderForm;