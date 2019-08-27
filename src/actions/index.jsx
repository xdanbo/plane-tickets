const ticketsRequested = () => {
	return {
		type: 'FETCH_TICKETS_REQUEST'
	};
};

const ticketsLoaded = (newTickets) => {
	return {
		type: 'FETCH_TICKETS_SUCCESS',
		payload: newTickets
	};
};

const ticketsError = (error) => {
	return {
		type: 'FETCH_TICKETS_FAILURE',
		payload: error
	};
};

const fetchTickets = (ticketsService, dispatch) => () => {
	dispatch(ticketsRequested());
	ticketsService.getTickets()
		.then(data => dispatch(ticketsLoaded(data)))
		.catch(err => dispatch(ticketsError(err)));
};

const ticketsFiltered = (arr) => {
	return {
		type: 'FILTER_TICKETS_SUCCESS',
		payload: arr
	}
}

const currencyChanged = (currency) => {
	return {
		type: 'CHANGE_CURRENCY_SUCCESS',
		payload: currency
	}
}

const ratesRequested = () => {
	return {
		type: 'FETCH_RATES_REQUEST'
	};
};

const ratesLoaded = (newTickets) => {
	return {
		type: 'FETCH_RATES_SUCCESS',
		payload: newTickets
	};
};

const ratesError = (error) => {
	return {
		type: 'FETCH_RATES_FAILURE',
		payload: error
	};
};

const fetchRates = (exchangeratesService, dispatch) => () => {
	dispatch(ratesRequested());
	exchangeratesService.getExchangeRates()
		.then(data => dispatch(ratesLoaded(data)))
		.catch(err => dispatch(ratesError(err)));
};

export {
	fetchTickets,
	ticketsFiltered,
	currencyChanged,
	fetchRates
};