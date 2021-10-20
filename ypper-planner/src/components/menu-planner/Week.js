import React from "react";

import Day from './Day'

function Week(props) {
    const weekDays = ['Måndag', 'Tisdag', 'Onsdag', 'Torsdag', 'Fredag', 'Lördag', 'Söndag']
    const daysList = weekDays.map(day => <Day key={day} name={day} />)
    return (
        <div className="week-container">
            {daysList}
        </div>
    )
}

export default Week