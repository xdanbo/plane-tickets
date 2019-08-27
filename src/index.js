import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import App from './components/app';
import ErrorBoundry from './components/error-boundry';
import TicketsService from './services/tickets-service';
import ExchangeratesService from './services/exchange-service';
import { TicketsServiceProvider } from './components/tickets-service-context';
import { ExchangeratesServiceProvider } from './components/exchangerates-service-context';

import store from './store';

const ticketsService = new TicketsService();
const exchangeratesService = new ExchangeratesService();

ReactDOM.render(
	<Provider store={store}>
		<ErrorBoundry>
			<TicketsServiceProvider value={ticketsService}>
				<ExchangeratesServiceProvider value={exchangeratesService}>
					<App />
				</ExchangeratesServiceProvider>
			</TicketsServiceProvider>
		</ErrorBoundry>
	</Provider>,
	document.getElementById('root')
);