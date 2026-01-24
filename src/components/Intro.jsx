import Description from "./Description";

export default function Intro() {
  return (
    <div className="intro">
      <div className="intro-content">
        <p>Masz urządzenia przesyłowe na swojej nieruchomości?</p>
        <p>Sprawdź, jakie masz prawa</p>
        <p>
          Czy na Twojej działce znajduje się linia wysokiego napięcia, gazociąg, rurociąg lub inne urządzenie przesyłowe?
          Obecność takiej infrastruktury może znacząco ograniczać sposób korzystania z nieruchomości oraz wpływać na jej wartość.
        </p>
        <p>
          Nasza kancelaria specjalizuje się w sprawach dotyczących służebności przesyłu. Pomagamy właścicielom gruntów ustalić, czy przedsiębiorstwo przesyłowe korzysta z nieruchomości zgodnie z prawem oraz czy przysługuje im wynagrodzenie, odszkodowanie lub uregulowanie stanu prawnego.
        </p>
        <Description />
      </div>
    </div>
  );
}

