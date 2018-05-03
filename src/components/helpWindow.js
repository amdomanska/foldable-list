import React from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import ReactModal from 'react-modal';
import styles from './helpWindow.css';

class HelpWindow extends React.Component {
  constructor () {
    super();
    this.state = {
      showModal: false
    };
  }

  handleOpenModal = () => {
    this.setState({ showModal: true });
  }

  handleCloseModal = () => {
    this.setState({ showModal: false });
  }

  helpText = () => {
    return 'Clean Code \n' +
    '  There Will Be Code \n' +
    '  Bad Code \n' +
    '  The Total Cost of Owning a Mess \n' +
    '    The Grand Redesign in the Sky \n' +
    '    Attitude \n' +
    '    The Primal Conundrum \n' +
    '    The Art of Clean Code? \n' +
    '  What Is Clean Code? \n' +
    '  Schools of Thought \n' +
    'Meaningful Names \n' +
    '  Introduction \n' +
    '  Avoid Encodings \n' +
    '  Hungarian Notion \n' +
    '  Member Prefixes \n' +
    '  Avoid Mental Mapping \n' +
    'Functions ';
  }

  checkExample = () => {
    let textarea = document.getElementById('textarea');
    textarea.value = this.helpText();
    this.setState({ showModal: false });
  }

  render () {
    return (
      <div>
        <button className='helpButton'
                onClick={this.handleOpenModal}>
          <i className='fa fa-question'/>
        </button>
        <ReactModal
          className='Modal'
          overlayClassName='Overlay'
          isOpen={this.state.showModal}
          contentLabel='Minimal Modal Example'
          onClick={this.handleCloseModal}
          shouldReturnFocusAfterClose={true}
          shouldFocusAfterRender={true}
          contentLabel='Example Modal'
          onRequestClose={this.handleCloseModal}
          shouldCloseOnOverlayClick={true}
          shouldCloseOnEsc={true} >
            <div>
              <div className='well'>
                <p className='helpHeader'> INPUT EXAMPLE </p>
                <ul className='helpContentRules'>
                  <li> next section: new line </li>
                  <li> nextSubsection: indentation = 2 spaces </li>
                  <li> sections are enumerated automatically </li>
                </ul>
                <p className='helpContent'>
                <pre>
                  {this.helpText().replace(/ /g, '\u00a0').replace(/(?:\r\n|\r|\n)/g, '\u000a')}
                </pre>
                </p><br />
                <button className='modalButton'
                        onClick={this.checkExample}>COPY THIS EXAMPLE AS AN INPUT</button>
                <button className='modalButton'
                        onClick={this.handleCloseModal}>CLOSE</button>
                <p className='helpFooter'> or press ESC to close </p>
              </div>
            </div>
        </ReactModal>
      </div>
    );
  }
}

const props = {};

ReactDOM.render(<HelpWindow {...props} />, document.getElementById('content'));

export default HelpWindow;
