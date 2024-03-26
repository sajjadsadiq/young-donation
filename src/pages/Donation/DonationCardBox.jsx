/* eslint-disable react/prop-types */
import { Button, CardBody, Typography } from "@material-tailwind/react";
import { Link } from "react-router-dom";

function DonationCardBox({ item }) {
  const { ID, title, category, cardBgColor, categoryBgColor, textColor } = item;
  console.log(item);
  return (
    <div className="">
      <CardBody
        style={{ backgroundColor: cardBgColor }}
        className={`bg-[#ffcc00] rounded-lg`}
      >
        <Button size="sm" style={{ backgroundColor: categoryBgColor }}>
          {category}
        </Button>
        <Typography
          variant="h5"
          color="blue-gray"
          className="mb-2 mt-2"
          style={{ color: textColor }}
        >
          {title}
        </Typography>
        <Link to={`/donatio/${ID}`}>
          <Button size="sm">View Details</Button>
        </Link>
      </CardBody>
    </div>
  );
}

export default DonationCardBox;
