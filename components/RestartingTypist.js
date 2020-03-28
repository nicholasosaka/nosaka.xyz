import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Typist from 'react-typist';
import uuid from 'uuid'

export default class Typing extends Component {
  static propTypes = {
    words: PropTypes.array.isRequired
  }

  static defaultProps = {
    words: [
      'placeholder1',
      'placeholder2',
      'placeholder3'
    ]
  }

  render() {
    const { words } = this.props
    const n = words.map((word, i) => {
      return ([
        <span key={uuid()}>{word}.</span>,
        <Typist.Delay ms={300}></Typist.Delay>,
        <Typist.Backspace key={uuid()} count={word.length + 1} delay={1000} />
      ])
    })

    return [
      <Typist 
        key={uuid()} 
        onTypingDone={() => this.forceUpdate()}
      >
        {n}
      </Typist>
    ]
  }
}