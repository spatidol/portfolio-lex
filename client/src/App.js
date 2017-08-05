import React from 'react';
import './App.css';
import Header from './Header';
import Web from './Web';
import Graphic from './Graphic';
import About from './About';
import Home from './Home';
import {
  HashRouter as Router,
  Route,
  Link
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
    console.log("bounce")
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
    console.log("unbounced")
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
            <Header />
                <div className="rotators">
                    <Link to="/"><img src = {'http://res.cloudinary.com/dmwi5lxjc/image/upload/v1501777324/web-01_b4ni5g.svg'} alt = 'tequila' style = {{}}
                        className = {`rotate one ${this.state.bounce}`}
                        onMouseEnter={this.bounce.bind(this)}
                        onMouseLeave={this.removeBounce.bind(this)}></img></Link>
                     <Link to="/projects"><img src = {'http://res.cloudinary.com/dmwi5lxjc/image/upload/v1501777325/web-04_smfzk3.svg'} alt = 'backpack' style = {{}}
                        className = {`rotate two ${this.state.swing}`}
                        onMouseEnter={this.swing.bind(this)}
                        onMouseLeave={this.removeBounce.bind(this)}></img></Link>
                     <Link to="/graphics"><img src = {'http://res.cloudinary.com/dmwi5lxjc/image/upload/v1501777325/web-03_sktvws.svg'} alt = 'avo' style = {{}}
                        className = {`rotate three ${this.state.tada}`}
                        onMouseEnter={this.tada.bind(this)}
                        onMouseLeave={this.removeBounce.bind(this)}></img></Link>
                    <Link to="/about"><img src = {'http://res.cloudinary.com/dmwi5lxjc/image/upload/v1501777324/web-02_yzgqqe.svg'} alt = 'pizza' style = {{}}
                        className = {`rotate four ${this.state.shake}`}
                        onMouseEnter={this.shake.bind(this)}
                        onMouseLeave={this.removeBounce.bind(this)}></img></Link>
                </div>
            <Route exact path="/" component={Home}/>
            <Route path="/projects" component={Web}/>
            <Route path="/graphics" component={Graphic}/>
            <Route path="/about" component={About}/>

            </div>

        </Router>
    )
  }
}

// -ms-transform: rotate(10deg); /* IE 9 */
//     -webkit-transform: rotate(10deg); /* Chrome, Safari, Opera */
//     transform: rotate(10deg);





export default App;
