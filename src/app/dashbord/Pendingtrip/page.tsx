/* eslint-disable @next/next/no-img-element */
import "../../globals.css";
import "./local.css";
import TripLiset from "../../API/pendingtrip";
export default function trip() {
  return (
    <div className="ppp">
      <TripLiset>

      </TripLiset>
    </div>
  )
}