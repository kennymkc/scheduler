export function getAppointmentsForDay(state, day) {
  const filteredDays = state.days.find(selectedDay => selectedDay.name === day);
  return !filteredDays ? [] : filteredDays.appointments.map(id => state.appointments[id]);
}

export function getInterview(state, interview) {
  return !interview ? null : { ...interview, interviewer: state.interviewers[interview.interviewer] };
}

export function getInterviewersForDay(state, day) {
  const filteredDays = state.days.find(selectedDay => selectedDay.name === day);
  return !filteredDays ? [] : filteredDays.interviewers.map(id => state.interviewers[id]);
};