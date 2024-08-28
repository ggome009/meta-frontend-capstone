import { render, screen } from "@testing-library/react";
import "@testing-library/react";
import { test, it, expect } from 'vitest'
import { initializeTimes, updateTimes } from './Booking';
import Booking from './Booking'

test('initializeTimes', () => {
    expect(initializeTimes("01-01-2000")).toStrictEqual({
        date: "01-01-2000",
        times: ["17:00", "18:00","19:00","20:00","21:00","22:00"]
      })
})

test('updateTimes', () => {
    const state = {
        date: "01-01-2000",
        times: ["17:00", "18:00","19:00","20:00","21:00","22:00"]
    }

    const action = {
        type: "changed_date", date: "05-22-2024"
    }

    expect(updateTimes(state, action)).toStrictEqual({
        date: "05-22-2024",
        times: ["17:00", "18:00","19:00","20:00","21:00","22:00"]
      })
})

test('Booking', () => {
    render(<Booking/>)
    const headingElement = screen.getByText("Reserve a Table");
    expect(headingElement).toBeInTheDocument();
})