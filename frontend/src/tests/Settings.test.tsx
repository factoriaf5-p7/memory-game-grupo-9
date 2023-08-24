import { Settings } from "@/components";
import { render,screen } from '@testing-library/react';
import {
  MemoryRouter,
} from "react-router-dom";

describe('Settings Page', () => {
  test('Login should have a valid form', () => {
    render(
      <MemoryRouter initialEntries={["/settings"]}>
        <Settings />
      </MemoryRouter>
    );

    // expect(screen.getByText(/Elige el tema:/i)).toBeInTheDocument();
  });
});