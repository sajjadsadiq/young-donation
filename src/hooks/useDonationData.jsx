import { useEffect, useState } from "react";

function useDonationData() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const res = await fetch("/donationData.json");
      const data = await res.json();
      setData(data);
      setLoading(false);
    };
    fetchData();
  }, []);
  return { data, loading };
}

export default useDonationData;
