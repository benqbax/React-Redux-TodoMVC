import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Header from '../components/Header'
import MainSection from '../components/MainSection'
import * as TodoActions from '../actions'

class App extends Component {
  render() {
    const { todos, actions} = this.props
    
    return (
      <div>
        <MainSection todos={todos} actions={actions} />
      </div>
    )
  }
}

App.PropTypes = {
  todos:PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
}

function mapStatetoProps(state){
  return {
    todos: state.todos
  }
}

function mapDispatchtoProps(dispatch){
  return{
    actions: bindActionCreators(TodoActions, dispatch)
  }
}

export default connect(
  mapStatetoProps,
  mapDispatchtoProps)(App)