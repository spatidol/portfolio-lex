import React from 'react';
import Draggable from 'react-draggable';
import axios from 'axios';
import uuid from 'uuid/v4'

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
    .then(resp => {
      fetch('/magnets')
      .then(res => res.json())
      .then(magnets => this.setState({ magnets }));
    })
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

  onChange(e) {
    this.setState({
      value: e.target.value
    })
  }

  delete(id) {
    console.log("on delete", id)
    axios.post(`/magnets/delete?delete=${id}`)
    .then(resp => {
      console.log(resp)
    })
    .then(() => {
      fetch('/magnets')
      .then(res => res.json())
      .then(magnets => {
        console.log("heellooooo there", magnets)
        this.setState({ magnets })
      });
    })
    .catch(err => console.log(err))
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
          <Draggable key={uuid()} defaultPosition={{x: magnet.positionX, y: magnet.positionY}} {...dragHandlers} bounds='.home' onStop={this.grabPos.bind(this)}>
            <div className={magnet.class} id={Object.keys(magnet)[0]} style={{position: 'absolute'}}>{magnet[Object.keys(magnet)[0]]}
              <a className='close' onClick={() => this.delete(Object.keys(magnet)[0])}>x</a>
            </div>
          </Draggable>
        )}
        <form className='magnet-form' onSubmit={this.addMagnet.bind(this)}>
          <label>
            <input type="text" value={this.state.value} maxLength="14" onChange={this.onChange.bind(this)}/>
          </label>
          <input type="submit" value="add a magnet !" />
        </form>
      </div>
    );
  }
}

export default Home;
