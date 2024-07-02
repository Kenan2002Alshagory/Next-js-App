import Image from "next/image";
import '../hotels/local.css';
import PlaceList from "../../API/allrestaurant"

export default function restaurant() {
  return (
    <div >
      
        <PlaceList></PlaceList>
      
    </div>
  );
}
