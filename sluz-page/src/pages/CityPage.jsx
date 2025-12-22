import { useParams } from "react-router-dom";
import Header from "../components/Header";
import Form from "../components/Form";
import Links from "../components/Links";
import Footer from "../components/Footer";

const cityNames = {
  krakow: "Kraków",
  warszawa: "Warszawa",
  katowice: "Katowice",
  wroclaw: "Wrocław",
  poznan: "Poznań",
};

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
    <Form />
    <Links />
    <Footer />
  </>
  );
}