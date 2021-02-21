import React from 'react';
import events from './events'
import ControlSlot from './ControlSlot'
import {Calendar, momentLocalizer, Views} from "react-big-calendar";
import 'react-big-calendar/lib/css/react-big-calendar.css';
import moment from "moment";
require('moment/locale/es.js');
const localizer = momentLocalizer(moment)
  
const propTypes = {}

//const localizer = momentLocalizer(moment);
//array de eventos
const myEventsList= [{
  title: "rapado completo",
  start: new Date('2021-02-20 10:22:00'),
  end: new Date('2021-02-20 10:42:00')
},
{
  title: "corte y barba",
  start: new Date('2021-02-20 19:00:00'),
  end: new Date('2021-02-20 20:00:00')
}]

class BigCalendar extends React.Component {
  constructor(...args) {
    super(...args)

    this.state = { events }
  }

  handleSelect = ({ start, end }) => {
    const title = window.prompt('Nuevo Evento')
    if (title)
      this.setState({
        events: [
          ... this.state.events,
          {
            start,
            end,
            title,
          },
        ],
      })
  }
  render(){
  return (
<>
    <ControlSlot.Entry waitForOutlet></ControlSlot.Entry>
<div style={{height:`${700}px`}} className="bigCalendar-container">
    <Calendar
      selectable = {true}
      localizer={localizer}
      events= {this.state.events}
      startAccessor="start"
      endAccessor="end"
      defaultView={Views.WEEK}
      culture='es'
      onSelectEvent={event => alert(event.title)}
      onSelectSlot={this.handleSelect}
      
      messages={{
              next: "Sig",
              previous: "Ant",
              today: "Hoy",
              month: "Mes",
              week: "Semana",
              day: "Día"
            }}
    />
  </div>
  </> );
  }
}

BigCalendar.propTypes = propTypes

export default BigCalendar;