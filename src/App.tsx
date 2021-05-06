import * as React from 'react';
import Button from './components/Button/Button';
import './App.less';

const App: React.FC = () => (
  <div className="App">
    <h1> Hello, World!</h1>
    <Button onClick={() => console.log('Clicked!')}>Click me!</Button>
  </div>
);

export default App;
