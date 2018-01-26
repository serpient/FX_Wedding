import * as React from 'react';
import './styles/App.css';

class LandingPage extends React.Component {
  render() {
    return (
      <div className="main-body-text">
        <div className="landing-text">CELEBRATE WITH US</div>
        <div className="landing-subtext">in BALI, JUNE 20th 2019</div>
      </div>
    )
  }
}

class SchedulePage extends React.Component {
  render() {
    return (
      <div>THURSDAY, JUNE 2019</div>
    )
  }
}

class BaliPage extends React.Component {
  render() {
    return (
      <span>
        <div>STAY</div>
        <div>EAT</div>
        <div>DO</div>
        <div>SHOP</div>
      </span>
    )
  }
}

class FAQSPage extends React.Component {
  render() {
    return (
      <div>FAQS</div>
    )
  }
}

class RSVPPage extends React.Component {
  render() {
    return (
      <div>RSVP</div>
    )
  }
}
class App extends React.Component {
  /* tslint:disable */
  constructor(props: object) {
    super(props);
    this.state = {
      currentPage: <LandingPage />
    }
  }
  /* tslint:enable */
  goToLanding = () => {
    this.setState({ currentPage: <LandingPage /> })
  }

  goToSchedule = () => {
    this.setState({ currentPage: <SchedulePage /> })
  }

  goToBali = () => {
    this.setState({ currentPage: <BaliPage /> })
  }

  goToFAQS = () => {
    this.setState({ currentPage: <FAQSPage /> })
  }

  goToRSVP = () => {
    this.setState({ currentPage: <RSVPPage /> })
  }

  render() {
    return (
      <div className="App">
        <span className="header">
          <div className="header-logo" onClick={this.goToLanding}>FRANCESCA & XIN</div>
          <div className="header-text">RSVP</div>
          <div className="header-text">FAQS</div>
          <div className="header-text">BALI</div>
          <div className="header-text">SCHEDULE</div>
        </span>
        {this.state.currentPage}
      </div>
    );
  }
}

export default App;
