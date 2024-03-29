import React from 'react';
import { ThemeProvider } from './ThemeContext';
import DashBoard1 from './DashBoard1';

function App() {
  return (
    <ThemeProvider>
      <DashBoard1 />
    </ThemeProvider>
  );
}

export default App;
