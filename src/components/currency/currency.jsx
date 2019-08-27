import React, { PureComponent, Fragment } from 'react';

import CurrencyChanger from './currency-changer';
import ExchangeService from '../../services/exchange-service';

import { withExchangeratesService } from '../hoc-helpers';
import { compose } from '../../utils';
import { connect } from 'react-redux';
import { fetchRates } from '../../actions';

import './currency.scss';


class Currency extends PureComponent {

	exchangeService = new ExchangeService();

	componentDidMount() {
		this.props.fetchRates();
	}

	render() {
		return (
			<Fragment>
				<div className="hline hl-size-1 hline-v1-mod">Валюта</div>
				<CurrencyChanger />
			</Fragment>
		)
	}
};

const mapDispatchToProps = (dispatch, { exchangeratesService }) => {
	return {
		fetchRates: fetchRates(exchangeratesService, dispatch)
	};
};

export default compose(
	withExchangeratesService(),
	connect(null, mapDispatchToProps)
)(Currency);