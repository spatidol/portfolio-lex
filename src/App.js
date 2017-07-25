import React from 'react';
import {render} from 'react-dom';
import './App.css';
import Header from './Header';
import Web from './Web';
import Graphic from './Graphic';
import About from './About';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'


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
            <div>
            <Header />
                <div className="rotators">
                    <Link to="/projects"><img src = {'/images/web-01.svg'} alt = 'tequila' style = {{}}
                        className = {`rotate one ${this.state.bounce}`}
                        onMouseEnter={this.bounce.bind(this)}
                        onMouseLeave={this.removeBounce.bind(this)}></img></Link>
                     <Link to="/graphics"><img src = {'/images/web-04.svg'} alt = 'backpack' style = {{}}
                        className = {`rotate two ${this.state.swing}`}
                        onMouseEnter={this.swing.bind(this)}
                        onMouseLeave={this.removeBounce.bind(this)}></img></Link>
                     <Link to="/about"><img src = {'/images/web-03.svg'} alt = 'avo' style = {{}}
                        className = {`rotate three ${this.state.tada}`}
                        onMouseEnter={this.tada.bind(this)}
                        onMouseLeave={this.removeBounce.bind(this)}></img></Link>
                    <img src = {'/images/web-02.svg'} alt = 'pizza' style = {{}}
                        className = {`rotate four ${this.state.shake}`}
                        onMouseEnter={this.shake.bind(this)}
                        onMouseLeave={this.removeBounce.bind(this)}></img>
                </div>
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
