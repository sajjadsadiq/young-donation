import useLocalStorage from "../../hooks/useLocalStorage";
import DonationCardBox from "./DonationCardBox";

function Donation() {
  const { localData } = useLocalStorage();
  console.log(localData);
  return (
    <div className="grid grid-cols-2 gap-10">
      {localData.map((item) => (
        <DonationCardBox key={item.ID} item={item} />
      ))}
    </div>
  );
}

export default Donation;
