import React from 'react';
import Draggable from 'react-draggable';
import axios from 'axios';

class Home extends React.Component {
  constructor(props) {
    super(props)
      this.state = {
        magnets: [],
        value: ''
    }
  }
  componentDidMount() {
    fetch('/magnets')
      .then(res => res.json())
      .then(magnets => this.setState({ magnets }));
  }

  eventLogger = (e: MouseEvent, data: Object) => {
    console.log('Event: ', e);
    console.log('Data: ', data);
  };

  grabPos(e, position) {
    console.log("HEREEE?", position)
    axios.post(`/magnets?x=${position.x}&y=${position.y}&key=${e.target.id}`)
    .then(resp => console.log(resp))
    // .then(() => this.handleStop())
  }

  addMagnet(e) {
    e.preventDefault();
    console.log(this.state.value)
    axios.post(`/magnets/add?text=${this.state.value}`)
    .then(resp => {this.setState({value: ''})})
    .then(resp => {
      fetch('/magnets')
      .then(res => res.json())
      .then(magnets => this.setState({ magnets }));
    })
  }

  onChange(e){
    this.setState({
      value: e.target.value
    })
  }

  render() {
    const dragHandlers = {
      position: null,
      onStart: this.handleStart,
      onDrag: this.handleDrag,
      onStop: this.handleStop
    };
    return (
      <div className='home'>
        {this.state.magnets.map((magnet, idx) =>
          <Draggable defaultPosition={{x: magnet.positionX, y: magnet.positionY}} {...dragHandlers} onStop={this.grabPos}>

          <div className={magnet.class} id={Object.keys(magnet)[0]} style={{position: 'absolute'}}>{magnet[idx.toString()]}</div></Draggable>
        )}
        <form className='magnet-form' onSubmit={this.addMagnet.bind(this)}>
          <label>
            add a magnet!
            <input type="text" value={this.state.value} onChange={this.onChange.bind(this)}/>
          </label>
          <input type="submit" value="add" />
        </form>
      </div>
    );
  }
}

export default Home;
