# e-Karta Zdrowia

## Development
Pracę nad aplikacją zaleca się wykonywać w zamkniętym środowisku przygotowanym na podstawie **Docker** oraz **Docker Compose**.

Informacje na temat instalacji środowiska Docker oraz Composer można znaleźć pod adresami: https://docs.docker.com/get-docker/, oraz https://docs.docker.com/compose/.

### Uruchamianie kontenerów
Uruchamianie kontenerów aplikacji można wykonać poprzez uruchomienie skryptu bash znajdującego się w głównym katalogu aplikacji: `./start.sh`.

Analogicznie do wyłączenia kontenerów aplikacji można skorzystać ze skryptu: `./stop.sh`.

Domyślnie podczas wykonania skryptu uruchomieniowego zostaje uruchomiony kontener przeznaczony do pracy nad aplikacją webową (Angular).

### Konfiguracja Husky
Inicjacja Husky powinna odbywać się **poza kontenerem** aplikacji (na lokalnej maszynie developera). Do jego instalacji można skorzystać z polecenia: `npm run husky:install`, którego zadaniem będzie przygotowanie hooków.

Po instalacji każdy commit do repozytorium będzie poprzedzony sprawdzeniem poprawności kodu aplikacji oraz jego formatowaniem. 

### Przydatne polecenia
 1. `npm start` - uruchomienie aplikacji w trybie developerskim,
 2. `npm run eslint:fix` - uruchomienie Eslint sprawdzającego poprawność kodu oraz naprawienie możliwych do rozwiązania problemów,
 3. `npm run format` - uruchamianie Prettier służącego do formatowania kodu aplikacji,
