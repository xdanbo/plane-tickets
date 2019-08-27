export default class ExchangeService {

	_apiBase = 'https://api.exchangeratesapi.io/latest';
	_baseCur = '?base=RUB';

	getResource = async (url) => {
		const response = await fetch(`${this._apiBase}${url}`);

		if (!response.ok) {
			throw new Error(`Could not fetch, received ${response.status}`);
		}

		return await response.json();
	}

	getExchangeRates = async () => {
		const res = await this.getResource(`${this._baseCur}`);
		return res;
	}

}