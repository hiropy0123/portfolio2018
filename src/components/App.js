import React, { Component } from 'react'
import { SectionsContainer, Section, Header } from 'react-fullpage'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      current: 0,
    }
  }
  render(){
    const options = {
      sectionClassName: 'section',
      anchors: ['intro', 'about', 'works'],
      scrollBar: false,
      navigation: true,
      verticalAlign: false,
      sectionPaddingTop: '50px',
      sectionPaddingBottom: '50px',
      arrowNavigation: true,
      scrollCallback: (states) => this.setState({current: states.activeSection})
    }

    const { current } = this.state

    return (
      <div id="app">
        <Header>
          <a href="#intro" className="opa">Top</a>
          <a href="#about">About me</a>
          <a href="#works">Works</a>
        </Header>
        <SectionsContainer className="container" {...options} activeSection={current}>
          <Section className="custom-section" verticalAlign="true" color="#69D2E7">Page 1</Section>
          <Section color="#A7DBD8">Page 2</Section>
          <Section color="#E0E4CC">Page 3</Section>
        </SectionsContainer>

        <div className="btnGroup">
          <button onClick={() => this.setState({current: current - 1})} disabled={current === 0}>prev</button>
          <button onClick={() => this.setState({current: current + 1})} disabled={current === 2}>next</button>
        </div>
      </div>
    )
  }
}

export default App