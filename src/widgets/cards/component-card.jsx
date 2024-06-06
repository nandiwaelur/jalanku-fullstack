import PropTypes from "prop-types";
import { Card, Avatar, Typography } from "@material-tailwind/react";

export function ComponentCard({ img, name, desc, socials }) {
  return (
    <Card color="transparent" shadow={false} className="shadow-lg shadow-gray-500/25">
      <Avatar
        src={img}
        alt={name}
        size="xxl"
        variant="rounded"
        className="h-full w-full rounded-b-none"
      />
      <Typography variant="h6" color="blue-gray" className=" ml-3 mt-1">
        {name}
      </Typography>
      {desc && (
        <Typography variant="paragraph" className="font-light text-sm text-blue-gray-700 ml-3  leading-4 tracking-wide">
          {desc}
        </Typography>
      )}
      {socials && <div className="mx-auto mt-5">{socials}</div>}
    </Card>
  );
}

ComponentCard.defaultProps = {
  position: "",
  socials: null,
};

ComponentCard.propTypes = {
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  position: PropTypes.string,
  socials: PropTypes.node,
};

ComponentCard.displayName = "/src/widgets/layout/team-card.jsx";

export default ComponentCard;
