import TodoPage from './pages/TodoPage';
import { ThemeContext } from './contexts';
import { useState } from 'react';

function App () {
  const isLightTheme = useState(true);
  return (
    <ThemeContext.Provider value={isLightTheme}>
      <TodoPage />
    </ThemeContext.Provider>
  );
}

export default App;
