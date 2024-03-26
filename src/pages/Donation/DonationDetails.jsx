/* eslint-disable no-unused-vars */
import { useParams } from "react-router-dom";
import useDonationData from "../../hooks/useDonationData";
import { useEffect, useState } from "react";

function DonationDetails() {
  const [singleData, setSingleData] = useState({});

  const { id } = useParams();
  const { data, loading } = useDonationData();

  useEffect(() => {
    if (data) {
      const singleDataItem = data.find((item) => +item.ID === +id);
      setSingleData(singleDataItem || {});
    }
  }, [id, data]);

  console.log(singleData);
  const { description, title } = singleData;
  return (
    <div>
      <h1 className="text-3xl font-bold">{title}</h1>
      <p className="text-xl">{description}</p>
    </div>
  );
}

export default DonationDetails;
