import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/react";
import { test, it, expect } from 'vitest'
import BookingForm from './BookingForm';
import { addDays, subDays, addMonths, subMonths  } from 'react-datepicker/dist/date_utils.d.ts';
import { validate } from './BookingForm'

test("BookingForm renders", () => {
    const mockSubmit = vi.fn()
    const mockDispatch = vi.fn()
    render(
        <BookingForm
            dispatchTimes={mockDispatch}
            availableTimes={["1:00"]}
            submitHandler={mockSubmit}
        />
    )
    const buttonElement = screen.getByText("Make Your Reservation")
    expect(buttonElement).toBeInTheDocument();
  });

test("Date picker has 'required' attribute", () => {
    const mockSubmit = vi.fn()
    const mockDispatch = vi.fn()
    render(
        <BookingForm
            dispatchTimes={mockDispatch}
            availableTimes={["1:00"]}
            submitHandler={mockSubmit}
        />
    )
    const datePickerElement = screen.getByRole('textbox')
    expect(datePickerElement).toHaveAttribute("required")
});

test("Time selection input has 'required' attribute", () => {
    const mockSubmit = vi.fn()
    const mockDispatch = vi.fn()
    render(
        <BookingForm
            dispatchTimes={mockDispatch}
            availableTimes={["1:00"]}
            submitHandler={mockSubmit}
        />
    )
    const timePickerElement = screen.getByLabelText('Choose time')
    expect(timePickerElement).toHaveAttribute("required")
});

test("Guest number input has attributes 'max'=10 and 'min'=1", () => {
    const mockSubmit = vi.fn()
    const mockDispatch = vi.fn()
    render(
        <BookingForm
            dispatchTimes={mockDispatch}
            availableTimes={["1:00"]}
            submitHandler={mockSubmit}
        />
    )
    const guestNumberPickerElement = screen.getByLabelText('Number of guests')
    expect(guestNumberPickerElement).toHaveAttribute("min", "1")
    expect(guestNumberPickerElement).toHaveAttribute("max", "10")
});

test("Valid data for validate function", () => {
    const mockData1 = {
        date: new Date(),
        time: "1:00",
        guests: 3,
        occasion: ""
    }
    const mockTimes1 = ["1:00"]
    expect(validate(mockData1, mockTimes1)).toStrictEqual([])
});

const errors = {
    invalidDate: "Invalid Date: please select a date between today and one month from today.",
    invalidTime: "Invalid Time: please select an available time from the list based on the date selected.",
    invalidNoGuests: "Invalid number of guests: please choose a number of guests from 1 to 10."
}

test("Invalid date (too early) for validate function", () => {
    const mockData2 = {
        date: subDays(new Date(),2),
        time: "1:00",
        guests: 3,
        occasion: ""
    }
    const mockTimes2 = ["1:00"]
    expect(validate(mockData2, mockTimes2)).toStrictEqual([errors.invalidDate])
});

test("Invalid date (too late) for validate function", () => {
    const mockData3 = {
        date: addDays(addMonths(new Date(),1),1),
        time: "1:00",
        guests: 3,
        occasion: ""
    }
    const mockTimes3 = ["1:00"]
    expect(validate(mockData3, mockTimes3)).toStrictEqual([errors.invalidDate])
});

test("Invalid time for validate function", () =>{
    const mockData4 = {
        date: new Date(),
        time: "4:00",
        guests: 3,
        occasion: ""
    }
    const mockTimes4 = ["1:00", "2:00", "3:00"]
    expect(validate(mockData4, mockTimes4)).toStrictEqual([errors.invalidTime])
});

test("Invalid number of guests (<1) for validate function", () =>{
    const mockData5 = {
        date: new Date(),
        time: "1:00",
        guests: 0,
        occasion: ""
    }
    const mockTimes5 = ["1:00"]
    expect(validate(mockData5, mockTimes5)).toStrictEqual([errors.invalidNoGuests])
});

test("Invalid number of guests (>10) for validate function", () =>{
    const mockData6 = {
        date: new Date(),
        time: "1:00",
        guests: 11,
        occasion: ""
    }
    const mockTimes6 = ["1:00"]
    expect(validate(mockData6, mockTimes6)).toStrictEqual([errors.invalidNoGuests])
});

test("Invalid date (too early) and invalid time for validate function", () =>{
    const mockData7 = {
        date: subMonths(new Date(),1),
        time: "6:00",
        guests: 8,
        occasion: ""
    }
    const mockTimes7 = ["1:00"]
    expect(validate(mockData7, mockTimes7)).toStrictEqual([errors.invalidDate, errors.invalidTime])
});

test("Invalid date (too late) and invalid number of guests (>10) for validate function", () =>{
    const mockData8 = {
        date: addMonths(new Date(),2),
        time: "1:00",
        guests: 100,
        occasion: ""
    }
    const mockTimes8 = ["1:00"]
    expect(validate(mockData8, mockTimes8)).toStrictEqual([errors.invalidDate, errors.invalidNoGuests])
});

test("Invalid time and invalid number of guests (<1) for validate function", () =>{
    const mockData9 = {
        date: addDays(new Date(),7),
        time: "6:00",
        guests: -4,
        occasion: ""
    }
    const mockTimes9 = ["1:00"]
    expect(validate(mockData9, mockTimes9)).toStrictEqual([errors.invalidTime, errors.invalidNoGuests])
});

test("Invalid date (too late), invalid time, and invalid number of guests (>10) for validate function", () =>{
    const mockData10 = {
        date: addDays(addMonths(new Date(),1),2),
        time: "6:00",
        guests: 13,
        occasion: ""
    }
    const mockTimes10 = ["1:00"]
    expect(validate(mockData10, mockTimes10)).toStrictEqual([errors.invalidDate, errors.invalidTime, errors.invalidNoGuests])
});