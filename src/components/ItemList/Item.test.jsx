import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../../App'

const newItem = {
    id: 2,
    text: 'carne asada fries'
};

beforeEach(()=> {
    render(<App />);
});

it('should updte and render a single item within a list', async () => {
    const edittedItem = await screen.findAllByRole('button', { name: 'edit' });
    userEvent.click(edittedItem[0]);
    const input = await screen.findAllByRole('textbox');
    waitFor(async () => {
      userEvent.type(input[0], '3 tacos de asada');
      const updateItemInput = await screen.findByText('3 tacos de asada');
      expect(updateItemInput).toBeInTheDocument();
    });
  
 });