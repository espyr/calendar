import perEnd from "../assets/perEnd.png";
import perSt from "../assets/perSt.png";
import medical from "../assets/medical.png";
import gym from "../assets/gym.png";
import coding from "../assets/coding.png";
import work from "../assets/work.png";
import coffee from "../assets/coffee.png";
import drink from "../assets/drink.png";
import incident from "../assets/incident.png";
import eventIcon from "../assets/event.png";
import { CalendarEvent } from "../types";

export const getIcon = (event: CalendarEvent) => {
    console.log(event,'event')
    switch (event.type) {
      case "startPer":
        return (
          <button className="w-full bg-red bg-opacity-50 flex gap-2" >
        <img className="w-5 h-5" src={perSt}></img>{event?.time}{'  '}{event?.description}
      </button>
        );
      case "endPer":
        return (

          <button className="w-full bg-red bg-opacity-50 flex gap-2" >
        <img className="w-5 h-5" src={perEnd}></img>{event?.time}{'  '}{event?.description}
      </button>

        );
      case "incident":
        return <button className="w-full bg-yellow bg-opacity-50 flex gap-2" >
        <img className="w-5 h-5" src={incident}></img>{event?.time}{'  '}{event?.description}
      </button>
      case "event":
        return<button className="w-full bg-ciel bg-opacity-50 flex gap-2" >
        <img className="w-5 h-5" src={eventIcon}></img>{event?.time}{'  '}{event?.description}
      </button>
      case "medicalAppointment":
        return <button className="w-full bg-violet-950 bg-opacity-50 flex gap-2" >
        <img className="w-5 h-5" src={medical}></img>{event?.time}{'  '}{event?.description}
      </button> 
      case "gym":
        return <button className="w-full bg-light-purple bg-opacity-50 flex gap-2" >
        <img className="w-5 h-5" src={gym}></img>{event?.time}{'  '}{event?.description}
      </button>
      case "drink":
        return <button className="w-full bg-teal-500 bg-opacity-50 flex gap-2" >
        <img className="w-5 h-5" src={drink}></img>{event?.time}{'  '}{event?.description}
      </button>
      case "coffee":
        return <button className="w-full bg-orange bg-opacity-50 flex gap-2" >
        <img className="w-5 h-5" src={coffee}></img>{event?.time}{'  '}{event?.description}
      </button>
      case "work":
        return <button className="w-full bg-lime-300 bg-opacity-50 flex gap-2" >
        <img className="w-5 h-5" src={work}></img>{event?.time}{'  '}{event?.description}
      </button>
      case "coding":
        return <button className="w-full bg-light-brown bg-opacity-50 flex gap-2" >
        <img className="w-5 h-5" src={coding}></img>{event?.time}{'  '}{event?.description}
      </button>
      default:
        return null;
    }
  };