////////////////////////////////////////////////////////////////////////////////
// Exercise:
//
// This Modal, even though its a React component, has an imperative API to
// open and close it. Can you convert it to a declarative API?
////////////////////////////////////////////////////////////////////////////////
import React, { PropTypes } from 'react'
import ReactDOM, { findDOMNode } from 'react-dom'
import $ from 'jquery'
import 'bootstrap-webpack'

class Modal extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node,
    isOpen: PropTypes.bool
  }

  render() {
    console.log("this is this.props.isOpen", this.props.isOpen)
    return (
      <div>
        {this.props.isOpen ? (
          <div className="modal fade">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h4 className="modal-title">{this.props.title}</h4>
                </div>
                <div className="modal-body">
                  {this.props.children}
                </div>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    )
  }
}

class App extends React.Component {
  state = {
    isOpen: false
  }

  toggleModal = () => {
    console.log("toggle modal running", this.state.isOpen)
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (
      <div className="container">
        <h1>Let’s make bootstrap modal declarative</h1>

        <button
          className="btn btn-primary"
          onClick={this.toggleModal}
        >open modal</button>

        <Modal
          isOpen={this.state.isOpen}
          ref="modal"
          title="Declarative is better"
        >
          <p>Calling methods on instances is a FLOW not a STOCK!</p>
          <p>It’s the dynamic process, not the static program in text space.</p>
          <p>You have to experience it over time, rather than in snapshots of state.</p>
          <button
            onClick={this.toggleModal}
            type="button"
            className="btn btn-default"
          >Close</button>
        </Modal>

      </div>
    )
  }
}

ReactDOM.render(<App/>, document.getElementById('app'))
