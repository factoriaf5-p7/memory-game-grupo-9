import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom'; 
import userEvent from '@testing-library/user-event';
import ButtonThema from '@/components/ButtonThema';  

test('renders option buttons and changes selection', async () => {
    render(<ButtonThema />);
  
    const radioButtons = await screen.findAllByRole('radio');
    expect(radioButtons.length).toBeGreaterThan(0);
  
    const firstButton = radioButtons[0];
    userEvent.click(firstButton);
  
    // Esperar a que se marque el botón de opción antes de hacer la aserción
    await waitFor(() => {
      expect(firstButton).toBeChecked();
    });
  
  test('verify content of selected elements', async () => {
    render(<ButtonThema />);
  
    // Simulate changing selection
    const radioButtons = await screen.findAllByRole('radio');
    const firstButton = radioButtons[0];
    userEvent.click(firstButton);
  
     
  });
})