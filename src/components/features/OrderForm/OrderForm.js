import React from 'react';
import {Col, Row, Grid}  from 'react-flexbox-grid';
import PageTitle from '../../common/PageTitle/PageTitle';
import PropTypes from 'prop-types';

import OrderSummary from '../OrderSummary/OrderSummary';


const OrderForm = ({tripCost, options}) => (
    <Grid>
    <Row>
      <Col xs={12}>
        <PageTitle text='Trip options' />
        <OrderSummary tripCost={tripCost} options={options} />
      </Col>
    </Row>
  </Grid>
);

export default OrderForm;