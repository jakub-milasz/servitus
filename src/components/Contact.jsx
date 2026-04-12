export default function Contact() {
  return (
    <div className="contact">
      <div className="contact-content">
        <div className="contact-row">
          <div data-aos="fade-right" className="contact-column">
            <p><b>Jak możemy pomóc?</b></p>
            <ul>
              <li>analizujemy stan prawny nieruchomości</li>
              <li>sprawdzamy księgi wieczyste i dokumentację</li>
              <li>ustalamy zasadność roszczeń</li>
              <li>negocjujemy z przedsiębiorstwami przesyłowymi</li>
              <li>reprezentujemy klientów przed sądem</li>
            </ul>
          </div>
          <div data-aos="fade-left" className="contact-column">
            <p><b>Skontaktuj się z nami, aby dowiedzieć się:</b></p>
            <ul>
              <li>czy przysługuje Ci wynagrodzenie za służebność przesyłu,</li>
              <li>czy możliwe jest uregulowanie stanu prawnego,</li>
              <li>jakie działania będą dla Ciebie najkorzystniejsze.</li>
            </ul>
          </div>
        </div>
        <div data-aos="fade-up" className="contact-bottom">
          <p>
            Każdą sprawę traktujemy indywidualnie, dążąc do maksymalnej ochrony interesów właściciela nieruchomości.
          </p>
          <a href='#form'>Skorzystaj z bezpłatnej analizy</a>
          <p>Pierwsza analiza jest bezpłatna i niezobowiązująca.</p>
        </div>
      </div>
    </div>
  );
}