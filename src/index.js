import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './components/header';
import reportWebVitals from './reportWebVitals';
import LocalStore from './components/locatStores';
import Footer from './components/Footer'
import DazedDeals from './components/DazedDeals'
import FeaturedFlower from './components/FeaturedFlower'
import Welcome from './components/Welcome'
import MediaInsight from './components/MediaInsight'

ReactDOM.render(
  <React.StrictMode>
    {/* this is where all the components will be imported and rendered in */}
    <Header />
    <LocalStore/>
    <DazedDeals/>
    <FeaturedFlower/>
    <Welcome/>
    <MediaInsight/>
    <Footer/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
