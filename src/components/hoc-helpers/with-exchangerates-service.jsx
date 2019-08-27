import React from 'react';
import { ExchangeratesServiceConsumer } from '../exchangerates-service-context';

const withExchangeratesService = () => (Wrapped) => {

	return (props) => {
		return (
			<ExchangeratesServiceConsumer>
				{
					(exchangeratesService) => {
						return (
							<Wrapped {...props} exchangeratesService={exchangeratesService} />
						)
					}
				}
			</ExchangeratesServiceConsumer>
		);
	}
};

export default withExchangeratesService;