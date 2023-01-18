import { useEffect, useState } from "react";
import axios from "axios";

export default function useApplicationData() {
  
  const [state, setState] = useState({
    day: "Monday",
    days: [],
    appointments: {},
    interviewers: {}
  });

  const setDay = day => setState({ ...state, day });

  //count number of nulls
  const countFreeSpots = (state) => {
    const currentDay = state.days.find(day => day.name === state.day);
    const appointmentIds = currentDay.appointments;

    const freeSpots = appointmentIds.filter(id => state.appointments[id].interview === null).length;

    return freeSpots;
  };

  //update the state of day with available spots
  const updatedSpots = (state) => {
    const currentDay = state.days.find(day => day.name === state.day);
    const currentDayIndex = state.days.findIndex(day => day.name === state.day);
    const updatedDay = { ...currentDay };
    updatedDay.spots = countFreeSpots(state);

    const updatedDays = [...state.days];
    updatedDays[currentDayIndex] = updatedDay;

    const updatedState = { ...state, days: updatedDays };
    
    return updatedState;
  }

  function bookInterview(id, interview) {

    const appointment = {
      ...state.appointments[id],
      interview: { ...interview }
    };

    const appointments = {
      ...state.appointments,
      [id]: appointment
    };

    const updatedState1 = { ...state, appointments };

    return axios.put(`/api/appointments/${id}`, { interview })
      .then(() => {
        const updatedState2 = updatedSpots(updatedState1);
        setState({
          ...updatedState2,
          appointments,
          days: [...updatedState2.days]
        })
      })
  };

  function cancelInterview(id) {
    const appointment = {
      ...state.appointments[id],
      interview: null
    };

    const appointments = {
      ...state.appointments,
      [id]: appointment
    };

    const updatedState1 = { ...state, appointments }

    return axios.delete(`/api/appointments/${id}`)
      .then(() => {
        const updatedState2 = updatedSpots(updatedState1);
        setState({
          ...updatedState2,
          appointments,
          days: [...updatedState2.days]
        });
      })
  };

  useEffect(() => {
    Promise.all([
      axios.get("/api/days"),
      axios.get("/api/appointments"),
      axios.get("/api/interviewers")
    ]).then((all) => {
      setState(prev => ({ ...prev, days: all[0].data, appointments: all[1].data, interviewers: all[2].data }));
    })
  }, [])

  return {state, setDay, bookInterview, cancelInterview}
}
