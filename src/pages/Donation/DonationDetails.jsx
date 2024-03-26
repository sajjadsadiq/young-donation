/* eslint-disable no-unused-vars */
import { useParams } from "react-router-dom";
import useDonationData from "../../hooks/useDonationData";
import { useEffect, useState } from "react";
import { Button } from "@material-tailwind/react";
import { saveToLocalStorage } from "../../utils/localStorage";

function DonationDetails() {
  const [singleData, setSingleData] = useState({});

  const { id } = useParams();
  const { data, loading } = useDonationData();

  const handleDonate = () => {
    saveToLocalStorage(singleData);
  };

  useEffect(() => {
    if (data) {
      const singleDataItem = data.find((item) => +item.ID === +id);
      setSingleData(singleDataItem || {});
    }
  }, [id, data]);

  const { description, title, price } = singleData;
  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-3xl font-bold">{title}</h1>
      <p className="text-xl">{description}</p>

      <Button onClick={handleDonate} variant="gradient" className="text-xl">
        Donate ${price}
      </Button>
    </div>
  );
}

export default DonationDetails;
