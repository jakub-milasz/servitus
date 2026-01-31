import Title from "./Title";
import Form from "./Form";

export default function Header({ cityName }) {
  return (
    <header>
      <Title cityName={cityName} />
      <Form />
    </header>
  );
}