export default class TicketsService {

	_urlBase = 'http://localhost:3001/tickets';

	getTickets = async () => {
		const response = await fetch(`${this._urlBase}`);

		if (!response.ok) {
			throw new Error(`Could not fetch, received ${response.status}`);
		}

		return await response.json();
	}

}