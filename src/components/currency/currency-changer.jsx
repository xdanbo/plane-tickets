import React from 'react';

import Button from '../button';
import { currencyChanged } from '../../actions';
import { connect } from 'react-redux';

const currencyButtons = [
	{ name: 'rub' },
	{ name: 'usd' },
	{ name: 'eur' }
]


const CurrencyChanger = (props) => {

	const onCurrencyChange = (name) => {
		props.currencyChanged(name.toUpperCase());
	}

	const buttons = currencyButtons.map(({ name }) => {
		const isActive = name === props.currency.toLowerCase();
		const classNames = 'btn-currency ' + (isActive ? 'active-mod' : '');

		return (
			<Button
				key={name}
				className={classNames}
				onClick={() => onCurrencyChange(name)}
			>{name.toUpperCase()}
			</Button>
		)

	});

	return (
		<div className="btn-currency-wrapper">
			{buttons}
		</div>
	);
};

const mapStateToProps = ({ currency, rates }) => {
	return { currency, rates }
};

const mapDispatchToProps = {
	currencyChanged
};

export default connect(mapStateToProps, mapDispatchToProps)(CurrencyChanger);