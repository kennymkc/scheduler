import React from "react";
import axios from "axios";

import { render, cleanup, waitForElement, fireEvent, getByText, prettyDOM, getAllByTestId, queryByText, getByAltText, getByPlaceholderText } from "@testing-library/react";

import Application from "components/Application";

afterEach(cleanup);

describe("Application", () => { 
  
  it("changes the schedule when a new day is selected", async () => {
    const { getByText } = render(<Application />);
  
    await waitForElement(() => getByText("Monday"));
  
    fireEvent.click(getByText("Tuesday"));
  
    expect(getByText("Leopold Silvers")).toBeInTheDocument();
  });

  it("loads data, books an interview and reduces the spots remaining for Monday by 1", async () => {
    const { container, debug } = render(<Application />);

    await waitForElement(() => getByText(container, "Archie Cohen"));

    const appointments = getAllByTestId(container, "appointment");
    const appointment = appointments[0];

    fireEvent.click(getByAltText(appointment, "Add"));

    fireEvent.change(getByPlaceholderText(appointment, /enter student name/i), {
      target: { value: "Lydia Miller-Jones" }
    });

    fireEvent.click(getByAltText(appointment, "Sylvia Palmer"));
    fireEvent.click(getByText(appointment, "Save"));

    expect(getByText(appointment, "Saving")).toBeInTheDocument();

    await waitForElement(() => queryByText(appointment, "Lydia Miller-Jones"));

    expect(getByText(appointment, "Lydia Miller-Jones")).toBeInTheDocument();

    const day = getAllByTestId(container, "day").find(day =>
      queryByText(day, "Monday")
    );

    expect(getByText(day, "no spots remaining")).toBeInTheDocument();
  });
});


// // 3. Click the "Delete" button on the selected appointment.
// const appointment = getAllByTestId(container, "appointment").find(
//   appointment => queryByText(appointment, "Archie Cohen")
// );


// fireEvent.click
//   (getByAltText(appointment, "Delete"));
// // 4. Check that the confirmation message is shown.
// expect(getByText(appointment, "Delete the appointment?")).toBeInTheDocument();
// // 5. Click the "Confirm" button on the confirmation.

// fireEvent.click
//   (getByText(appointment, "Confirm"));
// // 6. Check that the element with the text "Deleting" is displayed.
// expect(getByText(appointment, "Deleting")).toBeInTheDocument();
// // 7. Wait until the element with the "Add" button is displayed.
// await waitForElement(() => getByAltText(appointment, "Add"));
// // 8. Check that the DayListItem with the text "Monday" also has the text "2 spots remaining".
// const day = getAllByTestId(container, "day").find(day =>
//   queryByText(day, "Monday") 
//   });