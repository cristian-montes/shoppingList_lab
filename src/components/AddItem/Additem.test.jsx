import React from "react";
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../../App';

beforeEach(()=> {
    render(<App />);
})

it('should add a new item to the list', async ()=> {
    const itemList = await screen.findAllByRole('textbox');
    userEvent.type(itemList[0], 'carne asada fries')

    expect(itemList[0]).toBeInTheDocument();
    
})