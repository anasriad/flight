
import ParisImg from "../assets/Paris.jpg";
import MadridImg from "../assets/Madrid.jpg";
import NewYorkImg from "../assets/New York.jpg";
import LondonImg from "../assets/London.jpg";
import DelhiImg from "../assets/Delhi.jpg";
import MonacoImg from "../assets/Monaco.jpg";
import AgadirImg from "../assets/Agadir.jpg";




import type { FlightDetails } from "./Types";

export const FlightCardsContent: FlightDetails[] = [
  {
    Destination: "Paris, France",
    Description:
      "Paris, the City of Light, is famous for its iconic landmarks, charming streets, world-class art, and romantic atmosphere.",
    Price: 800,
    Image: ParisImg,
    ImageAlt: "Aerial view of the city of Paris at night",
    ratings: 4.5,
  },
  {
    Destination: "Madrid, Spain",
    Description:
      "Madrid, Spain’s vibrant capital, is known for its lively squares, stunning architecture, world-class museums, and tapas culture.",
    Price: 750,
    Image: MadridImg,
    ImageAlt: "View of Madrid city",
    ratings: 4.3,
  },
  {
    Destination: "New York, USA",
    Description:
      "New York City, the Big Apple, is famous for its iconic skyline, Broadway theaters, Central Park, and bustling urban energy.",
    Price: 1200,
    Image: NewYorkImg,
    ImageAlt: "New York City skyline",
    ratings: 4.7,
  },
  {
    Destination: "London, UK",
    Description:
      "London is a city where history meets modernity, with iconic landmarks like the Tower of London, Big Ben, and the British Museum.",
    Price: 950,
    Image: LondonImg,
    ImageAlt: "London cityscape with Big Ben",
    ratings: 4.6,
  },
  {
    Destination: "Delhi, India",
    Description:
      "Delhi is a bustling metropolis rich in history and culture, famous for its monuments, vibrant markets, and diverse cuisine.",
    Price: 700,
    Image: DelhiImg,
    ImageAlt: "Historic architecture in Delhi",
    ratings: 4.2,
  },
  {
    Destination: "Monaco, France",
    Description:
      "Monaco, a glamorous city-state on the French Riviera, is known for luxury casinos, yachts, and the annual Grand Prix.",
    Price: 1100,
    Image: MonacoImg,
    ImageAlt: "Monte Carlo harbor, Monaco",
    ratings: 4.4,
  },
  {
    Destination: "Agadir, Morocco",
    Description:
      "Agadir is a seaside city in Morocco, known for its beaches, sunny climate, and vibrant resort life.",
    Price: 650,
    Image: AgadirImg,
    ImageAlt: "Beachfront of Agadir",
    ratings: 4.1,
  },

];


