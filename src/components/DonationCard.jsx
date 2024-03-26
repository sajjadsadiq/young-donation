import { Card, CardBody, Typography, Button } from "@material-tailwind/react";

function DonationCard({ item }) {
  const { title, category, cardBgColor, categoryBgColor, textColor } = item;
  return (
    <div>
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
    </div>
  );
}

export default DonationCard;
