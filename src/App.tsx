
import { useReducer } from 'react';
import './App.css';
import TodoLists from './components/TodoLists';
export interface DataType {
  id: number;
  text: string;
  isDone: boolean;
}
type Action = "ADDTODO" | "TOGGLETODO" | "DELTODO";
interface ActionType {
  type: Action;
  todo?: DataType;
  id?:number;
}
function reducer(state:DataType[],action:ActionType):DataType[]{
  switch(action.type){
    case "ADDTODO":
      return [...state, action.todo!];
    case "DELTODO":
      return state.filter(todo=> todo.id !== action.id);
    case "TOGGLETODO":
      return state.map(todo=> todo.id === action.id ? { ...todo, isDone: !todo.isDone} : todo);
    default:
      return state;
  }

}
const initialState:DataType[] = [
  {id:1, text:"자바스크립트 공부하기", isDone: false },
  {id:2, text:"리액트 공부하기", isDone: false },
  {id:3, text:"타입 공부하기", isDone: false },
];
function App() {
  const [ todos, dispatch ] = useReducer(reducer, initialState);
  return (
    <div className="App">
      <TodoLists todos={todos}/>
    </div>
  );
}

export default App;
