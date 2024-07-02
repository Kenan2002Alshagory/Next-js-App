import Image from "next/image";
import './local.css';
import PlaceList from "../../API/allHotel"


export default function hotel() {
  return (
    <div >
      <PlaceList >

      </PlaceList>
    </div>
  );
}
