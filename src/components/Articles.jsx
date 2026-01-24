import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ExpandableArticle = ({ title, intro, children }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <article style={{ marginBottom: '2rem' }}>
      <h2>{title}</h2>
      <p>{intro}</p>
      <AnimatePresence initial={false}>
        {isExpanded && (
          <motion.div
            key="content"
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { opacity: 1, height: "auto" },
              collapsed: { opacity: 0, height: 0 }
            }}
            transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
            style={{ overflow: 'hidden' }}
          >
            <div style={{ paddingTop: '20px' }}>
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <button 
        onClick={() => setIsExpanded(!isExpanded)}
        style={{ marginTop: '10px', cursor: 'pointer' }}
      >
        {isExpanded ? 'Pokaż mniej' : 'Zobacz więcej'}
      </button>
    </article>
  );
};

export default function Articles() {
  return (
    <div className="articles">
      <ExpandableArticle 
        title="Koniec z darmowym korzystaniem z gruntów! Przełomowe stanowisko Sądu Najwyższego."
        intro="Właściciele nieruchomości od lat toczą nierówną walkę z gigantami energetycznymi, gazowymi czy spółkami komunalnymi. Główną bronią przedsiębiorstw przesyłowych, pozwalającą unikać płacenia za słupy i rurociągi, był zarzut zasiedzenia. Jednak postanowienie Sądu Najwyższego z dnia 24 lutego 2023 r. (sygn. akt III CZP 108/22) fundamentalnie zmienia reguły gry na korzyść właścicieli gruntów."
      >
        <p>
          Sąd Najwyższy sformułował tezę, która może okazać się &quot;atomowym argumentem&quot; w Twojej
          sprawie: <b>&quot;Przed nowelizacją Kodeksu cywilnego wprowadzającą służebność przesyłu nie
          mógł biec termin zasiedzenia prawa odpowiadającego treściowo tej służebności.&quot</b>;
        </p>
        <p>
          Co to oznacza w praktyce? Instytucja służebności przesyłu została wprowadzona do
          polskiego prawa dopiero 3 sierpnia 2008 roku. Zgodnie z tym orzeczeniem, czas posiadania
          infrastruktury przed tą datą nie może być wliczany do okresu zasiedzenia. Biorąc pod uwagę, że do zasiedzenia w złej wierze potrzeba 30 lat, termin ten - liczony dopiero od 2008 roku - <b>nie mógł jeszcze upłynąć.</b>
        </p>
        <p>
          Co to oznacza w praktyce? Instytucja służebności przesyłu została wprowadzona do polskiego prawa dopiero 3 sierpnia 2008 roku. Zgodnie z tym orzeczeniem, czas posiadania infrastruktury przed tą datą nie może być wliczany do okresu zasiedzenia. Biorąc pod uwagę, że do zasiedzenia w złej wierze potrzeba 30 lat, termin ten - liczony dopiero od 2008 roku - <b>nie mógł jeszcze upłynąć.</b>
        </p>
        <p>
          To orzeczenie wytrąca firmom argumenty z ręki i oznacza, że najprawdopodobniej korzystają one z Twojej działki <b>bezprawnie.</b>
        </p>
        <p>
          <b>Dwa potężne roszczenia finansowe</b> Dzięki korzystnej linii orzeczniczej otwierają się przed Tobą realne możliwości uzyskania pieniędzy:
        </p>
        <ol>
          <li>
            <b>Wynagrodzenie za bezumowne korzystanie z nieruchomości</b> - skoro firma nie zasiedziała służebności, to przez lata korzystała z Twojej własności bez tytułu prawnego. Masz prawo żądać zapłaty za 10 lat wstecz. W zależności od rodzaju infrastruktury (linie WN, gazociągi), kwoty te mogą sięgać nawet kilkudziesięciu tysięcy złotych.
          </li>
          <li>
            <b>Ustanowienie służebności przesyłu za wynagrodzeniem</b> - możesz wymusić
            uregulowanie sytuacji na przyszłość. Sąd ustali odpowiednie wynagrodzenie (często w formie jednorazowej, wysokiej rekompensaty) za to, że urządzenia obniżają wartość Twojej działki i ograniczają możliwość jej zabudowy.
          </li>
        </ol>
        <p>
          <b>Nie rezygnuj ze swoich praw</b> Jeśli zakład energetyczny odmówił Ci wypłaty, powołując się na stare czasy - ta argumentacja właśnie straciła rację bytu. Twoja pozycja negocjacyjna jest teraz silniejsza niż kiedykolwiek.
        </p>
        <p>
          <b>Skontaktuj się z naszą Kancelarią.</b> Specjalizujemy się w sporach z przedsiębiorstwami przesyłowymi. Bezpłatnie przeanalizujemy Twoją sytuację w świetle orzeczenia III CZP 108/22 i pomożemy Ci wywalczyć należne odszkodowanie.
        </p>
      </ExpandableArticle>

      <ExpandableArticle 
        title="Wyrok Trybunału Konstytucyjnego P 10/16: Koniec mitu o zasiedzeniu. Czas na walkę o odszkodowania!"
        intro="Dnia 2 grudnia 2025 r. Trybunał Konstytucyjny wydał orzeczenie (sygn. akt P 10/16), które stanowi punkt zwrotny w sporach na linii właściciele nieruchomości - przedsiębiorstwa przesyłowe. W wyroku tym Trybunał ostatecznie przeciął wieloletni spór prawny, orzekając na korzyść obywateli."
      >
        <p>
          Przez lata giganci energetyczni, gazowi czy wodociągowi unikali płacenia za korzystanie z
          prywatnych działek, twierdząc, ze mają do niej prawo poprzez zasiedzenie. Twierdzili, że
          okres posiadania infrastruktury w latach 70., 80. czy 90. wlicza się do czasu potrzebnego do
          nabycia praw. Wyrok P 10/16 wytrąca im ten argument z ręki. Skoro przepisy o służebności
          przesyłu weszły w życie dopiero 3 sierpnia 2008 roku, a okresów wcześniejszych nie można
          doliczać - terminy zasiedzenia w wielu przypadkach biegną dopiero od kilkunastu lat,
          podczas gdy do zasiedzenia służebności przesyłu co do zasady konieczny jest upływ 30 lat.
        </p>
        <p><b>
          To oznacza, że infrastruktura na Twojej działce najprawdopodobniej znajduje się tam bez tytułu prawnego.
        </b></p>
        <p><b>
          Otwarta droga do dwóch roszczeń finansowych:
        </b></p>
        <p>
          Dzięki wyrokowi TK Twoja pozycja jest silniejsza niż kiedykolwiek. Możesz skutecznie domagać się:
        </p>
        <ol>
          <li>
            <b>Wynagrodzenia za bezumowne korzystanie z nieruchomości</b> - masz prawo żądać zapłaty za 10 lat wstecz. Skoro przedsiębiorstwo nie może zasłonić się skutecznym zasiedzeniem, oznacza to, że przez ostatnią dekadę korzystało z Twojego mienia bezprawnie. Kwoty te mogą sięgać od kilku do kilkudziesięciu tysięcy złotych, w zależności od rodzaju infrastruktury i wartości gruntu.
          </li>
          <li>
            <b>Ustanowienia służebności przesyłu za wynagrodzeniem</b> - to roszczenie reguluje stan na przyszłość. Sąd (lub ugoda) określi zasady dostępu służb do urządzeń oraz wysokość jednorazowego lub okresowego wynagrodzenia dla Ciebie za to, że rury czy linie energetyczne obniżają wartość inwestycyjną Twojej działki.
          </li>
        </ol>
        <p><b>Nie wierz w odmowne decyzje przesłane przed 2025 rokiem</b></p>
        <p>
          Jeśli kiedykolwiek otrzymałeś pismo, w którym przedsiębiorstwo przesyłowe odmówiło zapłaty, powołując się na zasiedzenie - ta decyzja jest już nieaktualna w świetle wyroku P 10/16. Teraz prawo stoi po Twojej stronie.
        </p>
        <p>
          <b>Skontaktuj się z naszą Kancelarią.</b> Specjalizujemy się w sporach z przedsiębiorstwami przesyłowymi. Bezpłatnie przeanalizujemy dokumentację Twojej nieruchomości, sprawdzimy historię posadowienia urządzeń i ocenimy szanse na uzyskanie wysokiego odszkodowania w oparciu o nowe realia prawne. Nie pozwól, by Twoja własność była obciążana za darmo!
        </p>
      </ExpandableArticle>
    </div>
  );
}