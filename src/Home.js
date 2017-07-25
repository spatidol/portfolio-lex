import React from 'react';
import Draggable from 'react-draggable';

class Home extends React.Component {

  eventLogger = (e: MouseEvent, data: Object) => {
    console.log('Event: ', e);
    console.log('Data: ', data);
  };

  render() {
    return (
      <div className='home'>
      <Draggable
        defaultPosition={{x: 50, y: 0}}
        position={null}
        onStart={this.handleStart}
        onDrag={this.handleDrag}
        onStop={this.handleStop}>
        <div>
          <div className="handle">hello</div>
        </div>
      </Draggable>
        <Draggable
        defaultPosition={{x: 100, y: 200}}
        position={null}
        onStart={this.handleStart}
        onDrag={this.handleDrag}
        onStop={this.handleStop}>
        <div>
          <div className="handle">there</div>
        </div>
      </Draggable>
        <Draggable
        defaultPosition={{x: 1100, y: 80}}
        position={null}
        onStart={this.handleStart}
        onDrag={this.handleDrag}
        onStop={this.handleStop}>
        <div>
          <div className="handle large">avocaduh ! </div>
        </div>
      </Draggable>
        <Draggable
        defaultPosition={{x: 570, y: -10}}
        position={null}
        onStart={this.handleStart}
        onDrag={this.handleDrag}
        onStop={this.handleStop}>
        <div>
          <div className="handle">pizza</div>
        </div>
      </Draggable>
        <Draggable
        defaultPosition={{x: 400, y: -40}}
        position={null}
        onStart={this.handleStart}
        onDrag={this.handleDrag}
        onStop={this.handleStop}>
        <div>
          <div className="handle">take</div>
        </div>
      </Draggable>
      <Draggable
        defaultPosition={{x: 510, y: -60}}
        position={null}
        onStart={this.handleStart}
        onDrag={this.handleDrag}
        onStop={this.handleStop}>
        <div>
          <div className="handle small"> a</div>
        </div>
      </Draggable>
         <Draggable
        defaultPosition={{x: 670, y: -100}}
        position={null}
        onStart={this.handleStart}
        onDrag={this.handleDrag}
        onStop={this.handleStop}>
        <div>
          <div className="handle small">my</div>
        </div>
      </Draggable>
      <Draggable
        defaultPosition={{x: 740, y: -135}}
        position={null}
        onStart={this.handleStart}
        onDrag={this.handleDrag}
        onStop={this.handleStop}>
        <div>
          <div className="handle small">&lt;3</div>
        </div>
      </Draggable>
      <Draggable
        defaultPosition={{x: 900, y: -300}}
        position={null}
        onStart={this.handleStart}
        onDrag={this.handleDrag}
        onStop={this.handleStop}>
        <div>
          <img src='/images/web-06.svg' className="pic"></img>
        </div>
      </Draggable>
      <Draggable
        defaultPosition={{x: 200, y: -400}}
        position={null}
        onStart={this.handleStart}
        onDrag={this.handleDrag}
        onStop={this.handleStop}>
        <div>
          <img src='/images/web-07.svg' className="pic"></img>
        </div>
      </Draggable>
      <Draggable
        defaultPosition={{x: 740, y: -400}}
        position={null}
        onStart={this.handleStart}
        onDrag={this.handleDrag}
        onStop={this.handleStop}>
        <div>
         <img src='/images/web-08.svg' className="pic pic-large"></img>
        </div>
      </Draggable>
      <Draggable
        defaultPosition={{x: 1115, y: -700}}
        position={null}
        onStart={this.handleStart}
        onDrag={this.handleDrag}
        onStop={this.handleStop}>
        <div>
          <div className="handle"> drag</div>
        </div>
      </Draggable>
      <Draggable
        defaultPosition={{x: 1110, y: -690}}
        position={null}
        onStart={this.handleStart}
        onDrag={this.handleDrag}
        onStop={this.handleStop}>
        <div>
          <div className="handle small"> us</div>
        </div>
      </Draggable>
      </div>
    );
  }
}

export default Home;
