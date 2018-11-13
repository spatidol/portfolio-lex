import React from 'react';
import './App.css';
import Header from './Header';
import Web from './Web';
import Graphic from './Graphic';
import About from './About';
import Home from './Home';
import Footer from './Footer';
import Hubble from './Hubble';
import Lyft from './Lyft';
import Ba from './Ba';
import {
  HashRouter as Router,
  Route,
  NavLink
} from 'react-router-dom';

class App extends React.Component {
  constructor(props) {
    super(props)
      this.state = {
        transform: '',
        untransform: false
    }
  }
  componentDidMount() {
    window.addEventListener('scroll', (e) => this.handleScroll(e));
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', (e) => this.handleScroll(e));
  }

  handleScroll(event) {
    // let scrollTop = event.srcElement.body.scrollTop,
    //     itemTranslate = Math.round(scrollTop/3 - 60);
    // console.log(scrollTop)

  }

  bounce() {
    this.setState({
      bounce: 'animated bounce'

    });
  }
  swing() {
    this.setState({
        swing: 'animated swing'

    });
  }
  tada() {
    this.setState({
        tada: 'animated tada'

    });
  }
  shake() {
    this.setState({
        shake: 'animated shake'

    });
  }
  removeBounce() {
    this.setState({
        bounce: '',
        swing: '',
        tada: '',
        shake: ''
    });
  }

  render() {
    return (
        <Router>
            <div id='overflow'>
              <div className="navigation">
                <NavLink exact to="/">ui/ux</NavLink>
                <NavLink to="/graphics">graphics</NavLink>
                <NavLink to="/refrigerator">refrigerator</NavLink>
                <NavLink to="/about">about</NavLink>
              </div>
              <Route exact path="/" component={Web}/>
              <Route path="/graphics" component={Graphic}/>
              <Route path="/refrigerator" component={Home}/>
              <Route path="/about" component={About}/>
              <Route exact path="/hubble" component={Hubble}/>
              <Route path="/Ba" component={Ba}/>
              <Route path="/Lyft" component={Lyft}/>
              <Footer />
            </div>
        </Router>
    )
  }
}

export default App;
