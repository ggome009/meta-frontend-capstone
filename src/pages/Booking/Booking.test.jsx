import { render, screen } from "@testing-library/react";
import "@testing-library/react";
import { test, it, expect, expectTypeOf } from 'vitest'
import { initializeTimes, updateTimes } from './Booking';
import Booking from './Booking'

test('initializeTimes is a non-empty array', () => {
    let times = initializeTimes("01-01-2000")
    expectTypeOf(times).toEqualTypeOf([])
    expect(times.length > 0).toBe(true)
})

test('updateTimes', () => {
    const state = {
        times: ["17:00", "18:00","19:00","20:00","21:00","22:00"]
    }

    const action = {
        type: "changed_date", date: new Date('August 19, 1975 23:15:30')
    }

    expectTypeOf(updateTimes(state, action)).toEqualTypeOf([])
})

// test('Booking', () => {
//     render(<Booking/>)
//     const headingElement = screen.getByText("Reserve a Table");
//     expect(headingElement).toBeInTheDocument();
// })