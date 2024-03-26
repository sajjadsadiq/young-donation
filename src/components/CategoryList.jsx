import useDonationData from "../hooks/useDonationData";
import DonationCard from "./DonationCard";

function CategoryList() {
  const { data, loading } = useDonationData();
  return (
    <div className="grid grid-cols-3 gap-6">
      {data.map((item) => (
        <DonationCard key={item.ID} item={item} />
      ))}
    </div>
  );
}

export default CategoryList;
