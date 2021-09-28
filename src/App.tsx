import Nav from './components/Nav'
import { Todo } from './components/Todo';
import { ContextProvider } from './context/Provider';
function App() {
  return (
    <ContextProvider>
      <Nav/>
      <Todo/>
    </ContextProvider>
  );
}

export default App;
