export const saveToLocalStorage = (data) => {
  const savedData = JSON.parse(localStorage.getItem("donate")) || [];

  const existedData = savedData.find((item) => +item.ID === +data.ID);

  if (!existedData) {
    savedData.push(data);
    localStorage.setItem("donate", JSON.stringify(savedData));
    alert("Added Successfully Donation");
  } else {
    alert("Donation Already Existed");
  }
};

export const getFromLocalStorage = () => {
  const data = JSON.parse(localStorage.getItem("donate")) || [];
  return data;
};
