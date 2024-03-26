/* eslint-disable react/prop-types */
import { Card, CardBody, Typography, Button } from "@material-tailwind/react";
import { Link } from "react-router-dom";

function DonationCard({ item }) {
  const { ID, title, category, cardBgColor, categoryBgColor, textColor } = item;

  return (
    <Link to={`/donation/${ID}`}>
      <Card className="mt-6 ">
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
        </CardBody>
      </Card>
    </Link>
  );
}

export default DonationCard;
