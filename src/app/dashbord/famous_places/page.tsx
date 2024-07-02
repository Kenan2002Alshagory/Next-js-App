import Image from "next/image";
import '../hotels/local.css';
import PlaceList from "../../API/allfamous_place"


export default function famous_place() {
  return (
    <div >
      <PlaceList>

      </PlaceList>
    </div>
  );
}
