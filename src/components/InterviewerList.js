import React from "react";
import InterviewerListItem from "./InterviewerListItem";
import "./InterviewerList.scss";

// props: interviewers:arrayOfObj setInterviewer:function interviewer:number(id)
export default function InterviewerList(props) {
  console.log(props)

  const interviewers = props.interviewers.map((interviewer) => {
    return (
      <InterviewerListItem
        key={interviewer.id}
        name={interviewer.name}
        avatar={interviewer.avatar}
        selected={interviewer.id === props.value}
        setInterviewer={() => props.onChange(interviewer.id)}
      />
    )
  })

  return (
    <section className="interviewers">
      <h4 className="interviewers__header text--light">Interviewer</h4>
      <ul className="interviewers__list">{interviewers}</ul>
    </section>
  )
} 