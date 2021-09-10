import TodoPage from './pages/TodoPage';
import { ThemeContext } from './contexts';
import { useState } from 'react';

function App () {
  const themes = useState(true);
  return (
    <ThemeContext.Provider value={themes}>
      <TodoPage />
    </ThemeContext.Provider>
  );
}

export default App;
