import perEnd from "../assets/perEnd.png";
import perSt from "../assets/perSt.png";
import medical from "../assets/medical.png";
import gym from "../assets/gym.png";
import coding from "../assets/coding.png";
import work from "../assets/work.png";
import coffee from "../assets/coffee.png";
import drink from "../assets/drink.png";
import incident from "../assets/incident.png";
import event from "../assets/event.png";

export const getIcon = (type: string) => {
    switch (type) {
      case "startPer":
        return (
          <div className="w-full bg-red bg-opacity-50">
            {" "}
            <img className="w-5 h-5" src={perSt}></img>{" "}
          </div>
        );
      case "endPer":
        return (
          <div className="w-full bg-red bg-opacity-50">
            <img className="w-5 h-5" src={perEnd}></img>{" "}
          </div>
        );
      case "incident":
        return<div className="w-full bg-yellow bg-opacity-50">
        <img className="w-5 h-5" src={incident}></img>{" "}
      </div>
      case "event":
        return<div className="w-full bg-ciel bg-opacity-50">
        <img className="w-5 h-5" src={event}></img>{" "}
      </div>
      case "medicalAppointment":
        return <div className="w-full bg-violet-950 bg-opacity-50">
        <img className="w-5 h-5" src={medical}></img>{" "}
      </div>
      case "gym":
        return <div className="w-full bg-light-purple bg-opacity-50">
        <img className="w-5 h-5" src={gym}></img>{" "}
      </div>
      case "drink":
        return <div className="w-full bg-teal-500 bg-opacity-50">
        <img className="w-5 h-5" src={drink}></img>{" "}
      </div>
      case "coffee":
        return <div className="w-full bg-orange bg-opacity-50">
        <img className="w-5 h-5" src={coffee}></img>{" "}
      </div>
      case "work":
        return<div className="w-full bg-lime-300 bg-opacity-50">
        <img className="w-5 h-5" src={work}></img>{" "}
      </div>
      case "coding":
        return <div className="w-full bg-light-brown bg-opacity-50">
        <img className="w-5 h-5" src={coding}></img>{" "}
      </div>
      default:
        return null;
    }
  };