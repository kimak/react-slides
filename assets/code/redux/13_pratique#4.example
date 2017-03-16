import { connect } from 'react-redux'
import Todo from './Todo';

function mapDispatchToProps(dispatch) {
  return {
    onTodoClick: (index) => {
      dispatch({ type: 'TOGGLE_TODO', index});
    },
    onAddTodo: (label) => {
      dispatch({ type: 'ADD_TODO', label});
    }
  }
}

function mapStateToProps(state) {
  return {
    todos: state.todos
  }
}

const TodosContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Todo);

export default TodosContainer
