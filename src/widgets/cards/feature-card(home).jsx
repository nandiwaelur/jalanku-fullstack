import PropTypes from "prop-types";
import {
  Card,
  CardBody,
  Typography,
  IconButton,
} from "@material-tailwind/react";

export function FeatureCard({ color, icon, title, description }) {
  return (
    <Card className="rounded-3xl shadow-lg shadow-gray-500/0 py-11">
      <CardBody className="px-8 text-center">
        {/* <IconButton
          variant="gradient"
          size="lg"
          color={color}
          className="pointer-events-none mb-6 rounded-full"
        >
          {icon}
        </IconButton> */}
        <Typography variant="h2" className="mb-2" color="black">
          Jelajahi Destinasi <span class="text-[#1EB47D]">Impianmu</span>
        </Typography>
        
        <Typography variant="h3" className="font-normal text-blue-gray-600 -mt-3">
          Rekomendasi Wisata Personal dengan AI!
        </Typography>
      </CardBody>
    </Card>
  );
}

FeatureCard.defaultProps = {
  color: "blue",
};

FeatureCard.propTypes = {
  color: PropTypes.oneOf([
    "blue-gray",
    "gray",
    "brown",
    "deep-orange",
    "orange",
    "amber",
    "yellow",
    "lime",
    "light-green",
    "green",
    "teal",
    "cyan",
    "light-blue",
    "blue",
    "indigo",
    "deep-purple",
    "purple",
    "pink",
    "red",
  ]),
  icon: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.node.isRequired,
};

FeatureCard.displayName = "/src/widgets/layout/feature-card.jsx";

export default FeatureCard;
