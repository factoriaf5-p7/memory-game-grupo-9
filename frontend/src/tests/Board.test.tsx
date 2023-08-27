import Board from '@/components/Board';
import { render, screen } from '@testing-library/react';


describe('Board Page', () => {
  beforeEach(() => {
    render(
      <Board />
      )
    })

  test('display cards', async () => {
    expect(screen.getAllByAltText(/Imagen de/i).length).toBe(24)
  })
  
})