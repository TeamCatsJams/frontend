import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'

type Props = {}

function Calender({}: Props) {
    return (
        <FullCalendar
          plugins={[ dayGridPlugin ]}
          initialView="dayGridMonth"
        />
      )
}

export default Calender