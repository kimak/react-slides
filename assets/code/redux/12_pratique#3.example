const initialState = [
  {label: "Learn Javascript", complete: true},
  {label: "Learn ES6", complete: true},
  {label: "Learn React", complete: false},
  {label: "Learn React Native", complete: false},
  {label: "Learn Nodejs", complete: false},
  {label: "Learn by doing", complete: false},
  {label: "Learn to teach", complete: false},
  {label: "Teach to learn", complete: false},
];

function todos(state = initialState, action) {
  switch (action.type) {
    case 'ADD_TODO':
        return state.concat([{ label: action.label, complete: false }]);
    case 'TOGGLE_TODO':
        const newState = state.concat();
        newState[action.index].complete = !newState[action.index].complete;
        return newState;
    default:
        return state;
    }
}

export default todos;
