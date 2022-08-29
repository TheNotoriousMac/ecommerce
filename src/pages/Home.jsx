import Navbar from "../components/Navbar/Navbar";
import Announcement from "../components/Announcement/Announcement";
import Slider from "../components/Slider/Slider";

const Home = () => {
  return (
    <div>
        <Announcement />
        <Navbar />
        <Slider />
    </div>
  );
}

export default Home;