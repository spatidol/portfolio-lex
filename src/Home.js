import React from 'react';
import Draggable from 'react-draggable';

class Home extends React.Component {

  eventLogger = (e: MouseEvent, data: Object) => {
    console.log('Event: ', e);
    console.log('Data: ', data);
  };

  render() {
    const dragHandlers = {
      position: null,
      onStart: this.handleStart,
      onDrag: this.handleDrag,
      onStop: this.handleStop
    };
    return (
      <div className='home'>
      <Draggable
        defaultPosition={{x: 50, y: 0}}
        {...dragHandlers}>
        <div>
          <div className="handle">hello</div>
        </div>
      </Draggable>
        <Draggable
        defaultPosition={{x: 100, y: 200}}
        {...dragHandlers}>
        <div>
          <div className="handle">there</div>
        </div>
      </Draggable>
        <Draggable
        defaultPosition={{x: 1200, y: 80}}
        {...dragHandlers}>
        <div>
          <div className="handle large">avocaduh ! </div>
        </div>
      </Draggable>
        <Draggable
        defaultPosition={{x: 570, y: -10}}
        {...dragHandlers}>
        <div>
          <div className="handle">pizza</div>
        </div>
      </Draggable>
        <Draggable
        defaultPosition={{x: 400, y: -40}}
        {...dragHandlers}>
        <div>
          <div className="handle">take</div>
        </div>
      </Draggable>
      <Draggable
        defaultPosition={{x: 510, y: -60}}
        {...dragHandlers}>
        <div>
          <div className="handle small"> a</div>
        </div>
      </Draggable>
         <Draggable
        defaultPosition={{x: 670, y: -100}}
        {...dragHandlers}>
        <div>
          <div className="handle small">my</div>
        </div>
      </Draggable>
      <Draggable
        defaultPosition={{x: 740, y: -135}}
        {...dragHandlers}>
        <div>
          <div className="handle small">&lt;3</div>
        </div>
      </Draggable>
      <Draggable
        defaultPosition={{x: 900, y: -300}}
        {...dragHandlers}>
        <div className="pic-ice">
        </div>
      </Draggable>
      <Draggable
        defaultPosition={{x: 200, y: -400}}
        {...dragHandlers}>
        <div className="pic-cactus">
        </div>
      </Draggable>
      <Draggable
        defaultPosition={{x: 740, y: -350}}
        {...dragHandlers}>
        <div className="pic-sun pic-large">
        </div>
      </Draggable>
      <Draggable
        defaultPosition={{x: 1115, y: -700}}
        {...dragHandlers}>
        <div>
          <div className="handle"> drag</div>
        </div>
      </Draggable>
      <Draggable
        defaultPosition={{x: 1110, y: -690}}
        {...dragHandlers}>
        <div>
          <div className="handle small"> us</div>
        </div>
      </Draggable>
      <Draggable
        defaultPosition={{x: 310, y: -490}}
        {...dragHandlers}>
        <div>
          <div className="handle small"> :-)</div>
        </div>
      </Draggable>
      <Draggable
        defaultPosition={{x: 470, y: -470}}
        {...dragHandlers}>
        <div className="pic-taco">
        </div>
      </Draggable>
      <Draggable
        defaultPosition={{x: 140, y: -600}}
        {...dragHandlers}>
        <div className="pic-taco2">
        </div>
      </Draggable>
      </div>
    );
  }
}

export default Home;
