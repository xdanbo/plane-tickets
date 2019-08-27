import React from 'react';

import TicketList from '../ticket-list';
import Filter from '../filter';
import CurrencyChanger from '../currency';
import Logo from '../logo';

import '../../scss/main.scss';
import './app.scss';

const App = () => {

  return (
    <div className="wrapper">
      <div className="container">
        <Logo />
        <div className="columns">
          <div className="column">
            <div className="content-block content-b-v1-mod filters-mod">
              <CurrencyChanger />
              <Filter />
            </div>
          </div>
          <div className="column col-v2-mod">
            <TicketList />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;