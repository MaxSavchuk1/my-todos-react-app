import TodoPage from './pages/TodoPage';
import { ThemeContext } from './contexts';

function App () {
  return (
    <ThemeContext.Provider value={}>
      <TodoPage />
    </ThemeContext.Provider>
  );
}

export default App;
