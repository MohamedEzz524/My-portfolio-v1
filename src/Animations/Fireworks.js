import Lottie from "lottie-react";
import fireworksAnimation from "../images/Animations/fireworks.json";

export default function Fireworks() {
  return (
    <div style={{ width: "300px", height: "250px", margin: "0 auto" }}>
      <Lottie animationData={fireworksAnimation} loop={true} />
    </div>
  );
}
