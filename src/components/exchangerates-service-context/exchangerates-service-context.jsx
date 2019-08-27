import React from 'react';

const {
	Provider: ExchangeratesServiceProvider,
	Consumer: ExchangeratesServiceConsumer
} = React.createContext();

export {
	ExchangeratesServiceProvider,
	ExchangeratesServiceConsumer
}