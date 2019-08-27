import React from 'react';

import TicketListItem from '../ticket-list-item';

import './ticket-list.scss';

const TicketList = ({ tickets }) => {
	const ticketList = tickets
		.sort((a, b) => a.price - b.price)
		.map(ticket => {
			return (
				<li
					className="ticket-l-item"
					key={ticket.departure_date + ticket.departure_time + ticket.carrier}
				>
					<TicketListItem ticket={ticket} />
				</li>
			)
		});

	return (
		<ul className="ticket-list">
			{ticketList}
		</ul>
	);
};

export default TicketList;