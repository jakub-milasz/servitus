export default function Intro() {
  return (
    <div className="intro">
      <div className="intro-content">
        <div className="page">
          <section className="hero">
            <h1>Masz urządzenia przesyłowe na swojej nieruchomości?</h1>
            <p className="subtitle">
              Sprawdź, jakie masz prawa i czy przysługuje Ci wynagrodzenie.
            </p>
          </section>

          <section className="card">
            <h2>Dlaczego to ważne?</h2>
            <p>
              Linia wysokiego napięcia, gazociąg lub rurociąg na działce może
              znacząco ograniczać sposób korzystania z nieruchomości oraz
              obniżać jej wartość.
            </p>
          </section>

          <section className="card">
            <h2>Służebność przesyłu – co to oznacza?</h2>
            <p>
              To prawo pozwalające przedsiębiorstwu korzystać z cudzej
              nieruchomości w zakresie niezbędnym do eksploatacji urządzeń. W
              praktyce często bywa tak, że urządzenia posadowiono bez zgody
              właściciela i bez wynagrodzenia.
            </p>
          </section>

          <section className="card highlight">
            <h2>Możesz dochodzić swoich praw, jeśli:</h2>
            <ul>
              <li>nie podpisywałeś umowy</li>
              <li>nie otrzymujesz wynagrodzenia</li>
              <li>nie możesz swobodnie korzystać z działki</li>
              <li>wartość nieruchomości spadła</li>
            </ul>
          </section>

          <section className="cta">
            <h2>Sprawdź swoją sytuację</h2>
            <button
              onClick={() =>
                document
                  .getElementById("form")
                  .scrollIntoView({ behavior: "smooth" })
              }
            >
              Skontaktuj się z nami
            </button>
          </section>
        </div>
      </div>
    </div>
  );
}
