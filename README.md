# GSO — Geospatial Operations / site v0.1

Statyczne repo strony GSO.

## Założenie tej wersji

- Desktopowy welcome site korzysta **1:1 z zaakceptowanej grafiki bazowej**.
- Na grafice znajdują się wyłącznie przezroczyste obszary klikalne prowadzące do podstron.
- Widok mobilny jest złożony wyłącznie z cropów tej samej zaakceptowanej grafiki — bez zmiany języka wizualnego.
- Poziom niżej to proste, lekkie podstrony: Knowledge / Tools / Services / Projects.
- Brak frameworków i procesu build — czysty HTML + CSS + JS.
- Struktura pozostaje przyjazna do późniejszego podpięcia eksportów qgis2web.

## Uruchomienie

Najprościej otworzyć `index.html` w przeglądarce.

Dla testów przez lokalny serwer:

```bash
python -m http.server 8080
```

i wejść na `http://localhost:8080`.

## Struktura

```text
index.html
css/style.css
js/main.js
images/
  welcome-desktop.jpg
  mobile/
  reference/approved-concept.png
pages/
  knowledge.html
  tools.html
  services.html
  projects.html
data/
```

## Następny etap

Można podpiąć konkretną treść, repozytoria narzędzi, formularz kontaktowy oraz WebGIS/qgis2web w sekcji Projects bez przebudowy strony startowej.
