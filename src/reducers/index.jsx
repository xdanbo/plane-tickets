const initialState = {
	tickets: [],
	isLoading: true,
	error: null,
	filterArr: [],
	rates: {},
	currency: 'RUB'
};

const reducer = (state = initialState, action) => {

	switch (action.type) {
		case 'FETCH_TICKETS_REQUEST':
			return {
				...state,
				tickets: [],
				isLoading: true,
				error: null
			};

		case 'FETCH_TICKETS_SUCCESS':
			return {
				...state,
				tickets: action.payload,
				isLoading: false,
				error: null
			};

		case 'FETCH_TICKETS_FAILURE':
			return {
				...state,
				tickets: [],
				isLoading: false,
				error: action.payload
			};

		case 'FETCH_RATES_REQUEST':
			return {
				...state,
				error: null,
				rates: []
			};

		case 'FETCH_RATES_SUCCESS':
			return {
				...state,
				error: null,
				rates: action.payload
			};

		case 'FETCH_RATES_FAILURE':
			return {
				...state,
				rates: [],
				error: action.payload
			};


		case 'FILTER_TICKETS_SUCCESS':
			return {
				...state,
				filterArr: action.payload
			};

		case 'CHANGE_CURRENCY_SUCCESS':
			return {
				...state,
				currency: action.payload
			};

		default:
			return state;
	}

};

export default reducer;