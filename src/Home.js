import React from 'react';
import Draggable from 'react-draggable';
import uuid from 'uuid/v4';
import firebase from './firebase';
import api from './api';

const db = firebase.database();
const magnets = db.ref('/magnets');

class Home extends React.Component {
  constructor(props) {
    super(props)
      this.state = {
        magnets: [],
        value: ''
    }
  }
  componentDidMount() {
    this.setupFirebaseListeners();
  }

  setupFirebaseListeners(){
    const self = this;
    magnets.on('value', snap => {
      let magnets = [];
      snap.forEach(childSnap => {
        const magnet = childSnap.val()
        magnets.push({
          title: magnet.title,
          positionX: magnet.positionX,
          positionY: magnet.positionY,
          class: magnet.class,
          key: childSnap.key
        })
      })
      self.setState({magnets});
    })
  }

  eventLogger = (e: MouseEvent, data: Object) => {
    console.log('Event: ', e);
    console.log('Data: ', data);
  };

  moveMagnet(e, position) {
    api.moveMagnet(e.target.id, position.x, position.y);
  }

  addMagnet(e) {
    e.preventDefault();
    const magnetName = this.state.value;
    this.setState({value: ''});
    api.addMagnet(magnetName);
  }

  onChange(e) {
    this.setState({
      value: e.target.value
    })
  }

  delete(magnetKey) {
    api.deleteMagnet(magnetKey);
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
          <Draggable key={uuid()} defaultPosition={{x: magnet.positionX, y: magnet.positionY}} {...dragHandlers} bounds='.home' onStop={(id, position)=>{this.moveMagnet(id, position)}}>
            <div className={magnet.class} id={magnet.key} style={{position: 'absolute'}}>{magnet.title}
              <a className='close' onClick={() => this.delete(magnet.key)}>x</a>
            </div>
          </Draggable>
        )}
        <form className='magnet-form' onSubmit={this.addMagnet.bind(this)}>
          <label>
            <input type="text" placeholder='create your own..' value={this.state.value} maxLength="14" onChange={this.onChange.bind(this)} />
          </label>
          <input type="submit" value="ADD MAGNET!" />
        </form>
      </div>
    );
  }
}

export default Home;
