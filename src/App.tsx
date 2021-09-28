import Nav from './components/Nav'
import { ContextProvider } from './context/Provider';
function App() {
  return (
    <ContextProvider>
      <Nav/>
      <h1>Hello world</h1>
    </ContextProvider>
  );
}

export default App;
