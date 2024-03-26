import { Button, Input } from "@material-tailwind/react";
import { useState } from "react";

function Banner() {
  const [email, setEmail] = useState("");
  const onChange = ({ target }) => setEmail(target.value);
  return (
    <div>
      <div className="relative flex w-full max-w-[24rem]">
        <Input
          type="email"
          label="Search here..."
          value={email}
          onChange={onChange}
          className="pr-20"
          containerProps={{
            className: "min-w-0",
          }}
        />
        <Button
          size="sm"
          color={email ? "blue" : "blue"}
          className="!absolute right-1 top-1 rounded"
        >
          Invite
        </Button>
      </div>
    </div>
  );
}

export default Banner;
