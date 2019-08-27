import React from 'react';

import carrierLogo from '../../assets/i/turkish-airlines.png';
import Button from '../button';

import dateFormat from 'dateformat';
import CurrencyFormat from 'react-currency-format';
import { connect } from 'react-redux';

import './ticket-list-item.scss';

const TicketsListItem = ({ ticket, currency, rates }) => {

	const { origin, origin_name, destination, destination_name, departure_date, departure_time, arrival_date, arrival_time, stops, price } = ticket;

	let stopsCase;

	switch (stops) {
		case 0:
			stopsCase = 'пересадок';
			break;
		case 1:
			stopsCase = 'пересадка';
			break;
		case 2:
		case 3:
		case 4:
			stopsCase = 'пересадки';
			break;
		default:
			stopsCase = 'пересадок';
	}

	dateFormat.i18n = {
		dayNames: [
			'Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'
		],
		monthNames: [
			'янв', 'фев', 'мар', 'апр', 'мая', 'июн', 'июл', 'авг', 'сен', 'окт', 'ноя', 'дек'
		],
		timeNames: []
	};

	const fixDate = (date) => {
		const dateArray = date.split('.');

		return `${dateArray[1]}.${dateArray[0]}.${dateArray[2]}`
	}

	let priceNew = price;

	if (rates !== {}) {

		switch (currency) {
			case 'RUB':
				priceNew = price;
				break;
			case 'USD':
				priceNew = (price * rates.rates.USD).toFixed(2);
				break;
			case 'EUR':
				priceNew = (price * rates.rates.EUR).toFixed(2);
				break;
			default:
				priceNew = price;
		}
	}

	return (
		<div className="ticket-block content-block content-b-shadow-mod">
			<div className="ticket-b ticket-b-v2-mod">
				<div className="ticket-b-departure">
					<time className="ticket-time">{departure_time}</time>
					<div className="ticket-airport-city">{origin}, {origin_name}</div>
					<div className="ticket-date">{dateFormat(fixDate(departure_date), 'd mmm yy, ddd')}</div>
				</div>
				<div className="ticket-b-stops">{stops} {stopsCase}</div>
				<div className="ticket-b-arrival">
					<time className="ticket-time">{arrival_time}</time>
					<div className="ticket-airport-city">{destination_name}, {destination}</div>
					<div className="ticket-date">{dateFormat(fixDate(arrival_date), 'd mmm yy, ddd')}</div>
				</div>
			</div>
			<div className="ticket-b ticket-b-v1-mod">
				<div className="carrier-logo-w">
					<img src={carrierLogo} alt="turkish airlines" className="carrier-logo" />
				</div>
				<Button className="btn-buy orange-mod">
					Купить<br />за {currency === 'EUR' ? '€' : null}{currency === 'USD' ? '$' : null}<CurrencyFormat value={priceNew} thousandSeparator=" " displayType={'text'} />{currency === 'RUB' ? '₽' : null}
				</Button>
			</div>
		</div>
	);
};

const mapStateToProps = ({ currency, rates }) => {
	return { currency, rates }
};


export default connect(mapStateToProps)(TicketsListItem);