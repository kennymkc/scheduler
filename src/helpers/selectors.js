export function getAppointmentsForDay(state, day) {
  const filteredDays = state.days.find(selectedDay => selectedDay.name === day);
  return !filteredDays ? [] : filteredDays.appointments.map(id => state.appointments[id])
  
}
