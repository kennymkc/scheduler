import React from "react";
import DayListItem from "./DayListItem";

//props: days:Array value:String onChange:Function
export default function DayList(props) {
  const day = props.days.map((day) => {
    return (
      <DayListItem
        key={day.id} 
        name={day.name} 
        spots={day.spots} 
        selected={day.name === props.value} 
        setDay={props.onChange}
      />
    )
  })

  return (
    <ul>
      {day}
    </ul>
  )
}