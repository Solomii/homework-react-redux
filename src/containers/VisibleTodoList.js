import { connect } from "react-redux";
import TodoList from "../components/TodoList";
import { VisibilityFilters, toggleTodo } from "../actions/actions";
const getVidibleTodos = (todos, filter) => {
  switch (filter) {
    case VisibilityFilters.SHOW_ALL:
      return todos;
    case VisibilityFilters.SHOW_COMPLETED:
      return todos.filter((task) => task.completed);
    case VisibilityFilters.SHOW_ACTIVE:
      return todos.filter((task) => !task.completed);
    default:
      throw new Error("Unknown filter: " + filter);
  }
};

const mapStateToProps = (state) => ({
  todos: getVidibleTodos(state.todos, state.visibilityFilter),
});

const mapDispatchToProps = (dispatch) => ({
  toggleTodo: (id) => disptach(toggleTodo(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
