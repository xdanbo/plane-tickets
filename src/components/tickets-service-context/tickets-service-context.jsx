import React from 'react';

const {
	Provider: TicketsServiceProvider,
	Consumer: TicketsServiceConsumer
} = React.createContext();

export {
	TicketsServiceProvider,
	TicketsServiceConsumer
}