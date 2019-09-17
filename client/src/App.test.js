import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import NavBar from './component/NavBar'

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});


test('if App works', () => {
  expect(<App />).toBeTruthy();
})


test('see if Nav works', () => {
  expect(<NavBar />).toBeTruthy();
})
