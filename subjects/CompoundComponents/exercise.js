////////////////////////////////////////////////////////////////////////////////
// Exercise:
//
// Implement a radio group form control with the API found in <App>.
//
// - Clicking a <RadioOption> should update the value of <RadioGroup>
// - The selected <RadioOption> should pass the correct value to its <RadioIcon>
// - The `defaultValue` should be set on first render
//
// Hints to get started:
//
// - <RadioGroup> will need some state
// - It then needs to pass that state to the <RadioOption>s so they know
//   whether or not they are active
//
// Got extra time?
//
// Implement a `value` prop and allow this to work like a "controlled input"
// (https://facebook.github.io/react/docs/forms.html#controlled-components)
//
// - Add a button to <App> that sets `this.state.radioValue` to a pre-determined
//   value, like "tape"
// - Make the <RadioGroup> update accordingly
//
// Implement keyboard controls on the <RadioGroup> (you'll need tabIndex="0" on
// the <RadioOption>s so the keyboard will work)
//
// - Enter and space bar should select the option
// - Arrow right, arrow down should select the next option
// - Arrow left, arrow up should select the previous option
////////////////////////////////////////////////////////////////////////////////
import React, { PropTypes } from 'react'
import { render } from 'react-dom'


//const TabList = React.createClass({
//  render() {
//    const children = React.Children.map(this.props.children, (child, index) => {
//      return React.cloneElement(child, {
//        isActive: index === this.props.activeIndex,
//        onClick: () => this.props.onActivate(index)
//      })
//    })
//
//    return <div style={styles.tabs}>{children}</div>
//  }
//})
//

class RadioGroup extends React.Component {
  state = {
    selectedRadioIndex: null
  }

  static propTypes = {
    defaultValue: PropTypes.string
  }

  render() {
    const children = React.Children.map(this.props.children, (child) => {
      return React.cloneElement(child, {
        isSelected: this.state.currentValue === child.props.value,
        onRadioButtonClick: () => {
          this.setState({ currentValue: child.props.value })
        }
      })
    })
    return <div>{children}</div>
  }
}

class RadioOption extends React.Component {
  static propTypes = {
    value: PropTypes.string,
    isSelected: PropTypes.bool,
    onRadioButtonClick: React.PropTypes.func
  }

  render() {
    return (
      <div onClick={this.props.onRadioButtonClick}>
        <RadioIcon
          isSelected={this.props.isSelected}
        />
        {this.props.children}
      </div>
    )
  }
}

class RadioIcon extends React.Component {
  static propTypes = {
    isSelected: PropTypes.bool.isRequired
  }

  render() {
    return (
      <div
        style={{
          borderColor: '#ccc',
          borderSize: '3px',
          borderStyle: this.props.isSelected ? 'inset' : 'outset',
          height: 16,
          width: 16,
          display: 'inline-block',
          cursor: 'pointer',
          background: this.props.isSelected ? 'rgba(0, 0, 0, 0.05)' : ''
        }}
      />
    )
  }
}

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>♬ Its about time that we all turned off the radio ♫</h1>

        <RadioGroup defaultValue="fm">
          <RadioOption value="am">AM</RadioOption>
          <RadioOption value="fm">FM</RadioOption>
          <RadioOption value="tape">Tape</RadioOption>
          <RadioOption value="aux">Aux</RadioOption>
        </RadioGroup>
      </div>
    )
  }
}

render(<App/>, document.getElementById('app'))
