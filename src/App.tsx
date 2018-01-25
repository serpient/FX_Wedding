import * as React from 'react';
import './styles/App.css';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="header">
          <div className="logo">FRANCESCA & XIN</div>
          <div>SCHEDULE</div>
          <div>BALI</div>
          <div>FAQS</div>
          <div>RSVP</div>
        </header>
        <div className="main-body-text">
          <div className="landing-text">CELEBRATE WITH US</div>
          <div className="landing-box">
            <div className="landing-subtext">in BALI, JUNE 20th 2019</div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
