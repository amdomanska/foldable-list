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

    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }

  handleOpenModal () {
    this.setState({ showModal: true });
  }

  handleCloseModal () {
    this.setState({ showModal: false });
  }

  render () {
    return (
      <span className='input-group-addon'
            onClick={this.handleOpenModal}>
        <i className='fa fa-question'/>
        <ReactModal
          className='Modal'
          overlayClassName='Overlay'
          isOpen={this.state.showModal}
          contentLabel='Minimal Modal Example'
          onClick={this.hadnleCloseModal}
          shouldReturnFocusAfterClose={true}
          shouldFocusAfterRender={true}
          contentLabel='Example Modal'
          onRequestClose={this.handleCloseModal}
          shouldCloseOnOverlayClick={true}
          shouldCloseOnEsc={true} >
            <div>
              <div className='well'>
                <p className='helpHeader'> INPUT EXAMPLE </p>
                <p className='helpContentRules'>
                  next section: new line <br />
                  nextSubchapter: indentation = 2 spaces
                </p>
                <p className='helpContent'>
                page 1 <br />
                &nbsp;&nbsp;page 1.1 <br />
                &nbsp;&nbsp;page 1.2 <br />
                &nbsp;&nbsp;&nbsp;&nbsp;page 1.2.1 <br />
                page 2 <br />
                page 3 <br />
                &nbsp;&nbsp;page 3.1 <br />
                &nbsp;&nbsp;page 3.2 <br />
                page 4 <br />
                &nbsp;&nbsp;page 4.1 <br />
                &nbsp;&nbsp;&nbsp;&nbsp;page 4.1.1 <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;page 4.1.1.1 <br />
                &nbsp;&nbsp;&nbsp;&nbsp;page 4.2 <br />
                page 5
                </p><br />
                <button className='button'
                        onClick={this.handleCloseModal}>CLOSE</button>
                <p className='helpFooter'> or press ESC to close </p>
              </div>
            </div>
        </ReactModal>
      </span>
    );
  }
}

const props = {};

ReactDOM.render(<HelpWindow {...props} />, document.getElementById('content'));

export default HelpWindow;
