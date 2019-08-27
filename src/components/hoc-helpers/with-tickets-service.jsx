import React from 'react';
import { TicketsServiceConsumer } from '../tickets-service-context';

const withTicketsService = () => (Wrapped) => {

	return (props) => {
		return (
			<TicketsServiceConsumer>
				{
					(ticketsService) => {
						return (
							<Wrapped {...props} ticketsService={ticketsService} />
						)
					}
				}
			</TicketsServiceConsumer>
		);
	}
};

export default withTicketsService;