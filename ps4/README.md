# PS 4 - 16.01.2022 Operacje na danych

W pliku vehicles.js znajduje się lista pojazdów, która będzie podstawą do poniższych zadań. Struktura danych dla przykładowego pojazdu wygląda jak poniżej:
  ```
  {
      type: 'car', // występują 2 typy 'car' oraz 'motorbike'
      brand: 'Skoda',
      model: 'Ocatavia',
      engineType: 'petrol' // występują 3 typy silników 'petrol' | 'hybrid' | 'electric'
  }
  ```

# Zadanie 1 - wyświetlenie danych w konsoli
W komponencie App.js wczytaj dane z pliku vehicles.js, przypisz je do stanu (nazwijmy go "resultsToDisplay"), a następnie wypisz w konsoli.

# Zadanie 2 - wyświetlenie listy pojazdów w komponencie Results (funkcja .map)
Wyświetl w komponencie Results listę pojazdów w postaci listy nienumerowanej <ul>
  ```
 <ul>
    <li>...</li>
    <li>...</li>
        ...
 </ul>
  ```
  w formacie ${marka} - ${model}, aby uzyskać efekt jak poniżej
```
- Skoda Octavia
- Mazda 6
...
  ```
  Lista pojazdów powinna zostać przekazana jako właściwość (props o nazwie "vehiclesToDisplay") w komponencie Results (komponent nadrzędny App przekazuje pojazdy dla komponentu Results), poczym Results wyświetla otrzymane pojazdy w swojej metodzie render.
# Zadanie 3 - Filtr po nazwie marki (funkcje [.find](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find) [.includes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes))
W komponencie Header będą znajdować się filtry za pomocą których będziemy wybierać które pojazdy powinny zostać wyświetlone. W ramach tego zadania zróbmy filtrowanie po nazwie marki (brand).
Będziemy do tego potrzebowali:
- pola tekstowego - <input>
- przycisku "Wyszukaj" - <button> Wyszukaj </button>

Wyszukiwanie powinno działać również dla fragmentu tesktu np. dla frazy "da" powinny sięwyświetlićpojazdy marki "Skoda" oraz "Honda" itp.

W komponencie Header utwórz input typu text (pole tekstowe) oraz przycisk z nazwą "Szukaj"
Wyszukiwarka powinna filtrować wyniki po nazwie marki pojazdu, wyszukanie powinno działać również po fragmencie tekstu, zatem dla frazy "da" powinny się wyświetlić pojazdy marki "Skoda" oraz "Mazda" itp.

Funkcjonalności dodatkowe (zalecane do zrobienia po zadaniu 7):
- wciśnięcie przycisku "Enter" po wpisaniu frazy powinno uruchomić wyszukiwanie
- ignorowanie dużych / małych liter podczas wyszukiwania
- wyszukiwanie po marce lub modelu pojazdu

# Zadanie 4 - Filtr po typie pojazdu
Do filtrów w komponencie Header dodaj nowy filtr "Tylko samochody", który będzie inputem typu checkbox. Potrzebny będzie również nowy stan "searchOnlyCars", który będzie przyjmował wartości true / false
```
  <p> Tylko samochody </p>
  <input type='checkbox' onChange={this.handleOnlyCarsChange} value={this.state.searchOnlyCars} ></input>
```
Zaznaczenie tego pola i wciśnięcie "Szukaj" powinno filtrować tylko samochody. Filtr ten powinien "współpracować" z filtrem z poprzedniego zadania.

# Zadanie 5 - Filtr po typie silnika
Do filtrów w komponencie Header dodaj nowy filtr "Typ silnika", który będzie dropdownem z wszystkimi dostępnymi opcjami typów silnika. Powinieneś zatem przeszukać wszystkie pojazdy (listę obiektów) oraz na jej podstawie utworzyć unikatową listę typów silników (nazwijmy je "uniqueVehicleEngineTypes").
Dropdown reprezentuje znacznik < select > a poszczególną opcję do wyboru < option >, zatem lista będzie wyglądała jak poniżej.

```
<select onChange={...}>
    {uniqueVehicleEngineTypes.map((engineType) =><option key={engineType} value={engineType}>{engineType}</option>)}
</select>
```
Wybranie elementu z listy i kliknięcie na "wyszukaj" powinno pokazać tylko pasujące wyniki. Filtr ten powinien "współpracować" z filtrami z poprzednich zadań.
Lista powinna zawierać również pozycję 'All types', która będzie pierwszą wartością na liście a zarazem będzie domyślnie zaznaczona.

Podsumowanie:
Dzięki dynamicznemu mapowaniu typów silników nie musimy martwić się o zgodność naszego rozwiązania w przypadku dodania lub usunięcia nowych rodzajów silnika.
Dodaj do listy z pliku vehicles.js nowy pojazd z silnikiem wodorowym (patrz poniżej - zupełnie nowa pozycja) i zobacz jak zachowuje się aplikacja. W podobny sposób możesz usunąć np pojazdy hybrydowe.
```
  {
    type: "car",
    brand: "Toyota",
    model: "Mirai",
    engineType: "hydrogen",
  },
```
Gdybyśmy zamiast mapowania podali listę wartości 'na sztywno', zachowanie aplikacji nie było by zgodne z otrzymywanymi danymi (wystąpiły by brakujące lub nadmiarowe opcje na liście).

# Zadanie 6 - Reset filtrów (react setState callback)
Do sekcji filtrów dodaj przycisk "Resetuj filtry", który na zdarzenie onClick będzie wywoływał funkcję handleResetFilters(). Funkcja ta ma za zadanie ustawić stany początkowe dla filtrów oraz wyświetlić na nowo wyniki wyszukiwania.
```
    handleResetFilters = () => {
        this.setState({
            searchPhrase: '',
            searchOnlyCars: false,
            searchEngineType: ''
        })
        this.filterVehicles();
    }
```
Sprawdź zachowanie aplikacji, czy działa poprawnie ?
Jeżeli nie do końca to mamy problem 'wyścigu', ponieważ funkcja setState (ogólnie stanowość w React) jest asynchroniczna - oznacza to nic innego jak brak pewności że wszystko zadziała jak powinno. W powyższym przypadku funkcja this.filterVehicles() zostaje wywoływana przed ustawieniem stanów co powoduje niechciane zachowanie. Aby rozwiązać taki problem możemy się posłużyć rozwiązaniem typu [setState callback](https://upmostly.com/tutorials/how-to-use-the-setstate-callback-in-react), zatem wymusić wywołanie filterVehicles tuż po ustawieniu stanów.
```
    handleResetFilters = () => {
        this.setState({
            searchPhrase: '',
            searchOnlyCars: false,
            searchEngineType: ''
        },() => {
            this.filterVehicles();
        });
    }
```
# Zadanie 7 - Filtry dynamiczne - Usuń przycisk szukaj
Celem tego zadania jest usunięcie [zakomentowanie] przycisku "Szukaj" przy zachowaniu funkcjonalności filtrowania. Zmiana któregokolwiek z filtrów powinna automatycznie odświeżać listę wyników (w praktyce będzie to wywołanie metody podpiętej pod przycisk po każdej zmianie inputa [onChange])
