import {Hero} from "@/components";
import {render,screen} from '@testing-library/react';
import {
  MemoryRouter,
} from "react-router-dom";

describe('Hero Page', () => {
  beforeEach(() => {
    render(
      <MemoryRouter initialEntries={['/hero']}>
        <Hero />
      </MemoryRouter>
    );
  });

  test('El título del juego debe ser visible', () => {
    const titulo = screen.getByText(/memory game/i);
  });

  test('El botón de inicio debe estar presente', () => {
    const botonInicio = screen.getByRole('button', { name: '🎮 s t a r t 🎮' });
    expect(botonInicio).toBeInTheDocument();
  });
});
