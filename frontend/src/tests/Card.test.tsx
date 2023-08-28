import {render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'
import Card  from '@/components/Card'

test('display card', async () => {
  // ARRANGE
  const testCard = { img:'batman.png', name: 'batman'}
  render(<Card card={testCard}   />)

  // ACT
  // await userEvent.click(screen.getByText('Load Greeting'))
  // await screen.findByRole('heading')

  // ASSERT
 expect(screen.getByAltText(/Imagen de/i)).toBeVisible(); 
  // expect(screen.getByRole('button')).toBeDisabled()
}); 

// test('card flips on click', () => {
//   // ARRANGE
//   render(<Card img="batman.png" name="hello there" toggle={vi.fn(() => true)}  />);

//   // ACT
//   const cardElement = screen.getByTestId(/card-/i);
//   userEvent.click(cardElement);


//   // ASSERT
//   const frontSide = screen.getByTestId('front-side');
//   // const bacreen.getBkText(/hola/i)Side = screen.getByTestId('back-side');
// // creen.getBText(/hola/i)
//   expect(screen.getByText(/hola/i)).toHaveTextContent('hola');
//   // expect(backSide).toContainElement(screen.getByAltText('Imagen de batman.png'));
// });

// test('card content displays correctly', () => {
//   // ARRANGE
//   render(<Card img="batman.png" name="hello there" />);

//   // ACT
//   const frontSide = screen.getByTestId('front-side');
//   const backSide = screen.getByTestId('back-side');

//   expect(frontSide).toHaveTextContent('Hola!');
//   expect(backSide).toContainElement(screen.getByAltText('Imagen de batman.png'));
// });