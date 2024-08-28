import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/react";
import { test, it, expect } from 'vitest'
import BookingForm from './BookingForm';


test('BookingForm', () => {
    render(<BookingForm availableTimes={{times: ["1:00"]}}/>)
    const headingElement = screen.getByText("Reserve a Table");
    expect(headingElement).toBeInTheDocument();
})

test("BookingForm submits", () => {
    const mockSubmit = vi.fn()
    const mockDispatch = vi.fn()
    render(
        <BookingForm
            dispatchTimes={mockDispatch}
            availableTimes={{times: ["1:00"]}}
            submitHandler={mockSubmit}
        />
    )
    const buttonElement = screen.getByText("Make Your Reservation")
    fireEvent.click(buttonElement);
    expect(mockSubmit).toHaveBeenCalled();
  });