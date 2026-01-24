import { useParams } from "react-router-dom";
import Header from "../components/Header";
import Form from "../components/Form";
import Intro from "../components/Intro";
import Description from "../components/Description";
import Articles from "../components/Articles";
import List from "../components/List";
import Contact from "../components/Contact";
import Links from "../components/Links";
import Footer from "../components/Footer";
import cityNames from "../data/cities.js";

export default function CityPage() {
  const { city } = useParams();
  if (!city) {
    return <h1>Strona Kraków</h1>;
  }
  const cityName = cityNames[city];

  if (!cityName) {
    return <h1>Nie znaleziono miasta</h1>;
  }

  return (
  <>
    <Header cityName={cityName} />
    <Intro />
    <Articles />
    <Contact />
    <Links />
    <Footer />
  </>
  );
}