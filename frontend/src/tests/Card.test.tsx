import {render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'
import { Card } from '@/components/Card'

test('loads and displays greeting', async () => {
  // ARRANGE
  render(<Card img="batman.png" name="hello there" />)

  // ACT
  // await userEvent.click(screen.getByText('Load Greeting'))
  // await screen.findByRole('heading')

  // ASSERT
  expect(screen.getByAltText('Image of batman.png')).toBeVisible()
  // expect(screen.getByRole('button')).toBeDisabled()
})