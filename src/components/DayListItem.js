import React from "react";
import classNames from "classnames";
import "components/DayListItem.scss"

//props: name:String spots:Number selected:Boolean setDay:Function
export default function DayListItem(props) {

  const dayClass = classNames("day-list__item", {
    "day-list__item--selected": props.selected,
    "day-list__item--full": props.spots === 0
  });

  const formatSpots = () => {
    const availSpots = props.spots;
    if (availSpots === 0) {
      return "no spots remaining";
    } else if (availSpots === 1) {
      return "1 spot remaining";
    } else {
      return `${availSpots} spots remaining`;
    }
  }

  return (
    <li className={dayClass} onClick={props.setDay}>
      <h2 className="text--regular">{props.name}</h2>
      <h3 className="text--light">{formatSpots()}</h3>
    </li>
  );
}