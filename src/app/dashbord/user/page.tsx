import Image from "next/image";
import "../../globals.css";
import User from '../../API/User';


export default function user() {
  return (
    <div className="div">
      <User>
      </User>
    </div>
  );
}
