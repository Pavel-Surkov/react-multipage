import React from 'react';
import ReactDOM from 'react-dom';

import './helpers/events';
import Header from './components/Header';
import Footer from './components/Footer';
import { Home } from './pages/Home';

const PAGES = {
  Home,
};

const renderPageElement = (el) => {
  const Page = PAGES[el.id];

  if (!Page) {
    return;
  }

  const props = Object.assign({}, el.dataset);

  const App = () => (
    <div className="app-wrapper">
      <Header />
      <Page {...props} />
      <Footer />
    </div>
  );

  ReactDOM.render(<App {...props} />, el);
};

export default renderPageElement;
