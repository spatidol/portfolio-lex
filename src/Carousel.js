import React  from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';



class HubbCarousel extends React.Component {
  resize() {
    if (window.matchMedia("(max-width : 768px)").matches) {
        this.setState({ centerM: false });
    } else {
        this.setState({ centerM: true });
    }
  }
  componentDidMount() {
    window.addEventListener('resize', this.resize)
  }
  componentWillUnmount() {
    window.removeEventListener('resize', this.resize)
  }
  constructor(props) {
    super(props)
    if (window.matchMedia("(max-width : 768px)").matches) {
        this.state = { centerM: false };
    } else {
        this.state = { centerM: true };
    }

    this.resize = this.resize.bind(this);
  }
  render() {
    return  (
        <Carousel className='hub-carousel' showThumbs={false} showStatus={false} emulateTouch={true} showArrows={false} centerMode={this.state.centerM} centerSlidePercentage={50} useKeyboardArrows={true}>
            <div>
                <img alt="hub-0" src="../img/mobile-mocks/hub-quiz-0.png" />
            </div>
            <div>
                <img alt="hub-1" src="../img/mobile-mocks/hub-quiz-1.png" />
            </div>
        </Carousel> 
    )}
}

class HubCarousel extends React.Component {
  resize() {
    if (window.matchMedia("(max-width : 768px)").matches) {
        this.setState({ centerM: false });
    } else {
        this.setState({ centerM: true });
    }
  }
  componentDidMount() {
    window.addEventListener('resize', this.resize)
  }
  componentWillUnmount() {
    window.removeEventListener('resize', this.resize)
  }
  constructor(props) {
    super(props)
    if (window.matchMedia("(max-width : 768px)").matches) {
        this.state = { centerM: false };
    } else {
        this.state = { centerM: true };
    }
    this.resize = this.resize.bind(this);
  }
  render() {
    return  (
        <Carousel showThumbs={false} showStatus={false} emulateTouch={true} showArrows={false} centerMode={this.state.centerM} centerSlidePercentage={50} useKeyboardArrows={true}>
            <div>
                <img src="../img/mobile-mocks/hub-0.png" />
            </div>
            <div>
                <img src="../img/mobile-mocks/hub-1.png" />
            </div>
            <div>
                <img src="../img/mobile-mocks/hub-2.png" />
            </div>
            <div>
                <img src="../img/mobile-mocks/hub-3.png" />
            </div>
            <div>
                <img src="../img/mobile-mocks/hub-4.png" />
            </div>
        </Carousel> 
    )}
}


class BaCarousel extends React.Component {
  resize() {
    if (window.matchMedia("(max-width : 768px)").matches) {
        this.setState({ centerM: false });
    } else {
        this.setState({ centerM: true });
    }
  }
  componentDidMount() {
    window.addEventListener('resize', this.resize)
  }
  componentWillUnmount() {
    window.removeEventListener('resize', this.resize)
  }
  constructor(props) {
    super(props)
    if (window.matchMedia("(max-width : 768px)").matches) {
        this.state = { centerM: false };
    } else {
        this.state = { centerM: true };
    }
    this.resize = this.resize.bind(this);
  }
  render() {
    return  (
        <Carousel showThumbs={false} showStatus={false} emulateTouch={true} showArrows={false} centerMode={this.state.centerM} centerSlidePercentage={50} useKeyboardArrows={true}>
            <div>
                <img src="../img/mobile-mocks/ba-1.png" />
            </div>
            <div>
                <img src="../img/mobile-mocks/ba-2.png" />
            </div>
            <div>
                <img src="../img/mobile-mocks/ba-3.png" />
            </div>
        </Carousel>
    )}
}

 
export { HubCarousel, HubbCarousel, BaCarousel };