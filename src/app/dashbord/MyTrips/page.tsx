/* eslint-disable @next/next/no-img-element */
import "../../globals.css";
import "../Activetrip/local.css";
import MyTrips from "../../API/allMyTrip";
export default function trip() {
  return (
    <div className="ppp">
      <MyTrips>

      </MyTrips>
    </div>
  )
}
