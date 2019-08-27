import React, { PureComponent } from 'react';

import TicketList from './ticket-list';
import { connect } from 'react-redux';
import { withTicketsService } from '../hoc-helpers';

import { compose } from '../../utils';
import { fetchTickets } from '../../actions';
import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator';

class TicketListContainer extends PureComponent {

	componentDidMount() {
		this.props.fetchTickets();
	}

	render() {
		const { tickets, isLoading, error, filterArr } = this.props;

		if (isLoading) {
			return <Spinner />
		}

		if (error) {
			return <ErrorIndicator />
		}

		const visibleTickets =
			tickets.filter(ticket =>
				filterArr.every(stop =>
					ticket.stops !== stop
				)
			);

		return <TicketList tickets={visibleTickets} />
	}
};

const mapStateToProps = ({ tickets, isLoading, error, filterArr }) => {
	return { tickets, isLoading, error, filterArr }
};

const mapDispatchToProps = (dispatch, { ticketsService }) => {
	return {
		fetchTickets: fetchTickets(ticketsService, dispatch)
	};
};

export default compose(
	withTicketsService(),
	connect(mapStateToProps, mapDispatchToProps)
)(TicketListContainer);