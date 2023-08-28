import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import FormSettings from '../components/FormSettings';

const options = ['group1', 'group2']; // Replace with actual options

describe('FormSettings', () => {
  it('renders with provided title and options', () => {
    const { getByText } = render(<FormSettings title="Test Title" options={options} />);
    expect(getByText('Test Title')).toBeInTheDocument();
    options.forEach(option => {
      expect(getByText(option)).toBeInTheDocument();
    });
  });

  // it('changes selected group and displays selected items', () => {
  //   const { getByLabelText, getByText } = render(<FormSettings title="Test Title" options={options} />);
    
  //   fireEvent.click(getByLabelText(options[0]));
  //   expect(getByLabelText(options[0]).checked).toBe(true);

  //   // Replace with the actual data structure from your JSON file
  //   const selectedItemsData = {
  //     superheroes: [{ name: 'Hero1', img: 'hero1.jpg' }],
  //   };

  //   jest.spyOn(global, 'fetch').mockResolvedValue({
  //     json: () => Promise.resolve(selectedItemsData),
  //   });

  //   fireEvent.click(getByText(options[0]));

    // Test if selected items are displayed
    //expect(getByText('Hero1')).toBeInTheDocument();
 // });

  // it('displays no selected items when none available', () => {
  //   const { getByLabelText, queryByText } = render(<FormSettings title="Test Title" options={options} />);
  //   
  //   fireEvent.click(getByLabelText(options[0]));
  //   expect(getByLabelText(options[0]).checked).toBe(true);
  //
  //   // Replace with the actual data structure from your JSON file
  //   const selectedItemsData = {
  //     kombat: [{ kombat: [{ name: 'KombatHero', img: 'kombat.jpg' }] }],
  //   };
  //
  //   jest.spyOn(global, 'fetch').mockResolvedValue({
  //     json: () => Promise.resolve(selectedItemsData),
  //   });
  //
  //   fireEvent.click(getByText(options[0]));
  //
  //   // Test if selected items are not displayed
  //   expect(queryByText('KombatHero')).toBeNull();
  // });
});
