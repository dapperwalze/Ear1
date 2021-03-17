import React, { Component } from "react";
import "./App.css";
import AOS from "aos";
import "aos/dist/aos.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isMenuOpen: false,
    };
    this.toggleMobileMenu = this.toggleMobileMenu.bind(this);
  }

  toggleMobileMenu() {
    this.setState({
      isMenuOpen: !this.state.isMenuOpen,
    });
  }
  componentDidMount() {
    AOS.init();
  }
  render() {
    return (
      <div className="App">
        <div className="jumbotron-1">
          <header className="header">
            <a href="./">
              <div className="nav-logo">
                <img src="/images/ear1-logo.png" alt="ear1 logo"></img>
                <span className="nav-brand">ear1</span>
              </div>
            </a>
            <nav id="main-nav">
              <ul>
                <li>
                  <a href="./">Home</a>
                </li>
                <li>
                  <a href="/">For Fans</a>
                </li>
                <li>
                  <a href="/">For Influencers</a>
                </li>
                <li>
                  <a href="/">Features</a>
                </li>
                <li>
                  <a href="/">FAQ's</a>
                </li>
              </ul>
            </nav>
            <img
              id="menu-icon"
              src="/images/menu.svg"
              onClick={this.toggleMobileMenu}
              alt="menu"
            ></img>

            <div
              className="mobile-menu"
              style={{
                height: this.state.isMenuOpen ? "100vh" : "0vh",
              }}
            >
              <div className="inner-mobile-menu-container">
                <span onClick={this.toggleMobileMenu}>Close X</span>
                <a href="/">Home</a>
                <a href="/">For Fans</a>
                <a href="/">For Influencers</a>
                <a href="/">Features</a>
                <a href="/">FAQ's</a>
              </div>
            </div>
          </header>

          <main className="main-section">
            <div className="headline-container">
              <p className="headline">Build direct, meaningful connections.</p>
              <p className="tagline">
                Ear1 helps you connect directly with your favourite influencers
                for a small fee. What’s more? We assure you of getting a reply.
              </p>
              <div className="store-button-container">
                <a
                  href="/"
                  type="button"
                  className="top-store-buttons"
                  name="google playstore-button"
                >
                  <img
                    src="/images/playstore-button.png"
                    alt="google playstore button"
                  ></img>
                </a>
                <a
                  href="/"
                  type="button"
                  className="top-store-buttons"
                  name="appstore-button"
                >
                  <img
                    src="/images/appstore-button.png"
                    alt="appstore button"
                  ></img>
                </a>
              </div>
            </div>
          </main>
          <div className="phones-container">
            <img
              id="phone1"
              src="/images/phone1.png"
              alt="left rotated mobile device"
              data-aos="fade-down-left"
              data-aos-delay="150"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
              data-aos-once="false"
            ></img>
            <img
              id="phone2"
              src="/images/phone2.png"
              alt="right rotated mobile device"
              data-aos="fade-down-right"
              data-aos-delay="150"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
              data-aos-once="false"
            ></img>
            <img
              id="phone3"
              src="/images/phone3.png"
              alt="center positioned mobile device"
            ></img>
          </div>
        </div>

        <div className="jumbotron-2">
          <div className="text-box">
            <img src="/images/small-brand-logo.png" alt="ear1 logo"></img>
            <h3>What can Ear1 help you do?</h3>
            <p>
              Are you an individual looking to connect with an influencer
              without the hassle of waiting for the reply over a long time, or
              an influencer looking to filter your dm’s and connect with your
              audience, Ear1 has got you covered.
            </p>
          </div>
          <div className="image-box">
            <img src="/images/big-brand-logo.png" alt="ear1 logo"></img>
          </div>
        </div>
        <div className="jumbotron-3">
          <div
            className="left-box"
            data-aos="fade-right"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-once="false"
          >
            <img src="/images/fan-pill.png" alt="fan pill"></img>
            <h2>Connect with top influencers in your field</h2>
            <p>
              From Tech to music to business, Ear1 has a wide range of industry
              experts in diverse fields you have always wanted to connect with.
              Now is your best chance.
            </p>
          </div>
          <div
            className="right-box"
            data-aos="flip-right"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-once="false"
          >
            <img src="/images/group-collection.png" alt="fan pill"></img>
          </div>
        </div>
        <div className="jumbotron-4">
          <div className="left-box">
            <img
              className="pill"
              src="/images/fan-pill.png"
              alt="fan pill"
            ></img>
            <img
              id="left-box-chat-icon"
              src="/images/chat-Icon.png"
              alt="chat icon"
            ></img>
            <h2>Be assured of replies</h2>
            <p>
              With ear1, we assure you of getting a response to your messages.
              Don’t be part of the noise in the dms. Get ahead of the game by
              paying a small fee.
            </p>
          </div>
          <div className="right-box">
            <img src="/images/conversation.png" alt="conversation"></img>
          </div>
        </div>
        <div className="jumbotron-5">
          <div className="left-box">
            <img
              src="/images/mobile-phone.png"
              alt="mobile phone"
              data-aos="zoom-in"
              data-aos-delay="100"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
              data-aos-once="false"
            ></img>
          </div>
          <div
            className="right-box"
            data-aos="zoom-in"
            data-aos-delay="100"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-once="false"
          >
            <img src="/images/influencer-pill.png" alt="influencer pill"></img>
            <h2>Earn money while you chat</h2>
            <p>
              As an influencer, you get paid by your audience to connect with
              them. That way to maximize time while earning.
            </p>
          </div>
        </div>
        <div className="jumbotron-6">
          <div className="left-box">
            <img
              src="/images/frame-42.png"
              alt="connect to an influencer"
              data-aos="zoom-in"
              data-aos-delay="100"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
              data-aos-once="false"
            ></img>
          </div>
          <div className="right-box">
            <img
              className="pill"
              src="/images/influencer-pill.png"
              alt="influencer pill"
            ></img>
            <img
              id="filter-icon"
              src="/images/filter-icon.png"
              alt="filter icon"
            ></img>
            <h2>Filter the noise in the dm’s</h2>
            <p>
              Ear1 helps you get rid of all the noise in your dm’s across other
              social media apps. This way, you are sure to connect with serious
              people and make genuine business and personal connections.
            </p>
          </div>
        </div>

        <div className="jumbotron-7">
          <h2
            data-aos="fade-right"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-once="false"
          >
            The ear1 assurance
          </h2>
          <div className="feature-box">
            <div
              className="inner-feature-boxes left-inner-feature-box"
              data-aos="fade-right"
              data-aos-delay="100"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
              data-aos-once="false"
            >
              <img
                className="chain-link"
                src="/images/chain-link.png"
                alt="List of features"
              ></img>
              <div className="features-text-content">
                <h4>Ease of Use</h4>
                <p>
                  With as simple of 3 steps, you can get started using ear1.
                </p>
                <h4>Multi currency support</h4>
                <p>Ear1 allows you to pay with a wide range of currencies.</p>

                <h4>Secure communication</h4>
                <p>
                  State of the art end to end encryption of messages. No weird
                  sort of tracking. Your privacy is our concern.
                </p>
              </div>
            </div>

            <div className="inner-feature-boxes right-inner-feature-box ">
              <img
                src="/images/black-matte-4-1.png"
                alt="Mobile device showing app's Features"
              ></img>
            </div>
            <div
              className="big-green-box"
              data-aos="fade-up"
              data-aos-delay="50"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
              data-aos-once="false"
            >
              <div className="left-container">
                <img
                  src="/images/greenbox-image.png"
                  alt=""
                  data-aos="fade-up"
                  data-aos-delay="50"
                  data-aos-duration="1000"
                  data-aos-easing="ease-in-out"
                  data-aos-once="false"
                ></img>
              </div>
              <div className="right-container">
                <div>
                  <h2>Get ahead of your game</h2>
                  <p>Save time and effort. Ear1 is your best choice.</p>
                  <a
                    href="/"
                    type="button"
                    className="bottom-store-buttons"
                    name="google playstore-button"
                  >
                    <img
                      src="/images/playstore-button.png"
                      alt="google playstore button"
                    ></img>
                  </a>
                  <a
                    href="/"
                    type="button"
                    className="bottom-store-buttons"
                    name="appstore-button"
                  >
                    <img
                      src="/images/appstore-button.png"
                      alt="appstore button"
                    ></img>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <footer
          className="footer-container"
          data-aos="fade-up"
          data-aos-delay="200"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          data-aos-once="false"
        >
          <div id="email-container">
            <h3 id="email-subscription-headline">
              <span>Be in the know.</span> Get access to amazing offers and
              discounts
            </h3>
            <form
              name="email-subscription"
              action="#"
              method="post"
              target="_self"
            >
              <label htmlFor="email-field"></label>
              <input
                type="email"
                id="email-field"
                placeholder="Enter your email address"
                autoComplete="on"
              ></input>
              <button id="subscribe-button" type="submit">
                Submit
              </button>
            </form>
          </div>
          <div className="footer-logo-container">
            <div className=" footer-logo">
              <img src="/images/ear1-logo-2.png" alt="ear1 logo"></img>
              <span className="nav-brand footer-brand">ear1</span>
              <div className="social-media-handles">
                <a href="/">
                  <img
                    src="/images/facebook-icon.png"
                    alt="facebook logo"
                  ></img>
                </a>
                <a href="/">
                  <img src="/images/twitter-icon.png" alt="twitter logo"></img>
                </a>
                <a href="/">
                  <img
                    src="/images/instagram-icon.png"
                    alt="instagram logo"
                  ></img>
                </a>
              </div>
            </div>
          </div>
          <div>
            <h5>as</h5>
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/">For Fans</a>
              </li>
              <li>
                <a href="/">For Influencers</a>
              </li>
              <li>
                <a href="/">FAQ's</a>
              </li>
            </ul>
          </div>
          <div>
            <h5>Get help</h5>
            <ul>
              <li>
                <a href="/">Support</a>
              </li>
              <li>
                <a href="/">FAQ's</a>
              </li>
              <li>
                <a href="/">Partnership</a>
              </li>
            </ul>
          </div>
          <div>
            <h5>Download</h5>
            <ul>
              <li>
                <a href="/">Android</a>
              </li>
              <li>
                <a href="/">IOS</a>
              </li>
            </ul>
          </div>
          <div>
            <h5>Resources</h5>
            <ul>
              <li>
                <a href="/">Terms of service</a>
              </li>
              <li>
                <a href="/">Privacy policy</a>
              </li>
            </ul>
          </div>
        </footer>
      </div>
    );
  }
}

export default App;
