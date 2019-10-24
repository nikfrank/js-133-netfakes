import React from 'react';
import './App.css';

import Show from './Show';

import shows from './shows';

const App = ()=> (
  <div className="App">
    <Show {...shows[6]}/>
    strip of mini-cards (cardImage, title, link to page)
  </div>
);

export default App;
