import React from "react";
import classNames from "classnames";
import "./InterviewerListItem.scss";

//props: id:Number name:String avatar:url selected:Boolean setInterviewer:Function
export default function InterviewerListItem(props) {

  const interviewClass = classNames("interviewers__item-image", {
    "interviewers__item--selected": props.selected
  });

  return (
    <li className={interviewClass} onClick={() => props.setInterviewer(props.name)}>
      <img
        className="interviewers__item-image"
        src="https://i.imgur.com/LpaY82x.png"
        alt="Sylvia Palmer"
      />
      Sylvia Palmer
    </li>
  )
}
