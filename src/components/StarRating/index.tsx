import { FaStar } from "react-icons/fa6";
import { FaRegStar } from "react-icons/fa6";
import "./index.scss";

export default function StarRating({ vote_average }: { vote_average: number }) {
  const numStarts = Math.round(vote_average / 2);
  const fullStarts = [];
  const emptyStarts = [];
  for (let i = 0; i < 5; i++) {
    if (i < numStarts) {
      fullStarts.push(i);
    } else {
      emptyStarts.push(i);
    }
  }
  return (
    <div className="movie-rate">
      {fullStarts.map((i) => (
        <FaStar key={i} />
      ))}
      {emptyStarts.map((i) => (
        <FaRegStar key={i} />
      ))}
    </div>
  );
}
