import { useState } from "react";
import LoginPage from "./routes/LoginPage";
import Main from "./routes/Main";
import Context from "./helper/Context";
function App() {

  const [login, setLogin] = useState(false)

  const [todos, setTodos] = useState([])

  function addTodo(todo) {
    setTodos([todo, ...todos])
  }

  return (
    <div>
      <Context.Provider value={{ login, setLogin }}>
        {/* <LoginPage initialTodo={initialTodo} /> */}
        <Main />
      </Context.Provider>
    </div>
  );





  // return (
  //   <div>
  //     {/* <Context.Provider value={{ login, setLogin }}> */}
  //     {/* <LoginPage initialTodo={initialTodo} /> */}
  //     <Main />
  //     {/* </Context.Provider> */}
  //   </div>
  // );
}

export default App;
