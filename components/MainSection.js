import React, { Component, PropTypes} from 'react'
import TodoItem from './TodoItem'
import Footer from './Footer'
import { SHOW_ALL, SHOW_COMPLETED, SHOW_ACTIVE } from '../constants/TodoFilters'

//returns a filter function

const TODO_FILTERS = {
	[SHOW_ALL]: () => true,
	[SHOW_ACTIVE]: (todo) => !todo.completed,
	[SHOW_COMPLETED]: (todo) => todo.completed
}


class MainSection extends Component{
	constructor(props, context) {
    	super(props, context)
		this.state = { filter: SHOW_ALL}
	}

	render(){

		//fetch the todos and actions from props, and also fetch filter from this.state(that is set by the constructor). 
		const { todos, actions }  = this.props
		const { filter } = this.state
		console.log("the filter is:", filter)

		//we filter the todos based on a filter
		const filteredTodos = todos.filter(TODO_FILTERS[filter])



		//we return a list of the filteredTodos
		return(
			<section className="main">
			<ul className="todo-list">
				{filteredTodos.map(todo =>
					<TodoItem key={todo.id} todo={todo} {...actions} />
				)}
			</ul>
			</section>
		)
	}
}

MainSection.propTypes = {
  todos: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
}

export default MainSection