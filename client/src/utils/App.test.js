import React from 'react';
import { render } from '@testing-library/react';
import ReactDOM from 'react-dom';
import App from '../App';
import PlayerCard from '../components/PlayerCard';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

test('players are rendered', () => {
  const container = render(<PlayerCard />);

  container.getByText(/name/i);
  container.getByText(/country/i);
})
