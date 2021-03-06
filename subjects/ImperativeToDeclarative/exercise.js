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

  componentDidMount () {
    if (this.props.isOpen) {
      this.openModal()
    } else {
      this.closeModal()
    }
  }

  componentDidUpdate () {
    if (this.props.isOpen) {
      this.openModal()
    } else {
      this.closeModal()
    }
  }

  openModal = () => {
    // console.log("t$$his is this.refs.modal", $(findDOMNode(this.refs.modal)))
    // console.log("this is this.refs.modal", this.refs.modal)
    $(this.refs.modal).modal('show')
  }

  closeModal = () => {
    $(this.refs.modal).modal('hide')
  }


  render() {
    return (
      <div className="modal fade" ref="modal">
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
    )
  }
}

class App extends React.Component {

  state = {
    isOpen: false
  }

  toggleModal = () => {
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
