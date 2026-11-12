const data = [
    {
        name: "INF.03",
        fullName: "Tworzenie i administrowanie stronami i aplikacjami internetowymi oraz bazami danych",
        questions: [
            {
                id: 0,
                title: "Który z atrybutów znacznika `<img>` w HTML odpowiada za tekst alternatywny?",
                answers: [{ id: 0, text: "`title`" }, { id: 1, text: "`src`" }, { id: 2, text: "`alt`" }, { id: 3, text: "`longdesc`" }],
                goodAnswer: 2
            },
            {
                id: 1,
                title: "W języku PHP, aby połączyć się z bazą danych MySQL, należy użyć funkcji:",
                answers: [{ id: 0, text: "`mysqli_connect()`" }, { id: 1, text: "`mysql_open()`" }, { id: 2, text: "`db_connect()`" }, { id: 3, text: "`connect_mysql()`" }],
                goodAnswer: 0
            },
            {
                id: 2,
                title: "Która właściwość CSS służy do zmiany koloru tła elementu?",
                answers: [{ id: 0, text: "`color`" }, { id: 1, text: "`bgcolor`" }, { id: 2, text: "`background-color`" }, { id: 3, text: "`back-color`" }],
                goodAnswer: 2
            },
            {
                id: 3,
                title: "W języku SQL polecenie służące do usuwania danych z tabeli to:",
                answers: [{ id: 0, text: "`REMOVE`" }, { id: 1, text: "`DROP`" }, { id: 2, text: "`DELETE`" }, { id: 3, text: "`TRUNCATE`" }],
                goodAnswer: 2
            },
            {
                id: 4,
                title: "Który symbol w języku JavaScript oznacza operator logiczny 'I' (AND)?",
                answers: [{ id: 0, text: "`||`" }, { id: 1, text: "`&&`" }, { id: 2, text: "`!`" }, { id: 3, text: "`&`" }],
                goodAnswer: 1
            },
            {
                id: 5,
                title: "Jaki jest domyślny port dla protokołu HTTP?",
                answers: [{ id: 0, text: "21" }, { id: 1, text: "443" }, { id: 2, text: "80" }, { id: 3, text: "110" }],
                goodAnswer: 2
            },
            {
                id: 6,
                title: "Który znacznik HTML służy do utworzenia listy numerowanej?",
                answers: [{ id: 0, text: "`<ul>`" }, { id: 1, text: "`<li>`" }, { id: 2, text: "`<ol>`" }, { id: 3, text: "`<list>`" }],
                goodAnswer: 2
            },
            {
                id: 7,
                title: "Jakie rozszerzenie ma plik kaskadowych arkuszy stylów?",
                answers: [{ id: 0, text: "`.css`" }, { id: 1, text: "`.cas`" }, { id: 2, text: "`.style`" }, { id: 3, text: "`.html`" }],
                goodAnswer: 0
            },
            {
                id: 8,
                title: "W SQL klauzula `ORDER BY` służy do:",
                answers: [{ id: 0, text: "Grupowania wyników" }, { id: 1, text: "Łączenia tabel" }, { id: 2, text: "Sortowania wyników" }, { id: 3, text: "Filtrowania wyników" }],
                goodAnswer: 2
            },
            {
                id: 9,
                title: "Która z metod obiektu `XMLHttpRequest` wysyła żądanie do serwera?",
                answers: [{ id: 0, text: "`open()`" }, { id: 1, text: "`get()`" }, { id: 2, text: "`send()`" }, { id: 3, text: "`post()`" }],
                goodAnswer: 2
            },
            {
                id: 10,
                title: "W CSS, aby tekst był pogrubiony, należy użyć właściwości `font-weight` z wartością:",
                answers: [{ id: 0, text: "`italic`" }, { id: 1, text: "`bold`" }, { id: 2, text: "`underline`" }, { id: 3, text: "`heavy`" }],
                goodAnswer: 1
            },
            {
                id: 11,
                title: "Zmienne w języku PHP zaczynają się od znaku:",
                answers: [{ id: 0, text: "`#`" }, { id: 1, text: "`&`" }, { id: 2, text: "`$`" }, { id: 3, text: "`@`" }],
                goodAnswer: 2
            },
            {
                id: 12,
                title: "Który z formatów plików graficznych obsługuje przezroczystość?",
                answers: [{ id: 0, text: "JPG" }, { id: 1, text: "BMP" }, { id: 2, text: "PNG" }, { id: 3, text: "TIFF" }],
                goodAnswer: 2
            },
            {
                id: 13,
                title: "W SQL funkcja agregująca `COUNT()` służy do:",
                answers: [{ id: 0, text: "Sumowania wartości" }, { id: 1, text: "Zliczania liczby wierszy" }, { id: 2, text: "Obliczania średniej" }, { id: 3, text: "Znajdowania wartości maksymalnej" }],
                goodAnswer: 1
            },
            {
                id: 14,
                title: "Jak w JavaScript zdefiniować funkcję o nazwie `mojaFunkcja`?",
                answers: [{ id: 0, text: "`function mojaFunkcja()`" }, { id: 1, text: "`function:mojaFunkcja()`" }, { id: 2, text: "`new function mojaFunkcja()`" }, { id: 3, text: "`def mojaFunkcja()`" }],
                goodAnswer: 0
            },
            {
                id: 15,
                title: "Który model barw oparty jest na zjawisku mieszania światła (synteza addytywna)?",
                answers: [{ id: 0, text: "CMYK" }, { id: 1, text: "HSV" }, { id: 2, text: "HSL" }, { id: 3, text: "RGB" }],
                goodAnswer: 3
            },
            {
                id: 16,
                title: "Który znacznik HTML jest używany do osadzania kodu JavaScript bezpośrednio w dokumencie?",
                answers: [{ id: 0, text: "`<javascript>`" }, { id: 1, text: "`<scripting>`" }, { id: 2, text: "`<script>`" }, { id: 3, text: "`<js>`" }],
                goodAnswer: 2
            },
            {
                id: 17,
                title: "W CSS selektor `#identyfikator` odnosi się do elementu o określonym:",
                answers: [{ id: 0, text: "Atrybucie `class`" }, { id: 1, text: "Znaczniku" }, { id: 2, text: "Atrybucie `id`" }, { id: 3, text: "Atrybucie `name`" }],
                goodAnswer: 2
            },
            {
                id: 18,
                title: "Który typ danych w SQL służy do przechowywania krótkich ciągów znaków o zmiennej długości?",
                answers: [{ id: 0, text: "`INT`" }, { id: 1, text: "`TEXT`" }, { id: 2, text: "`VARCHAR`" }, { id: 3, text: "`CHAR`" }],
                goodAnswer: 2
            },
            {
                id: 19,
                title: "Jaki wynik da działanie PHP?\n\n```\necho 5 % 2;\n```",
                answers: [{ id: 0, text: "2.5" }, { id: 1, text: "2" }, { id: 2, text: "1" }, { id: 3, text: "0" }],
                goodAnswer: 2
            },
            {
                id: 20,
                title: "W dokumencie HTML5 znacznik `<header>` reprezentuje:",
                answers: [{ id: 0, text: "Nagłówek najwyższego stopnia (`h1`)" }, { id: 1, text: "Główną treść strony" }, { id: 2, text: "Sekcję wprowadzającą lub zestaw linków nawigacyjnych" }, { id: 3, text: "Stopkę strony" }],
                goodAnswer: 2
            },
            {
                id: 21,
                title: "Która jednostka CSS jest relatywna względem rozmiaru czcionki elementu nadrzędnego?",
                answers: [{ id: 0, text: "`px`" }, { id: 1, text: "`cm`" }, { id: 2, text: "`em`" }, { id: 3, text: "`pt`" }],
                goodAnswer: 2
            },
            {
                id: 22,
                title: "W języku SQL polecenie `UPDATE` służy do:",
                answers: [{ id: 0, text: "Tworzenia nowej tabeli" }, { id: 1, text: "Wstawiania nowych wierszy" }, { id: 2, text: "Modyfikowania istniejących danych" }, { id: 3, text: "Usuwania bazy danych" }],
                goodAnswer: 2
            },
            {
                id: 23,
                title: "Jakie zdarzenie w JavaScript zostanie wywołane po kliknięciu myszką na element?",
                answers: [{ id: 0, text: "`onmouseover`" }, { id: 1, text: "`onchange`" }, { id: 2, text: "`onclick`" }, { id: 3, text: "`onsubmit`" }],
                goodAnswer: 2
            },
            {
                id: 24,
                title: "Który z poniższych protokołów służy do bezpiecznego przesyłania plików?",
                answers: [{ id: 0, text: "FTP" }, { id: 1, text: "SFTP" }, { id: 2, text: "HTTP" }, { id: 3, text: "SMTP" }],
                goodAnswer: 1
            },
            {
                id: 25,
                title: "Atrybut `action` w znaczniku `<form>` określa:",
                answers: [{ id: 0, text: "Metodę przesyłania danych" }, { id: 1, text: "Nazwę formularza" }, { id: 2, text: "Sposób kodowania znaków" }, { id: 3, text: "Adres URL, gdzie mają zostać wysłane dane" }],
                goodAnswer: 3
            },
            {
                id: 26,
                title: "W CSS właściwość `float` może przyjąć wartość:",
                answers: [{ id: 0, text: "`middle`" }, { id: 1, text: "`center`" }, { id: 2, text: "`left`" }, { id: 3, text: "`top`" }],
                goodAnswer: 2
            },
            {
                id: 27,
                title: "Jak nazywa się klucz w bazie danych, który jednoznacznie identyfikuje rekord?",
                answers: [{ id: 0, text: "Klucz obcy" }, { id: 1, text: "Klucz główny (podstawowy)" }, { id: 2, text: "Klucz unikalny" }, { id: 3, text: "Klucz zewnętrzny" }],
                goodAnswer: 1
            },
            {
                id: 28,
                title: "W PHP funkcja `include()` służy do:",
                answers: [{ id: 0, text: "Definiowania klas" }, { id: 1, text: "Dołączania zawartości innego pliku" }, { id: 2, text: "Łączenia się z serwerem FTP" }, { id: 3, text: "Wyświetlania błędów" }],
                goodAnswer: 1
            },
            {
                id: 29,
                title: "W JavaScript instrukcja `typeof` służy do:",
                answers: [{ id: 0, text: "Konwersji typu danych" }, { id: 1, text: "Tworzenia nowej zmiennej" }, { id: 2, text: "Sprawdzenia typu danych zmiennej" }, { id: 3, text: "Porównania dwóch wartości" }],
                goodAnswer: 2
            },
            {
                id: 30,
                title: "Znacznik `<title>` w dokumencie HTML powinien znajdować się wewnątrz sekcji:",
                answers: [{ id: 0, text: "`<body>`" }, { id: 1, text: "`<footer>`" }, { id: 2, text: "`<head>`" }, { id: 3, text: "`<nav>`" }],
                goodAnswer: 2
            },
            {
                id: 31,
                title: "W CSS właściwość\n\n```\nmargin: 10px 20px;\n```\n\nustawi marginesy:",
                answers: [{ id: 0, text: "Góra/dół 10px, lewy/prawy 20px" }, { id: 1, text: "Wszystkie na 10px" }, { id: 2, text: "Góra/dół 20px, lewy/prawy 10px" }, { id: 3, text: "Tylko górny 10px i dolny 20px" }],
                goodAnswer: 0
            },
            {
                id: 32,
                title: "Relacja, w której jeden rekord tabeli A odpowiada wielu rekordom tabeli B, to:",
                answers: [{ id: 0, text: "1:1" }, { id: 1, text: "N:1" }, { id: 2, text: "N:M" }, { id: 3, text: "1:N" }],
                goodAnswer: 3
            },
            {
                id: 33,
                title: "Który z operatorów PHP służy do konkatenacji (łączenia) ciągów znaków?",
                answers: [{ id: 0, text: "`+`" }, { id: 1, text: "`&`" }, { id: 2, text: "`.`" }, { id: 3, text: "`&&`" }],
                goodAnswer: 2
            },
            {
                id: 34,
                title: "W JavaScript metodą służącą do wypisania tekstu w oknie dialogowym jest:",
                answers: [{ id: 0, text: "`console.log()`" }, { id: 1, text: "`document.write()`" }, { id: 2, text: "`alert()`" }, { id: 3, text: "`print()`" }],
                goodAnswer: 2
            },
            {
                id: 35,
                title: "Który standard definiuje zasady dostępności treści internetowych dla osób z niepełnosprawnościami?",
                answers: [{ id: 0, text: "W3C" }, { id: 1, text: "WCAG" }, { id: 2, text: "ISO" }, { id: 3, text: "WIFI" }],
                goodAnswer: 1
            },
            {
                id: 36,
                title: "W HTML znacznik `<a>` z atrybutem `href` służy do tworzenia:",
                answers: [{ id: 0, text: "Akapitów" }, { id: 1, text: "Artykułów" }, { id: 2, text: "Hiperłączy" }, { id: 3, text: "Tabel" }],
                goodAnswer: 2
            },
            {
                id: 37,
                title: "W CSS właściwość\n\n```\ndisplay: none;\n```\n\npowoduje:",
                answers: [{ id: 0, text: "Ustawienie elementu jako przezroczystego" }, { id: 1, text: "Zmniejszenie elementu do minimum" }, { id: 2, text: "Ukrycie elementu i usunięcie go z układu strony" }, { id: 3, text: "Zablokowanie edycji elementu" }],
                goodAnswer: 2
            },
            {
                id: 38,
                title: "W języku SQL, aby usunąć całą tabelę wraz ze strukturą, należy użyć:",
                answers: [{ id: 0, text: "`DELETE TABLE`" }, { id: 1, text: "`DROP TABLE`" }, { id: 2, text: "`REMOVE TABLE`" }, { id: 3, text: "`ERASE TABLE`" }],
                goodAnswer: 1
            },
            {
                id: 39,
                title: "Która pętla w PHP wykona się przynajmniej raz, nawet jeśli warunek jest fałszywy?",
                answers: [{ id: 0, text: "`for`" }, { id: 1, text: "`while`" }, { id: 2, text: "`do...while`" }, { id: 3, text: "`foreach`" }],
                goodAnswer: 2
            },
            {
                id: 40,
                title: "Metoda DOM `getElementById()` służy do:",
                answers: [{ id: 0, text: "Pobrania wszystkich elementów danej klasy" }, { id: 1, text: "Usunięcia elementu o danym ID" }, { id: 2, text: "Zmiany identyfikatora elementu" }, { id: 3, text: "Pobrania pierwszego elementu o danym ID" }],
                goodAnswer: 3
            },
            {
                id: 41,
                title: "Format grafiki wektorowej, który można edytować w pliku tekstowym, to:",
                answers: [{ id: 0, text: "GIF" }, { id: 1, text: "EPS" }, { id: 2, text: "JPG" }, { id: 3, text: "SVG" }],
                goodAnswer: 3
            },
            {
                id: 42,
                title: "W HTML znacznik `<table>` zawiera wiersze definiowane przez:",
                answers: [{ id: 0, text: "`<td>`" }, { id: 1, text: "`<th>`" }, { id: 2, text: "`<tr>`" }, { id: 3, text: "`<tf>`" }],
                goodAnswer: 2
            },
            {
                id: 43,
                title: "W CSS właściwość `z-index` określa:",
                answers: [{ id: 0, text: "Szerokość elementu" }, { id: 1, text: "Stopień przezroczystości" }, { id: 2, text: "Kolejność nakładania się elementów" }, { id: 3, text: "Przybliżenie widoku" }],
                goodAnswer: 2
            },
            {
                id: 44,
                title: "W SQL operator `LIKE` służy do:",
                answers: [{ id: 0, text: "Porównywania liczb" }, { id: 1, text: "Sortowania danych" }, { id: 2, text: "Łączenia dwóch zapytań" }, { id: 3, text: "Wyszukiwania według wzorca znaków" }],
                goodAnswer: 3
            },
            {
                id: 45,
                title: "W PHP tablica asocjacyjna to taka, w której klucze:",
                answers: [{ id: 0, text: "Są zawsze liczbami całkowitymi" }, { id: 1, text: "Nie istnieją" }, { id: 2, text: "Są automatycznie inkrementowane" }, { id: 3, text: "Są nazwami (stringami)" }],
                goodAnswer: 3
            },
            {
                id: 46,
                title: "Która funkcja JavaScript służy do przekształcenia tekstu na liczbę całkowitą?",
                answers: [{ id: 0, text: "`toString()`" }, { id: 1, text: "`Math.round()`" }, { id: 2, text: "`parseInt()`" }, { id: 3, text: "`toNumber()`" }],
                goodAnswer: 2
            },
            {
                id: 47,
                title: "Walidacja strony WWW to proces:",
                answers: [{ id: 0, text: "Sprawdzania poprawności kodu z regułami standardów (np. W3C)" }, { id: 1, text: "Wrzucania plików na serwer" }, { id: 2, text: "Tworzenia kopii zapasowej bazy danych" }, { id: 3, text: "Pozycjonowania strony w Google" }],
                goodAnswer: 0
            },
            {
                id: 48,
                title: "W CSS pseudoklasa `:hover` aktywuje się, gdy:",
                answers: [{ id: 0, text: "Kursor myszy znajduje się nad elementem" }, { id: 1, text: "Element został kliknięty" }, { id: 2, text: "Link został już odwiedzony" }, { id: 3, text: "Element zyskał fokus" }],
                goodAnswer: 0
            },
            {
                id: 49,
                title: "W SQL polecenie `CREATE DATABASE` służy do:",
                answers: [{ id: 0, text: "Tworzenia nowej bazy danych" }, { id: 1, text: "Tworzenia nowej tabeli" }, { id: 2, text: "Dodawania użytkownika bazy" }, { id: 3, text: "Modyfikowania uprawnień" }],
                goodAnswer: 0
            },
            {
                id: 50,
                title: "W języku PHP, aby rozpocząć sesję, należy użyć funkcji:",
                answers: [{ id: 0, text: "`session_begin()`" }, { id: 1, text: "`start_session()`" }, { id: 2, text: "`session_start()`" }, { id: 3, text: "`header('Session')`" }],
                goodAnswer: 2
            },
            {
                id: 51,
                title: "Która właściwość CSS określa pozycjonowanie elementu względem okna przeglądarki?",
                answers: [{ id: 0, text: "`absolute`" }, { id: 1, text: "`relative`" }, { id: 2, text: "`fixed`" }, { id: 3, text: "`static`" }],
                goodAnswer: 2
            },
            {
                id: 52,
                title: "W języku SQL polecenie `GRANT` służy do:",
                answers: [{ id: 0, text: "Nadawania uprawnień" }, { id: 1, text: "Odbierania uprawnień" }, { id: 2, text: "Usuwania użytkowników" }, { id: 3, text: "Tworzenia tabel" }],
                goodAnswer: 0
            },
            {
                id: 53,
                title: "W JavaScript, aby sprawdzić długość ciągu znaków używamy:",
                answers: [{ id: 0, text: "`size()`" }, { id: 1, text: "`count`" }, { id: 2, text: "`length`" }, { id: 3, text: "`len()`" }],
                goodAnswer: 2
            },
            {
                id: 54,
                title: "Która metoda przesyłania danych w formularzu jest widoczna w pasku adresu?",
                answers: [{ id: 0, text: "`POST`" }, { id: 1, text: "`PUT`" }, { id: 2, text: "`GET`" }, { id: 3, text: "`SEND`" }],
                goodAnswer: 2
            },
            {
                id: 55,
                title: "W CSS właściwość\n\n```\nbox-sizing: border-box;\n```\n\nsprawia, że:",
                answers: [{ id: 0, text: "Marginesy są wliczane" }, { id: 1, text: "Tło jest czerwone" }, { id: 2, text: "Element jest ukryty" }, { id: 3, text: "Padding i obramowanie są wliczane do szerokości" }],
                goodAnswer: 3
            },
            {
                id: 56,
                title: "W SQL, aby złączyć tabele dopasowując rekordy w obu, używamy:",
                answers: [{ id: 0, text: "`LEFT JOIN`" }, { id: 1, text: "`OUTER JOIN`" }, { id: 2, text: "`INNER JOIN`" }, { id: 3, text: "`CROSS JOIN`" }],
                goodAnswer: 2
            },
            {
                id: 57,
                title: "Który znacznik HTML5 służy do wyświetlania artykułu?",
                answers: [{ id: 0, text: "`<article>`" }, { id: 1, text: "`<section>`" }, { id: 2, text: "`<aside>`" }, { id: 3, text: "`<div>`" }],
                goodAnswer: 0
            },
            {
                id: 58,
                title: "W PHP tablica przechowująca dane z metody `POST` to:",
                answers: [{ id: 0, text: "`$GET_POST`" }, { id: 1, text: "`$_POST`" }, { id: 2, text: "`$_SEND`" }, { id: 3, text: "`$HTTP_POST`" }],
                goodAnswer: 1
            },
            {
                id: 59,
                title: "W JavaScript `break` wewnątrz pętli powoduje:",
                answers: [{ id: 0, text: "Kolejną iterację" }, { id: 1, text: "Wyjście z pętli" }, { id: 2, text: "Restart pętli" }, { id: 3, text: "Błąd skryptu" }],
                goodAnswer: 1
            },
            {
                id: 60,
                title: "Atrybut `colspan` służy do:",
                answers: [{ id: 0, text: "Łączenia wierszy" }, { id: 1, text: "Łączenia kolumn" }, { id: 2, text: "Koloru" }, { id: 3, text: "Marginesu" }],
                goodAnswer: 1
            },
            {
                id: 61,
                title: "W CSS, aby usunąć podkreślenie linku:",
                answers: [{ id: 0, text: "```\ntext-style: none\n```" }, { id: 1, text: "```\nfont-decoration: none\n```" }, { id: 2, text: "```\ntext-decoration: none\n```" }, { id: 3, text: "```\nlink-style: none\n```" }],
                goodAnswer: 2
            },
            {
                id: 62,
                title: "W SQL `ALTER TABLE` służy do:",
                answers: [{ id: 0, text: "Usuwania" }, { id: 1, text: "Modyfikowania struktury" }, { id: 2, text: "Wstawiania" }, { id: 3, text: "Zmiany nazwy bazy" }],
                goodAnswer: 1
            },
            {
                id: 63,
                title: "Komentarz w CSS to:",
                answers: [{ id: 0, text: "`//`" }, { id: 1, text: "`<!-- -->`" }, { id: 2, text: "`/* */`" }, { id: 3, text: "`#`" }],
                goodAnswer: 2
            },
            {
                id: 64,
                title: "W PHP funkcja `header()` służy do:",
                answers: [{ id: 0, text: "Nagłówka H1" }, { id: 1, text: "Pogrubienia" }, { id: 2, text: "Meta-tagów" }, { id: 3, text: "Przekierowania" }],
                goodAnswer: 3
            },
            {
                id: 65,
                title: "W JS `Math.random()` zwraca liczbę:",
                answers: [{ id: 0, text: "1-100" }, { id: 1, text: "0-1 włącznie" }, { id: 2, text: "0-1 wyłącznie" }, { id: 3, text: "całkowitą" }],
                goodAnswer: 2
            },
            {
                id: 66,
                title: "W CMYK litera 'K' to:",
                answers: [{ id: 0, text: "Niebieski" }, { id: 1, text: "Brązowy" }, { id: 2, text: "Zielony" }, { id: 3, text: "Czarny" }],
                goodAnswer: 3
            },
            {
                id: 67,
                title: "Protokół do odbierania poczty to:",
                answers: [{ id: 0, text: "SMTP" }, { id: 1, text: "POP3" }, { id: 2, text: "SNMP" }, { id: 3, text: "FTP" }],
                goodAnswer: 1
            },
            {
                id: 68,
                title: "Atrybut `method` w `<form>` to:",
                answers: [{ id: 0, text: "`GET/POST`" }, { id: 1, text: "`SEND/RECEIVE`" }, { id: 2, text: "`IN/OUT`" }, { id: 3, text: "`SET/READ`" }],
                goodAnswer: 0
            },
            {
                id: 69,
                title: "W CSS\n\n```\nopacity: 0.5\n```\n\nto:",
                answers: [{ id: 0, text: "Brak przezroczystości" }, { id: 1, text: "Ukrycie" }, { id: 2, text: "50% przezroczystości" }, { id: 3, text: "Jasność" }],
                goodAnswer: 2
            },
            {
                id: 70,
                title: "W SQL `DISTINCT` powoduje:",
                answers: [{ id: 0, text: "Sortowanie" }, { id: 1, text: "Pominięcie duplikatów" }, { id: 2, text: "Zliczanie" }, { id: 3, text: "Filtrowanie `NULL`" }],
                goodAnswer: 1
            },
            {
                id: 71,
                title: "W PHP do sprawdzenia czy zmienna istnieje używamy:",
                answers: [{ id: 0, text: "`is_set()`" }, { id: 1, text: "`empty()`" }, { id: 2, text: "`isset()`" }, { id: 3, text: "`defined()`" }],
                goodAnswer: 2
            },
            {
                id: 72,
                title: "W JS `onload` występuje, gdy:",
                answers: [{ id: 0, text: "Kliknięto" }, { id: 1, text: "Wysłano formularz" }, { id: 2, text: "Opuszczono stronę" }, { id: 3, text: "Załadowano stronę" }],
                goodAnswer: 3
            },
            {
                id: 73,
                title: "W HTML5 `<canvas>` to:",
                answers: [{ id: 0, text: "Grafika z JS" }, { id: 1, text: "Wideo" }, { id: 2, text: "Animacja Flash" }, { id: 3, text: "Pamięć" }],
                goodAnswer: 0
            },
            {
                id: 74,
                title: "W CSS `p > span` to:",
                answers: [{ id: 0, text: "Wszystkie span w p" }, { id: 1, text: "span obok p" }, { id: 2, text: "p ze spanami" }, { id: 3, text: "Bezpośrednie dzieci span w p" }],
                goodAnswer: 3
            },
            {
                id: 75,
                title: "W SQL `SUM()` to:",
                answers: [{ id: 0, text: "Suma wartości" }, { id: 1, text: "Ilość" }, { id: 2, text: "Łączenie" }, { id: 3, text: "Średnia" }],
                goodAnswer: 0
            },
            {
                id: 76,
                title: "W PHP `===` sprawdza:",
                answers: [{ id: 0, text: "Wartość" }, { id: 1, text: "Typ" }, { id: 2, text: "Wartość i typ" }, { id: 3, text: "Obiekt" }],
                goodAnswer: 2
            },
            {
                id: 77,
                title: "W JS `confirm()` wyświetla:",
                answers: [{ id: 0, text: "OK/Anuluj" }, { id: 1, text: "Konsolę" }, { id: 2, text: "Hasło" }, { id: 3, text: "Submit" }],
                goodAnswer: 0
            },
            {
                id: 78,
                title: "Grafika rastrowa to:",
                answers: [{ id: 0, text: "Krzywe" }, { id: 1, text: "Piksele" }, { id: 2, text: "CMYK" }, { id: 3, text: "Tekst" }],
                goodAnswer: 1
            },
            {
                id: 79,
                title: "W HTML pole wymagane to:",
                answers: [{ id: 0, text: "`validate`" }, { id: 1, text: "`needed`" }, { id: 2, text: "`required`" }, { id: 3, text: "`important`" }],
                goodAnswer: 2
            },
            {
                id: 80,
                title: "W CSS `vh` to:",
                answers: [{ id: 0, text: "Viewport height" }, { id: 1, text: "Font" }, { id: 2, text: "Border" }, { id: 3, text: "DPI" }],
                goodAnswer: 0
            },
            {
                id: 81,
                title: "W SQL `WHERE` to:",
                answers: [{ id: 0, text: "Warunek" }, { id: 1, text: "Tabela" }, { id: 2, text: "Sortowanie" }, { id: 3, text: "Join" }],
                goodAnswer: 0
            },
            {
                id: 82,
                title: "W PHP `mysqli_query()` to:",
                answers: [{ id: 0, text: "Connect" }, { id: 1, text: "Close" }, { id: 2, text: "Zapytanie SQL" }, { id: 3, text: "Select DB" }],
                goodAnswer: 2
            },
            {
                id: 83,
                title: "W JS `push()` do tablicy:",
                answers: [{ id: 0, text: "Usuwa" }, { id: 1, text: "Dodaje na końcu" }, { id: 2, text: "Odwraca" }, { id: 3, text: "Sortuje" }],
                goodAnswer: 1
            },
            {
                id: 84,
                title: "`target='_blank'` to:",
                answers: [{ id: 0, text: "Download" }, { id: 1, text: "Nowa karta" }, { id: 2, text: "To samo okno" }, { id: 3, text: "Blokada" }],
                goodAnswer: 1
            },
            {
                id: 85,
                title: "W CSS `italic` to:",
                answers: [{ id: 0, text: "Pogrubienie" }, { id: 1, text: "Wielkie litery" }, { id: 2, text: "Podkreślenie" }, { id: 3, text: "Kursywa" }],
                goodAnswer: 3
            },
            {
                id: 86,
                title: "W SQL `REVOKE` to:",
                answers: [{ id: 0, text: "Odebranie uprawnień" }, { id: 1, text: "Grant" }, { id: 2, text: "Hasło" }, { id: 3, text: "Blokada" }],
                goodAnswer: 0
            },
            {
                id: 87,
                title: "W PHP `die()` to:",
                answers: [{ id: 0, text: "Restart" }, { id: 1, text: "Logout" }, { id: 2, text: "Cache" }, { id: 3, text: "Zatrzymanie skryptu" }],
                goodAnswer: 3
            },
            {
                id: 88,
                title: "W JS zasięg blokowy to:",
                answers: [{ id: 0, text: "`var`" }, { id: 1, text: "`dim`" }, { id: 2, text: "`block`" }, { id: 3, text: "`let`" }],
                goodAnswer: 3
            },
            {
                id: 89,
                title: "`charset='UTF-8'` to:",
                answers: [{ id: 0, text: "Kodowanie" }, { id: 1, text: "Język" }, { id: 2, text: "Tytuł" }, { id: 3, text: "SEO" }],
                goodAnswer: 0
            },
            {
                id: 90,
                title: "W CSS\n\n```\nlist-style-type: square\n```\n\nto:",
                answers: [{ id: 0, text: "Kółka" }, { id: 1, text: "Kwadraty" }, { id: 2, text: "Cyfry" }, { id: 3, text: "Brak" }],
                goodAnswer: 1
            },
            {
                id: 91,
                title: "W SQL dodanie rekordu to:",
                answers: [{ id: 0, text: "`ADD`" }, { id: 1, text: "`CREATE`" }, { id: 2, text: "`UPDATE`" }, { id: 3, text: "`INSERT INTO`" }],
                goodAnswer: 3
            },
            {
                id: 92,
                title: "W PHP `count()` to:",
                answers: [{ id: 0, text: "Suma" }, { id: 1, text: "Indeks" }, { id: 2, text: "Pierwszy" }, { id: 3, text: "Liczba elementów" }],
                goodAnswer: 3
            },
            {
                id: 93,
                title: "W JS `!=` to:",
                answers: [{ id: 0, text: "Równe" }, { id: 1, text: "Różne" }, { id: 2, text: "`NOT`" }, { id: 3, text: "Mniejsze" }],
                goodAnswer: 1
            },
            {
                id: 94,
                title: "Bezstratny dźwięk to:",
                answers: [{ id: 0, text: "MP3" }, { id: 1, text: "WMA" }, { id: 2, text: "FLAC" }, { id: 3, text: "OGG" }],
                goodAnswer: 2
            },
            {
                id: 95,
                title: "Znacznik `<hr>` to:",
                answers: [{ id: 0, text: "Linia pozioma" }, { id: 1, text: "BR" }, { id: 2, text: "B" }, { id: 3, text: "H1" }],
                goodAnswer: 0
            },
            {
                id: 96,
                title: "W CSS\n\n```\ntext-align: justify\n```\n\nto:",
                answers: [{ id: 0, text: "Center" }, { id: 1, text: "Wyjustowanie" }, { id: 2, text: "Right" }, { id: 3, text: "Caps" }],
                goodAnswer: 1
            },
            {
                id: 97,
                title: "`GROUP BY` używamy z:",
                answers: [{ id: 0, text: "Agregatami" }, { id: 1, text: "DELETE" }, { id: 2, text: "JOIN" }, { id: 3, text: "VIEW" }],
                goodAnswer: 0
            },
            {
                id: 98,
                title: "PHP obiektowo DB to:",
                answers: [{ id: 0, text: "MySQL" }, { id: 1, text: "DB" }, { id: 2, text: "Connect" }, { id: 3, text: "PDO" }],
                goodAnswer: 3
            },
            {
                id: 99,
                title: "W JS `prompt()` to:",
                answers: [{ id: 0, text: "Alert" }, { id: 1, text: "Błąd" }, { id: 2, text: "Pobranie danych tekstowych" }, { id: 3, text: "Zamknięcie" }],
                goodAnswer: 2
            },
            {
                id: 100,
                title: "W programie GIMP do zaznaczania obszarów o podobnym kolorze służy:",
                answers: [{ id: 0, text: "Pędzel" }, { id: 1, text: "Różdżka" }, { id: 2, text: "Gumka" }, { id: 3, text: "Ołówek" }],
                goodAnswer: 1
            },
            {
                id: 101,
                title: "Który atrybut HTML pozwala na unikalne zidentyfikowanie elementu na stronie?",
                answers: [{ id: 0, text: "`class`" }, { id: 1, text: "`type`" }, { id: 2, text: "`name`" }, { id: 3, text: "`id`" }],
                goodAnswer: 3
            },
            {
                id: 102,
                title: "Jaki skrót klawiszowy w przeglądarce otwiera narzędzia deweloperskie?",
                answers: [{ id: 0, text: "F1" }, { id: 1, text: "F5" }, { id: 2, text: "F12" }, { id: 3, text: "Ctrl+S" }],
                goodAnswer: 2
            },
            {
                id: 103,
                title: "W CSS właściwość `border-radius` służy do:",
                answers: [{ id: 0, text: "Zmiany koloru obramowania" }, { id: 1, text: "Grubości linii" }, { id: 2, text: "Zaokrąglenia rogów" }, { id: 3, text: "Cienia" }],
                goodAnswer: 2
            },
            {
                id: 104,
                title: "Który z poniższych jest językiem zapytań strukturalnych?",
                answers: [{ id: 0, text: "HTML" }, { id: 1, text: "CSS" }, { id: 2, text: "SQL" }, { id: 3, text: "XML" }],
                goodAnswer: 2
            },
            {
                id: 105,
                title: "W JavaScript `NaN` oznacza:",
                answers: [{ id: 0, text: "Not a Number" }, { id: 1, text: "Nowy numer" }, { id: 2, text: "Null" }, { id: 3, text: "Negative" }],
                goodAnswer: 0
            },
            {
                id: 106,
                title: "W PHP funkcja `rand(1, 10)` zwróci:",
                answers: [{ id: 0, text: "Liczbę od 1 do 10" }, { id: 1, text: "Zawsze 1" }, { id: 2, text: "Zawsze 10" }, { id: 3, text: "Liczbę zmiennoprzecinkową" }],
                goodAnswer: 0
            },
            {
                id: 107,
                title: "W SQL polecenie `TRUNCATE TABLE` powoduje:",
                answers: [{ id: 0, text: "Usunięcie wszystkich rekordów bez usuwania struktury" }, { id: 1, text: "Usunięcie struktury tabeli" }, { id: 2, text: "Zmianę nazwy" }, { id: 3, text: "Kopiowanie tabeli" }],
                goodAnswer: 0
            },
            {
                id: 108,
                title: "W CSS\n\n```\nflex-direction: column\n```\n\nustawi elementy:",
                answers: [{ id: 0, text: "W poziomie" }, { id: 1, text: "Na ukos" }, { id: 2, text: "W pionie" }, { id: 3, text: "W losowej kolejności" }],
                goodAnswer: 2
            },
            {
                id: 109,
                title: "Skrót CMS oznacza:",
                answers: [{ id: 0, text: "Content Management System" }, { id: 1, text: "Core Media System" }, { id: 2, text: "Computer Management Software" }, { id: 3, text: "Creative Mode Style" }],
                goodAnswer: 0
            },
            {
                id: 110,
                title: "W HTML znacznik `<br>` służy do:",
                answers: [{ id: 0, text: "Pogrubienia" }, { id: 1, text: "Tworzenia tabeli" }, { id: 2, text: "Wstawienia obrazka" }, { id: 3, text: "Złamania linii" }],
                goodAnswer: 3
            },
            {
                id: 111,
                title: "Która z metod HTTP jest uważana za bezpieczną (nie zmienia stanu serwera)?",
                answers: [{ id: 0, text: "`GET`" }, { id: 1, text: "`POST`" }, { id: 2, text: "`DELETE`" }, { id: 3, text: "`PUT`" }],
                goodAnswer: 0
            },
            {
                id: 112,
                title: "W CSS\n\n```\ncursor: pointer\n```\n\nzmieni kursor na:",
                answers: [{ id: 0, text: "Strzałkę" }, { id: 1, text: "Rączkę (wskaźnik)" }, { id: 2, text: "Klepsydrę" }, { id: 3, text: "Tekstowy" }],
                goodAnswer: 1
            },
            {
                id: 113,
                title: "W SQL klauzula `HAVING` jest używana do filtrowania:",
                answers: [{ id: 0, text: "Wierszy" }, { id: 1, text: "Kolumn" }, { id: 2, text: "Grup" }, { id: 3, text: "Baz danych" }],
                goodAnswer: 2
            },
            {
                id: 114,
                title: "W JS `document.querySelector('.klasa')` wybierze:",
                answers: [{ id: 0, text: "Wszystkie elementy z tą klasą" }, { id: 1, text: "Pierwszy element z tą klasą" }, { id: 2, text: "Element o ID klasa" }, { id: 3, text: "Tag o nazwie klasa" }],
                goodAnswer: 1
            },
            {
                id: 115,
                title: "W PHP `$_SESSION` to tablica:",
                answers: [{ id: 0, text: "Lokalna" }, { id: 1, text: "Superglobalna" }, { id: 2, text: "Pusta" }, { id: 3, text: "Chroniona" }],
                goodAnswer: 1
            },
            {
                id: 116,
                title: "Znacznik `<nav>` w HTML5 oznacza:",
                answers: [{ id: 0, text: "Nawigację" }, { id: 1, text: "Stopkę" }, { id: 2, text: "Nagłówek" }, { id: 3, text: "Obrazek" }],
                goodAnswer: 0
            },
            {
                id: 117,
                title: "W CSS `font-family` określa:",
                answers: [{ id: 0, text: "Rozmiar" }, { id: 1, text: "Kolor" }, { id: 2, text: "Rodzaj czcionki" }, { id: 3, text: "Styl" }],
                goodAnswer: 2
            },
            {
                id: 118,
                title: "W SQL `PRIMARY KEY` musi być:",
                answers: [{ id: 0, text: "Unikalny i niepusty" }, { id: 1, text: "Liczbą" }, { id: 2, text: "Tekstem" }, { id: 3, text: "Kluczem obcym" }],
                goodAnswer: 0
            },
            {
                id: 119,
                title: "W JS `setTimeout()` służy do:",
                answers: [{ id: 0, text: "Pętli" }, { id: 1, text: "Wykonania kodu po opóźnieniu" }, { id: 2, text: "Zatrzymania strony" }, { id: 3, text: "Odświeżenia" }],
                goodAnswer: 1
            },
            {
                id: 120,
                title: "Format `.webp` to format:",
                answers: [{ id: 0, text: "Graficzny (nowoczesny)" }, { id: 1, text: "Audio" }, { id: 2, text: "Tekstowy" }, { id: 3, text: "Wideo" }],
                goodAnswer: 0
            },
            {
                id: 121,
                title: "W HTML `<input type='password'>` spowoduje:",
                answers: [{ id: 0, text: "Ukrycie wpisywanych znaków" }, { id: 1, text: "Zablokowanie pola" }, { id: 2, text: "Szyfrowanie bazy" }, { id: 3, text: "Wysłanie maila" }],
                goodAnswer: 0
            },
            {
                id: 122,
                title: "W CSS\n\n```\nwidth: 100%\n```\n\noznacza:",
                answers: [{ id: 0, text: "100 pikseli" }, { id: 1, text: "Szerokość całego ekranu" }, { id: 2, text: "Szerokość elementu nadrzędnego" }, { id: 3, text: "Szerokość czcionki" }],
                goodAnswer: 2
            },
            {
                id: 123,
                title: "W SQL `DROP DATABASE` usuwa:",
                answers: [{ id: 0, text: "Tabelę" }, { id: 1, text: "Całą bazę danych" }, { id: 2, text: "Rekord" }, { id: 3, text: "Użytkownika" }],
                goodAnswer: 1
            },
            {
                id: 124,
                title: "W JS `console.error()` wypisuje:",
                answers: [{ id: 0, text: "Błąd w konsoli" }, { id: 1, text: "Informację" }, { id: 2, text: "Ostrzeżenie" }, { id: 3, text: "Alert" }],
                goodAnswer: 0
            },
            {
                id: 125,
                title: "PHP jest językiem wykonywanym po stronie:",
                answers: [{ id: 0, text: "Klienta (przeglądarki)" }, { id: 1, text: "Routera" }, { id: 2, text: "Bazy danych" }, { id: 3, text: "Serwera" }],
                goodAnswer: 3
            },
            {
                id: 126,
                title: "W HTML `<ul>` to lista:",
                answers: [{ id: 0, text: "Numerowana" }, { id: 1, text: "Punktowana (nienumerowana)" }, { id: 2, text: "Definicji" }, { id: 3, text: "Zagnieżdżona" }],
                goodAnswer: 1
            },
            {
                id: 127,
                title: "W CSS\n\n```\nbackground-image: url('foto.jpg')\n```\n\nwstawi:",
                answers: [{ id: 0, text: "Obrazek w treści" }, { id: 1, text: "Obrazek jako tło" }, { id: 2, text: "Link do obrazka" }, { id: 3, text: "Ikonę strony" }],
                goodAnswer: 1
            },
            {
                id: 128,
                title: "W SQL `JOIN` służy do:",
                answers: [{ id: 0, text: "Usuwania" }, { id: 1, text: "Sortowania" }, { id: 2, text: "Łączenia tabel" }, { id: 3, text: "Grupowania" }],
                goodAnswer: 2
            },
            {
                id: 129,
                title: "W JS `array.pop()` usuwa:",
                answers: [{ id: 0, text: "Pierwszy element" }, { id: 1, text: "Losowy element" }, { id: 2, text: "Całą tablicę" }, { id: 3, text: "Ostatni element" }],
                goodAnswer: 3
            },
            {
                id: 130,
                title: "Model barw wykorzystywany w druku to:",
                answers: [{ id: 0, text: "RGB" }, { id: 1, text: "HSB" }, { id: 2, text: "CMYK" }, { id: 3, text: "Lab" }],
                goodAnswer: 2
            },
            {
                id: 131,
                title: "W HTML5 znacznik `<footer>` to:",
                answers: [{ id: 0, text: "Nagłówek" }, { id: 1, text: "Menu" }, { id: 2, text: "Bok" }, { id: 3, text: "Stopka" }],
                goodAnswer: 3
            },
            {
                id: 132,
                title: "W CSS `padding` to margines:",
                answers: [{ id: 0, text: "Zewnętrzny" }, { id: 1, text: "Lewy" }, { id: 2, text: "Dolny" }, { id: 3, text: "Wewnętrzny" }],
                goodAnswer: 3
            },
            {
                id: 133,
                title: "W SQL `AS` służy do:",
                answers: [{ id: 0, text: "Nadawania aliasu" }, { id: 1, text: "Sortowania" }, { id: 2, text: "Łączenia" }, { id: 3, text: "Sumowania" }],
                goodAnswer: 0
            },
            {
                id: 134,
                title: "W JS `localStorage` przechowuje dane:",
                answers: [{ id: 0, text: "Do zamknięcia karty" }, { id: 1, text: "Trwale w przeglądarce" }, { id: 2, text: "Na serwerze" }, { id: 3, text: "W bazie danych" }],
                goodAnswer: 1
            },
            {
                id: 135,
                title: "W PHP `include_once` zapobiega:",
                answers: [{ id: 0, text: "Błędom składni" }, { id: 1, text: "Usuwaniu plików" }, { id: 2, text: "Włamaniom" }, { id: 3, text: "Wielokrotnemu dołączeniu tego samego pliku" }],
                goodAnswer: 3
            },
            {
                id: 136,
                title: "Znacznik `<title>` wyświetla się w:",
                answers: [{ id: 0, text: "Pasku tytułu okna przeglądarki" }, { id: 1, text: "Treści strony" }, { id: 2, text: "Stopce" }, { id: 3, text: "Konsoli" }],
                goodAnswer: 0
            },
            {
                id: 137,
                title: "W CSS\n\n```\nborder: none\n```\n\nspowoduje:",
                answers: [{ id: 0, text: "Cienkie obramowanie" }, { id: 1, text: "Podwójne obramowanie" }, { id: 2, text: "Czerwone obramowanie" }, { id: 3, text: "Brak obramowania" }],
                goodAnswer: 3
            },
            {
                id: 138,
                title: "W SQL `MIN()` zwraca:",
                answers: [{ id: 0, text: "Wartość minimalną" }, { id: 1, text: "Średnią" }, { id: 2, text: "Suma" }, { id: 3, text: "Ilość" }],
                goodAnswer: 0
            },
            {
                id: 139,
                title: "W JS `addEventListener` służy do:",
                answers: [{ id: 0, text: "Zmiany koloru" }, { id: 1, text: "Pętli" }, { id: 2, text: "Obsługi zdarzeń" }, { id: 3, text: "Łączenia z DB" }],
                goodAnswer: 2
            },
            {
                id: 140,
                title: "Rozdzielczość ekranowa (web) to standardowo:",
                answers: [{ id: 0, text: "300 dpi" }, { id: 1, text: "1200 dpi" }, { id: 2, text: "600 dpi" }, { id: 3, text: "72 dpi" }],
                goodAnswer: 3
            },
            {
                id: 141,
                title: "W HTML `<form>` atrybut `enctype` jest ważny przy:",
                answers: [{ id: 0, text: "Logowaniu" }, { id: 1, text: "Wybieraniu koloru" }, { id: 2, text: "Przesyłaniu plików" }, { id: 3, text: "Rejestracji" }],
                goodAnswer: 2
            },
            {
                id: 142,
                title: "W CSS\n\n```\ntext-transform: uppercase\n```\n\nzmieni tekst na:",
                answers: [{ id: 0, text: "Małe litery" }, { id: 1, text: "Kursywę" }, { id: 2, text: "Pogrubione" }, { id: 3, text: "WIELKIE LITERY" }],
                goodAnswer: 3
            },
            {
                id: 143,
                title: "W SQL `DESC` przy `ORDER BY` oznacza:",
                answers: [{ id: 0, text: "Kolejność malejącą" }, { id: 1, text: "Opis" }, { id: 2, text: "Kolejność rosnącą" }, { id: 3, text: "Ukrycie danych" }],
                goodAnswer: 0
            },
            {
                id: 144,
                title: "W JS `typeof []` (tablicy) zwróci:",
                answers: [{ id: 0, text: "`array`" }, { id: 1, text: "`list`" }, { id: 2, text: "`object`" }, { id: 3, text: "`null`" }],
                goodAnswer: 2
            },
            {
                id: 145,
                title: "W PHP `$a .' '. $b` kropka to:",
                answers: [{ id: 0, text: "Mnożenie" }, { id: 1, text: "Błąd" }, { id: 2, text: "Dzielenie" }, { id: 3, text: "Konkatenacja" }],
                goodAnswer: 3
            },
            {
                id: 146,
                title: "Atrybut `src` w `<img>` określa:",
                answers: [{ id: 0, text: "Źródło (ścieżkę do pliku)" }, { id: 1, text: "Rozmiar" }, { id: 2, text: "Tekst" }, { id: 3, text: "Obramowanie" }],
                goodAnswer: 0
            },
            {
                id: 147,
                title: "W CSS\n\n```\nposition: relative\n```\n\npozycjonuje względem:",
                answers: [{ id: 0, text: "Okna" }, { id: 1, text: "Pierwotnego położenia" }, { id: 2, text: "Rodzica" }, { id: 3, text: "Góry strony" }],
                goodAnswer: 1
            },
            {
                id: 148,
                title: "W SQL `UPDATE ... SET` służy do:",
                answers: [{ id: 0, text: "Aktualizacji danych" }, { id: 1, text: "Tworzenia" }, { id: 2, text: "Usuwania" }, { id: 3, text: "Uprawnień" }],
                goodAnswer: 0
            },
            {
                id: 149,
                title: "W JS `window.location.href` pozwala na:",
                answers: [{ id: 0, text: "Przekierowanie na inny URL" }, { id: 1, text: "Zmiany koloru" }, { id: 2, text: "Zamknięcie okna" }, { id: 3, text: "Wydruk" }],
                goodAnswer: 0
            },
            {
                id: 150,
                title: "Atrybut HTML `target=_self` to:",
                answers: [{ id: 0, text: "To samo okno" }, { id: 1, text: "Nowa karta" }, { id: 2, text: "Rodzic" }, { id: 3, text: "Góra" }],
                goodAnswer: 0
            },
            {
                id: 151,
                title: "W CSS\n\n```\nvisibility: hidden\n```\n\nsprawia, że:",
                answers: [{ id: 0, text: "Element znika i nie zajmuje miejsca" }, { id: 1, text: "Element jest czerwony" }, { id: 2, text: "Element jest półprzezroczysty" }, { id: 3, text: "Element jest niewidoczny, ale zajmuje miejsce" }],
                goodAnswer: 3
            },
            {
                id: 152,
                title: "W SQL `CREATE INDEX` służy do:",
                answers: [{ id: 0, text: "Tworzenia tabeli" }, { id: 1, text: "Usuwania duplikatów" }, { id: 2, text: "Przyspieszenia wyszukiwania" }, { id: 3, text: "Relacji" }],
                goodAnswer: 2
            },
            {
                id: 153,
                title: "W JS `JSON.parse()` zamienia:",
                answers: [{ id: 0, text: "Tekst JSON na obiekt" }, { id: 1, text: "Obiekt na tekst" }, { id: 2, text: "Liczbę na tekst" }, { id: 3, text: "Obraz na tekst" }],
                goodAnswer: 0
            },
            {
                id: 154,
                title: "W PHP `$_COOKIE` służy do:",
                answers: [{ id: 0, text: "Sesji" }, { id: 1, text: "Bazy danych" }, { id: 2, text: "Obsługi ciasteczek" }, { id: 3, text: "Hasłowania" }],
                goodAnswer: 2
            },
            {
                id: 155,
                title: "Znacznik `<option>` występuje wewnątrz:",
                answers: [{ id: 0, text: "`<ul>`" }, { id: 1, text: "`<table>`" }, { id: 2, text: "`<select>`" }, { id: 3, text: "`<div>`" }],
                goodAnswer: 2
            },
            {
                id: 156,
                title: "W CSS\n\n```\noverflow: scroll\n```\n\ndoda:",
                answers: [{ id: 0, text: "Cień" }, { id: 1, text: "Margines" }, { id: 2, text: "Kolor" }, { id: 3, text: "Paski przewijania" }],
                goodAnswer: 3
            },
            {
                id: 157,
                title: "W SQL `NOT NULL` oznacza, że kolumna:",
                answers: [{ id: 0, text: "Może być pusta" }, { id: 1, text: "Musi zawierać wartość" }, { id: 2, text: "Musi być zerem" }, { id: 3, text: "Jest kluczem" }],
                goodAnswer: 1
            },
            {
                id: 158,
                title: "W JS `Math.floor(4.9)` zwróci:",
                answers: [{ id: 0, text: "4" }, { id: 1, text: "5" }, { id: 2, text: "4.5" }, { id: 3, text: "0" }],
                goodAnswer: 0
            },
            {
                id: 159,
                title: "W PHP funkcja `fopen()` służy do:",
                answers: [{ id: 0, text: "Bazy danych" }, { id: 1, text: "Otwarcia pliku" }, { id: 2, text: "Wysłania maila" }, { id: 3, text: "Sesji" }],
                goodAnswer: 1
            },
            {
                id: 160,
                title: "Jaki protokół służy do przesyłania stron WWW?",
                answers: [{ id: 0, text: "HTTP" }, { id: 1, text: "FTP" }, { id: 2, text: "SMTP" }, { id: 3, text: "POP3" }],
                goodAnswer: 0
            },
            {
                id: 161,
                title: "W CSS `max-width` określa:",
                answers: [{ id: 0, text: "Stałą szerokość" }, { id: 1, text: "Maksymalną szerokość" }, { id: 2, text: "Minimalną szerokość" }, { id: 3, text: "Szerokość czcionki" }],
                goodAnswer: 1
            },
            {
                id: 162,
                title: "W SQL `AND` wymaga, aby:",
                answers: [{ id: 0, text: "Oba warunki były spełnione" }, { id: 1, text: "Jeden warunek był spełniony" }, { id: 2, text: "Żaden nie był spełniony" }, { id: 3, text: "Zwrócono błąd" }],
                goodAnswer: 0
            },
            {
                id: 163,
                title: "W JS `String(123)` zamieni liczbę na:",
                answers: [{ id: 0, text: "Obiekt" }, { id: 1, text: "Tekst" }, { id: 2, text: "Tablicę" }, { id: 3, text: "Null" }],
                goodAnswer: 1
            },
            {
                id: 164,
                title: "W PHP `setcookie()` musi być wywołane:",
                answers: [{ id: 0, text: "Na końcu" }, { id: 1, text: "Wewnątrz `<body>`" }, { id: 2, text: "Przed wysłaniem nagłówków" }, { id: 3, text: "Tylko w JS" }],
                goodAnswer: 2
            },
            {
                id: 165,
                title: "Tag `<head>` zawiera informacje:",
                answers: [{ id: 0, text: "Widoczne na stronie" }, { id: 1, text: "Techniczne (metadane)" }, { id: 2, text: "Tylko skrypty" }, { id: 3, text: "Stopkę" }],
                goodAnswer: 1
            },
            {
                id: 166,
                title: "W CSS\n\n```\ncolor: #FF0000\n```\n\nto kolor:",
                answers: [{ id: 0, text: "Czerwony" }, { id: 1, text: "Zielony" }, { id: 2, text: "Niebieski" }, { id: 3, text: "Biały" }],
                goodAnswer: 0
            },
            {
                id: 167,
                title: "W SQL\n\n```\nDELETE FROM tabela\n```\n\nbez `WHERE`:",
                answers: [{ id: 0, text: "Nic nie zrobi" }, { id: 1, text: "Usunie wszystkie rekordy" }, { id: 2, text: "Usunie tabelę" }, { id: 3, text: "Zgłosi błąd" }],
                goodAnswer: 1
            },
            {
                id: 168,
                title: "W JS `NaN === NaN` zwróci:",
                answers: [{ id: 0, text: "`true`" }, { id: 1, text: "`null`" }, { id: 2, text: "`undefined`" }, { id: 3, text: "`false`" }],
                goodAnswer: 3
            },
            {
                id: 169,
                title: "W PHP `$_SERVER['REMOTE_ADDR']` to:",
                answers: [{ id: 0, text: "Adres serwera" }, { id: 1, text: "URL strony" }, { id: 2, text: "Adres bazy" }, { id: 3, text: "Adres IP użytkownika" }],
                goodAnswer: 3
            },
            {
                id: 170,
                title: "Atrybut `alt` w `<img>` jest ważny dla:",
                answers: [{ id: 0, text: "SEO i czytników ekranu" }, { id: 1, text: "Rozmiaru" }, { id: 2, text: "Szybkości ładowania" }, { id: 3, text: "Koloru" }],
                goodAnswer: 0
            },
            {
                id: 171,
                title: "W CSS\n\n```\ndisplay: block\n```\n\nsprawia, że element:",
                answers: [{ id: 0, text: "Zajmuje całą szerokość i zaczyna się od nowej linii" }, { id: 1, text: "Jest w linii" }, { id: 2, text: "Jest ukryty" }, { id: 3, text: "Jest elastyczny" }],
                goodAnswer: 0
            },
            {
                id: 172,
                title: "W SQL `BETWEEN 10 AND 20` wybierze:",
                answers: [{ id: 0, text: "Tylko 10 i 20" }, { id: 1, text: "Zakres od 10 do 20" }, { id: 2, text: "Liczby poza zakresem" }, { id: 3, text: "Wszystko" }],
                goodAnswer: 1
            },
            {
                id: 173,
                title: "W JS\n\n```\narray.length = 0\n```\n\nspowoduje:",
                answers: [{ id: 0, text: "Błąd" }, { id: 1, text: "Dodanie elementu" }, { id: 2, text: "Nic" }, { id: 3, text: "Wyczyszczenie tablicy" }],
                goodAnswer: 3
            },
            {
                id: 174,
                title: "W PHP `header('Location: page.php')` to:",
                answers: [{ id: 0, text: "Tytuł strony" }, { id: 1, text: "Łącze" }, { id: 2, text: "Przekierowanie" }, { id: 3, text: "Błąd" }],
                goodAnswer: 2
            },
            {
                id: 175,
                title: "Znacznik `<iframe>` służy do:",
                answers: [{ id: 0, text: "Obrazków" }, { id: 1, text: "Osadzania innej strony wewnątrz bieżącej" }, { id: 2, text: "Listy" }, { id: 3, text: "Skryptów" }],
                goodAnswer: 1
            },
            {
                id: 176,
                title: "W CSS `letter-spacing` to:",
                answers: [{ id: 0, text: "Interlinia" }, { id: 1, text: "Padding" }, { id: 2, text: "Margines" }, { id: 3, text: "Odstępy między literami" }],
                goodAnswer: 3
            },
            {
                id: 177,
                title: "W SQL `IN (1, 2, 3)` sprawdza czy wartość:",
                answers: [{ id: 0, text: "Jest większa od 3" }, { id: 1, text: "Jest zerem" }, { id: 2, text: "Jest sumą" }, { id: 3, text: "Znajduje się w podanej liście" }],
                goodAnswer: 3
            },
            {
                id: 178,
                title: "W JS `!!true` zwróci:",
                answers: [{ id: 0, text: "`false`" }, { id: 1, text: "1" }, { id: 2, text: "0" }, { id: 3, text: "`true`" }],
                goodAnswer: 3
            },
            {
                id: 179,
                title: "W PHP funkcja `password_hash()` służy do:",
                answers: [{ id: 0, text: "Logowania" }, { id: 1, text: "Zmiany hasła" }, { id: 2, text: "Bezpiecznego szyfrowania hasła" }, { id: 3, text: "Sesji" }],
                goodAnswer: 2
            },
            {
                id: 180,
                title: "Plik `.htaccess` służy do:",
                answers: [{ id: 0, text: "Konfiguracji serwera Apache" }, { id: 1, text: "Bazy danych" }, { id: 2, text: "Stylów" }, { id: 3, text: "Skryptów" }],
                goodAnswer: 0
            },
            {
                id: 181,
                title: "W CSS `z-index` działa tylko dla elementów:",
                answers: [{ id: 0, text: "Ukrytych" }, { id: 1, text: "Pozycjonowanych (innych niż static)" }, { id: 2, text: "Blokowych" }, { id: 3, text: "List" }],
                goodAnswer: 1
            },
            {
                id: 182,
                title: "W SQL `DROP COLUMN` usuwa:",
                answers: [{ id: 0, text: "Wiersz" }, { id: 1, text: "Kolumnę z tabeli" }, { id: 2, text: "Tabelę" }, { id: 3, text: "Bazę" }],
                goodAnswer: 1
            },
            {
                id: 183,
                title: "W JS `document.createElement()` tworzy:",
                answers: [{ id: 0, text: "Atrybut" }, { id: 1, text: "Styl" }, { id: 2, text: "Tekst" }, { id: 3, text: "Nowy element HTML" }],
                goodAnswer: 3
            },
            {
                id: 184,
                title: "W PHP `$_FILES` zawiera:",
                answers: [{ id: 0, text: "Tekst" }, { id: 1, text: "Błędy" }, { id: 2, text: "Dane o przesłanych plikach" }, { id: 3, text: "URL" }],
                goodAnswer: 2
            },
            {
                id: 185,
                title: "Atrybut `placeholder` w `<input>` to:",
                answers: [{ id: 0, text: "Wartość domyślna" }, { id: 1, text: "Tekst pomocniczy widoczny przed wpisaniem" }, { id: 2, text: "Hasło" }, { id: 3, text: "Błąd" }],
                goodAnswer: 1
            },
            {
                id: 186,
                title: "W CSS\n\n```\nwhite-space: nowrap\n```\n\nspowoduje:",
                answers: [{ id: 0, text: "Ukrycie spacji" }, { id: 1, text: "Brak zawijania tekstu do nowej linii" }, { id: 2, text: "Pogrubienie" }, { id: 3, text: "Kursywę" }],
                goodAnswer: 1
            },
            {
                id: 187,
                title: "W SQL `UNION` służy do:",
                answers: [{ id: 0, text: "Mnożenia wyników" }, { id: 1, text: "Grupowania" }, { id: 2, text: "Usuwania" }, { id: 3, text: "Łączenia wyników dwóch zapytań SELECT" }],
                goodAnswer: 3
            },
            {
                id: 188,
                title: "W JS `prompt()` zwraca:",
                answers: [{ id: 0, text: "String (tekst) lub null" }, { id: 1, text: "Liczbę" }, { id: 2, text: "Boolean" }, { id: 3, text: "Obiekt" }],
                goodAnswer: 0
            },
            {
                id: 189,
                title: "W PHP funkcja `strlen()` zwraca:",
                answers: [{ id: 0, text: "Słowa" }, { id: 1, text: "Długość ciągu znaków" }, { id: 2, text: "Wielkie litery" }, { id: 3, text: "Błędy" }],
                goodAnswer: 1
            },
            {
                id: 190,
                title: "Czym jest 'favicon'?",
                answers: [{ id: 0, text: "Małą ikonką widoczną na karcie przeglądarki" }, { id: 1, text: "Dużym zdjęciem" }, { id: 2, text: "Skryptem" }, { id: 3, text: "Stylem" }],
                goodAnswer: 0
            },
            {
                id: 191,
                title: "W CSS `box-shadow` dodaje:",
                answers: [{ id: 0, text: "Margines" }, { id: 1, text: "Obramowanie" }, { id: 2, text: "Cień wokół elementu" }, { id: 3, text: "Kolor" }],
                goodAnswer: 2
            },
            {
                id: 192,
                title: "W SQL `AUTO_INCREMENT` to:",
                answers: [{ id: 0, text: "Automatyczne zwiększanie wartości (np. ID)" }, { id: 1, text: "Ręczne wpisywanie" }, { id: 2, text: "Sortowanie" }, { id: 3, text: "Usuwania" }],
                goodAnswer: 0
            },
            {
                id: 193,
                title: "W JS `===` nazywany jest operatorem:",
                answers: [{ id: 0, text: "Ścisłej równości" }, { id: 1, text: "Przypisania" }, { id: 2, text: "Logiki" }, { id: 3, text: "Różności" }],
                goodAnswer: 0
            },
            {
                id: 194,
                title: "W PHP `$_REQUEST` zawiera dane z:",
                answers: [{ id: 0, text: "Tylko `GET`" }, { id: 1, text: "`GET`, `POST` i `COOKIE`" }, { id: 2, text: "Tylko `SESSION`" }, { id: 3, text: "Bazy danych" }],
                goodAnswer: 1
            },
            {
                id: 195,
                title: "Który znacznik HTML definiuje najważniejszy nagłówek?",
                answers: [{ id: 0, text: "`<h6>`" }, { id: 1, text: "`<header>`" }, { id: 2, text: "`<head>`" }, { id: 3, text: "`<h1>`" }],
                goodAnswer: 3
            },
            {
                id: 196,
                title: "W CSS\n\n```\ntext-decoration: underline\n```\n\nto:",
                answers: [{ id: 0, text: "Pogrubienie" }, { id: 1, text: "Nadkreślenie" }, { id: 2, text: "Przekreślenie" }, { id: 3, text: "Podkreślenie" }],
                goodAnswer: 3
            },
            {
                id: 197,
                title: "W SQL `DATABASE()` zwraca:",
                answers: [{ id: 0, text: "Wszystkie bazy" }, { id: 1, text: "Użytkownika" }, { id: 2, text: "Wersję" }, { id: 3, text: "Nazwę bieżącej bazy danych" }],
                goodAnswer: 3
            },
            {
                id: 198,
                title: "W JS `event.preventDefault()` służy do:",
                answers: [{ id: 0, text: "Wywołania błędu" }, { id: 1, text: "Odświeżenia" }, { id: 2, text: "Zatrzymania domyślnej akcji zdarzenia" }, { id: 3, text: "Wysłania danych" }],
                goodAnswer: 2
            },
            {
                id: 199,
                title: "W PHP `echo` i `print` służą do:",
                answers: [{ id: 0, text: "Obliczeń" }, { id: 1, text: "Łączenia z DB" }, { id: 2, text: "Wyświetlania tekstu na stronie" }, { id: 3, text: "Pętli" }],
                goodAnswer: 2
            },
            {
                id: 200,
                title: "Skrót WWW oznacza:",
                answers: [{ id: 0, text: "Web Wide World" }, { id: 1, text: "World Web Wide" }, { id: 2, text: "World Wide Web" }, { id: 3, text: "Wide World Web" }],
                goodAnswer: 2
            },
            {
                id: 201,
                title: "Która właściwość CSS odpowiada za wyrównanie elementów w osi głównej kontenera Flex?",
                answers: [{ id: 0, text: "`align-items`" }, { id: 1, text: "`align-content`" }, { id: 2, text: "`justify-content`" }, { id: 3, text: "`flex-direction`" }],
                goodAnswer: 2
            },
            {
                id: 202,
                title: "W języku SQL, aby połączyć ciągi znaków, w MySQL należy użyć funkcji:",
                answers: [{ id: 0, text: "`CONCAT()`" }, { id: 1, text: "`JOIN()`" }, { id: 2, text: "`MERGE()`" }, { id: 3, text: "`COMBINE()`" }],
                goodAnswer: 0
            },
            {
                id: 203,
                title: "W HTML5 znacznik `<audio>` z atrybutem `autoplay` spowoduje:",
                answers: [{ id: 0, text: "Wyświetlenie kontrolek" }, { id: 1, text: "Automatyczne odtworzenie dźwięku" }, { id: 2, text: "Odtwarzanie w pętli" }, { id: 3, text: "Wyciszenie dźwięku" }],
                goodAnswer: 1
            },
            {
                id: 204,
                title: "W PHP funkcja `session_destroy()` służy do:",
                answers: [{ id: 0, text: "Rozpoczęcia sesji" }, { id: 1, text: "Usunięcia wszystkich danych sesji" }, { id: 2, text: "Zmiany ID sesji" }, { id: 3, text: "Zapisania sesji w bazie" }],
                goodAnswer: 1
            },
            {
                id: 205,
                title: "Który selektor CSS wybiera wszystkie elementy `<p>`, które są bezpośrednimi dziećmi `<div>`?",
                answers: [{ id: 0, text: "`div > p`" }, { id: 1, text: "`div p`" }, { id: 2, text: "`div + p`" }, { id: 3, text: "`div ~ p`" }],
                goodAnswer: 0
            },
            {
                id: 206,
                title: "W JavaScript `const` służy do deklarowania:",
                answers: [{ id: 0, text: "Zmiennych o zasięgu globalnym" }, { id: 1, text: "Tablic dynamicznych" }, { id: 2, text: "Funkcji asynchronicznych" }, { id: 3, text: "Stałych, których nie można przypisać ponownie" }],
                goodAnswer: 3
            },
            {
                id: 207,
                title: "W SQL polecenie `ALTER TABLE` z klauzulą `ADD` służy do:",
                answers: [{ id: 0, text: "Usunięcia kolumny" }, { id: 1, text: "Dodania rekordu" }, { id: 2, text: "Zmiany nazwy tabeli" }, { id: 3, text: "Dodania nowej kolumny do tabeli" }],
                goodAnswer: 3
            },
            {
                id: 208,
                title: "Który znacznik HTML służy do zgrupowania powiązanych elementów w formularzu?",
                answers: [{ id: 0, text: "`<fieldset>`" }, { id: 1, text: "`<group>`" }, { id: 2, text: "`<section>`" }, { id: 3, text: "`<label>`" }],
                goodAnswer: 0
            },
            {
                id: 209,
                title: "W CSS właściwość\n\n```\nposition: absolute\n```\n\npozycjonuje element względem:",
                answers: [{ id: 0, text: "Najbliższego pozycjonowanego przodka" }, { id: 1, text: "Okna przeglądarki" }, { id: 2, text: "Poprzedniego elementu" }, { id: 3, text: "Góry strony" }],
                goodAnswer: 0
            },
            {
                id: 210,
                title: "W PHP funkcja `mysqli_num_rows()` zwraca:",
                answers: [{ id: 0, text: "Liczbę wierszy w wyniku zapytania" }, { id: 1, text: "Liczbę kolumn w wyniku" }, { id: 2, text: "Liczbę baz danych" }, { id: 3, text: "Błąd połączenia" }],
                goodAnswer: 0
            },
            {
                id: 211,
                title: "Jak w JS pobrać pierwszy element o klasie `test`?",
                answers: [{ id: 0, text: "`querySelector('.test')`" }, { id: 1, text: "`getElementByClass('test')`" }, { id: 2, text: "`querySelectorAll('.test')`" }, { id: 3, text: "`getElementById('.test')`" }],
                goodAnswer: 0
            },
            {
                id: 212,
                title: "W modelu barw RGB, kolor biały zapisany szesnastkowo to:",
                answers: [{ id: 0, text: "`#000000`" }, { id: 1, text: "`#FF0000`" }, { id: 2, text: "`#FFFFFF`" }, { id: 3, text: "`#111111`" }],
                goodAnswer: 2
            },
            {
                id: 213,
                title: "W SQL operator `NOT LIKE 'A%'` znajdzie teksty:",
                answers: [{ id: 0, text: "Zaczynające się na A" }, { id: 1, text: "Zawierające tylko A" }, { id: 2, text: "Kończące się na A" }, { id: 3, text: "Niezaczynające się na literę A" }],
                goodAnswer: 3
            },
            {
                id: 214,
                title: "W HTML5 znacznik `<label>` łączy się z polem input za pomocą atrybutu:",
                answers: [{ id: 0, text: "`for`" }, { id: 1, text: "`name`" }, { id: 2, text: "`id`" }, { id: 3, text: "`connect`" }],
                goodAnswer: 0
            },
            {
                id: 215,
                title: "W CSS\n\n```\ndisplay: inline-block\n```\n\nsprawia, że element:",
                answers: [{ id: 0, text: "Jest niewidoczny" }, { id: 1, text: "Jest usuwany z DOM" }, { id: 2, text: "Rozciąga się na całą stronę" }, { id: 3, text: "Zachowuje się jak tekst, ale przyjmuje szerokość i wysokość" }],
                goodAnswer: 3
            },
            {
                id: 216,
                title: "W PHP funkcja `is_int()` sprawdza czy:",
                answers: [{ id: 0, text: "Zmienna jest ciągiem" }, { id: 1, text: "Zmienna jest liczbą całkowitą" }, { id: 2, text: "Zmienna istnieje" }, { id: 3, text: "Zmienna jest pusta" }],
                goodAnswer: 1
            },
            {
                id: 217,
                title: "W JavaScript metoda `array.shift()` usuwa:",
                answers: [{ id: 0, text: "Ostatni element" }, { id: 1, text: "Całą tablicę" }, { id: 2, text: "Wybrany element" }, { id: 3, text: "Pierwszy element" }],
                goodAnswer: 3
            },
            {
                id: 218,
                title: "W SQL klauzula `LIMIT 5` spowoduje:",
                answers: [{ id: 0, text: "Pobranie maksymalnie 5 rekordów" }, { id: 1, text: "Pominięcie 5 rekordów" }, { id: 2, text: "Usunięcie 5 rekordów" }, { id: 3, text: "Sortowanie 5 kolumn" }],
                goodAnswer: 0
            },
            {
                id: 219,
                title: "Który atrybut w HTML pozwala na otwarcie linku w nowym oknie?",
                answers: [{ id: 0, text: "`target='_blank'`" }, { id: 1, text: "`target='_new'`" }, { id: 2, text: "`target='_parent'`" }, { id: 3, text: "`target='_top'`" }],
                goodAnswer: 0
            },
            {
                id: 220,
                title: "W CSS właściwość\n\n```\nlist-style-type: none\n```\n\nstosuje się do:",
                answers: [{ id: 0, text: "Usunięcia wypunktowania listy" }, { id: 1, text: "Usunięcia obramowania tabeli" }, { id: 2, text: "Ukrycia tekstu" }, { id: 3, text: "Zmiany czcionki" }],
                goodAnswer: 0
            },
            {
                id: 221,
                title: "W PHP tablica `$_GET` przechowuje dane przesyłane:",
                answers: [{ id: 0, text: "W adresie URL" }, { id: 1, text: "W nagłówku" }, { id: 2, text: "W ciasteczkach" }, { id: 3, text: "W sesji" }],
                goodAnswer: 0
            },
            {
                id: 222,
                title: "W JS pętla `for...in` służy głównie do iteracji po:",
                answers: [{ id: 0, text: "Wartościach tablicy" }, { id: 1, text: "Właściwościach obiektu" }, { id: 2, text: "Plikach" }, { id: 3, text: "Bazie danych" }],
                goodAnswer: 1
            },
            {
                id: 223,
                title: "W SQL polecenie `DELETE` bez klauzuli `WHERE`:",
                answers: [{ id: 0, text: "Usuwa tylko pierwszy wiersz" }, { id: 1, text: "Zwraca błąd składni" }, { id: 2, text: "Usuwa strukturę tabeli" }, { id: 3, text: "Usuwa wszystkie wiersze z tabeli" }],
                goodAnswer: 3
            },
            {
                id: 224,
                title: "Atrybut `rows` i `cols` są charakterystyczne dla znacznika:",
                answers: [{ id: 0, text: "`<input>`" }, { id: 1, text: "`<textarea>`" }, { id: 2, text: "`<table>`" }, { id: 3, text: "`<form>`" }],
                goodAnswer: 1
            },
            {
                id: 225,
                title: "W CSS selektor `:nth-child(2n)` wybierze elementy:",
                answers: [{ id: 0, text: "Wszystkie parzyste elementy" }, { id: 1, text: "Tylko drugi element" }, { id: 2, text: "Wszystkie nieparzyste" }, { id: 3, text: "Pierwsze dwa elementy" }],
                goodAnswer: 0
            },
            {
                id: 226,
                title: "W PHP funkcja `strip_tags()` służy do:",
                answers: [{ id: 0, text: "Dodawania tagów HTML" }, { id: 1, text: "Usuwania tagów HTML z ciągu znaków" }, { id: 2, text: "Formatowania tekstu" }, { id: 3, text: "Szyfrowania danych" }],
                goodAnswer: 1
            },
            {
                id: 227,
                title: "W JS metoda `indexOf()` zwraca -1 gdy:",
                answers: [{ id: 0, text: "Element jest na początku" }, { id: 1, text: "Nie znaleziono elementu" }, { id: 2, text: "Tablica jest pusta" }, { id: 3, text: "Wystąpił błąd krytyczny" }],
                goodAnswer: 1
            },
            {
                id: 228,
                title: "W SQL `PRIMARY KEY` w tabeli może wystąpić:",
                answers: [{ id: 0, text: "Wiele razy" }, { id: 1, text: "Tylko raz" }, { id: 2, text: "Maksymalnie dwa razy" }, { id: 3, text: "Dowolną ilość razy" }],
                goodAnswer: 1
            },
            {
                id: 229,
                title: "Znacznik `<iframe>` w HTML wymaga atrybutu:",
                answers: [{ id: 0, text: "`href`" }, { id: 1, text: "`src`" }, { id: 2, text: "`link`" }, { id: 3, text: "`source`" }],
                goodAnswer: 1
            },
            {
                id: 230,
                title: "W CSS jednostka `rem` odnosi się do rozmiaru czcionki:",
                answers: [{ id: 0, text: "Elementu nadrzędnego" }, { id: 1, text: "Przeglądarki" }, { id: 2, text: "Ekranu" }, { id: 3, text: "Elementu głównego (root - html)" }],
                goodAnswer: 3
            },
            {
                id: 231,
                title: "W PHP funkcja `file_exists()` sprawdza:",
                answers: [{ id: 0, text: "Rozmiar pliku" }, { id: 1, text: "Czy plik lub katalog istnieje" }, { id: 2, text: "Typ pliku" }, { id: 3, text: "Uprawnienia zapisu" }],
                goodAnswer: 1
            },
            {
                id: 232,
                title: "W JS operator `||` to:",
                answers: [{ id: 0, text: "Logiczne OR" }, { id: 1, text: "Logiczne AND" }, { id: 2, text: "Negacja" }, { id: 3, text: "Modulo" }],
                goodAnswer: 0
            },
            {
                id: 233,
                title: "W SQL\n\n```\nUPDATE tabela SET kolumna = NULL\n```\n\nspowoduje:",
                answers: [{ id: 0, text: "Usunięcie kolumny" }, { id: 1, text: "Ustawienie wartości kolumny na pustą (null)" }, { id: 2, text: "Błąd ponieważ NULL jest zakazany" }, { id: 3, text: "Usunięcie wierszy" }],
                goodAnswer: 1
            },
            {
                id: 234,
                title: "Który z wymienionych formatów jest formatem wektorowym?",
                answers: [{ id: 0, text: "GIF" }, { id: 1, text: "TIFF" }, { id: 2, text: "BMP" }, { id: 3, text: "AI" }],
                goodAnswer: 3
            },
            {
                id: 235,
                title: "W CSS właściwość\n\n```\nclear: both\n```\n\nsłuży do:",
                answers: [{ id: 0, text: "Zablokowania opływania elementu z obu stron" }, { id: 1, text: "Wyczyszczenia pamięci" }, { id: 2, text: "Resetowania stylów" }, { id: 3, text: "Usunięcia tła" }],
                goodAnswer: 0
            },
            {
                id: 236,
                title: "W PHP funkcja `date('H')` zwróci:",
                answers: [{ id: 0, text: "Dzień miesiąca" }, { id: 1, text: "Minuty" }, { id: 2, text: "Godzinę w formacie 24-godzinnym" }, { id: 3, text: "Rok" }],
                goodAnswer: 2
            },
            {
                id: 237,
                title: "W JS funkcja `Math.ceil(4.1)` zwróci:",
                answers: [{ id: 0, text: "4" }, { id: 1, text: "5" }, { id: 2, text: "4.1" }, { id: 3, text: "0" }],
                goodAnswer: 1
            },
            {
                id: 238,
                title: "W SQL klauzula `LIKE '_a%'` wyszuka ciągi:",
                answers: [{ id: 0, text: "Zaczynające się na a" }, { id: 1, text: "Mające literę 'a' na drugim miejscu" }, { id: 2, text: "Kończące się na a" }, { id: 3, text: "Dowolne" }],
                goodAnswer: 1
            },
            {
                id: 239,
                title: "W dokumencie HTML znacznik `<meta name='viewport'>` służy do:",
                answers: [{ id: 0, text: "Dostosowania widoku na urządzeniach mobilnych" }, { id: 1, text: "Opisu strony dla Google" }, { id: 2, text: "Ustawienia kodowania" }, { id: 3, text: "Odświeżania strony" }],
                goodAnswer: 0
            },
            {
                id: 240,
                title: "W CSS właściwość\n\n```\nfont-style: italic\n```\n\nodpowiada za:",
                answers: [{ id: 0, text: "Pogrubienie" }, { id: 1, text: "Wielkość liter" }, { id: 2, text: "Podkreślenie" }, { id: 3, text: "Pochylenie (kursywę)" }],
                goodAnswer: 3
            },
            {
                id: 241,
                title: "W PHP funkcja `explode()` służy do:",
                answers: [{ id: 0, text: "Rozbicia ciągu znaków na tablicę" }, { id: 1, text: "Łączenia tablic" }, { id: 2, text: "Usuwania plików" }, { id: 3, text: "Szyfrowania" }],
                goodAnswer: 0
            },
            {
                id: 242,
                title: "W JavaScript zdarzenie `onblur` zachodzi gdy:",
                answers: [{ id: 0, text: "Element odzyskuje fokus" }, { id: 1, text: "Strona się ładuje" }, { id: 2, text: "Mysz najeżdża na element" }, { id: 3, text: "Element traci fokus" }],
                goodAnswer: 3
            },
            {
                id: 243,
                title: "W SQL funkcja `MAX()` służy do:",
                answers: [{ id: 0, text: "Zliczania rekordów" }, { id: 1, text: "Formatowania" }, { id: 2, text: "Sumowania" }, { id: 3, text: "Znalezienia największej wartości" }],
                goodAnswer: 3
            },
            {
                id: 244,
                title: "Który z poniższych kolorów w CSS to kolor czarny?",
                answers: [{ id: 0, text: "`rgb(255,255,255)`" }, { id: 1, text: "`rgb(0,0,0)`" }, { id: 2, text: "`#FFF`" }, { id: 3, text: "`black-color`" }],
                goodAnswer: 1
            },
            {
                id: 245,
                title: "W CSS\n\n```\noverflow: hidden\n```\n\npowoduje:",
                answers: [{ id: 0, text: "Ukrycie treści wystającej poza obszar elementu" }, { id: 1, text: "Dodanie scrolla" }, { id: 2, text: "Ukrycie całego elementu" }, { id: 3, text: "Zwiększenie elementu" }],
                goodAnswer: 0
            },
            {
                id: 246,
                title: "W PHP instrukcja `require` w odróżnieniu od `include`:",
                answers: [{ id: 0, text: "Nie zwraca błędów" }, { id: 1, text: "Zatrzymuje skrypt jeśli pliku nie ma" }, { id: 2, text: "Działa wolniej" }, { id: 3, text: "Służy tylko do obrazków" }],
                goodAnswer: 1
            },
            {
                id: 247,
                title: "W JS `'1' == 1` zwróci:",
                answers: [{ id: 0, text: "`false`" }, { id: 1, text: "`null`" }, { id: 2, text: "`true`" }, { id: 3, text: "`undefined`" }],
                goodAnswer: 2
            },
            {
                id: 248,
                title: "W SQL `INNER JOIN` zwraca wiersze:",
                answers: [{ id: 0, text: "Z lewej tabeli" }, { id: 1, text: "Dla których istnieje dopasowanie w obu tabelach" }, { id: 2, text: "Z obu tabel (wszystkie)" }, { id: 3, text: "Tylko z prawej tabeli" }],
                goodAnswer: 1
            },
            {
                id: 249,
                title: "W HTML5 znacznik `<progress>` służy do:",
                answers: [{ id: 0, text: "Wyświetlenia paska postępu" }, { id: 1, text: "Wgrywania pliku" }, { id: 2, text: "Tworzenia menu" }, { id: 3, text: "Odliczania czasu" }],
                goodAnswer: 0
            },
            {
                id: 250,
                title: "W CSS właściwość `box-shadow` przyjmuje parametry w kolejności:",
                answers: [{ id: 0, text: "kolor, x, y" }, { id: 1, text: "x, kolor, y" }, { id: 2, text: "rozmycie, x, y" }, { id: 3, text: "x-offset, y-offset, rozmycie, kolor" }],
                goodAnswer: 3
            },
            {
                id: 251,
                title: "W PHP superglobalna tablica `$_ENV` zawiera:",
                answers: [{ id: 0, text: "Dane sesji" }, { id: 1, text: "Pliki użytkownika" }, { id: 2, text: "Zmienne środowiskowe serwera" }, { id: 3, text: "Błędy składni" }],
                goodAnswer: 2
            },
            {
                id: 252,
                title: "W JavaScript `Array.isArray([1,2])` zwróci:",
                answers: [{ id: 0, text: "`false`" }, { id: 1, text: "`true`" }, { id: 2, text: "`undefined`" }, { id: 3, text: "`object`" }],
                goodAnswer: 1
            },
            {
                id: 253,
                title: "W SQL `ORDER BY rand()` służy do:",
                answers: [{ id: 0, text: "Sortowania alfabetycznego" }, { id: 1, text: "Sortowania po ID" }, { id: 2, text: "Losowania rekordów" }, { id: 3, text: "Grupowania" }],
                goodAnswer: 2
            },
            {
                id: 254,
                title: "W HTML znacznik `<strong>` służy do:",
                answers: [{ id: 0, text: "Kursywy" }, { id: 1, text: "Zwiększenia czcionki" }, { id: 2, text: "Podkreślenia" }, { id: 3, text: "Ważnego tekstu (pogrubienie)" }],
                goodAnswer: 3
            },
            {
                id: 255,
                title: "W CSS selektor `a:visited` dotyczy:",
                answers: [{ id: 0, text: "Najechanego linku" }, { id: 1, text: "Aktywnego linku" }, { id: 2, text: "Odwiedzonego linku" }, { id: 3, text: "Nowego linku" }],
                goodAnswer: 2
            },
            {
                id: 256,
                title: "W PHP funkcja `htmlspecialchars()` służy do:",
                answers: [{ id: 0, text: "Konwersji znaków specjalnych na encje HTML" }, { id: 1, text: "Tłumaczenia strony" }, { id: 2, text: "Usuwania spacji" }, { id: 3, text: "Łączenia z bazą" }],
                goodAnswer: 0
            },
            {
                id: 257,
                title: "W JS operator `===` zwraca true jeśli:",
                answers: [{ id: 0, text: "Wartości są równe" }, { id: 1, text: "Zmienne istnieją" }, { id: 2, text: "Wartości są różne" }, { id: 3, text: "Wartości i typy są identyczne" }],
                goodAnswer: 3
            },
            {
                id: 258,
                title: "W SQL `DROP TABLE IF EXISTS` chroni przed:",
                answers: [{ id: 0, text: "Błędem w razie braku tabeli" }, { id: 1, text: "Wirusami" }, { id: 2, text: "Usunięciem danych" }, { id: 3, text: "Duplikatami" }],
                goodAnswer: 0
            },
            {
                id: 259,
                title: "Który z atrybutów `<form>` określa sposób kodowania danych przy wysyłaniu pliku?",
                answers: [{ id: 0, text: "`method`" }, { id: 1, text: "`action`" }, { id: 2, text: "`enctype`" }, { id: 3, text: "`type`" }],
                goodAnswer: 2
            },
            {
                id: 260,
                title: "W CSS\n\n```\nresize: both\n```\n\npozwala użytkownikowi na:",
                answers: [{ id: 0, text: "Zmianę tła" }, { id: 1, text: "Przesuwanie elementu" }, { id: 2, text: "Kopiowanie tekstu" }, { id: 3, text: "Zmianę rozmiaru elementu (np. textarea)" }],
                goodAnswer: 3
            },
            {
                id: 261,
                title: "W PHP funkcja `file_get_contents()` służy do:",
                answers: [{ id: 0, text: "Zapisania pliku" }, { id: 1, text: "Zmiany nazwy" }, { id: 2, text: "Usunięcia pliku" }, { id: 3, text: "Odczytania całego pliku do ciągu znaków" }],
                goodAnswer: 3
            },
            {
                id: 262,
                title: "W JS metoda `toFixed(2)` dla liczby 5.678 zwróci:",
                answers: [{ id: 0, text: "5.67" }, { id: 1, text: "6" }, { id: 2, text: "5" }, { id: 3, text: "5.68" }],
                goodAnswer: 3
            },
            {
                id: 263,
                title: "W SQL polecenie `INSERT INTO` wymaga słowa kluczowego:",
                answers: [{ id: 0, text: "`SET`" }, { id: 1, text: "`WHERE`" }, { id: 2, text: "`VALUES`" }, { id: 3, text: "`FROM`" }],
                goodAnswer: 2
            },
            {
                id: 264,
                title: "W HTML znacznik `<thead>` definiuje:",
                answers: [{ id: 0, text: "Głowę dokumentu" }, { id: 1, text: "Tytuł strony" }, { id: 2, text: "Nagłówek tabeli" }, { id: 3, text: "Pierwszy akapit" }],
                goodAnswer: 2
            },
            {
                id: 265,
                title: "W CSS `transition-duration` określa:",
                answers: [{ id: 0, text: "Opóźnienie animacji" }, { id: 1, text: "Czas trwania przejścia" }, { id: 2, text: "Szybkość przewijania" }, { id: 3, text: "Ilość powtórzeń" }],
                goodAnswer: 1
            },
            {
                id: 266,
                title: "W PHP funkcja `trim()` usuwa:",
                answers: [{ id: 0, text: "Tagi HTML" }, { id: 1, text: "Wszystkie liczby" }, { id: 2, text: "Średniki" }, { id: 3, text: "Spacje z początku i końca ciągu" }],
                goodAnswer: 3
            },
            {
                id: 267,
                title: "W JS `window.history.back()` spowoduje:",
                answers: [{ id: 0, text: "Zamknięcie strony" }, { id: 1, text: "Przejście do Google" }, { id: 2, text: "Odświeżenie" }, { id: 3, text: "Powrót do poprzedniej strony w historii" }],
                goodAnswer: 3
            },
            {
                id: 268,
                title: "W SQL operator `IS NULL` służy do:",
                answers: [{ id: 0, text: "Sprawdzania czy wartość wynosi 0" }, { id: 1, text: "Usuwania danych" }, { id: 2, text: "Wyszukiwania pustych wartości" }, { id: 3, text: "Ustawiania zera" }],
                goodAnswer: 2
            },
            {
                id: 269,
                title: "W HTML atrybut `step` w `<input type='number'>` określa:",
                answers: [{ id: 0, text: "Maksymalną wartość" }, { id: 1, text: "Długość pola" }, { id: 2, text: "Interwał zmiany wartości" }, { id: 3, text: "Kolejność tabulacji" }],
                goodAnswer: 2
            },
            {
                id: 270,
                title: "W CSS\n\n```\nfont-size: 1.2rem\n```\n\noznacza rozmiar:",
                answers: [{ id: 0, text: "12 pikseli" }, { id: 1, text: "Stały 1.2cm" }, { id: 2, text: "120% rodzica" }, { id: 3, text: "120% rozmiaru elementu html" }],
                goodAnswer: 3
            },
            {
                id: 271,
                title: "W PHP operator `@` przed funkcją służy do:",
                answers: [{ id: 0, text: "Przyśpieszenia działania" }, { id: 1, text: "Tłumienia komunikatów o błędach" }, { id: 2, text: "Wywołania statycznego" }, { id: 3, text: "Deklaracji globalnej" }],
                goodAnswer: 1
            },
            {
                id: 272,
                title: "W JS `console.table()` służy do:",
                answers: [{ id: 0, text: "Rysowania tabeli HTML" }, { id: 1, text: "Wyświetlania danych w formie tabeli w konsoli" }, { id: 2, text: "Tworzenia bazy danych" }, { id: 3, text: "Sortowania tablicy" }],
                goodAnswer: 1
            },
            {
                id: 273,
                title: "W SQL `GROUP_CONCAT()` w MySQL służy do:",
                answers: [{ id: 0, text: "Sumowania liczb" }, { id: 1, text: "Łączenia kolumn" }, { id: 2, text: "Grupowania tabel" }, { id: 3, text: "Łączenia wartości z wielu wierszy w jeden string" }],
                goodAnswer: 3
            },
            {
                id: 274,
                title: "W HTML5 znacznik `<time>` służy do:",
                answers: [{ id: 0, text: "Ustawienia timera" }, { id: 1, text: "Wyświetlenia zegara" }, { id: 2, text: "Oznaczania daty i czasu w sposób czytelny dla maszyn" }, { id: 3, text: "Mierzenia szybkości strony" }],
                goodAnswer: 2
            },
            {
                id: 275,
                title: "W CSS\n\n```\nflex-grow: 1\n```\n\nsprawia, że:",
                answers: [{ id: 0, text: "Element się nie zmienia" }, { id: 1, text: "Element ma margines 1px" }, { id: 2, text: "Element znika" }, { id: 3, text: "Element rośnie, by wypełnić wolną przestrzeń" }],
                goodAnswer: 3
            },
            {
                id: 276,
                title: "W PHP funkcja `md5()` generuje hash o długości:",
                answers: [{ id: 0, text: "16 znaków" }, { id: 1, text: "32 znaków" }, { id: 2, text: "40 znaków" }, { id: 3, text: "64 znaków" }],
                goodAnswer: 1
            },
            {
                id: 277,
                title: "W JavaScript `event.target` odnosi się do:",
                answers: [{ id: 0, text: "Rodzica elementu" }, { id: 1, text: "Elementu, który wywołał zdarzenie" }, { id: 2, text: "Okna przeglądarki" }, { id: 3, text: "Skryptu" }],
                goodAnswer: 1
            },
            {
                id: 278,
                title: "W SQL polecenie `USE nazwa_bazy` służy do:",
                answers: [{ id: 0, text: "Wybrania bazy danych do pracy" }, { id: 1, text: "Usunięcia bazy" }, { id: 2, text: "Utworzenia bazy" }, { id: 3, text: "Naprawy bazy" }],
                goodAnswer: 0
            },
            {
                id: 279,
                title: "Znacznik `<option selected>` w HTML spowoduje:",
                answers: [{ id: 0, text: "Domyślne zaznaczenie opcji w liście" }, { id: 1, text: "Zablokowanie wyboru" }, { id: 2, text: "Ukrycie opcji" }, { id: 3, text: "Usunięcie opcji" }],
                goodAnswer: 0
            },
            {
                id: 280,
                title: "W CSS\n\n```\nborder: 1px solid red\n```\n\nto:",
                answers: [{ id: 0, text: "Tło" }, { id: 1, text: "Margines wewnętrzny" }, { id: 2, text: "Cień" }, { id: 3, text: "Obramowanie ciągłe czerwone" }],
                goodAnswer: 3
            },
            {
                id: 281,
                title: "W PHP `$argv` to tablica zawierająca:",
                answers: [{ id: 0, text: "Zmienne sesji" }, { id: 1, text: "Dane POST" }, { id: 2, text: "Wersje PHP" }, { id: 3, text: "Argumenty przekazane do skryptu w linii komend" }],
                goodAnswer: 3
            },
            {
                id: 282,
                title: "W JS `Array.from('abc')` stworzy tablicę:",
                answers: [{ id: 0, text: "`['a', 'b', 'c']`" }, { id: 1, text: "`['abc']`" }, { id: 2, text: "`[97, 98, 99]`" }, { id: 3, text: "`[]`" }],
                goodAnswer: 0
            },
            {
                id: 283,
                title: "W SQL\n\n```\nSELECT * FROM tab LIMIT 2, 5\n```\n\npominie:",
                answers: [{ id: 0, text: "5 rekordów" }, { id: 1, text: "2 rekordy" }, { id: 2, text: "Wszystkie rekordy" }, { id: 3, text: "Błędy" }],
                goodAnswer: 1
            },
            {
                id: 284,
                title: "Atrybut `multiple` w `<input type='file'>` pozwala na:",
                answers: [{ id: 0, text: "Wysłanie pliku wiele razy" }, { id: 1, text: "Wybór wielu plików jednocześnie" }, { id: 2, text: "Zablokowanie wyboru" }, { id: 3, text: "Kompresję plików" }],
                goodAnswer: 1
            },
            {
                id: 285,
                title: "W CSS\n\n```\nposition: fixed\n```\n\npozycjonuje względem:",
                answers: [{ id: 0, text: "Rodzica" }, { id: 1, text: "Okna przeglądarki (viewport)" }, { id: 2, text: "Góry dokumentu" }, { id: 3, text: "Innego elementu fixed" }],
                goodAnswer: 1
            },
            {
                id: 286,
                title: "W PHP funkcja `array_keys()` zwraca:",
                answers: [{ id: 0, text: "Wszystkie wartości" }, { id: 1, text: "Długość tablicy" }, { id: 2, text: "Wszystkie klucze tablicy" }, { id: 3, text: "Sume tablicy" }],
                goodAnswer: 2
            },
            {
                id: 287,
                title: "W JavaScript `JSON.stringify()` zamienia:",
                answers: [{ id: 0, text: "Tekst na obiekt" }, { id: 1, text: "Obiekt na ciąg znaków JSON" }, { id: 2, text: "Liczbę na tekst" }, { id: 3, text: "Błędy na null" }],
                goodAnswer: 1
            },
            {
                id: 288,
                title: "W SQL `ADD CONSTRAINT` służy do:",
                answers: [{ id: 0, text: "Dodania ograniczeń (np. klucza obcego)" }, { id: 1, text: "Dodania rekordu" }, { id: 2, text: "Usuwania tabeli" }, { id: 3, text: "Grupowania" }],
                goodAnswer: 0
            },
            {
                id: 289,
                title: "Znacznik `<datalist>` w HTML5 służy do:",
                answers: [{ id: 0, text: "Tworzenia bazy danych" }, { id: 1, text: "Listy numerowanej" }, { id: 2, text: "Definiowania listy podpowiedzi dla pola input" }, { id: 3, text: "Przechowywania haseł" }],
                goodAnswer: 2
            },
            {
                id: 290,
                title: "W CSS właściwość\n\n```\nopacity: 0\n```\n\nsprawia, że element:",
                answers: [{ id: 0, text: "Jest widoczny" }, { id: 1, text: "Jest całkowicie przezroczysty, ale zajmuje miejsce" }, { id: 2, text: "Jest usunięty z układu" }, { id: 3, text: "Zmienia kolor na biały" }],
                goodAnswer: 1
            },
            {
                id: 291,
                title: "W PHP pętla\n\n```\nforeach($tab as $klucz => $wartosc)\n```\n\npozwala na:",
                answers: [{ id: 0, text: "Dostęp tylko do wartości" }, { id: 1, text: "Dostęp do klucza i wartości elementu tablicy" }, { id: 2, text: "Nieskończoną pętlę" }, { id: 3, text: "Sortowanie tablicy" }],
                goodAnswer: 1
            },
            {
                id: 292,
                title: "W JS `window.open()` służy do:",
                answers: [{ id: 0, text: "Otwarcia pliku" }, { id: 1, text: "Otwarcia nowego okna lub karty przeglądarki" }, { id: 2, text: "Uruchomienia programu" }, { id: 3, text: "Zamknięcia strony" }],
                goodAnswer: 1
            },
            {
                id: 293,
                title: "W SQL operator `<>` oznacza:",
                answers: [{ id: 0, text: "Różne (nierówne)" }, { id: 1, text: "Równe" }, { id: 2, text: "Mniejsze lub równe" }, { id: 3, text: "Przybliżone" }],
                goodAnswer: 0
            },
            {
                id: 294,
                title: "W HTML znacznik `<sub>` stworzy tekst:",
                answers: [{ id: 0, text: "W indeksie górnym" }, { id: 1, text: "W indeksie dolnym" }, { id: 2, text: "Podkreślony" }, { id: 3, text: "Mały" }],
                goodAnswer: 1
            },
            {
                id: 295,
                title: "W CSS `word-spacing` zmienia odstępy między:",
                answers: [{ id: 0, text: "Literami" }, { id: 1, text: "Akapitami" }, { id: 2, text: "Wierszami" }, { id: 3, text: "Słowami" }],
                goodAnswer: 3
            },
            {
                id: 296,
                title: "W PHP funkcja `session_name()` służy do:",
                answers: [{ id: 0, text: "Pobrania ID" }, { id: 1, text: "Startu sesji" }, { id: 2, text: "Usunięcia sesji" }, { id: 3, text: "Pobrania lub ustawienia nazwy bieżącej sesji" }],
                goodAnswer: 3
            },
            {
                id: 297,
                title: "W JavaScript `null` jest typu:",
                answers: [{ id: 0, text: "`undefined`" }, { id: 1, text: "`boolean`" }, { id: 2, text: "`null`" }, { id: 3, text: "`object`" }],
                goodAnswer: 3
            },
            {
                id: 298,
                title: "W SQL `SHOW TABLES` wyświetla:",
                answers: [{ id: 0, text: "Dane w tabeli" }, { id: 1, text: "Listę baz danych" }, { id: 2, text: "Listę tabel w bieżącej bazie danych" }, { id: 3, text: "Strukturę tabeli" }],
                goodAnswer: 2
            },
            {
                id: 299,
                title: "Który znacznik HTML służy do wstawiania obrazka?",
                answers: [{ id: 0, text: "`<picture>`" }, { id: 1, text: "`<image>`" }, { id: 2, text: "`<img>`" }, { id: 3, text: "`<src>`" }],
                goodAnswer: 2
            },
            {
                id: 300,
                title: "W CSS `text-shadow` dodaje cień do:",
                answers: [{ id: 0, text: "Tekstu" }, { id: 1, text: "Obrazka" }, { id: 2, text: "Ramki" }, { id: 3, text: "Całej strony" }],
                goodAnswer: 0
            },
            {
                id: 301,
                title: "W PHP funkcja `phpinfo()` wyświetla:",
                answers: [{ id: 0, text: "Błędy w kodzie" }, { id: 1, text: "Informacje o konfiguracji PHP" }, { id: 2, text: "Listę plików na serwerze" }, { id: 3, text: "Czas systemowy" }],
                goodAnswer: 1
            },
            {
                id: 302,
                title: "W JS `history.length` zwraca:",
                answers: [{ id: 0, text: "Ilość sekund" }, { id: 1, text: "Liczbę stron w historii sesji" }, { id: 2, text: "Długość URL" }, { id: 3, text: "Ilość skryptów" }],
                goodAnswer: 1
            },
            {
                id: 303,
                title: "W SQL polecenie\n\n```\nRENAME TABLE old TO new\n```\n\nsłuży do:",
                answers: [{ id: 0, text: "Kopiowania" }, { id: 1, text: "Naprawy" }, { id: 2, text: "Usuwania" }, { id: 3, text: "Zmiany nazwy tabeli" }],
                goodAnswer: 3
            },
            {
                id: 304,
                title: "Atrybut `maxlength` w `<input>` określa:",
                answers: [{ id: 0, text: "Szerokość w pikselach" }, { id: 1, text: "Maksymalną liczbę znaków do wpisania" }, { id: 2, text: "Rozmiar pliku" }, { id: 3, text: "Wartość liczbową" }],
                goodAnswer: 1
            },
            {
                id: 305,
                title: "W CSS właściwość `resize` w Firefox domyślnie działa na:",
                answers: [{ id: 0, text: "`<div>`" }, { id: 1, text: "`<img>`" }, { id: 2, text: "`<textarea>`" }, { id: 3, text: "`<p>`" }],
                goodAnswer: 2
            },
            {
                id: 306,
                title: "W PHP funkcja `unset()` służy do:",
                answers: [{ id: 0, text: "Niszczenia (usuwania) zmiennej" }, { id: 1, text: "Ustawienia zmiennej" }, { id: 2, text: "Resetowania bazy" }, { id: 3, text: "Szyfrowania" }],
                goodAnswer: 0
            },
            {
                id: 307,
                title: "W JS metoda `push()` zwraca:",
                answers: [{ id: 0, text: "Usunięty element" }, { id: 1, text: "Pusty string" }, { id: 2, text: "Dodany element" }, { id: 3, text: "Nową długość tablicy" }],
                goodAnswer: 3
            },
            {
                id: 308,
                title: "W SQL `DESCRIBE nazwa_tabeli` wyświetla:",
                answers: [{ id: 0, text: "Wszystkie dane" }, { id: 1, text: "Strukturę kolumn tabeli" }, { id: 2, text: "Liczbę rekordów" }, { id: 3, text: "Uprawnienia" }],
                goodAnswer: 1
            },
            {
                id: 309,
                title: "W HTML znacznik `<small>` służy do:",
                answers: [{ id: 0, text: "Zmniejszenia czcionki" }, { id: 1, text: "Pisania wielkimi literami" }, { id: 2, text: "Prezentacji tzw. drobnego druku (np. prawnego)" }, { id: 3, text: "Ukrycia tekstu" }],
                goodAnswer: 2
            },
            {
                id: 310,
                title: "W CSS `column-count` służy do:",
                answers: [{ id: 0, text: "Podziału tekstu na kolumny" }, { id: 1, text: "Zliczania wierszy" }, { id: 2, text: "Grupowania tabel" }, { id: 3, text: "Sumowania szerokości" }],
                goodAnswer: 0
            },
            {
                id: 311,
                title: "W PHP funkcja `array_pop()` usuwa element:",
                answers: [{ id: 0, text: "Pierwszy" }, { id: 1, text: "Losowy" }, { id: 2, text: "Ostatni" }, { id: 3, text: "Wszystkie" }],
                goodAnswer: 2
            },
            {
                id: 312,
                title: "W JavaScript `!!` (podwójna negacja) konwertuje wartość na:",
                answers: [{ id: 0, text: "Boolean" }, { id: 1, text: "String" }, { id: 2, text: "Number" }, { id: 3, text: "Null" }],
                goodAnswer: 0
            },
            {
                id: 313,
                title: "W SQL klauzula `ON DELETE CASCADE` oznacza:",
                answers: [{ id: 0, text: "Automatyczne usunięcie rekordów powiązanych" }, { id: 1, text: "Zablokowanie usuwania" }, { id: 2, text: "Błąd bazy danych" }, { id: 3, text: "Zapisanie kopii" }],
                goodAnswer: 0
            },
            {
                id: 314,
                title: "Atrybut `download` w znaczniku `<a>` służy do:",
                answers: [{ id: 0, text: "Otwierania strony" }, { id: 1, text: "Szyfrowania połączenia" }, { id: 2, text: "Liczenia kliknięć" }, { id: 3, text: "Wymuszenia pobierania pliku zamiast otwierania" }],
                goodAnswer: 3
            },
            {
                id: 315,
                title: "W CSS\n\n```\ncursor: wait\n```\n\nzmieni kursor w:",
                answers: [{ id: 0, text: "Symbol ładowania (klepsydrę)" }, { id: 1, text: "Rączkę" }, { id: 2, text: "Krzyżyk" }, { id: 3, text: "Strzałkę" }],
                goodAnswer: 0
            },
            {
                id: 316,
                title: "W PHP funkcja `header_remove()` służy do:",
                answers: [{ id: 0, text: "Usunięcia wcześniej ustawionych nagłówków HTTP" }, { id: 1, text: "Usunięcia nagłówka H1" }, { id: 2, text: "Zmiany tła" }, { id: 3, text: "Resetu sesji" }],
                goodAnswer: 0
            },
            {
                id: 317,
                title: "W JS `Math.pow(2, 3)` zwróci:",
                answers: [{ id: 0, text: "8" }, { id: 1, text: "6" }, { id: 2, text: "9" }, { id: 3, text: "5" }],
                goodAnswer: 0
            },
            {
                id: 318,
                title: "W SQL `SELECT COUNT(*)` zlicza:",
                answers: [{ id: 0, text: "Sume wartości" }, { id: 1, text: "Tylko liczby" }, { id: 2, text: "Tylko unikalne wartości" }, { id: 3, text: "Wszystkie wiersze (włącznie z NULL)" }],
                goodAnswer: 3
            },
            {
                id: 319,
                title: "W HTML znacznik `<caption>` służy do:",
                answers: [{ id: 0, text: "Nagłówka strony" }, { id: 1, text: "Podpisu tabeli" }, { id: 2, text: "Tworzenia linku" }, { id: 3, text: "Stylizacji obrazka" }],
                goodAnswer: 1
            },
            {
                id: 320,
                title: "W CSS\n\n```\nuser-select: none\n```\n\npowoduje:",
                answers: [{ id: 0, text: "Brak możliwości wpisywania" }, { id: 1, text: "Zablokowanie możliwości zaznaczania tekstu" }, { id: 2, text: "Ukrycie kursora" }, { id: 3, text: "Dezaktywację linków" }],
                goodAnswer: 1
            },
            {
                id: 321,
                title: "W PHP funkcja `number_format()` służy do:",
                answers: [{ id: 0, text: "Losowania liczby" }, { id: 1, text: "Konwersji na tekst" }, { id: 2, text: "Formatowania wyświetlania liczb (np. separatory)" }, { id: 3, text: "Obliczania potęgi" }],
                goodAnswer: 2
            },
            {
                id: 322,
                title: "W JS `document.title` pozwala na:",
                answers: [{ id: 0, text: "Zmianę treści body" }, { id: 1, text: "Dodanie nagłówka H1" }, { id: 2, text: "Pobranie lub zmianę tytułu strony w przeglądarce" }, { id: 3, text: "Usunięcie stylów" }],
                goodAnswer: 2
            },
            {
                id: 323,
                title: "W SQL `UPDATE ... SET ...` służy do:",
                answers: [{ id: 0, text: "Dodania tabeli" }, { id: 1, text: "Modyfikacji danych w rekordach" }, { id: 2, text: "Usunięcia bazy" }, { id: 3, text: "Sortowania" }],
                goodAnswer: 1
            },
            {
                id: 324,
                title: "Znacznik `<wbr>` w HTML sugeruje:",
                answers: [{ id: 0, text: "Miejsce, w którym można przełamać linię tekstu" }, { id: 1, text: "Pogrubienie" }, { id: 2, text: "Nowy akapit" }, { id: 3, text: "Koniec sekcji" }],
                goodAnswer: 0
            },
            {
                id: 325,
                title: "W CSS właściwość\n\n```\nfilter: grayscale(100%)\n```\n\nzrobi obrazek:",
                answers: [{ id: 0, text: "Niebieskim" }, { id: 1, text: "Przezroczystym" }, { id: 2, text: "Czarno-białym" }, { id: 3, text: "Odwróconym" }],
                goodAnswer: 2
            },
            {
                id: 326,
                title: "W PHP funkcja `shuffle()` służy do:",
                answers: [{ id: 0, text: "Losowego mieszania elementów tablicy" }, { id: 1, text: "Łączenia tablic" }, { id: 2, text: "Usuwania duplikatów" }, { id: 3, text: "Sortowania rosnąco" }],
                goodAnswer: 0
            },
            {
                id: 327,
                title: "W JS zdarzenie `onchange` jest najczęściej używane z:",
                answers: [{ id: 0, text: "`<a>`" }, { id: 1, text: "`<div>`" }, { id: 2, text: "`<body>`" }, { id: 3, text: "`<select>`, `<input>`, `<textarea>`" }],
                goodAnswer: 3
            },
            {
                id: 328,
                title: "W SQL `PRIMARY KEY` automatycznie nakłada ograniczenie:",
                answers: [{ id: 0, text: "`NULL`" }, { id: 1, text: "`UNIQUE` i `NOT NULL`" }, { id: 2, text: "`FOREIGN KEY`" }, { id: 3, text: "`CHECK`" }],
                goodAnswer: 1
            },
            {
                id: 329,
                title: "Atrybut `autoplay` w `<video>` spowoduje:",
                answers: [{ id: 0, text: "Pobranie filmu" }, { id: 1, text: "Odtwarzanie od końca" }, { id: 2, text: "Wyłączenie dźwięku" }, { id: 3, text: "Samoczynne odtworzenie po załadowaniu" }],
                goodAnswer: 3
            },
            {
                id: 330,
                title: "W CSS\n\n```\noverflow-y: scroll\n```\n\nwymusza pasek przewijania:",
                answers: [{ id: 0, text: "Poziomy" }, { id: 1, text: "Pionowy" }, { id: 2, text: "Oba" }, { id: 3, text: "Żaden" }],
                goodAnswer: 1
            },
            {
                id: 331,
                title: "W PHP funkcja `gettype()` zwraca:",
                answers: [{ id: 0, text: "Rozmiar pliku" }, { id: 1, text: "Kod błędu" }, { id: 2, text: "Wartość zmiennej" }, { id: 3, text: "Nazwę typu danych zmiennej" }],
                goodAnswer: 3
            },
            {
                id: 332,
                title: "W JS metoda `sort()` domyślnie sortuje elementy jako:",
                answers: [{ id: 0, text: "Liczby" }, { id: 1, text: "Ciągi znaków (alfabetycznie)" }, { id: 2, text: "Daty" }, { id: 3, text: "Obiekty" }],
                goodAnswer: 1
            },
            {
                id: 333,
                title: "W SQL `DEFAULT` w definicji kolumny ustawia:",
                answers: [{ id: 0, text: "Klucz główny" }, { id: 1, text: "Typ danych" }, { id: 2, text: "Domyślną wartość dla kolumny" }, { id: 3, text: "Maksymalną długość" }],
                goodAnswer: 2
            },
            {
                id: 334,
                title: "W HTML znacznik `<cite>` służy do:",
                answers: [{ id: 0, text: "Kodowania" }, { id: 1, text: "Podkreślania" }, { id: 2, text: "Oznaczania tytułu dzieła (np. książki)" }, { id: 3, text: "Tworzenia list" }],
                goodAnswer: 2
            },
            {
                id: 335,
                title: "W CSS\n\n```\nbox-sizing: content-box\n```\n\n(domyślnie) sprawia, że szerokość:",
                answers: [{ id: 0, text: "Zawiera padding" }, { id: 1, text: "Jest zawsze 100%" }, { id: 2, text: "Zależy od marginesu" }, { id: 3, text: "Dotyczy tylko samej zawartości (bez paddingu i border)" }],
                goodAnswer: 3
            },
            {
                id: 336,
                title: "W PHP funkcja `array_sum()` oblicza:",
                answers: [{ id: 0, text: "Ilość elementów" }, { id: 1, text: "Średnią" }, { id: 2, text: "Sumę wartości w tablicy" }, { id: 3, text: "Największą wartość" }],
                goodAnswer: 2
            },
            {
                id: 337,
                title: "W JS `location.reload()` służy do:",
                answers: [{ id: 0, text: "Zamknięcia karty" }, { id: 1, text: "Przejścia wstecz" }, { id: 2, text: "Odświeżenia bieżącej strony" }, { id: 3, text: "Czyszczenia konsoli" }],
                goodAnswer: 2
            },
            {
                id: 338,
                title: "W SQL `DATABASE()` zwraca nazwę:",
                answers: [{ id: 0, text: "Wszystkich baz" }, { id: 1, text: "Aktualnie wybranej bazy danych" }, { id: 2, text: "Serwera" }, { id: 3, text: "Użytkownika" }],
                goodAnswer: 1
            },
            {
                id: 339,
                title: "Atrybut `required` w `<input>` sprawia, że:",
                answers: [{ id: 0, text: "Pole jest ukryte" }, { id: 1, text: "Pole musi zostać wypełnione przed wysłaniem" }, { id: 2, text: "Pole jest tylko do odczytu" }, { id: 3, text: "Pole jest zablokowane" }],
                goodAnswer: 1
            },
            {
                id: 340,
                title: "W CSS `text-indent` ustawia:",
                answers: [{ id: 0, text: "Margines zewnętrzny" }, { id: 1, text: "Wcięcie pierwszego wiersza tekstu" }, { id: 2, text: "Odstępy między literami" }, { id: 3, text: "Pogrubienie" }],
                goodAnswer: 1
            },
            {
                id: 341,
                title: "W PHP pętla `do...while` gwarantuje:",
                answers: [{ id: 0, text: "Szybkość" }, { id: 1, text: "Działanie na tablicach" }, { id: 2, text: "Brak błędów" }, { id: 3, text: "Przynajmniej jedno wykonanie kodu" }],
                goodAnswer: 3
            },
            {
                id: 342,
                title: "W JS `Math.sqrt(16)` zwróci:",
                answers: [{ id: 0, text: "4" }, { id: 1, text: "8" }, { id: 2, text: "256" }, { id: 3, text: "2" }],
                goodAnswer: 0
            },
            {
                id: 343,
                title: "W SQL `UNIQUE` zapewnia, że:",
                answers: [{ id: 0, text: "Wartości w kolumnie są niepowtarzalne" }, { id: 1, text: "Kolumna nie jest pusta" }, { id: 2, text: "Kolumna jest kluczem obcym" }, { id: 3, text: "Wartość jest liczbą" }],
                goodAnswer: 0
            },
            {
                id: 344,
                title: "W HTML5 znacznik `<aside>` reprezentuje:",
                answers: [{ id: 0, text: "Główną treść" }, { id: 1, text: "Nagłówek" }, { id: 2, text: "Stopkę" }, { id: 3, text: "Treść poboczną (np. pasek boczny)" }],
                goodAnswer: 3
            },
            {
                id: 345,
                title: "W CSS\n\n```\ndisplay: grid\n```\n\nsłuży do tworzenia:",
                answers: [{ id: 0, text: "Układu siatkowego (dwuwymiarowego)" }, { id: 1, text: "Listy" }, { id: 2, text: "Animacji" }, { id: 3, text: "Cienia" }],
                goodAnswer: 0
            },
            {
                id: 346,
                title: "W PHP funkcja `round(3.5)` zwróci:",
                answers: [{ id: 0, text: "3" }, { id: 1, text: "0" }, { id: 2, text: "3.5" }, { id: 3, text: "4" }],
                goodAnswer: 3
            },
            {
                id: 347,
                title: "W JS `isNaN('hello')` zwróci:",
                answers: [{ id: 0, text: "`false`" }, { id: 1, text: "`true`" }, { id: 2, text: "`undefined`" }, { id: 3, text: "`error`" }],
                goodAnswer: 1
            },
            {
                id: 348,
                title: "W SQL `ALTER TABLE ... DROP COLUMN ...` służy do:",
                answers: [{ id: 0, text: "Dodania kolumny" }, { id: 1, text: "Usunięcia bazy" }, { id: 2, text: "Zmiany typu" }, { id: 3, text: "Usunięcia kolumny" }],
                goodAnswer: 3
            },
            {
                id: 349,
                title: "Który znacznik HTML służy do wstawienia rozwijanej listy?",
                answers: [{ id: 0, text: "`<input type='list'>`" }, { id: 1, text: "`<optgroup>`" }, { id: 2, text: "`<dropdown>`" }, { id: 3, text: "`<select>`" }],
                goodAnswer: 3
            },
            {
                id: 350,
                title: "W CSS\n\n```\nvertical-align: middle\n```\n\ndziała głównie wewnątrz:",
                answers: [{ id: 0, text: "`<div>`" }, { id: 1, text: "Sekcji `<section>`" }, { id: 2, text: "Akapitów `<p>`" }, { id: 3, text: "Komórek tabeli (`<td>`)" }],
                goodAnswer: 3
            },
            {
                id: 351,
                title: "W PHP operator `->` służy do:",
                answers: [{ id: 0, text: "Łączenia stringów" }, { id: 1, text: "Dostępu do właściwości lub metod obiektu" }, { id: 2, text: "Porównania" }, { id: 3, text: "Przypisania w tablicy" }],
                goodAnswer: 1
            },
            {
                id: 352,
                title: "W JS `window.alert()` to skrócona forma:",
                answers: [{ id: 0, text: "`alert()`" }, { id: 1, text: "`msg()`" }, { id: 2, text: "`console.log()`" }, { id: 3, text: "`print()`" }],
                goodAnswer: 0
            },
            {
                id: 353,
                title: "W SQL `NOT BETWEEN 1 AND 10` wybierze wartości:",
                answers: [{ id: 0, text: "Spoza zakresu 1-10" }, { id: 1, text: "Z zakresu 1-10" }, { id: 2, text: "Tylko 1 i 10" }, { id: 3, text: "Ujemne" }],
                goodAnswer: 0
            },
            {
                id: 354,
                title: "Atrybut `href` w `<link>` służy do:",
                answers: [{ id: 0, text: "Wyświetlenia tekstu" }, { id: 1, text: "Definicji meta" }, { id: 2, text: "Połączenia z JS" }, { id: 3, text: "Wskazania ścieżki do arkusza stylów" }],
                goodAnswer: 3
            },
            {
                id: 355,
                title: "W CSS właściwość\n\n```\nfont-variant: small-caps\n```\n\npowoduje:",
                answers: [{ id: 0, text: "Małe litery" }, { id: 1, text: "Zamianę małych liter na małe wersje wielkich liter" }, { id: 2, text: "Pogrubienie" }, { id: 3, text: "Pochylenie" }],
                goodAnswer: 1
            },
            {
                id: 356,
                title: "W PHP funkcja `count($_POST)` zwróci:",
                answers: [{ id: 0, text: "Liczbę pól przesłanych w formularzu metodą POST" }, { id: 1, text: "Liczbę rekordów w bazie" }, { id: 2, text: "Długość adresu URL" }, { id: 3, text: "Zawsze 0" }],
                goodAnswer: 0
            },
            {
                id: 357,
                title: "W JS `confirm()` zwraca typ:",
                answers: [{ id: 0, text: "Boolean (true/false)" }, { id: 1, text: "String" }, { id: 2, text: "Number" }, { id: 3, text: "Object" }],
                goodAnswer: 0
            },
            {
                id: 358,
                title: "W SQL `EXPLAIN` przed zapytaniem służy do:",
                answers: [{ id: 0, text: "Uruchomienia pomocy" }, { id: 1, text: "Szyfrowania" }, { id: 2, text: "Naprawy tabeli" }, { id: 3, text: "Analizy planu wykonania zapytania" }],
                goodAnswer: 3
            },
            {
                id: 359,
                title: "Atrybut `alt` w HTML jest wymagany dla:",
                answers: [{ id: 0, text: "`<a>`" }, { id: 1, text: "`<script>`" }, { id: 2, text: "`<div>`" }, { id: 3, text: "`<img>`" }],
                goodAnswer: 3
            },
            {
                id: 360,
                title: "W CSS\n\n```\nborder-collapse: collapse\n```\n\nstosuje się w:",
                answers: [{ id: 0, text: "Listach" }, { id: 1, text: "Formularzach" }, { id: 2, text: "Obrazkach" }, { id: 3, text: "Tabelach (łączenie krawędzi)" }],
                goodAnswer: 3
            },
            {
                id: 361,
                title: "W PHP `self::` służy do odwołania do:",
                answers: [{ id: 0, text: "Zmiennej globalnej" }, { id: 1, text: "Bazy danych" }, { id: 2, text: "Rodzica" }, { id: 3, text: "Statycznej właściwości lub metody w tej samej klasie" }],
                goodAnswer: 3
            },
            {
                id: 362,
                title: "W JS `document.getElementsByTagName('p')` zwraca:",
                answers: [{ id: 0, text: "Kolekcję (tablicę) wszystkich elementów `<p>`" }, { id: 1, text: "Jeden element" }, { id: 2, text: "Tylko pierwszy `<p>`" }, { id: 3, text: "Tekst wewnątrz `<p>`" }],
                goodAnswer: 0
            },
            {
                id: 363,
                title: "W SQL `CURRENT_DATE` zwraca:",
                answers: [{ id: 0, text: "Czas serwera" }, { id: 1, text: "Poprzednią datę" }, { id: 2, text: "Rok" }, { id: 3, text: "Bieżącą datę" }],
                goodAnswer: 3
            },
            {
                id: 364,
                title: "W HTML znacznik `<address>` służy do:",
                answers: [{ id: 0, text: "Wpisania adresu IP" }, { id: 1, text: "Mapy strony" }, { id: 2, text: "Lokalizacji serwera" }, { id: 3, text: "Danych kontaktowych autora/właściciela" }],
                goodAnswer: 3
            },
            {
                id: 365,
                title: "W CSS\n\n```\ncursor: move\n```\n\nwskazuje na możliwość:",
                answers: [{ id: 0, text: "Kliknięcia" }, { id: 1, text: "Usunięcia" }, { id: 2, text: "Edycji" }, { id: 3, text: "Przesunięcia elementu" }],
                goodAnswer: 3
            },
            {
                id: 366,
                title: "W PHP funkcja `file()` wczytuje plik do:",
                answers: [{ id: 0, text: "Zmiennej tekstowej" }, { id: 1, text: "Bazy danych" }, { id: 2, text: "Tablicy (każdy wiersz to element)" }, { id: 3, text: "Pliku tymczasowego" }],
                goodAnswer: 2
            },
            {
                id: 367,
                title: "W JS `typeof undefined` zwróci:",
                answers: [{ id: 0, text: "`null`" }, { id: 1, text: "`undefined`" }, { id: 2, text: "`object`" }, { id: 3, text: "`string`" }],
                goodAnswer: 1
            },
            {
                id: 368,
                title: "W SQL `INNER JOIN` to samo co:",
                answers: [{ id: 0, text: "`LEFT JOIN`" }, { id: 1, text: "`RIGHT JOIN`" }, { id: 2, text: "`JOIN`" }, { id: 3, text: "`UNION`" }],
                goodAnswer: 2
            },
            {
                id: 369,
                title: "Atrybut `value` w `<input type='submit'>` określa:",
                answers: [{ id: 0, text: "Nazwę pola" }, { id: 1, text: "Metodę kodowania" }, { id: 2, text: "Adres wysyłki" }, { id: 3, text: "Napis na przycisku" }],
                goodAnswer: 3
            },
            {
                id: 370,
                title: "W CSS właściwość `float` nie działa na elementach z:",
                answers: [{ id: 0, text: "```\nposition: absolute\n```" }, { id: 1, text: "```\nposition: static\n```" }, { id: 2, text: "```\ndisplay: block\n```" }, { id: 3, text: "```\ncolor: red\n```" }],
                goodAnswer: 0
            },
            {
                id: 371,
                title: "W PHP `$_SERVER['PHP_SELF']` zwraca:",
                answers: [{ id: 0, text: "Nazwę serwera" }, { id: 1, text: "Wersję PHP" }, { id: 2, text: "Nazwę pliku bieżącego skryptu" }, { id: 3, text: "Adres IP klienta" }],
                goodAnswer: 2
            },
            {
                id: 372,
                title: "W JS pętla `while(true)` bez break to pętla:",
                answers: [{ id: 0, text: "Nieskończona" }, { id: 1, text: "Bezpieczna" }, { id: 2, text: "Zagnieżdżona" }, { id: 3, text: "Pusta" }],
                goodAnswer: 0
            },
            {
                id: 373,
                title: "W SQL operator `IN` jest skrótem dla wielu:",
                answers: [{ id: 0, text: "`AND`" }, { id: 1, text: "`JOIN`" }, { id: 2, text: "`NOT`" }, { id: 3, text: "`OR`" }],
                goodAnswer: 3
            },
            {
                id: 374,
                title: "W HTML znacznik `<legend>` występuje tylko wewnątrz:",
                answers: [{ id: 0, text: "`<fieldset>`" }, { id: 1, text: "`<table>`" }, { id: 2, text: "`<form>`" }, { id: 3, text: "`<ul>`" }],
                goodAnswer: 0
            },
            {
                id: 375,
                title: "W CSS `column-gap` określa odstęp między:",
                answers: [{ id: 0, text: "Wierszami" }, { id: 1, text: "Literami" }, { id: 2, text: "Kolumnami tekstu" }, { id: 3, text: "Obrazkami" }],
                goodAnswer: 2
            },
            {
                id: 376,
                title: "W PHP funkcja `header('Content-Type: application/pdf')` służy do:",
                answers: [{ id: 0, text: "Pobrania pliku" }, { id: 1, text: "Poinformowania przeglądarki, że wysyłany jest plik PDF" }, { id: 2, text: "Konwersji HTML do PDF" }, { id: 3, text: "Hasłowania PDF" }],
                goodAnswer: 1
            },
            {
                id: 377,
                title: "W JS\n\n```\ndocument.body.innerHTML = ''\n```\n\nwyczyści:",
                answers: [{ id: 0, text: "Konsolę" }, { id: 1, text: "Całą zawartość widoczną na stronie" }, { id: 2, text: "Tylko skrypty" }, { id: 3, text: "Ciasteczka" }],
                goodAnswer: 1
            },
            {
                id: 378,
                title: "W SQL `NOT NULL` przy tworzeniu tabeli to:",
                answers: [{ id: 0, text: "Typ danych" }, { id: 1, text: "Nazwa kolumny" }, { id: 2, text: "Wymuszenie, aby kolumna nie była pusta" }, { id: 3, text: "Komentarz" }],
                goodAnswer: 2
            },
            {
                id: 379,
                title: "Który znacznik HTML służy do wstawiania kodu źródłowego?",
                answers: [{ id: 0, text: "`<source>`" }, { id: 1, text: "`<pre>`" }, { id: 2, text: "`<script>`" }, { id: 3, text: "`<code>`" }],
                goodAnswer: 3
            },
            {
                id: 380,
                title: "W CSS\n\n```\ntext-transform: capitalize\n```\n\nzmieni:",
                answers: [{ id: 0, text: "Pierwszą literę każdego słowa na wielką" }, { id: 1, text: "Wszystko na wielkie litery" }, { id: 2, text: "Wszystko na małe litery" }, { id: 3, text: "Tylko pierwszą literę zdania" }],
                goodAnswer: 0
            },
            {
                id: 381,
                title: "W PHP funkcja `empty($var)` zwróci true dla:",
                answers: [{ id: 0, text: "1" }, { id: 1, text: "0, null lub pustego stringa" }, { id: 2, text: "dowolnego obiektu" }, { id: 3, text: "zawsze false" }],
                goodAnswer: 1
            },
            {
                id: 382,
                title: "W JS\n\n```\nconst tab = [1,2]; tab.push(3);\n```\n\nspowoduje:",
                answers: [{ id: 0, text: "Dodanie 3 do tablicy" }, { id: 1, text: "Błąd ponieważ tab to stała" }, { id: 2, text: "Usunięcie tablicy" }, { id: 3, text: "Nic" }],
                goodAnswer: 0
            },
            {
                id: 383,
                title: "W SQL `SELECT DISTINCT` usuwa z wyników:",
                answers: [{ id: 0, text: "Wszystkie wiersze" }, { id: 1, text: "Duplikaty" }, { id: 2, text: "Wartości NULL" }, { id: 3, text: "Błędy" }],
                goodAnswer: 1
            },
            {
                id: 384,
                title: "W HTML5 znacznik `<track>` służy do:",
                answers: [{ id: 0, text: "Śledzenia użytkownika" }, { id: 1, text: "Pomiaru prędkości" }, { id: 2, text: "Odtwarzania muzyki" }, { id: 3, text: "Dodawania napisów do <video>" }],
                goodAnswer: 3
            },
            {
                id: 385,
                title: "W CSS właściwość\n\n```\nlist-style-position: inside\n```\n\numieszcza punktory:",
                answers: [{ id: 0, text: "Wewnątrz obszaru treści elementu listy" }, { id: 1, text: "Na zewnątrz tekstu" }, { id: 2, text: "Na górze" }, { id: 3, text: "Z prawej strony" }],
                goodAnswer: 0
            },
            {
                id: 386,
                title: "W PHP `->` to operator:",
                answers: [{ id: 0, text: "Porównania" }, { id: 1, text: "Obiektowy (wywołanie metody/właściwości)" }, { id: 2, text: "Bitowy" }, { id: 3, text: "Logiczny" }],
                goodAnswer: 1
            },
            {
                id: 387,
                title: "W JS `prompt()` zawsze zwraca:",
                answers: [{ id: 0, text: "Number" }, { id: 1, text: "String lub null" }, { id: 2, text: "Boolean" }, { id: 3, text: "Undefined" }],
                goodAnswer: 1
            },
            {
                id: 388,
                title: "W SQL `TRUNCATE` jest szybszy niż `DELETE` ponieważ:",
                answers: [{ id: 0, text: "Nie zapisuje logów dla każdego wiersza" }, { id: 1, text: "Usuwa bazę" }, { id: 2, text: "Jest nowszy" }, { id: 3, text: "Działa tylko na liczbach" }],
                goodAnswer: 0
            },
            {
                id: 389,
                title: "Atrybut `size` w `<select>` określa:",
                answers: [{ id: 0, text: "Szerokość" }, { id: 1, text: "Liczbę widocznych jednocześnie opcji" }, { id: 2, text: "Maksymalną liczbę opcji" }, { id: 3, text: "Wielkość czcionki" }],
                goodAnswer: 1
            },
            {
                id: 390,
                title: "W CSS właściwość `resize` wymaga również ustawienia:",
                answers: [{ id: 0, text: "`color`" }, { id: 1, text: "`margin`" }, { id: 2, text: "`overflow` (innego niż `visible`)" }, { id: 3, text: "`z-index`" }],
                goodAnswer: 2
            },
            {
                id: 391,
                title: "W PHP funkcja `mysqli_close()` służy do:",
                answers: [{ id: 0, text: "Zamknięcia sesji" }, { id: 1, text: "Ukrycia błędów" }, { id: 2, text: "Zamknięcia pliku" }, { id: 3, text: "Zamknięcia połączenia z bazą danych" }],
                goodAnswer: 3
            },
            {
                id: 392,
                title: "W JS `Math.min(5, 10, 2)` zwróci:",
                answers: [{ id: 0, text: "5" }, { id: 1, text: "2" }, { id: 2, text: "10" }, { id: 3, text: "`NaN`" }],
                goodAnswer: 1
            },
            {
                id: 393,
                title: "W SQL `BACKUP DATABASE` służy do:",
                answers: [{ id: 0, text: "Usuwania" }, { id: 1, text: "Grupowania" }, { id: 2, text: "Naprawy" }, { id: 3, text: "Tworzenia kopii zapasowej" }],
                goodAnswer: 3
            },
            {
                id: 394,
                title: "Znacznik `<i>` w HTML5 służy do:",
                answers: [{ id: 0, text: "Pogrubienia" }, { id: 1, text: "Tekstu alternatywnego (np. technicznego lub myśli)" }, { id: 2, text: "Definicji" }, { id: 3, text: "Wstawienia ikony" }],
                goodAnswer: 1
            },
            {
                id: 395,
                title: "W CSS\n\n```\nwhite-space: pre\n```\n\nzachowuje:",
                answers: [{ id: 0, text: "Kolory" }, { id: 1, text: "Marginesy" }, { id: 2, text: "Spacje i znaki nowej linii" }, { id: 3, text: "Tylko tekst" }],
                goodAnswer: 2
            },
            {
                id: 396,
                title: "W PHP funkcja `array_reverse()` służy do:",
                answers: [{ id: 0, text: "Sortowania" }, { id: 1, text: "Usuwania" }, { id: 2, text: "Łączenia" }, { id: 3, text: "Odwrócenia kolejności elementów w tablicy" }],
                goodAnswer: 3
            },
            {
                id: 397,
                title: "W JS `new Date()` bez parametrów zwraca:",
                answers: [{ id: 0, text: "Rok" }, { id: 1, text: "Błąd" }, { id: 2, text: "0" }, { id: 3, text: "Aktualną datę i godzinę systemową" }],
                goodAnswer: 3
            },
            {
                id: 398,
                title: "W SQL `ORDER BY 1` oznacza sortowanie według:",
                answers: [{ id: 0, text: "Liczby 1" }, { id: 1, text: "Pierwszej kolumny w zapytaniu SELECT" }, { id: 2, text: "ID" }, { id: 3, text: "Alfabetycznie" }],
                goodAnswer: 1
            },
            {
                id: 399,
                title: "Atrybut `accept` w `<input type='file'>` służy do:",
                answers: [{ id: 0, text: "Filtrowania dopuszczalnych typów plików" }, { id: 1, text: "Akceptacji regulaminu" }, { id: 2, text: "Zwiększenia szybkości" }, { id: 3, text: "Szyfrowania" }],
                goodAnswer: 0
            },
            {
                id: 400,
                title: "W programie GIMP skrót 'Ctrl+Z' służy do:",
                answers: [{ id: 0, text: "Zapisu" }, { id: 1, text: "Pędzla" }, { id: 2, text: "Zamknięcia" }, { id: 3, text: "Cofnięcia ostatniej operacji" }],
                goodAnswer: 3
            }
        ],
        available: true
    },
    {
        name: "INF.04",
        fullName: "Projektowanie, programowanie i testowanie aplikacji",
        questions: [
            {
                id: 0,
                title: "Która cecha programowania obiektowego polega na ukrywaniu szczegółów implementacji i udostępnianiu danych obiektu wyłącznie przez jego metody?",
                answers: [{ id: 0, text: "Dziedziczenie" }, { id: 1, text: "Hermetyzacja" }, { id: 2, text: "Polimorfizm" }, { id: 3, text: "Rekurencja" }],
                goodAnswer: 1
            },
            {
                id: 1,
                title: "Zapis w języku Java:\n\n```\npublic class Jablko extends Owoc { }\n```\n\njest przykładem:",
                answers: [{ id: 0, text: "hermetyzacji" }, { id: 1, text: "polimorfizmu" }, { id: 2, text: "dziedziczenia" }, { id: 3, text: "przeciążania metod" }],
                goodAnswer: 2
            },
            {
                id: 2,
                title: "Czym jest polimorfizm w programowaniu obiektowym?",
                answers: [{ id: 0, text: "Obiekty różnych klas mogą w różny sposób reagować na wywołanie tej samej metody" }, { id: 1, text: "Ukrywaniem szczegółów implementacji klasy" }, { id: 2, text: "Tworzeniem nowej klasy na podstawie już istniejącej" }, { id: 3, text: "Możliwością posiadania przez klasę wielu konstruktorów" }],
                goodAnswer: 0
            },
            {
                id: 3,
                title: "Klasa abstrakcyjna to klasa, która:",
                answers: [{ id: 0, text: "nie może zawierać żadnych metod" }, { id: 1, text: "nie może zawierać metod wirtualnych" }, { id: 2, text: "zawsze dziedziczy po innej klasie bazowej" }, { id: 3, text: "może być dziedziczona, ale nie można utworzyć jej instancji" }],
                goodAnswer: 3
            },
            {
                id: 4,
                title: "Konstruktor klasy to metoda, która:",
                answers: [{ id: 0, text: "jest wywoływana automatycznie podczas usuwania obiektu" }, { id: 1, text: "musi zwracać wartość typu int" }, { id: 2, text: "może być wywołana tylko jawnie po utworzeniu obiektu" }, { id: 3, text: "jest wywoływana automatycznie podczas tworzenia obiektu" }],
                goodAnswer: 3
            },
            {
                id: 5,
                title: "Destruktor w języku C++:",
                answers: [{ id: 0, text: "służy do tworzenia kopii obiektu" }, { id: 1, text: "jest wywoływany automatycznie podczas usuwania obiektu i służy do zwalniania zasobów" }, { id: 2, text: "może przyjmować dowolną liczbę parametrów" }, { id: 3, text: "zawsze zwraca wartość typu bool" }],
                goodAnswer: 1
            },
            {
                id: 6,
                title: "Jak poprawnie zadeklarować destruktor klasy `Punkt` w języku C++?",
                answers: [{ id: 0, text: "```\n~Punkt();\n```" }, { id: 1, text: "```\nPunkt();\n```" }, { id: 2, text: "```\ndelete Punkt();\n```" }, { id: 3, text: "```\nvoid destroy Punkt();\n```" }],
                goodAnswer: 0
            },
            {
                id: 7,
                title: "Składowa klasy oznaczona modyfikatorem `private` jest dostępna:",
                answers: [{ id: 0, text: "wyłącznie wewnątrz klasy, w której została zadeklarowana" }, { id: 1, text: "w klasie i we wszystkich klasach pochodnych" }, { id: 2, text: "z dowolnego miejsca programu" }, { id: 3, text: "w każdej klasie zdefiniowanej w tym samym pliku" }],
                goodAnswer: 0
            },
            {
                id: 8,
                title: "Składowa klasy oznaczona modyfikatorem `protected` jest dostępna:",
                answers: [{ id: 0, text: "w tej klasie oraz w klasach z niej dziedziczących" }, { id: 1, text: "wyłącznie w tej klasie" }, { id: 2, text: "z dowolnego miejsca programu" }, { id: 3, text: "wyłącznie w metodach statycznych" }],
                goodAnswer: 0
            },
            {
                id: 9,
                title: "Klasa bazowa `Klient` ma pola: `Name` (`public`), `Id` (`protected`) i `Age` (`private`). Klasa `GoldCustomer` dziedziczy publicznie po `Klient` i ma własne pole prywatne `GoldPoints`. Do których pól można się bezpośrednio odwołać w metodach klasy `GoldCustomer`?",
                answers: [{ id: 0, text: "`GoldPoints`, `Name`" }, { id: 1, text: "`GoldPoints`" }, { id: 2, text: "`GoldPoints`, `Name`, `Id`, `Age`" }, { id: 3, text: "`GoldPoints`, `Name`, `Id`" }],
                goodAnswer: 3
            },
            {
                id: 10,
                title: "Pole statyczne klasy:",
                answers: [{ id: 0, text: "każdy obiekt posiada jego własną, niezależną kopię" }, { id: 1, text: "jest dostępne wyłącznie w obiektach tworzonych dynamicznie" }, { id: 2, text: "jest wspólne dla wszystkich obiektów tej klasy" }, { id: 3, text: "jest usuwane po zakończeniu każdej metody klasy" }],
                goodAnswer: 2
            },
            {
                id: 11,
                title: "Przeciążanie metod (overloading) polega na:",
                answers: [{ id: 0, text: "zdefiniowaniu w klasie kilku metod o tej samej nazwie, różniących się listą parametrów" }, { id: 1, text: "zdefiniowaniu w klasie pochodnej metody o tej samej sygnaturze co w klasie bazowej" }, { id: 2, text: "wywołaniu metody klasy bazowej z klasy pochodnej" }, { id: 3, text: "ukryciu metody przed innymi klasami" }],
                goodAnswer: 0
            },
            {
                id: 12,
                title: "Przesłanianie metod (overriding) polega na:",
                answers: [{ id: 0, text: "zdefiniowaniu kilku metod o tej samej nazwie i różnych parametrach w jednej klasie" }, { id: 1, text: "zdefiniowaniu w klasie pochodnej metody o tej samej sygnaturze co metoda klasy bazowej" }, { id: 2, text: "zmianie nazwy metody w klasie pochodnej" }, { id: 3, text: "oznaczeniu metody jako statycznej" }],
                goodAnswer: 1
            },
            {
                id: 13,
                title: "Interfejs w językach Java i C# to:",
                answers: [{ id: 0, text: "klasa zawierająca wyłącznie pola prywatne" }, { id: 1, text: "graficzny element aplikacji służący do komunikacji z użytkownikiem" }, { id: 2, text: "zbiór deklaracji metod, które musi zdefiniować klasa go implementująca" }, { id: 3, text: "typ przechowujący wyłącznie zmienne globalne" }],
                goodAnswer: 2
            },
            {
                id: 14,
                title: "Które słowo kluczowe w języku C++ pozwala na dynamiczne (późne) wiązanie metod, czyli polimorfizm w czasie wykonania?",
                answers: [{ id: 0, text: "`static`" }, { id: 1, text: "`const`" }, { id: 2, text: "`virtual`" }, { id: 3, text: "`friend`" }],
                goodAnswer: 2
            },
            {
                id: 15,
                title: "Która deklaracja w języku C++ definiuje metodę czysto wirtualną?",
                answers: [{ id: 0, text: "```\nvirtual void rysuj() {}\n```" }, { id: 1, text: "```\nvirtual void rysuj() = 0;\n```" }, { id: 2, text: "```\nvoid rysuj() const;\n```" }, { id: 3, text: "```\nstatic void rysuj();\n```" }],
                goodAnswer: 1
            },
            {
                id: 16,
                title: "Funkcja zaprzyjaźniona (`friend`) z klasą w języku C++:",
                answers: [{ id: 0, text: "ma dostęp do prywatnych i chronionych składowych klasy, choć nie jest jej metodą" }, { id: 1, text: "jest metodą statyczną tej klasy" }, { id: 2, text: "dziedziczy wszystkie pola tej klasy" }, { id: 3, text: "jest wywoływana automatycznie podczas tworzenia obiektu" }],
                goodAnswer: 0
            },
            {
                id: 17,
                title: "Słowo kluczowe `this` użyte wewnątrz metody klasy odnosi się do:",
                answers: [{ id: 0, text: "klasy bazowej" }, { id: 1, text: "następnego obiektu tej samej klasy" }, { id: 2, text: "bieżącego obiektu, na rzecz którego wywołano metodę" }, { id: 3, text: "nowo tworzonego obiektu innej klasy" }],
                goodAnswer: 2
            },
            {
                id: 18,
                title: "Które słowo kluczowe w języku Java służy do wywołania konstruktora lub metody klasy bazowej?",
                answers: [{ id: 0, text: "`base`" }, { id: 1, text: "`super`" }, { id: 2, text: "`parent`" }, { id: 3, text: "`inherited`" }],
                goodAnswer: 1
            },
            {
                id: 19,
                title: "Obiekt w programowaniu obiektowym to:",
                answers: [{ id: 0, text: "instancja (egzemplarz) klasy" }, { id: 1, text: "definicja nowego typu danych" }, { id: 2, text: "zbiór funkcji globalnych" }, { id: 3, text: "plik nagłówkowy z deklaracjami" }],
                goodAnswer: 0
            },
            {
                id: 20,
                title: "Jaką funkcję pełnią atrybuty (pola) klasy?",
                answers: [{ id: 0, text: "Definiują stałe globalne programu" }, { id: 1, text: "Przechowują zmienne lokalne funkcji" }, { id: 2, text: "Przechowują informacje opisujące stan obiektu" }, { id: 3, text: "Określają operacje, które można wykonać na obiekcie" }],
                goodAnswer: 2
            },
            {
                id: 21,
                title: "Metody typu getter i setter służą do:",
                answers: [{ id: 0, text: "tworzenia i usuwania obiektów" }, { id: 1, text: "sortowania kolekcji obiektów" }, { id: 2, text: "kontrolowanego odczytu i modyfikacji prywatnych pól obiektu" }, { id: 3, text: "obsługi wyjątków" }],
                goodAnswer: 2
            },
            {
                id: 22,
                title: "Czym różni się kompozycja od agregacji?",
                answers: [{ id: 0, text: "W agregacji część nie może istnieć niezależnie od całości, a w kompozycji może" }, { id: 1, text: "W kompozycji część nie może istnieć niezależnie od całości, a w agregacji może" }, { id: 2, text: "Są to dwie nazwy tej samej relacji" }, { id: 3, text: "Kompozycja dotyczy wyłącznie interfejsów" }],
                goodAnswer: 1
            },
            {
                id: 23,
                title: "Które słowo kluczowe w języku Java uniemożliwia dziedziczenie po klasie?",
                answers: [{ id: 0, text: "`static`" }, { id: 1, text: "`final`" }, { id: 2, text: "`abstract`" }, { id: 3, text: "`protected`" }],
                goodAnswer: 1
            },
            {
                id: 24,
                title: "Która deklaracja poprawnie przeciąża operator dodawania w klasie `Wektor` w języku C++?",
                answers: [{ id: 0, text: "```\nWektor +operator(Wektor w);\n```" }, { id: 1, text: "```\noperator Wektor+(Wektor w);\n```" }, { id: 2, text: "```\nWektor operator+(const Wektor &w);\n```" }, { id: 3, text: "```\nWektor overload+(const Wektor &w);\n```" }],
                goodAnswer: 2
            },
            {
                id: 25,
                title: "Co zostanie wyświetlone po wykonaniu kodu w języku C++?\n\n```\nint a = 1;\nwhile (a++ < 6)\n    cout << a << \" \";\n```",
                answers: [{ id: 0, text: "1 2 3 4 5 6" }, { id: 1, text: "1 2 3 4 5" }, { id: 2, text: "2 3 4 5 6" }, { id: 3, text: "2 3 4 5 6 7" }],
                goodAnswer: 2
            },
            {
                id: 26,
                title: "Co zostanie wyświetlone po wykonaniu kodu w języku C++?\n\n```\nint x = 7, y = 2;\ncout << x / y;\n```",
                answers: [{ id: 0, text: "3.5" }, { id: 1, text: "4" }, { id: 2, text: "3" }, { id: 3, text: "1" }],
                goodAnswer: 2
            },
            {
                id: 27,
                title: "Jaka wartość zostanie wyświetlona po wykonaniu kodu w języku C++?\n\n```\nint i;\nfor (i = 0; i < 10; i += 3);\ncout << i;\n```",
                answers: [{ id: 0, text: "12" }, { id: 1, text: "9" }, { id: 2, text: "10" }, { id: 3, text: "13" }],
                goodAnswer: 0
            },
            {
                id: 28,
                title: "Co zostanie wyświetlone po wykonaniu kodu w języku C++?\n\n```\nint tab[5] = {4, 7, 1, 9, 3};\nint m = tab[0];\nfor (int i = 1; i < 5; i++)\n    if (tab[i] > m) m = tab[i];\ncout << m;\n```",
                answers: [{ id: 0, text: "4" }, { id: 1, text: "3" }, { id: 2, text: "9" }, { id: 3, text: "1" }],
                goodAnswer: 2
            },
            {
                id: 29,
                title: "Co zostanie wyświetlone po wykonaniu kodu w języku C++?\n\n```\nint a = 5;\nint *p = &a;\n*p = 10;\ncout << a;\n```",
                answers: [{ id: 0, text: "5" }, { id: 1, text: "adres zmiennej a" }, { id: 2, text: "błąd kompilacji" }, { id: 3, text: "10" }],
                goodAnswer: 3
            },
            {
                id: 30,
                title: "Funkcja `zmien` przyjmuje argument przez referencję. Co zostanie wyświetlone?\n\n```\nvoid zmien(int &x) { x = x * 2; }\n\nint main() {\n    int a = 4;\n    zmien(a);\n    cout << a;\n}\n```",
                answers: [{ id: 0, text: "4" }, { id: 1, text: "8" }, { id: 2, text: "2" }, { id: 3, text: "16" }],
                goodAnswer: 1
            },
            {
                id: 31,
                title: "Jaka wartość zmiennej `x` zostanie wyświetlona po wykonaniu kodu w języku C++?\n\n```\nint x = 0;\nfor (int i = 1; i <= 10; i++) {\n    if (i % 2 == 0) continue;\n    x += i;\n}\ncout << x;\n```",
                answers: [{ id: 0, text: "30" }, { id: 1, text: "25" }, { id: 2, text: "20" }, { id: 3, text: "45" }],
                goodAnswer: 1
            },
            {
                id: 32,
                title: "Co zostanie wyświetlone po wykonaniu kodu w języku C++?\n\n```\nstring s = \"Programista\";\ncout << s.length();\n```",
                answers: [{ id: 0, text: "10" }, { id: 1, text: "11" }, { id: 2, text: "12" }, { id: 3, text: "9" }],
                goodAnswer: 1
            },
            {
                id: 33,
                title: "Jaki wyjątek zostanie zgłoszony po wykonaniu kodu w języku Java?\n\n```\nint[] t = new int[5];\nt[5] = 1;\n```",
                answers: [{ id: 0, text: "`NullPointerException`" }, { id: 1, text: "`ArithmeticException`" }, { id: 2, text: "`ClassCastException`" }, { id: 3, text: "`ArrayIndexOutOfBoundsException`" }],
                goodAnswer: 3
            },
            {
                id: 34,
                title: "Jaki wyjątek zostanie zgłoszony po wykonaniu kodu w języku Java?\n\n```\nint a = 10, b = 0;\nint x = a / b;\n```",
                answers: [{ id: 0, text: "`NumberFormatException`" }, { id: 1, text: "`ArrayIndexOutOfBoundsException`" }, { id: 2, text: "`ArithmeticException`" }, { id: 3, text: "`NullPointerException`" }],
                goodAnswer: 2
            },
            {
                id: 35,
                title: "Jaki wyjątek zostanie zgłoszony po wykonaniu kodu w języku Java?\n\n```\nString s = null;\nint n = s.length();\n```",
                answers: [{ id: 0, text: "`NullPointerException`" }, { id: 1, text: "`ArithmeticException`" }, { id: 2, text: "`IllegalStateException`" }, { id: 3, text: "`ClassNotFoundException`" }],
                goodAnswer: 0
            },
            {
                id: 36,
                title: "Co zostanie wyświetlone po wykonaniu kodu w języku Java?\n\n```\nSystem.out.println(\"5\" + 3 + 2);\n```",
                answers: [{ id: 0, text: "10" }, { id: 1, text: "55" }, { id: 2, text: "532" }, { id: 3, text: "5 3 2" }],
                goodAnswer: 2
            },
            {
                id: 37,
                title: "Co zostanie wyświetlone po wykonaniu kodu w języku Python?\n\n```\nprint(len([1, [2, 3], 4]))\n```",
                answers: [{ id: 0, text: "3" }, { id: 1, text: "4" }, { id: 2, text: "5" }, { id: 3, text: "2" }],
                goodAnswer: 0
            },
            {
                id: 38,
                title: "Co zostanie wyświetlone po wykonaniu kodu w języku Python?\n\n```\nlista = [1, 2, 3, 4, 5]\nprint(lista[1:3])\n```",
                answers: [{ id: 0, text: "`[1, 2, 3]`" }, { id: 1, text: "`[2, 3, 4]`" }, { id: 2, text: "`[2, 3]`" }, { id: 3, text: "`[1, 2]`" }],
                goodAnswer: 2
            },
            {
                id: 39,
                title: "Który typ danych w języku C++ służy do przechowywania wartości logicznych?",
                answers: [{ id: 0, text: "`boolean`" }, { id: 1, text: "`logical`" }, { id: 2, text: "`bool`" }, { id: 3, text: "`bit`" }],
                goodAnswer: 2
            },
            {
                id: 40,
                title: "Która deklaracja tablicy 10 liczb całkowitych jest poprawna w języku C++?",
                answers: [{ id: 0, text: "```\nint tab(10);\n```" }, { id: 1, text: "```\nint tab[10];\n```" }, { id: 2, text: "```\ntab int[10];\n```" }, { id: 3, text: "```\nint[10] tab;\n```" }],
                goodAnswer: 1
            },
            {
                id: 41,
                title: "Jak poprawnie zwolnić pamięć tablicy przydzielonej w C++ poniższą instrukcją?\n\n```\nint *t = new int[10];\n```",
                answers: [{ id: 0, text: "```\ndelete t[];\n```" }, { id: 1, text: "```\nfree t;\n```" }, { id: 2, text: "```\nremove(t);\n```" }, { id: 3, text: "```\ndelete[] t;\n```" }],
                goodAnswer: 3
            },
            {
                id: 42,
                title: "Wyciek pamięci (memory leak) to sytuacja, w której:",
                answers: [{ id: 0, text: "zmienna lokalna zostaje nadpisana nową wartością" }, { id: 1, text: "program kończy działanie z powodu błędu składni" }, { id: 2, text: "kompilator usuwa nieużywane zmienne" }, { id: 3, text: "pamięć przydzielona dynamicznie nie zostaje zwolniona, mimo że nie jest już używana" }],
                goodAnswer: 3
            },
            {
                id: 43,
                title: "Jakie wartości będą miały zmienne `a` i `b` po wykonaniu kodu w języku C++?\n\n```\nint a = 5;\nint b = a++;\n```",
                answers: [{ id: 0, text: "`a = 6, b = 6`" }, { id: 1, text: "`a = 5, b = 6`" }, { id: 2, text: "`a = 6, b = 5`" }, { id: 3, text: "`a = 5, b = 5`" }],
                goodAnswer: 2
            },
            {
                id: 44,
                title: "Które wyrażenie jest prawdziwe, gdy zmienna `x` jest mniejsza od 0 albo należy do przedziału otwartego (10, 100)?",
                answers: [{ id: 0, text: "`x > 10 || x < 100 || x < 0`" }, { id: 1, text: "`(x > 10 || x < 100) && x < 0`" }, { id: 2, text: "`x > 10 && x < 100 && x < 0`" }, { id: 3, text: "`(x > 10 && x < 100) || x < 0`" }],
                goodAnswer: 3
            },
            {
                id: 45,
                title: "Co zostanie wyświetlone po wykonaniu kodu w języku C++?\n\n```\nint n = 2;\nswitch (n) {\n    case 1: cout << \"A\";\n    case 2: cout << \"B\";\n    case 3: cout << \"C\"; break;\n    default: cout << \"D\";\n}\n```",
                answers: [{ id: 0, text: "B" }, { id: 1, text: "BCD" }, { id: 2, text: "ABC" }, { id: 3, text: "BC" }],
                goodAnswer: 3
            },
            {
                id: 46,
                title: "Pętla `do...while`:",
                answers: [{ id: 0, text: "może nie wykonać się ani razu" }, { id: 1, text: "zawsze wykona się co najmniej raz" }, { id: 2, text: "jest zawsze pętlą nieskończoną" }, { id: 3, text: "wymaga podania liczby powtórzeń przed jej rozpoczęciem" }],
                goodAnswer: 1
            },
            {
                id: 47,
                title: "Jaki wynik zwróci wywołanie `f(5)` funkcji rekurencyjnej w języku C++?\n\n```\nint f(int n) {\n    if (n <= 1) return 1;\n    return n * f(n - 1);\n}\n\nint main() {\n    cout << f(5);\n}\n```",
                answers: [{ id: 0, text: "25" }, { id: 1, text: "120" }, { id: 2, text: "15" }, { id: 3, text: "24" }],
                goodAnswer: 1
            },
            {
                id: 48,
                title: "Jaki wynik zwróci wywołanie `fib(6)` funkcji w języku C++?\n\n```\nint fib(int n) {\n    if (n < 2) return n;\n    return fib(n - 1) + fib(n - 2);\n}\n\nint main() {\n    cout << fib(6);\n}\n```",
                answers: [{ id: 0, text: "5" }, { id: 1, text: "13" }, { id: 2, text: "8" }, { id: 3, text: "6" }],
                goodAnswer: 2
            },
            {
                id: 49,
                title: "Co zostanie wyświetlone po wykonaniu kodu w języku C++?\n\n```\nprintf(\"%.2f\", 3.14159);\n```",
                answers: [{ id: 0, text: "3.141590" }, { id: 1, text: "3.1" }, { id: 2, text: "3.14" }, { id: 3, text: "3.15" }],
                goodAnswer: 2
            },
            {
                id: 50,
                title: "Który kontener biblioteki STL w języku C++ jest dynamiczną tablicą automatycznie zmieniającą rozmiar?",
                answers: [{ id: 0, text: "`vector`" }, { id: 1, text: "`map`" }, { id: 2, text: "`set`" }, { id: 3, text: "`stack`" }],
                goodAnswer: 0
            },
            {
                id: 51,
                title: "Który kontener biblioteki STL przechowuje pary klucz–wartość uporządkowane według klucza?",
                answers: [{ id: 0, text: "`map`" }, { id: 1, text: "`vector`" }, { id: 2, text: "`queue`" }, { id: 3, text: "`array`" }],
                goodAnswer: 0
            },
            {
                id: 52,
                title: "Który plik nagłówkowy należy dołączyć w języku C++, aby korzystać ze strumieni `cin` i `cout`?",
                answers: [{ id: 0, text: "`<iostream>`" }, { id: 1, text: "`<cmath>`" }, { id: 2, text: "`<string>`" }, { id: 3, text: "`<vector>`" }],
                goodAnswer: 0
            },
            {
                id: 53,
                title: "Która konstrukcja służy do obsługi wyjątków w językach C++, Java i C#?",
                answers: [{ id: 0, text: "`if...else`" }, { id: 1, text: "`switch...case`" }, { id: 2, text: "`do...while`" }, { id: 3, text: "`try...catch`" }],
                goodAnswer: 3
            },
            {
                id: 54,
                title: "Blok `finally` w obsłudze wyjątków (Java, C#) wykonuje się:",
                answers: [{ id: 0, text: "tylko wtedy, gdy wystąpił wyjątek" }, { id: 1, text: "tylko wtedy, gdy wyjątek nie wystąpił" }, { id: 2, text: "zawsze, niezależnie od tego, czy wystąpił wyjątek" }, { id: 3, text: "tylko po zakończeniu całego programu" }],
                goodAnswer: 2
            },
            {
                id: 55,
                title: "Ile razy zostanie wyświetlony napis `\"X\"` po wykonaniu kodu w języku C++?\n\n```\nfor (int i = 0; i < 3; i++)\n    for (int j = 0; j < 2; j++)\n        cout << \"X\";\n```",
                answers: [{ id: 0, text: "5" }, { id: 1, text: "9" }, { id: 2, text: "3" }, { id: 3, text: "6" }],
                goodAnswer: 3
            },
            {
                id: 56,
                title: "Co zostanie wyświetlone w konsoli po wykonaniu kodu w JavaScript?\n\n```\nconsole.log(typeof null);\n```",
                answers: [{ id: 0, text: "`null`" }, { id: 1, text: "`undefined`" }, { id: 2, text: "`object`" }, { id: 3, text: "`number`" }],
                goodAnswer: 2
            },
            {
                id: 57,
                title: "Co zostanie wyświetlone w konsoli po wykonaniu kodu w JavaScript?\n\n```\nconsole.log(2 + \"2\");\n```",
                answers: [{ id: 0, text: "4" }, { id: 1, text: "22" }, { id: 2, text: "`NaN`" }, { id: 3, text: "błąd typu" }],
                goodAnswer: 1
            },
            {
                id: 58,
                title: "Co zostanie wyświetlone w konsoli po wykonaniu kodu w JavaScript?\n\n```\nconsole.log(\"5\" - 2);\n```",
                answers: [{ id: 0, text: "52" }, { id: 1, text: "3" }, { id: 2, text: "`NaN`" }, { id: 3, text: "\"5-2\"" }],
                goodAnswer: 1
            },
            {
                id: 59,
                title: "Czym różni się operator `===` od operatora `==` w JavaScript?",
                answers: [{ id: 0, text: "`===` porównuje wartość i typ bez konwersji typów, a `==` może konwertować typy przed porównaniem" }, { id: 1, text: "`===` jest operatorem przypisania, a `==` porównania" }, { id: 2, text: "`==` porównuje wartość i typ, a `===` tylko wartość" }, { id: 3, text: "Nie ma różnicy, oba operatory działają identycznie" }],
                goodAnswer: 0
            },
            {
                id: 60,
                title: "Czym różni się deklaracja zmiennej za pomocą `let` od `var` w JavaScript?",
                answers: [{ id: 0, text: "Zmienna `var` ma zasięg blokowy, a `let` – zasięg funkcyjny" }, { id: 1, text: "Zmiennej `let` nie można zmienić po przypisaniu" }, { id: 2, text: "Nie ma żadnej różnicy" }, { id: 3, text: "Zmienna `let` ma zasięg blokowy, a `var` – zasięg funkcyjny" }],
                goodAnswer: 3
            },
            {
                id: 61,
                title: "Co oznacza zadeklarowanie zmiennej słowem `const` w JavaScript?",
                answers: [{ id: 0, text: "Zawartości obiektu przypisanego do zmiennej nie można modyfikować" }, { id: 1, text: "Zmiennej nie można ponownie przypisać innej wartości" }, { id: 2, text: "Zmienna ma zasięg funkcyjny, tak jak `var`" }, { id: 3, text: "Zmienna może przechowywać wyłącznie liczby" }],
                goodAnswer: 1
            },
            {
                id: 62,
                title: "Co zostanie wyświetlone w konsoli po wywołaniu funkcji `f()` w JavaScript?\n\n```\nfunction f() {\n    console.log(a);\n    var a = 1;\n    console.log(a);\n}\nf();\n```",
                answers: [{ id: 0, text: "`1, 1`" }, { id: 1, text: "`ReferenceError, 1`" }, { id: 2, text: "`undefined, undefined`" }, { id: 3, text: "`undefined, 1`" }],
                goodAnswer: 3
            },
            {
                id: 63,
                title: "Do czego służy operator rozproszenia (spread) `...` w JavaScript?",
                answers: [{ id: 0, text: "Łączy dwa różne typy danych w jeden" }, { id: 1, text: "Konwertuje liczbę na tekst" }, { id: 2, text: "Rozwija tablicę lub obiekt na pojedyncze elementy" }, { id: 3, text: "Sprawdza typ zmiennej" }],
                goodAnswer: 2
            },
            {
                id: 64,
                title: "Co zostanie wyświetlone w konsoli po wykonaniu kodu w JavaScript?\n\n```\nconsole.log([1, 2, 3].map(x => x * 2));\n```",
                answers: [{ id: 0, text: "`[ 1, 2, 3 ]`" }, { id: 1, text: "`[ 2, 4, 6 ]`" }, { id: 2, text: "12" }, { id: 3, text: "`[ 1, 4, 9 ]`" }],
                goodAnswer: 1
            },
            {
                id: 65,
                title: "Co zostanie wyświetlone w konsoli po wykonaniu kodu w JavaScript?\n\n```\nconsole.log([1, 2, 3, 4, 5].filter(x => x % 2 === 0));\n```",
                answers: [{ id: 0, text: "`[ 1, 3, 5 ]`" }, { id: 1, text: "`[ true, false ]`" }, { id: 2, text: "`[ 2, 4 ]`" }, { id: 3, text: "2" }],
                goodAnswer: 2
            },
            {
                id: 66,
                title: "Która metoda w JavaScript zamienia obiekt na tekst w formacie JSON?",
                answers: [{ id: 0, text: "`JSON.parse()`" }, { id: 1, text: "`JSON.toObject()`" }, { id: 2, text: "`JSON.encode()`" }, { id: 3, text: "`JSON.stringify()`" }],
                goodAnswer: 3
            },
            {
                id: 67,
                title: "Który zapis jest poprawnym dokumentem JSON?",
                answers: [{ id: 0, text: "```\n{'imie': 'Anna', 'wiek': 17}\n```" }, { id: 1, text: "```\n{imie: \"Anna\", wiek: 17}\n```" }, { id: 2, text: "```\n{\"imie\": \"Anna\", \"wiek\": 17}\n```" }, { id: 3, text: "```\n{\"imie\" = \"Anna\"; \"wiek\" = 17}\n```" }],
                goodAnswer: 2
            },
            {
                id: 68,
                title: "Czym jest propagacja zdarzeń w górę (event bubbling) w JavaScript?",
                answers: [{ id: 0, text: "Zarządzaniem kolejką zdarzeń w aplikacjach asynchronicznych" }, { id: 1, text: "Zdarzenie jest obsługiwane najpierw przez najbardziej zagnieżdżony element, a następnie przekazywane w górę drzewa DOM" }, { id: 2, text: "Systemem wyświetlania błędów w konsoli" }, { id: 3, text: "Techniką optymalizacji wydajności zdarzeń" }],
                goodAnswer: 1
            },
            {
                id: 69,
                title: "Czym jest debouncing w JavaScript?",
                answers: [{ id: 0, text: "Usuwaniem zduplikowanych zdarzeń z kodu" }, { id: 1, text: "Optymalizacją kodu podczas kompilacji" }, { id: 2, text: "Ograniczaniem częstotliwości wywoływania funkcji przez opóźnienie jej wykonania do chwili ustania zdarzeń" }, { id: 3, text: "Zarządzaniem pamięcią zmiennych globalnych" }],
                goodAnswer: 2
            },
            {
                id: 70,
                title: "Który zapis poprawnie przypisuje funkcję `f` do obsługi kliknięcia przycisku o id `\"btn\"` w JavaScript?",
                answers: [{ id: 0, text: "```\ndocument.getElementById(\"btn\").addEventListener(\"click\", f);\n```" }, { id: 1, text: "```\ndocument.getElementById(\"btn\").addEventListener(\"onclick\", f);\n```" }, { id: 2, text: "```\ndocument.getElementById(\"btn\").listen(\"click\", f);\n```" }, { id: 3, text: "```\ndocument.getElementById(\"btn\").click = addEventListener(f);\n```" }],
                goodAnswer: 0
            },
            {
                id: 71,
                title: "Do czego służy słowo kluczowe `await` w JavaScript?",
                answers: [{ id: 0, text: "Wstrzymuje wykonanie funkcji async do momentu rozstrzygnięcia obietnicy (Promise)" }, { id: 1, text: "Tworzy nowy wątek systemowy" }, { id: 2, text: "Anuluje działanie obietnicy" }, { id: 3, text: "Deklaruje zmienną o zasięgu globalnym" }],
                goodAnswer: 0
            },
            {
                id: 72,
                title: "Czym jest CORS?",
                answers: [{ id: 0, text: "Protokołem komunikacji między bazami danych" }, { id: 1, text: "Mechanizmem bezpieczeństwa określającym, które domeny mogą korzystać z zasobów serwera" }, { id: 2, text: "Techniką optymalizacji ładowania zasobów" }, { id: 3, text: "Metodą udostępniania API aplikacjom mobilnym" }],
                goodAnswer: 1
            },
            {
                id: 73,
                title: "Co oznacza skrót CSRF?",
                answers: [{ id: 0, text: "Client-Side Rendering Framework" }, { id: 1, text: "Cross-Site Response Filter" }, { id: 2, text: "Cross-Site Request Forgery" }, { id: 3, text: "Cascading Style Rendering Form" }],
                goodAnswer: 2
            },
            {
                id: 74,
                title: "Atak XSS (Cross-Site Scripting) polega na:",
                answers: [{ id: 0, text: "przeciążeniu serwera ogromną liczbą żądań" }, { id: 1, text: "wstrzyknięciu złośliwego skryptu do strony, który wykona się w przeglądarkach innych użytkowników" }, { id: 2, text: "przechwyceniu haseł z pamięci RAM serwera" }, { id: 3, text: "fizycznym uszkodzeniu dysku serwera" }],
                goodAnswer: 1
            },
            {
                id: 75,
                title: "Która technika najskuteczniej chroni aplikację przed atakiem SQL Injection?",
                answers: [{ id: 0, text: "Stosowanie zapytań parametryzowanych (prepared statements)" }, { id: 1, text: "Ukrywanie adresu serwera bazy danych" }, { id: 2, text: "Zwiększenie pamięci RAM serwera" }, { id: 3, text: "Stosowanie krótszych nazw tabel" }],
                goodAnswer: 0
            },
            {
                id: 76,
                title: "Który element HTML5 służy do rysowania grafiki za pomocą JavaScript?",
                answers: [{ id: 0, text: "`<graphic>`" }, { id: 1, text: "`<draw>`" }, { id: 2, text: "`<canvas>`" }, { id: 3, text: "`<paint>`" }],
                goodAnswer: 2
            },
            {
                id: 77,
                title: "Która metoda cyklu życia komponentu klasowego w React jest wywoływana bezpośrednio po zamontowaniu komponentu w DOM?",
                answers: [{ id: 0, text: "`componentWillUnmount()`" }, { id: 1, text: "`componentDidMount()`" }, { id: 2, text: "`componentDidUpdate()`" }, { id: 3, text: "`render()`" }],
                goodAnswer: 1
            },
            {
                id: 78,
                title: "Do czego służy hook `useState` w bibliotece React?",
                answers: [{ id: 0, text: "Do wysyłania zapytań HTTP" }, { id: 1, text: "Do definiowania stylów CSS komponentu" }, { id: 2, text: "Do przechowywania i aktualizowania stanu w komponencie funkcyjnym" }, { id: 3, text: "Do tworzenia tras (routingu) aplikacji" }],
                goodAnswer: 2
            },
            {
                id: 79,
                title: "Czym są `props` w bibliotece React?",
                answers: [{ id: 0, text: "Wewnętrznym, modyfikowalnym stanem komponentu" }, { id: 1, text: "Arkuszami stylów komponentu" }, { id: 2, text: "Zdarzeniami przeglądarki" }, { id: 3, text: "Danymi przekazywanymi z komponentu nadrzędnego do komponentu potomnego" }],
                goodAnswer: 3
            },
            {
                id: 80,
                title: "Która dyrektywa we frameworku Angular służy do wyświetlenia elementu wielokrotnie, dla każdego elementu tablicy?",
                answers: [{ id: 0, text: "`*ngFor`" }, { id: 1, text: "`*ngIf`" }, { id: 2, text: "`v-for`" }, { id: 3, text: "`ng-click`" }],
                goodAnswer: 0
            },
            {
                id: 81,
                title: "Które z wymienionych narzędzi NIE jest frameworkiem do testowania kodu JavaScript?",
                answers: [{ id: 0, text: "Express" }, { id: 1, text: "Jest" }, { id: 2, text: "Jasmine" }, { id: 3, text: "Mocha" }],
                goodAnswer: 0
            },
            {
                id: 82,
                title: "Jaka konwencja nazewnictwa zmiennych i funkcji jest najczęściej stosowana w JavaScript?",
                answers: [{ id: 0, text: "snake_case" }, { id: 1, text: "kebab-case" }, { id: 2, text: "camelCase" }, { id: 3, text: "UPPER_CASE" }],
                goodAnswer: 2
            },
            {
                id: 83,
                title: "Który symbol w wyrażeniu regularnym oznacza dopasowanie do końca łańcucha?",
                answers: [{ id: 0, text: "`$`" }, { id: 1, text: "`^`" }, { id: 2, text: "`|`" }, { id: 3, text: "`*`" }],
                goodAnswer: 0
            },
            {
                id: 84,
                title: "Czym jest DOM (Document Object Model)?",
                answers: [{ id: 0, text: "Językiem zapytań do bazy danych" }, { id: 1, text: "Protokołem przesyłania stron WWW" }, { id: 2, text: "Drzewiastą, obiektową reprezentacją dokumentu HTML, którą można modyfikować za pomocą skryptów" }, { id: 3, text: "Formatem kompresji obrazów" }],
                goodAnswer: 2
            },
            {
                id: 85,
                title: "Która metoda HTTP w architekturze REST służy do usunięcia zasobu?",
                answers: [{ id: 0, text: "`GET`" }, { id: 1, text: "`POST`" }, { id: 2, text: "`DELETE`" }, { id: 3, text: "`HEAD`" }],
                goodAnswer: 2
            },
            {
                id: 86,
                title: "Co oznacza kod odpowiedzi HTTP 404?",
                answers: [{ id: 0, text: "Nie znaleziono żądanego zasobu" }, { id: 1, text: "Żądanie zakończyło się sukcesem" }, { id: 2, text: "Wewnętrzny błąd serwera" }, { id: 3, text: "Brak uprawnień do zasobu z powodu braku logowania" }],
                goodAnswer: 0
            },
            {
                id: 87,
                title: "Co zostanie wyświetlone po wykonaniu kodu w języku PHP?\n\n```\n$x = 5;\n$y = '5';\nvar_dump($x == $y);\nvar_dump($x === $y);\n```",
                answers: [{ id: 0, text: "`bool(true) bool(true)`" }, { id: 1, text: "`bool(false) bool(false)`" }, { id: 2, text: "`bool(true) bool(false)`" }, { id: 3, text: "`bool(false) bool(true)`" }],
                goodAnswer: 2
            },
            {
                id: 88,
                title: "Która technologia (język) służy do komunikacji aplikacji z relacyjnym systemem bazy danych?",
                answers: [{ id: 0, text: "CSS" }, { id: 1, text: "HTTP" }, { id: 2, text: "SQL" }, { id: 3, text: "XAML" }],
                goodAnswer: 2
            },
            {
                id: 89,
                title: "Która technologia pozwala tworzyć natywne aplikacje mobilne z użyciem JavaScript i biblioteki React?",
                answers: [{ id: 0, text: "Spring Boot" }, { id: 1, text: "ASP.NET Core" }, { id: 2, text: "React Native" }, { id: 3, text: "Django" }],
                goodAnswer: 2
            },
            {
                id: 90,
                title: "Jak nazywa się technika algorytmiczna polegająca na dzieleniu problemu na mniejsze podproblemy aż do uzyskania przypadków łatwych do rozwiązania?",
                answers: [{ id: 0, text: "Metoda zachłanna" }, { id: 1, text: "Dziel i zwyciężaj" }, { id: 2, text: "Przeszukiwanie wyczerpujące" }, { id: 3, text: "Problem komiwojażera" }],
                goodAnswer: 1
            },
            {
                id: 91,
                title: "Jaka jest pesymistyczna złożoność czasowa algorytmu sortowania szybkiego (quicksort)?",
                answers: [{ id: 0, text: "O(n log n)" }, { id: 1, text: "O(n)" }, { id: 2, text: "O(log n)" }, { id: 3, text: "O(n²)" }],
                goodAnswer: 3
            },
            {
                id: 92,
                title: "Jaka jest złożoność czasowa wyszukiwania binarnego w tablicy n elementów?",
                answers: [{ id: 0, text: "O(log n)" }, { id: 1, text: "O(n)" }, { id: 2, text: "O(n²)" }, { id: 3, text: "O(1)" }],
                goodAnswer: 0
            },
            {
                id: 93,
                title: "Jaki warunek musi spełniać tablica, aby można było zastosować wyszukiwanie binarne?",
                answers: [{ id: 0, text: "Musi mieć parzystą liczbę elementów" }, { id: 1, text: "Musi zawierać wyłącznie liczby dodatnie" }, { id: 2, text: "Musi być posortowana" }, { id: 3, text: "Nie może zawierać powtórzeń" }],
                goodAnswer: 2
            },
            {
                id: 94,
                title: "Jaka jest złożoność czasowa sortowania bąbelkowego w przypadku pesymistycznym?",
                answers: [{ id: 0, text: "O(n log n)" }, { id: 1, text: "O(n²)" }, { id: 2, text: "O(n)" }, { id: 3, text: "O(log n)" }],
                goodAnswer: 1
            },
            {
                id: 95,
                title: "Który algorytm sortowania ma złożoność O(n log n) również w przypadku pesymistycznym?",
                answers: [{ id: 0, text: "Sortowanie bąbelkowe" }, { id: 1, text: "Sortowanie przez wstawianie" }, { id: 2, text: "Sortowanie szybkie" }, { id: 3, text: "Sortowanie przez scalanie" }],
                goodAnswer: 3
            },
            {
                id: 96,
                title: "Która struktura danych działa według zasady FIFO (pierwszy wszedł, pierwszy wyszedł)?",
                answers: [{ id: 0, text: "Stos" }, { id: 1, text: "Drzewo binarne" }, { id: 2, text: "Kolejka" }, { id: 3, text: "Tablica asocjacyjna" }],
                goodAnswer: 2
            },
            {
                id: 97,
                title: "W liście jednokierunkowej każdy element przechowuje:",
                answers: [{ id: 0, text: "dane oraz wskaźniki do elementu poprzedniego i następnego" }, { id: 1, text: "dane oraz wskaźnik (odwołanie) do następnego elementu" }, { id: 2, text: "wyłącznie indeks w tablicy" }, { id: 3, text: "wskaźnik do pierwszego elementu listy" }],
                goodAnswer: 1
            },
            {
                id: 98,
                title: "W drzewie binarnym poszukiwań (BST) klucze w lewym poddrzewie dowolnego węzła są:",
                answers: [{ id: 0, text: "większe od klucza tego węzła" }, { id: 1, text: "równe kluczowi tego węzła" }, { id: 2, text: "mniejsze od klucza tego węzła" }, { id: 3, text: "uporządkowane losowo" }],
                goodAnswer: 2
            },
            {
                id: 99,
                title: "Która struktura danych jest wykorzystywana w algorytmie przeszukiwania grafu wszerz (BFS)?",
                answers: [{ id: 0, text: "Stos" }, { id: 1, text: "Kopiec" }, { id: 2, text: "Tablica haszująca" }, { id: 3, text: "Kolejka" }],
                goodAnswer: 3
            },
            {
                id: 100,
                title: "Do czego służy algorytm Dijkstry?",
                answers: [{ id: 0, text: "Do sortowania tablicy liczb" }, { id: 1, text: "Do wyznaczania najkrótszych ścieżek w grafie o nieujemnych wagach krawędzi" }, { id: 2, text: "Do szyfrowania danych" }, { id: 3, text: "Do wyznaczania liczb pierwszych" }],
                goodAnswer: 1
            },
            {
                id: 101,
                title: "Jaki wynik zwróci wywołanie `nwd(48, 18)` funkcji implementującej algorytm Euklidesa?\n\n```\nint nwd(int a, int b) {\n    while (b != 0) {\n        int r = a % b;\n        a = b;\n        b = r;\n    }\n    return a;\n}\n\nint main() {\n    cout << nwd(48, 18);\n}\n```",
                answers: [{ id: 0, text: "3" }, { id: 1, text: "9" }, { id: 2, text: "6" }, { id: 3, text: "18" }],
                goodAnswer: 2
            },
            {
                id: 102,
                title: "Do czego służy algorytm sita Eratostenesa?",
                answers: [{ id: 0, text: "Do wyznaczania liczb pierwszych z zadanego przedziału" }, { id: 1, text: "Do obliczania największego wspólnego dzielnika" }, { id: 2, text: "Do sortowania liczb" }, { id: 3, text: "Do zamiany liczb na system binarny" }],
                goodAnswer: 0
            },
            {
                id: 103,
                title: "Algorytm zachłanny:",
                answers: [{ id: 0, text: "zawsze sprawdza wszystkie możliwe rozwiązania" }, { id: 1, text: "dzieli problem na dwa równe podproblemy" }, { id: 2, text: "w każdym kroku wybiera rozwiązanie, które lokalnie wydaje się najlepsze" }, { id: 3, text: "rozwiązuje problem wyłącznie rekurencyjnie" }],
                goodAnswer: 2
            },
            {
                id: 104,
                title: "Jaka jest złożoność czasowa algorytmu zawierającego dwie zagnieżdżone pętle, z których każda wykonuje się n razy?",
                answers: [{ id: 0, text: "O(n²)" }, { id: 1, text: "O(n)" }, { id: 2, text: "O(2n)" }, { id: 3, text: "O(log n)" }],
                goodAnswer: 0
            },
            {
                id: 105,
                title: "Programowanie dynamiczne polega na:",
                answers: [{ id: 0, text: "dynamicznym przydzielaniu pamięci operatorem `new`" }, { id: 1, text: "zmienianiu typu zmiennych w trakcie działania programu" }, { id: 2, text: "pisaniu programów bez użycia pętli" }, { id: 3, text: "zapamiętywaniu wyników rozwiązanych podproblemów, aby nie obliczać ich ponownie" }],
                goodAnswer: 3
            },
            {
                id: 106,
                title: "Do czego służy schemat Hornera?",
                answers: [{ id: 0, text: "Do sortowania tablicy" }, { id: 1, text: "Do efektywnego obliczania wartości wielomianu" }, { id: 2, text: "Do wyszukiwania elementu w drzewie" }, { id: 3, text: "Do szyfrowania tekstu" }],
                goodAnswer: 1
            },
            {
                id: 107,
                title: "Sortowanie przez wybieranie (selection sort) polega na:",
                answers: [{ id: 0, text: "porównywaniu i zamianie sąsiednich elementów aż do uporządkowania tablicy" }, { id: 1, text: "dzieleniu tablicy na połowy i scalaniu posortowanych części" }, { id: 2, text: "znajdowaniu w każdym kroku najmniejszego elementu nieposortowanej części i zamianie go z jej pierwszym elementem" }, { id: 3, text: "zliczaniu wystąpień każdej wartości" }],
                goodAnswer: 2
            },
            {
                id: 108,
                title: "Jaki kształt w schemacie blokowym algorytmu oznacza blok decyzyjny (warunek)?",
                answers: [{ id: 0, text: "Prostokąt" }, { id: 1, text: "Równoległobok" }, { id: 2, text: "Romb" }, { id: 3, text: "Owal" }],
                goodAnswer: 2
            },
            {
                id: 109,
                title: "Jaki kształt w schemacie blokowym algorytmu oznacza operację wejścia lub wyjścia danych?",
                answers: [{ id: 0, text: "Romb" }, { id: 1, text: "Prostokąt" }, { id: 2, text: "Równoległobok" }, { id: 3, text: "Koło" }],
                goodAnswer: 2
            },
            {
                id: 110,
                title: "Czego musi zawierać każda poprawna funkcja rekurencyjna, aby nie doprowadzić do przepełnienia stosu?",
                answers: [{ id: 0, text: "Warunku zakończenia (przypadku bazowego)" }, { id: 1, text: "Pętli `for`" }, { id: 2, text: "Zmiennych globalnych" }, { id: 3, text: "Co najmniej dwóch parametrów" }],
                goodAnswer: 0
            },
            {
                id: 111,
                title: "Testy jednostkowe polegają na:",
                answers: [{ id: 0, text: "sprawdzaniu współpracy wielu modułów aplikacji" }, { id: 1, text: "sprawdzaniu aplikacji przez klienta przed odbiorem" }, { id: 2, text: "badaniu działania aplikacji pod dużym obciążeniem" }, { id: 3, text: "sprawdzaniu poprawności działania pojedynczych funkcji lub metod w izolacji" }],
                goodAnswer: 3
            },
            {
                id: 112,
                title: "Testy integracyjne sprawdzają:",
                answers: [{ id: 0, text: "pojedyncze metody w izolacji" }, { id: 1, text: "poprawność współpracy połączonych modułów lub komponentów" }, { id: 2, text: "wyłącznie wygląd interfejsu" }, { id: 3, text: "szybkość kompilacji programu" }],
                goodAnswer: 1
            },
            {
                id: 113,
                title: "Testy akceptacyjne mają na celu:",
                answers: [{ id: 0, text: "sprawdzenie pojedynczej funkcji" }, { id: 1, text: "znalezienie wycieków pamięci" }, { id: 2, text: "sprawdzenie zgodności kodu z konwencją nazewnictwa" }, { id: 3, text: "potwierdzenie, że aplikacja spełnia wymagania i oczekiwania klienta" }],
                goodAnswer: 3
            },
            {
                id: 114,
                title: "Testy obciążeniowe (wydajnościowe) sprawdzają:",
                answers: [{ id: 0, text: "poprawność składni kodu" }, { id: 1, text: "zachowanie aplikacji przy dużej liczbie użytkowników lub dużej ilości danych" }, { id: 2, text: "zgodność dokumentacji z kodem" }, { id: 3, text: "czytelność interfejsu użytkownika" }],
                goodAnswer: 1
            },
            {
                id: 115,
                title: "Testy regresyjne wykonuje się w celu:",
                answers: [{ id: 0, text: "sprawdzenia, czy wprowadzone zmiany nie zepsuły wcześniej działających funkcji" }, { id: 1, text: "pierwszego uruchomienia nowej funkcji" }, { id: 2, text: "sprawdzenia aplikacji przez klienta" }, { id: 3, text: "zmierzenia zużycia energii" }],
                goodAnswer: 0
            },
            {
                id: 116,
                title: "Testowanie metodą czarnej skrzynki polega na:",
                answers: [{ id: 0, text: "sprawdzaniu działania programu na podstawie specyfikacji, bez znajomości kodu źródłowego" }, { id: 1, text: "analizie wszystkich ścieżek w kodzie źródłowym" }, { id: 2, text: "testowaniu wyłącznie bazy danych" }, { id: 3, text: "testowaniu sprzętu komputerowego" }],
                goodAnswer: 0
            },
            {
                id: 117,
                title: "Testowanie metodą białej skrzynki polega na:",
                answers: [{ id: 0, text: "projektowaniu testów na podstawie znajomości struktury kodu źródłowego" }, { id: 1, text: "testowaniu bez dostępu do kodu, tylko na podstawie specyfikacji" }, { id: 2, text: "testowaniu wyłącznie interfejsu graficznego" }, { id: 3, text: "testowaniu przez użytkowników końcowych" }],
                goodAnswer: 0
            },
            {
                id: 118,
                title: "Do czego służy asercja (`assert`) w testach jednostkowych?",
                answers: [{ id: 0, text: "Sprawdza, czy spełniony jest oczekiwany warunek; jeśli nie, test kończy się niepowodzeniem" }, { id: 1, text: "Uruchamia aplikację w trybie produkcyjnym" }, { id: 2, text: "Tworzy kopię zapasową kodu" }, { id: 3, text: "Kompiluje kod źródłowy" }],
                goodAnswer: 0
            },
            {
                id: 119,
                title: "Który framework służy do tworzenia testów jednostkowych w języku Java?",
                answers: [{ id: 0, text: "Jest" }, { id: 1, text: "JUnit" }, { id: 2, text: "pytest" }, { id: 3, text: "PHPUnit" }],
                goodAnswer: 1
            },
            {
                id: 120,
                title: "Do czego służy narzędzie Selenium?",
                answers: [{ id: 0, text: "Do kompilacji kodu C++" }, { id: 1, text: "Do automatyzacji testów aplikacji internetowych w przeglądarce" }, { id: 2, text: "Do zarządzania bazą danych" }, { id: 3, text: "Do projektowania grafiki wektorowej" }],
                goodAnswer: 1
            },
            {
                id: 121,
                title: "Punkt przerwania (breakpoint) w debuggerze służy do:",
                answers: [{ id: 0, text: "zatrzymania wykonywania programu w wybranym miejscu kodu" }, { id: 1, text: "trwałego usunięcia linii kodu" }, { id: 2, text: "zakończenia działania programu z błędem" }, { id: 3, text: "kompilacji wybranego fragmentu kodu" }],
                goodAnswer: 0
            },
            {
                id: 122,
                title: "Czym różni się polecenie Step Into od Step Over podczas debugowania?",
                answers: [{ id: 0, text: "Step Over wchodzi do wnętrza funkcji, a Step Into ją pomija" }, { id: 1, text: "Step Into kończy debugowanie, a Step Over je rozpoczyna" }, { id: 2, text: "Oba polecenia działają identycznie" }, { id: 3, text: "Step Into wchodzi do wnętrza wywoływanej funkcji, a Step Over wykonuje ją w całości i przechodzi do następnej linii" }],
                goodAnswer: 3
            },
            {
                id: 123,
                title: "Na czym polega podejście TDD (Test-Driven Development)?",
                answers: [{ id: 0, text: "Testy pisze się dopiero po wdrożeniu aplikacji" }, { id: 1, text: "Najpierw pisze się test, a następnie kod, który sprawia, że test przechodzi" }, { id: 2, text: "Testy wykonuje wyłącznie klient" }, { id: 3, text: "Kod pisze się bez żadnych testów" }],
                goodAnswer: 1
            },
            {
                id: 124,
                title: "Co powinna zawierać dokumentacja testów?",
                answers: [{ id: 0, text: "Harmonogram wdrożenia i budżet projektu" }, { id: 1, text: "Specyfikację techniczną serwera" }, { id: 2, text: "Opis procedur testowych oraz wyniki przeprowadzonych testów" }, { id: 3, text: "Zalecenia dotyczące optymalizacji kodu" }],
                goodAnswer: 2
            },
            {
                id: 125,
                title: "Obiekt typu mock w testach jednostkowych to:",
                answers: [{ id: 0, text: "obiekt symulujący zachowanie rzeczywistej zależności (np. bazy danych) na potrzeby testu" }, { id: 1, text: "błąd wykryty podczas testów" }, { id: 2, text: "wersja produkcyjna aplikacji" }, { id: 3, text: "raport z wynikami testów" }],
                goodAnswer: 0
            },
            {
                id: 126,
                title: "Co oznacza w języku polskim skrót RAD, odnoszący się do metodyki wytwarzania oprogramowania?",
                answers: [{ id: 0, text: "Szybki rozwój aplikacji" }, { id: 1, text: "Zintegrowane środowisko deweloperskie" }, { id: 2, text: "Środowisko do tworzenia aplikacji" }, { id: 3, text: "Rozproszona analiza danych" }],
                goodAnswer: 0
            },
            {
                id: 127,
                title: "Która metoda zarządzania projektem jest najlepsza, gdy zakres projektu jest niejasny, a wymagania często się zmieniają?",
                answers: [{ id: 0, text: "Model kaskadowy (Waterfall)" }, { id: 1, text: "Model V" }, { id: 2, text: "Agile" }, { id: 3, text: "PRINCE2" }],
                goodAnswer: 2
            },
            {
                id: 128,
                title: "Czym jest sprint w metodyce Scrum?",
                answers: [{ id: 0, text: "Spotkaniem podsumowującym cały projekt" }, { id: 1, text: "Dokumentem z listą wymagań" }, { id: 2, text: "Narzędziem do automatycznych testów" }, { id: 3, text: "Ograniczonym czasowo cyklem pracy (zwykle 1–4 tygodnie), w którym zespół wytwarza przyrost produktu" }],
                goodAnswer: 3
            },
            {
                id: 129,
                title: "Która rola NIE występuje w metodyce Scrum?",
                answers: [{ id: 0, text: "Product Owner" }, { id: 1, text: "Kierownik projektu (Project Manager)" }, { id: 2, text: "Scrum Master" }, { id: 3, text: "Developer (członek zespołu deweloperskiego)" }],
                goodAnswer: 1
            },
            {
                id: 130,
                title: "Daily Scrum to:",
                answers: [{ id: 0, text: "comiesięczne spotkanie z klientem" }, { id: 1, text: "dokument z listą błędów" }, { id: 2, text: "końcowa prezentacja produktu" }, { id: 3, text: "codzienne, krótkie (do 15 minut) spotkanie zespołu deweloperskiego" }],
                goodAnswer: 3
            },
            {
                id: 131,
                title: "Product Backlog w metodyce Scrum to:",
                answers: [{ id: 0, text: "lista błędów zgłoszonych przez testerów" }, { id: 1, text: "uporządkowana lista wymagań i zadań dotyczących produktu, zarządzana przez Product Ownera" }, { id: 2, text: "harmonogram urlopów zespołu" }, { id: 3, text: "archiwum ukończonych projektów" }],
                goodAnswer: 1
            },
            {
                id: 132,
                title: "Model kaskadowy (Waterfall) charakteryzuje się tym, że:",
                answers: [{ id: 0, text: "wszystkie etapy są realizowane równocześnie" }, { id: 1, text: "kolejne etapy są realizowane sekwencyjnie, a następny rozpoczyna się po zakończeniu poprzedniego" }, { id: 2, text: "wymagania mogą być dowolnie zmieniane w każdym momencie" }, { id: 3, text: "projekt jest realizowany w krótkich sprintach" }],
                goodAnswer: 1
            },
            {
                id: 133,
                title: "Który model cyklu życia oprogramowania kładzie szczególny nacisk na analizę ryzyka w każdej iteracji?",
                answers: [{ id: 0, text: "Model kaskadowy" }, { id: 1, text: "Model V" }, { id: 2, text: "Kanban" }, { id: 3, text: "Model spiralny" }],
                goodAnswer: 3
            },
            {
                id: 134,
                title: "Na którym etapie cyklu życia oprogramowania tworzy się szczegółową specyfikację wymagań funkcjonalnych i niefunkcjonalnych?",
                answers: [{ id: 0, text: "Wdrożenia" }, { id: 1, text: "Weryfikacji" }, { id: 2, text: "Konserwacji" }, { id: 3, text: "Analizy" }],
                goodAnswer: 3
            },
            {
                id: 135,
                title: "Który zapis jest przykładem wymagania niefunkcjonalnego?",
                answers: [{ id: 0, text: "Użytkownik może dodać produkt do koszyka" }, { id: 1, text: "Administrator może usunąć konto użytkownika" }, { id: 2, text: "System generuje fakturę po złożeniu zamówienia" }, { id: 3, text: "Aplikacja powinna uruchamiać się w czasie krótszym niż 2 sekundy" }],
                goodAnswer: 3
            },
            {
                id: 136,
                title: "Diagram przypadków użycia UML przedstawia:",
                answers: [{ id: 0, text: "aktorów oraz funkcje systemu widziane z perspektywy użytkownika" }, { id: 1, text: "strukturę klas wraz z polami i metodami" }, { id: 2, text: "kolejność przesyłania komunikatów między obiektami w czasie" }, { id: 3, text: "fizyczne rozmieszczenie serwerów" }],
                goodAnswer: 0
            },
            {
                id: 137,
                title: "Diagram klas UML przedstawia:",
                answers: [{ id: 0, text: "interakcje użytkownika z systemem" }, { id: 1, text: "klasy, ich atrybuty, metody oraz relacje między nimi" }, { id: 2, text: "harmonogram realizacji projektu" }, { id: 3, text: "przebieg algorytmu krok po kroku" }],
                goodAnswer: 1
            },
            {
                id: 138,
                title: "Który diagram UML przedstawia wymianę komunikatów między obiektami w kolejności czasowej?",
                answers: [{ id: 0, text: "Diagram klas" }, { id: 1, text: "Diagram przypadków użycia" }, { id: 2, text: "Diagram wdrożenia" }, { id: 3, text: "Diagram sekwencji" }],
                goodAnswer: 3
            },
            {
                id: 139,
                title: "Co oznacza znak `-` przed nazwą atrybutu na diagramie klas UML?",
                answers: [{ id: 0, text: "Atrybut publiczny (`public`)" }, { id: 1, text: "Atrybut chroniony (`protected`)" }, { id: 2, text: "Atrybut statyczny" }, { id: 3, text: "Atrybut prywatny (`private`)" }],
                goodAnswer: 3
            },
            {
                id: 140,
                title: "Wzorzec projektowy Singleton:",
                answers: [{ id: 0, text: "umożliwia tworzenie wielu kopii obiektu" }, { id: 1, text: "zapewnia, że klasa ma tylko jedną instancję i globalny punkt dostępu do niej" }, { id: 2, text: "dopasowuje interfejs jednej klasy do innej" }, { id: 3, text: "powiadamia obiekty o zmianie stanu" }],
                goodAnswer: 1
            },
            {
                id: 141,
                title: "Jakie jest zadanie wzorca projektowego Obserwator (Observer)?",
                answers: [{ id: 0, text: "Dostosowanie interfejsu do różnych grup użytkowników" }, { id: 1, text: "Monitorowanie interakcji użytkownika i wysyłanie wyjątków" }, { id: 2, text: "Zarządzanie funkcjami synchronicznymi" }, { id: 3, text: "Powiadamianie zależnych obiektów o zmianie stanu obiektu obserwowanego" }],
                goodAnswer: 3
            },
            {
                id: 142,
                title: "Jaka jest główna idea wzorca projektowego Kompozyt (Composite)?",
                answers: [{ id: 0, text: "Zapewnienie, że klasa ma tylko jedną instancję" }, { id: 1, text: "Umożliwienie traktowania pojedynczych obiektów i ich złożeń (drzew) w jednakowy sposób" }, { id: 2, text: "Dynamiczna zmiana zachowania obiektu w trakcie działania" }, { id: 3, text: "Definiowanie interfejsu komunikacji między serwerem a klientem" }],
                goodAnswer: 1
            },
            {
                id: 143,
                title: "Wzorzec projektowy Dekorator służy do:",
                answers: [{ id: 0, text: "tworzenia jedynej instancji klasy" }, { id: 1, text: "zapisywania obiektów do bazy danych" }, { id: 2, text: "usuwania nieużywanych obiektów" }, { id: 3, text: "dynamicznego dodawania obiektom nowych funkcjonalności bez modyfikowania ich klasy" }],
                goodAnswer: 3
            },
            {
                id: 144,
                title: "Wzorzec projektowy Adapter służy do:",
                answers: [{ id: 0, text: "zapewnienia jednej instancji klasy" }, { id: 1, text: "dopasowania interfejsu istniejącej klasy do interfejsu oczekiwanego przez klienta" }, { id: 2, text: "tworzenia obiektów bez wskazywania ich konkretnej klasy" }, { id: 3, text: "powiadamiania obiektów o zdarzeniach" }],
                goodAnswer: 1
            },
            {
                id: 145,
                title: "Do której grupy wzorców projektowych należy wzorzec Metoda Wytwórcza (Factory Method)?",
                answers: [{ id: 0, text: "Kreacyjnych" }, { id: 1, text: "Strukturalnych" }, { id: 2, text: "Behawioralnych (czynnościowych)" }, { id: 3, text: "Architektonicznych baz danych" }],
                goodAnswer: 0
            },
            {
                id: 146,
                title: "Z jakich elementów składa się wzorzec architektoniczny MVC?",
                answers: [{ id: 0, text: "Model, Widok, Kontroler" }, { id: 1, text: "Moduł, Wartość, Klasa" }, { id: 2, text: "Metoda, Zmienna, Komponent" }, { id: 3, text: "Mapa, Wektor, Kolekcja" }],
                goodAnswer: 0
            },
            {
                id: 147,
                title: "Pierwsza zasada SOLID (Single Responsibility Principle) mówi, że:",
                answers: [{ id: 0, text: "klasa powinna być otwarta na modyfikacje" }, { id: 1, text: "każda klasa musi mieć jedną metodę" }, { id: 2, text: "klasa powinna mieć tylko jeden powód do zmiany (jedną odpowiedzialność)" }, { id: 3, text: "program powinien mieć tylko jedną klasę" }],
                goodAnswer: 2
            },
            {
                id: 148,
                title: "Refaktoryzacja kodu to:",
                answers: [{ id: 0, text: "dodawanie nowych funkcji do aplikacji" }, { id: 1, text: "usuwanie wszystkich komentarzy" }, { id: 2, text: "poprawa struktury i czytelności kodu bez zmiany jego zewnętrznego zachowania" }, { id: 3, text: "przepisanie programu na inny język" }],
                goodAnswer: 2
            },
            {
                id: 149,
                title: "Czym jest ciągła integracja (Continuous Integration, CI)?",
                answers: [{ id: 0, text: "Techniką przyrostowego tworzenia aplikacji mobilnych" }, { id: 1, text: "Częstym, automatycznym scalaniem zmian w kodzie ze wspólnym repozytorium połączonym z budowaniem i testami" }, { id: 2, text: "Ciągłym monitorowaniem wydajności aplikacji w produkcji" }, { id: 3, text: "Protokołem komunikacji między częściami aplikacji" }],
                goodAnswer: 1
            },
            {
                id: 150,
                title: "Metoda Kanban polega przede wszystkim na:",
                answers: [{ id: 0, text: "realizacji projektu w sztywnych, sekwencyjnych etapach" }, { id: 1, text: "wizualizacji przepływu pracy na tablicy z kolumnami i ograniczaniu liczby zadań w toku" }, { id: 2, text: "pisaniu testów przed kodem" }, { id: 3, text: "wyznaczaniu jednego kierownika do każdego zadania" }],
                goodAnswer: 1
            },
            {
                id: 151,
                title: "Jaka jest główna funkcja narzędzi do zarządzania projektami (np. Jira, Trello)?",
                answers: [{ id: 0, text: "Tworzenie animacji komputerowych" }, { id: 1, text: "Zarządzanie zadaniami i czasem realizacji projektu" }, { id: 2, text: "Zwiększanie wydajności kodu programu" }, { id: 3, text: "Projektowanie bazy danych projektu" }],
                goodAnswer: 1
            },
            {
                id: 152,
                title: "Które narzędzie służy do kontroli wersji kodu źródłowego?",
                answers: [{ id: 0, text: "Docker" }, { id: 1, text: "Jenkins" }, { id: 2, text: "Kubernetes" }, { id: 3, text: "Git" }],
                goodAnswer: 3
            },
            {
                id: 153,
                title: "Do czego służy polecenie `git commit`?",
                answers: [{ id: 0, text: "Wysyła zmiany do zdalnego repozytorium" }, { id: 1, text: "Pobiera repozytorium z serwera" }, { id: 2, text: "Zapisuje zmiany z poczekalni (staging area) w historii lokalnego repozytorium" }, { id: 3, text: "Usuwa gałąź" }],
                goodAnswer: 2
            },
            {
                id: 154,
                title: "Do czego służy polecenie `git push`?",
                answers: [{ id: 0, text: "Pobiera zmiany ze zdalnego repozytorium" }, { id: 1, text: "Wysyła lokalne commity do zdalnego repozytorium" }, { id: 2, text: "Tworzy nowe lokalne repozytorium" }, { id: 3, text: "Dodaje pliki do poczekalni" }],
                goodAnswer: 1
            },
            {
                id: 155,
                title: "Które polecenie tworzy nową gałąź o nazwie `nowa` i od razu się na nią przełącza?",
                answers: [{ id: 0, text: "```\ngit branch -d nowa\n```" }, { id: 1, text: "```\ngit merge nowa\n```" }, { id: 2, text: "```\ngit checkout -b nowa\n```" }, { id: 3, text: "```\ngit push nowa\n```" }],
                goodAnswer: 2
            },
            {
                id: 156,
                title: "Do czego służy plik `.gitignore`?",
                answers: [{ id: 0, text: "Określa pliki i katalogi, które Git ma pomijać" }, { id: 1, text: "Przechowuje hasło do repozytorium" }, { id: 2, text: "Zawiera historię wszystkich commitów" }, { id: 3, text: "Określa autora repozytorium" }],
                goodAnswer: 0
            },
            {
                id: 157,
                title: "Które środowisko programistyczne jest najczęściej używane do tworzenia aplikacji na system Android?",
                answers: [{ id: 0, text: "Xcode" }, { id: 1, text: "PyCharm" }, { id: 2, text: "Android Studio" }, { id: 3, text: "Adobe Dreamweaver" }],
                goodAnswer: 2
            },
            {
                id: 158,
                title: "Do czego wykorzystuje się język Swift?",
                answers: [{ id: 0, text: "Do tworzenia aplikacji na systemy iOS i macOS" }, { id: 1, text: "Do tworzenia aplikacji na Androida" }, { id: 2, text: "Do zarządzania bazami danych" }, { id: 3, text: "Do testowania aplikacji mobilnych" }],
                goodAnswer: 0
            },
            {
                id: 159,
                title: "Który język programowania jest najczęściej stosowany razem z interfejsem zapisanym w XAML (np. WPF, .NET MAUI)?",
                answers: [{ id: 0, text: "Java" }, { id: 1, text: "C++" }, { id: 2, text: "Objective-C" }, { id: 3, text: "C#" }],
                goodAnswer: 3
            },
            {
                id: 160,
                title: "Który framework umożliwia tworzenie wieloplatformowych aplikacji mobilnych i desktopowych w języku C#?",
                answers: [{ id: 0, text: ".NET MAUI" }, { id: 1, text: "Django" }, { id: 2, text: "Laravel" }, { id: 3, text: "Spring" }],
                goodAnswer: 0
            },
            {
                id: 161,
                title: "Do czego służy plik `AndroidManifest.xml` w projekcie aplikacji Android?",
                answers: [{ id: 0, text: "Zawiera kod źródłowy głównej aktywności" }, { id: 1, text: "Przechowuje obrazy używane w aplikacji" }, { id: 2, text: "Zawiera wyniki testów jednostkowych" }, { id: 3, text: "Opisuje komponenty aplikacji (np. aktywności) i wymagane uprawnienia" }],
                goodAnswer: 3
            },
            {
                id: 162,
                title: "Czym jest `Activity` (aktywność) w systemie Android?",
                answers: [{ id: 0, text: "Usługą działającą w tle bez interfejsu" }, { id: 1, text: "Plikiem z danymi aplikacji" }, { id: 2, text: "Biblioteką graficzną" }, { id: 3, text: "Pojedynczym ekranem aplikacji z interfejsem użytkownika" }],
                goodAnswer: 3
            },
            {
                id: 163,
                title: "Jak układa elementy kontener `LinearLayout` w systemie Android?",
                answers: [{ id: 0, text: "Jeden za drugim, w jednym wierszu lub w jednej kolumnie" }, { id: 1, text: "W siatce o dowolnej liczbie wierszy i kolumn" }, { id: 2, text: "Jeden na drugim, nakładając je" }, { id: 3, text: "Losowo na ekranie" }],
                goodAnswer: 0
            },
            {
                id: 164,
                title: "Czym różni się okno modalne od niemodalnego?",
                answers: [{ id: 0, text: "Okno modalne umożliwia pracę z innymi oknami, a niemodalne nie" }, { id: 1, text: "Okno modalne działa wyłącznie w tle" }, { id: 2, text: "Okna modalne występują tylko w aplikacjach konsolowych" }, { id: 3, text: "Okno modalne trzeba zamknąć przed powrotem do okna głównego, a niemodalne nie blokuje innych okien" }],
                goodAnswer: 3
            },
            {
                id: 165,
                title: "Które zdarzenie zachodzi, gdy element interfejsu traci fokus?",
                answers: [{ id: 0, text: "`focus`" }, { id: 1, text: "`blur`" }, { id: 2, text: "`keyup`" }, { id: 3, text: "`click`" }],
                goodAnswer: 1
            },
            {
                id: 166,
                title: "Które zdarzenie kontrolki `ComboBox` w WPF jest wywoływane po wybraniu innej pozycji z listy?",
                answers: [{ id: 0, text: "`LostFocus`" }, { id: 1, text: "`SelectionChanged`" }, { id: 2, text: "`DragEnter`" }, { id: 3, text: "`KeyDown`" }],
                goodAnswer: 1
            },
            {
                id: 167,
                title: "Która kontrolka pozwala wybrać dokładnie jedną opcję z grupy wzajemnie wykluczających się opcji?",
                answers: [{ id: 0, text: "`CheckBox`" }, { id: 1, text: "`Slider`" }, { id: 2, text: "`RadioButton`" }, { id: 3, text: "`ProgressBar`" }],
                goodAnswer: 2
            },
            {
                id: 168,
                title: "Czym różni się kompilacja od interpretacji?",
                answers: [{ id: 0, text: "Kompilacja jest stosowana wyłącznie w programowaniu obiektowym" }, { id: 1, text: "Kompilacja wymaga użycia debuggera" }, { id: 2, text: "Kompilacja tłumaczy cały kod źródłowy przed uruchomieniem, a interpretacja tłumaczy i wykonuje kod na bieżąco" }, { id: 3, text: "Interpretacja tworzy plik wykonywalny `.exe`" }],
                goodAnswer: 2
            },
            {
                id: 169,
                title: "Biblioteka statyczna:",
                answers: [{ id: 0, text: "jest ładowana do pamięci dopiero w trakcie działania programu" }, { id: 1, text: "może być modyfikowana w trakcie działania programu" }, { id: 2, text: "nie wymaga istnienia pliku wykonywalnego" }, { id: 3, text: "jest dołączana do pliku wykonywalnego na etapie kompilacji (linkowania)" }],
                goodAnswer: 3
            },
            {
                id: 170,
                title: "Kod źródłowy w języku Java jest kompilowany do kodu bajtowego, który jest wykonywany przez:",
                answers: [{ id: 0, text: "przeglądarkę internetową" }, { id: 1, text: "interpreter Pythona" }, { id: 2, text: "maszynę wirtualną Javy (JVM)" }, { id: 3, text: "środowisko .NET CLR" }],
                goodAnswer: 2
            },
            {
                id: 171,
                title: "Jaka jest reprezentacja liczby -5 w kodzie uzupełnień do dwóch (U2) na 8 bitach?",
                answers: [{ id: 0, text: "00000101" }, { id: 1, text: "11111101" }, { id: 2, text: "10000101" }, { id: 3, text: "11111011" }],
                goodAnswer: 3
            },
            {
                id: 172,
                title: "Liczba binarna 10101101 zapisana w systemie dziesiętnym to:",
                answers: [{ id: 0, text: "171" }, { id: 1, text: "173" }, { id: 2, text: "181" }, { id: 3, text: "157" }],
                goodAnswer: 1
            },
            {
                id: 173,
                title: "Liczba dziesiętna 255 zapisana w systemie szesnastkowym to:",
                answers: [{ id: 0, text: "FE" }, { id: 1, text: "EF" }, { id: 2, text: "FF" }, { id: 3, text: "100" }],
                goodAnswer: 2
            },
            {
                id: 174,
                title: "Liczba szesnastkowa 1F zapisana w systemie dziesiętnym to:",
                answers: [{ id: 0, text: "15" }, { id: 1, text: "32" }, { id: 2, text: "31" }, { id: 3, text: "16" }],
                goodAnswer: 2
            },
            {
                id: 175,
                title: "Który element procesora odpowiada za obliczenia na liczbach zmiennoprzecinkowych?",
                answers: [{ id: 0, text: "ALU" }, { id: 1, text: "IU" }, { id: 2, text: "AGU" }, { id: 3, text: "FPU" }],
                goodAnswer: 3
            },
            {
                id: 176,
                title: "Jaki jest pierwszy etap cyklu przetwarzania rozkazu przez procesor?",
                answers: [{ id: 0, text: "Dekodowanie (Decode)" }, { id: 1, text: "Wykonanie (Execute)" }, { id: 2, text: "Zapis wyniku (Write Back)" }, { id: 3, text: "Pobranie rozkazu (Fetch)" }],
                goodAnswer: 3
            },
            {
                id: 177,
                title: "Gdzie znajduje się pamięć przydzielona w języku C++ za pomocą operatora `new`?",
                answers: [{ id: 0, text: "Na stercie (heap)" }, { id: 1, text: "Na stosie (stack)" }, { id: 2, text: "W rejestrze procesora" }, { id: 3, text: "W pamięci ROM" }],
                goodAnswer: 0
            },
            {
                id: 178,
                title: "W jakiej sytuacji należy ułożyć poszkodowanego w pozycji bocznej bezpiecznej?",
                answers: [{ id: 0, text: "Gdy jest przytomny i ma złamaną kończynę" }, { id: 1, text: "Gdy ma krwotok zewnętrzny" }, { id: 2, text: "Gdy jest nieprzytomny, ale oddycha" }, { id: 3, text: "Gdy nie oddycha" }],
                goodAnswer: 2
            },
            {
                id: 179,
                title: "Jaki jest stosunek liczby uciśnięć klatki piersiowej do oddechów ratowniczych podczas resuscytacji osoby dorosłej?",
                answers: [{ id: 0, text: "15:2" }, { id: 1, text: "30:2" }, { id: 2, text: "5:1" }, { id: 3, text: "30:5" }],
                goodAnswer: 1
            },
            {
                id: 180,
                title: "Co należy zrobić w pierwszej kolejności, udzielając pomocy osobie porażonej prądem elektrycznym?",
                answers: [{ id: 0, text: "Odłączyć źródło prądu, zachowując własne bezpieczeństwo" }, { id: 1, text: "Natychmiast dotknąć poszkodowanego, aby go odciągnąć" }, { id: 2, text: "Podać poszkodowanemu wodę do picia" }, { id: 3, text: "Ułożyć poszkodowanego na brzuchu" }],
                goodAnswer: 0
            },
            {
                id: 181,
                title: "Jaka powinna być odległość oczu od ekranu monitora na stanowisku komputerowym zgodnie z przepisami BHP?",
                answers: [{ id: 0, text: "10–20 cm" }, { id: 1, text: "20–30 cm" }, { id: 2, text: "100–150 cm" }, { id: 3, text: "40–75 cm" }],
                goodAnswer: 3
            },
            {
                id: 182,
                title: "Ile co najmniej trwa przerwa przysługująca pracownikowi po każdej godzinie pracy przy monitorze ekranowym?",
                answers: [{ id: 0, text: "1 minuta" }, { id: 1, text: "5 minut" }, { id: 2, text: "15 minut" }, { id: 3, text: "30 minut" }],
                goodAnswer: 1
            },
            {
                id: 183,
                title: "Jakie są skutki długotrwałego narażenia na hałas w miejscu pracy?",
                answers: [{ id: 0, text: "Pogorszenie ostrości wzroku" }, { id: 1, text: "Choroby skóry" }, { id: 2, text: "Uszkodzenie słuchu i zmęczenie" }, { id: 3, text: "Wzrost efektywności pracy" }],
                goodAnswer: 2
            },
            {
                id: 184,
                title: "Które rozwiązanie pomaga zapobiegać zmęczeniu wzroku podczas pracy przy komputerze?",
                answers: [{ id: 0, text: "Filtr antyrefleksyjny na ekranie i właściwe oświetlenie" }, { id: 1, text: "Słuchawki wygłuszające" }, { id: 2, text: "Ergonomiczna podkładka pod nadgarstek" }, { id: 3, text: "Stała temperatura w biurze" }],
                goodAnswer: 0
            },
            {
                id: 185,
                title: "Które rozwiązanie najlepiej chroni kręgosłup podczas wielogodzinnej pracy biurowej?",
                answers: [{ id: 0, text: "Słuchawki wygłuszające" }, { id: 1, text: "Regulowane krzesło i biurko dopasowane do pracownika" }, { id: 2, text: "Filtr prywatyzujący na monitorze" }, { id: 3, text: "Klawiatura bezprzewodowa" }],
                goodAnswer: 1
            },
            {
                id: 186,
                title: "Licencja GNU GPL:",
                answers: [{ id: 0, text: "zabrania jakiejkolwiek modyfikacji kodu" }, { id: 1, text: "pozwala na używanie programu tylko przez 30 dni" }, { id: 2, text: "pozwala zamknąć kod dzieła pochodnego i sprzedawać go bez udostępniania źródeł" }, { id: 3, text: "pozwala modyfikować i rozpowszechniać program, pod warunkiem udostępnienia kodu dzieł pochodnych na tej samej licencji" }],
                goodAnswer: 3
            },
            {
                id: 187,
                title: "Oprogramowanie typu freeware:",
                answers: [{ id: 0, text: "zawsze udostępnia kod źródłowy do modyfikacji" }, { id: 1, text: "można używać tylko przez okres próbny" }, { id: 2, text: "jest dostępne wyłącznie dla firm" }, { id: 3, text: "można używać bezpłatnie, ale zwykle bez prawa do modyfikacji kodu źródłowego" }],
                goodAnswer: 3
            },
            {
                id: 188,
                title: "Licencja MIT:",
                answers: [{ id: 0, text: "wymaga udostępnienia kodu dzieł pochodnych na tej samej licencji" }, { id: 1, text: "zabrania komercyjnego wykorzystania kodu" }, { id: 2, text: "pozwala używać programu tylko przez 30 dni" }, { id: 3, text: "jest licencją permisywną pozwalającą na dowolne użycie kodu pod warunkiem zachowania informacji o autorze i licencji" }],
                goodAnswer: 3
            },
            {
                id: 189,
                title: "Które prawa twórcy programu są niezbywalne i nieograniczone w czasie?",
                answers: [{ id: 0, text: "Autorskie prawa majątkowe" }, { id: 1, text: "Prawa licencyjne" }, { id: 2, text: "Prawa patentowe" }, { id: 3, text: "Autorskie prawa osobiste" }],
                goodAnswer: 3
            },
            {
                id: 190,
                title: "Czego dotyczy rozporządzenie RODO?",
                answers: [{ id: 0, text: "Ochrony praw autorskich do programów" }, { id: 1, text: "Ochrony danych osobowych" }, { id: 2, text: "Zasad BHP przy komputerze" }, { id: 3, text: "Podatków od sprzedaży oprogramowania" }],
                goodAnswer: 1
            },
            {
                id: 191,
                title: "Jaki jest główny cel ataku typu phishing?",
                answers: [{ id: 0, text: "Wyłudzenie danych (np. haseł) przez podszywanie się pod zaufane strony lub osoby" }, { id: 1, text: "Zakłócenie działania sieci nadmiarem żądań" }, { id: 2, text: "Kradzież haseł bezpośrednio z pamięci RAM" }, { id: 3, text: "Fizyczne zablokowanie dostępu do usług internetowych" }],
                goodAnswer: 0
            },
            {
                id: 192,
                title: "Atak DDoS polega na:",
                answers: [{ id: 0, text: "podsłuchiwaniu transmisji w sieci Wi-Fi" }, { id: 1, text: "przeciążeniu serwera ogromną liczbą żądań wysyłanych z wielu źródeł" }, { id: 2, text: "wyłudzaniu haseł przez fałszywe e-maile" }, { id: 3, text: "wstrzykiwaniu kodu SQL do formularzy" }],
                goodAnswer: 1
            },
            {
                id: 193,
                title: "Jak bezpiecznie przechowywać hasła użytkowników w bazie danych?",
                answers: [{ id: 0, text: "Jako jawny tekst" }, { id: 1, text: "Jako skrót (hash) z solą, wyliczony algorytmem przeznaczonym do haseł, np. bcrypt" }, { id: 2, text: "Zakodowane w Base64" }, { id: 3, text: "Jako skrót MD5 bez soli" }],
                goodAnswer: 1
            },
            {
                id: 194,
                title: "Która zasada należy do netykiety?",
                answers: [{ id: 0, text: "Unikanie pisania wielkimi literami" }, { id: 1, text: "Ignorowanie wiadomości innych użytkowników" }, { id: 2, text: "Używanie nieformalnego języka w każdej rozmowie" }, { id: 3, text: "Udostępnianie cudzych treści bez zgody autora" }],
                goodAnswer: 0
            },
            {
                id: 195,
                title: "Która cecha jest pożądana u dobrego negocjatora?",
                answers: [{ id: 0, text: "Przechwalanie się" }, { id: 1, text: "Myślenie wyłącznie o sobie" }, { id: 2, text: "Spokój i opanowanie" }, { id: 3, text: "Brak pewności siebie" }],
                goodAnswer: 2
            },
            {
                id: 196,
                title: "Jakie są cztery główne zasady dostępności treści internetowych WCAG 2.0?",
                answers: [{ id: 0, text: "Postrzegalność, funkcjonalność, zrozumiałość, solidność" }, { id: 1, text: "Ewolucyjność, interaktywność, efektywność, szybkość" }, { id: 2, text: "Elastyczność, prostota, przejrzystość, trwałość" }, { id: 3, text: "Adaptacyjność, natychmiastowość, mobilność, kolorystyka" }],
                goodAnswer: 0
            },
            {
                id: 197,
                title: "Do czego służy atrybut `alt` znacznika `<img>` w kontekście dostępności?",
                answers: [{ id: 0, text: "Określa szerokość obrazu" }, { id: 1, text: "Wyświetla obraz w nowym oknie" }, { id: 2, text: "Dodaje animację do obrazu" }, { id: 3, text: "Zawiera tekst alternatywny opisujący obraz, odczytywany m.in. przez czytniki ekranu" }],
                goodAnswer: 3
            },
            {
                id: 198,
                title: "Burza mózgów to technika, która polega na:",
                answers: [{ id: 0, text: "wyborze jednego rozwiązania przez kierownika" }, { id: 1, text: "indywidualnym pisaniu raportu" }, { id: 2, text: "głosowaniu nad gotowymi propozycjami bez dyskusji" }, { id: 3, text: "swobodnym zgłaszaniu w grupie jak największej liczby pomysłów bez ich krytykowania" }],
                goodAnswer: 3
            },
            {
                id: 199,
                title: "Postawa asertywna polega na:",
                answers: [{ id: 0, text: "narzucaniu innym własnego zdania" }, { id: 1, text: "wyrażaniu własnych opinii i potrzeb z szacunkiem dla innych" }, { id: 2, text: "unikaniu wyrażania swojego zdania" }, { id: 3, text: "zgadzaniu się na wszystkie prośby" }],
                goodAnswer: 1
            },
            {
                id: 200,
                title: "Który środek najskuteczniej ogranicza hałas w pomieszczeniu biurowym?",
                answers: [{ id: 0, text: "Panele akustyczne wygłuszające ściany i sufit" }, { id: 1, text: "Mata antypoślizgowa pod stanowiskiem pracy" }, { id: 2, text: "Filtr antyrefleksyjny założony na monitor" }, { id: 3, text: "Lampy biurowe o niższym natężeniu światła" }],
                goodAnswer: 0
            },
            {
                id: 201,
                title: "Który środek ochrony NIE należy do środków ochrony zbiorowej?",
                answers: [{ id: 0, text: "Ekran dźwiękochłonny" }, { id: 1, text: "Okulary ochronne" }, { id: 2, text: "Gaśnica" }, { id: 3, text: "Barierka zabezpieczająca przed upadkiem" }],
                goodAnswer: 1
            },
            {
                id: 202,
                title: "Jak definiuje się wypadek przy pracy?",
                answers: [{ id: 0, text: "Każda awaria urządzenia w zakładzie, która wymaga interwencji serwisu" }, { id: 1, text: "Każde zdarzenie opóźniające wykonanie obowiązków służbowych" }, { id: 2, text: "Każda choroba, która ujawniła się u pracownika w czasie pracy" }, { id: 3, text: "Nagłe zdarzenie związane z pracą, które spowodowało uraz lub śmierć" }],
                goodAnswer: 3
            },
            {
                id: 203,
                title: "Co należy zrobić w pierwszej kolejności, podchodząc do osoby poszkodowanej?",
                answers: [{ id: 0, text: "Rozpocząć uciskanie klatki piersiowej" }, { id: 1, text: "Sprawdzić, czy poszkodowany krwawi" }, { id: 2, text: "Zadbać o własne bezpieczeństwo" }, { id: 3, text: "Ułożyć poszkodowanego w pozycji bocznej" }],
                goodAnswer: 2
            },
            {
                id: 204,
                title: "Jak nazywa się schorzenie, które objawia się bólem, drętwieniem i zaburzeniami czucia kciuka, palca wskazującego i środkowego, a często wynika z długotrwałej pracy z myszą i klawiaturą?",
                answers: [{ id: 0, text: "Dyskopatia" }, { id: 1, text: "Zespół cieśni kanału nadgarstka" }, { id: 2, text: "Kifoza" }, { id: 3, text: "Zespół suchego oka" }],
                goodAnswer: 1
            },
            {
                id: 205,
                title: "Jak należy postąpić w przypadku silnego krwawienia z rany na przedramieniu?",
                answers: [{ id: 0, text: "Założyć opatrunek uciskowy i unieść kończynę powyżej serca" }, { id: 1, text: "Założyć luźny bandaż elastyczny bez ucisku na ranę" }, { id: 2, text: "Przemyć ranę wodą utlenioną i pozostawić ją bez opatrunku do wyschnięcia" }, { id: 3, text: "Odczekać, aż krwawienie samo ustanie, i obserwować ranę" }],
                goodAnswer: 0
            },
            {
                id: 206,
                title: "Ryzyko zawodowe to:",
                answers: [{ id: 0, text: "ciężkość skutków zdarzeń niepożądanych, które już wystąpiły w miejscu pracy" }, { id: 1, text: "zagrożenie wypadkowe występujące na stanowisku pracy" }, { id: 2, text: "prawdopodobieństwo, że zagrożenia w pracy spowodują szkody, np. zdrowotne" }, { id: 3, text: "skutki zagrożeń wypadkowych występujących w miejscu pracy" }],
                goodAnswer: 2
            },
            {
                id: 207,
                title: "Czym jest choroba zawodowa?",
                answers: [{ id: 0, text: "Niezdolnością do pracy trwającą krócej niż siedem dni" }, { id: 1, text: "Chorobą, która może wystąpić wyłącznie u pracowników zatrudnionych w przemyśle" }, { id: 2, text: "Każdą chorobą, która wystąpiła u pracownika w godzinach pracy" }, { id: 3, text: "Chorobą spowodowaną działaniem czynników szkodliwych w środowisku pracy" }],
                goodAnswer: 3
            },
            {
                id: 208,
                title: "Który czynnik występujący w środowisku pracy zalicza się do czynników psychofizycznych?",
                answers: [{ id: 0, text: "Zapylenie powietrza" }, { id: 1, text: "Stres i monotonia pracy" }, { id: 2, text: "Promieniowanie elektromagnetyczne" }, { id: 3, text: "Nadmierne natężenie światła" }],
                goodAnswer: 1
            },
            {
                id: 209,
                title: "Jakie jest minimalne wymagane natężenie oświetlenia na biurowym stanowisku pracy z komputerem?",
                answers: [{ id: 0, text: "200 lx" }, { id: 1, text: "800 lx" }, { id: 2, text: "100 lx" }, { id: 3, text: "500 lx" }],
                goodAnswer: 3
            },
            {
                id: 210,
                title: "Który czynnik jest przykładem zagrożenia fizycznego w miejscu pracy?",
                answers: [{ id: 0, text: "Promieniowanie UV" }, { id: 1, text: "Obciążenie psychiczne" }, { id: 2, text: "Kontakt z bakteriami i wirusami" }, { id: 3, text: "Konflikty w zespole" }],
                goodAnswer: 0
            },
            {
                id: 211,
                title: "Który objaw może wskazywać na zawał serca?",
                answers: [{ id: 0, text: "Ból brzucha pojawiający się zaraz po posiłku" }, { id: 1, text: "Gorączka z dreszczami utrzymująca się od kilku dni po przeziębieniu" }, { id: 2, text: "Silny ból w klatce piersiowej promieniujący do lewej ręki" }, { id: 3, text: "Swędząca wysypka na skórze przedramion i dłoni" }],
                goodAnswer: 2
            },
            {
                id: 212,
                title: "Prawidłową, ergonomiczną pozycję przy pracy z komputerem zapewnia krzesło, którego:",
                answers: [{ id: 0, text: "oparcie w odcinku szyjnym jest pochylone do przodu o 40°" }, { id: 1, text: "podłokietniki są 20 cm niżej niż blat biurka" }, { id: 2, text: "oparcie podpiera lędźwiowy odcinek kręgosłupa (lordozę)" }, { id: 3, text: "podłokietniki są 30 cm wyżej niż blat biurka" }],
                goodAnswer: 2
            },
            {
                id: 213,
                title: "Jaki jest jednolity europejski numer alarmowy, pod którym w Polsce można wezwać m.in. pogotowie ratunkowe?",
                answers: [{ id: 0, text: "911" }, { id: 1, text: "112" }, { id: 2, text: "997" }, { id: 3, text: "998" }],
                goodAnswer: 1
            },
            {
                id: 214,
                title: "Jaki skutek dla pracownika może mieć długotrwała, monotonna praca?",
                answers: [{ id: 0, text: "Wzrost motywacji oraz zaangażowania w wykonywane codziennie zadania" }, { id: 1, text: "Poprawa kondycji fizycznej i wydolności organizmu" }, { id: 2, text: "Większa odporność na stres i presję czasu w pracy" }, { id: 3, text: "Spadek koncentracji i większe ryzyko popełniania błędów" }],
                goodAnswer: 3
            },
            {
                id: 215,
                title: "Które działanie najlepiej zapobiega porażeniom prądem elektrycznym w biurze?",
                answers: [{ id: 0, text: "Regularne przeglądy instalacji i sprzętu elektrycznego" }, { id: 1, text: "Regularna kontrola jakości powietrza w pomieszczeniu" }, { id: 2, text: "Używanie krzeseł o ergonomicznym kształcie" }, { id: 3, text: "Stosowanie monitorów LCD zamiast starszych monitorów kineskopowych" }],
                goodAnswer: 0
            },
            {
                id: 216,
                title: "Co pomaga przeciwdziałać uzależnieniu od internetu?",
                answers: [{ id: 0, text: "Instalowanie kolejnych aplikacji rozrywkowych" }, { id: 1, text: "Wydłużanie czasu spędzanego w mediach społecznościowych" }, { id: 2, text: "Korzystanie z komputera wyłącznie w godzinach nocnych" }, { id: 3, text: "Planowanie regularnych przerw od urządzeń cyfrowych" }],
                goodAnswer: 3
            },
            {
                id: 217,
                title: "Które zagrożenie związane z długotrwałym korzystaniem z komputera i internetu dotyczy zdrowia fizycznego?",
                answers: [{ id: 0, text: "Uzależnienie od gier komputerowych" }, { id: 1, text: "Rozprzestrzenianie się fałszywych informacji" }, { id: 2, text: "Bóle kręgosłupa spowodowane wielogodzinnym siedzeniem" }, { id: 3, text: "Obniżony nastrój i depresja wywołane cyberprzemocą w sieci" }],
                goodAnswer: 2
            },
            {
                id: 218,
                title: "Jak długo, co do zasady, trwają autorskie prawa majątkowe w Polsce i innych krajach Unii Europejskiej?",
                answers: [{ id: 0, text: "50 lat od pierwszej publikacji utworu" }, { id: 1, text: "70 lat od śmierci twórcy" }, { id: 2, text: "75 lat od dnia powstania utworu" }, { id: 3, text: "Bezterminowo, niezależnie od daty śmierci twórcy" }],
                goodAnswer: 1
            },
            {
                id: 219,
                title: "Jakie jest podstawowe zadanie zapory sieciowej (firewalla)?",
                answers: [{ id: 0, text: "Filtrowanie ruchu sieciowego i blokowanie nieautoryzowanego dostępu" }, { id: 1, text: "Szyfrowanie wszystkich danych przesyłanych przez sieć" }, { id: 2, text: "Tworzenie kopii zapasowych danych na wypadek awarii systemu" }, { id: 3, text: "Wyszukiwanie i usuwanie wirusów z plików zapisanych na dysku komputera" }],
                goodAnswer: 0
            },
            {
                id: 220,
                title: "W której topologii sieci każde urządzenie jest połączone bezpośrednio z każdym innym?",
                answers: [{ id: 0, text: "Gwiazdy" }, { id: 1, text: "Magistrali" }, { id: 2, text: "Siatki" }, { id: 3, text: "Pierścienia" }],
                goodAnswer: 2
            },
            {
                id: 221,
                title: "Który protokół stosu TCP/IP zapewnia niezawodne, połączeniowe przesyłanie danych?",
                answers: [{ id: 0, text: "ICMP" }, { id: 1, text: "IP" }, { id: 2, text: "UDP" }, { id: 3, text: "TCP" }],
                goodAnswer: 3
            },
            {
                id: 222,
                title: "Jaka jest przepustowość łącza, przez które w ciągu 10 sekund przesłano 500 MB danych?",
                answers: [{ id: 0, text: "400 Mb/s" }, { id: 1, text: "40 Mb/s" }, { id: 2, text: "50 Mb/s" }, { id: 3, text: "500 Mb/s" }],
                goodAnswer: 0
            },
            {
                id: 223,
                title: "Który protokół służy do przesyłania plików między klientem a serwerem?",
                answers: [{ id: 0, text: "DNS" }, { id: 1, text: "FTP" }, { id: 2, text: "SMTP" }, { id: 3, text: "POP3" }],
                goodAnswer: 1
            },
            {
                id: 224,
                title: "Jakim symbolem oznacza się Polskie Normy?",
                answers: [{ id: 0, text: "IEC" }, { id: 1, text: "ISO" }, { id: 2, text: "EN" }, { id: 3, text: "PN" }],
                goodAnswer: 3
            },
            {
                id: 225,
                title: "Do czego służy pamięć operacyjna RAM w komputerze?",
                answers: [{ id: 0, text: "Do trwałego przechowywania systemu operacyjnego" }, { id: 1, text: "Do tymczasowego przechowywania danych i rozkazów dla procesora" }, { id: 2, text: "Do tworzenia kopii zapasowej danych użytkownika" }, { id: 3, text: "Do sterowania przesyłaniem danych do urządzeń wejścia-wyjścia" }],
                goodAnswer: 1
            },
            {
                id: 226,
                title: "Która sytuacja jest naruszeniem praw autorskich?",
                answers: [{ id: 0, text: "Udostępnianie w sieci filmu bez zgody właściciela praw" }, { id: 1, text: "Zakup licencji na oprogramowanie biurowe dla wszystkich pracowników firmy" }, { id: 2, text: "Używanie programu open source zgodnie z jego licencją" }, { id: 3, text: "Wykonanie kopii zapasowej legalnie kupionego programu" }],
                goodAnswer: 0
            },
            {
                id: 227,
                title: "Która forma komunikacji jest komunikacją werbalną?",
                answers: [{ id: 0, text: "Postawa ciała" }, { id: 1, text: "Gestykulacja" }, { id: 2, text: "Mowa" }, { id: 3, text: "Mimika" }],
                goodAnswer: 2
            },
            {
                id: 228,
                title: "Czym jest klasa w programowaniu obiektowym?",
                answers: [{ id: 0, text: "Instrukcją sterującą przebiegiem programu" }, { id: 1, text: "Typem danych zdefiniowanym przez programistę" }, { id: 2, text: "Wskaźnikiem na obiekt w pamięci" }, { id: 3, text: "Zmienną przechowującą stan programu" }],
                goodAnswer: 1
            },
            {
                id: 229,
                title: "Co przedstawia poniższy fragment kodu w JavaScript?\n\n```\nlet modulo = (x, y) => x % y;\n```",
                answers: [{ id: 0, text: "Definicję zmiennej typu tablicowego" }, { id: 1, text: "Prototyp metody klasy" }, { id: 2, text: "Definicję funkcji strzałkowej" }, { id: 3, text: "Prototyp interfejsu" }],
                goodAnswer: 2
            },
            {
                id: 230,
                title: "Czym jest `localStorage` w aplikacjach internetowych?",
                answers: [{ id: 0, text: "Bazą danych NoSQL działającą na serwerze, z którym łączy się aplikacja" }, { id: 1, text: "Pamięcią RAM przydzieloną aplikacji na czas jej działania" }, { id: 2, text: "Katalogiem plików tymczasowych tworzonych przez przeglądarkę" }, { id: 3, text: "Magazynem danych w przeglądarce, które nie mają daty wygaśnięcia" }],
                goodAnswer: 3
            },
            {
                id: 231,
                title: "W którym środowisku programistycznym tworzy się natywne aplikacje na system iOS?",
                answers: [{ id: 0, text: "Xcode" }, { id: 1, text: "NetBeans" }, { id: 2, text: "Eclipse" }, { id: 3, text: "Android Studio" }],
                goodAnswer: 0
            },
            {
                id: 232,
                title: "Czym jest JWT (JSON Web Token)?",
                answers: [{ id: 0, text: "Standardem bezpiecznego przekazywania informacji w postaci obiektu JSON" }, { id: 1, text: "Biblioteką JavaScript do walidacji formularzy na stronach WWW" }, { id: 2, text: "Protokołem przesyłania plików między klientem a serwerem" }, { id: 3, text: "Formatem zapisu dokumentów używanym w nierelacyjnych bazach danych NoSQL" }],
                goodAnswer: 0
            },
            {
                id: 233,
                title: "Która właściwość obiektu `window` w JavaScript pozwala przypisać funkcję uruchamianą po całkowitym załadowaniu strony?",
                answers: [{ id: 0, text: "`onrender`" }, { id: 1, text: "`onload`" }, { id: 2, text: "`onready`" }, { id: 3, text: "`oncomplete`" }],
                goodAnswer: 1
            },
            {
                id: 234,
                title: "Do czego służy funkcja `fetch()` w JavaScript?",
                answers: [{ id: 0, text: "Do filtrowania elementów tablicy według podanego warunku" }, { id: 1, text: "Do sortowania kolekcji obiektów" }, { id: 2, text: "Do modyfikowania i usuwania elementów drzewa DOM strony" }, { id: 3, text: "Do asynchronicznego pobierania zasobów przez sieć" }],
                goodAnswer: 3
            },
            {
                id: 235,
                title: "Co robi polecenie `git pull`?",
                answers: [{ id: 0, text: "Zapisuje zmiany z poczekalni w historii lokalnego repozytorium" }, { id: 1, text: "Tworzy nową gałąź w lokalnym repozytorium i od razu się na nią przełącza" }, { id: 2, text: "Pobiera zmiany ze zdalnego repozytorium i scala je z bieżącą gałęzią" }, { id: 3, text: "Usuwa plik z repozytorium i z katalogu roboczego" }],
                goodAnswer: 2
            },
            {
                id: 236,
                title: "Jakie dane zwykle zapisuje się w ciasteczkach (cookies) przeglądarki?",
                answers: [{ id: 0, text: "Preferencje użytkownika, np. wybrany język lub motyw strony" }, { id: 1, text: "Całą zawartość bazy danych aplikacji" }, { id: 2, text: "Hasła użytkownika zapisane jawnym tekstem" }, { id: 3, text: "Kod źródłowy aplikacji internetowej pobierany przy każdej wizycie" }],
                goodAnswer: 0
            },
            {
                id: 237,
                title: "Co charakteryzuje architekturę klient-serwer?",
                answers: [{ id: 0, text: "Każdy klient działa samodzielnie, bez wymiany danych z innymi" }, { id: 1, text: "Klient wysyła żądania, a serwer przetwarza je i odsyła odpowiedzi" }, { id: 2, text: "Serwer jedynie odbiera dane, nigdy nie wysyła odpowiedzi do klientów" }, { id: 3, text: "Urządzenia klienckie komunikują się wyłącznie bezpośrednio ze sobą" }],
                goodAnswer: 1
            },
            {
                id: 238,
                title: "Czym jest Docker?",
                answers: [{ id: 0, text: "Systemem zarządzania relacyjnymi bazami danych działającym w chmurze" }, { id: 1, text: "Frameworkiem JavaScript do tworzenia aplikacji mobilnych" }, { id: 2, text: "Narzędziem do generowania dokumentacji kodu źródłowego" }, { id: 3, text: "Platformą do budowania i uruchamiania aplikacji w kontenerach" }],
                goodAnswer: 3
            },
            {
                id: 239,
                title: "Elementy o jakich indeksach wyświetli poniższy kod w języku C++?\n\n```\nint tab[10] = {0};\nfor (int i = 0; i < 10; i++)\n    if (i % 3 != 0)\n        cout << tab[i] << \", \";\n```",
                answers: [{ id: 0, text: "1, 3, 5, 7, 9" }, { id: 1, text: "0, 3, 6, 9" }, { id: 2, text: "1, 2, 4, 5, 7, 8" }, { id: 3, text: "0, 2, 4, 6, 8" }],
                goodAnswer: 2
            },
            {
                id: 240,
                title: "Na czym polega wzorzec MVVM (Model-View-ViewModel) stosowany w aplikacjach desktopowych i mobilnych?",
                answers: [{ id: 0, text: "Pozwala tworzyć aplikacje zawierające wyłącznie interfejs" }, { id: 1, text: "Łączy kontrolki interfejsu bezpośrednio z kodem bazy danych" }, { id: 2, text: "Oddziela interfejs użytkownika od logiki aplikacji" }, { id: 3, text: "Umieszcza interfejs i logikę aplikacji w jednym pliku" }],
                goodAnswer: 2
            },
            {
                id: 241,
                title: "Jakie liczby z zakresu od 2 do 20 wyświetli poniższy kod w JavaScript?\n\n```\nfor (let n = 2; n <= 20; n++) {\n    let ok = true;\n    for (let d = 2; d < n; d++)\n        if (n % d === 0) {\n            ok = false;\n            break;\n        }\n    if (ok) console.log(n);\n}\n```",
                answers: [{ id: 0, text: "Liczby parzyste" }, { id: 1, text: "Liczby pierwsze" }, { id: 2, text: "Liczby złożone" }, { id: 3, text: "Liczby nieparzyste" }],
                goodAnswer: 1
            },
            {
                id: 242,
                title: "Która instrukcja importuje z biblioteki React tylko komponent `Component`?",
                answers: [{ id: 0, text: "`import { Component } from 'react';`" }, { id: 1, text: "`import Component from 'react';`" }, { id: 2, text: "`import [ Component ] from 'react';`" }, { id: 3, text: "`import React.Component from 'react';`" }],
                goodAnswer: 0
            },
            {
                id: 243,
                title: "Która zmienna w języku Java może przechować wartość `'T'`?\n\n```\nint zm1;\nfloat zm2;\nchar zm3;\nboolean zm4;\n```",
                answers: [{ id: 0, text: "`zm1`" }, { id: 1, text: "`zm2`" }, { id: 2, text: "`zm4`" }, { id: 3, text: "`zm3`" }],
                goodAnswer: 3
            },
            {
                id: 244,
                title: "Interfejs aplikacji WPF zapisano w XAML. Jakie zdarzenie obsługuje metoda `fun1`?\n\n```\n<RadioButton Content=\"opcja1\" />\n<RadioButton Content=\"opcja2\" />\n<Button Content=\"OK\" Click=\"fun1\" />\n```",
                answers: [{ id: 0, text: "Kliknięcie przycisku OK" }, { id: 1, text: "Zaznaczenie pola opcja1" }, { id: 2, text: "Utratę fokusu przez pole opcji" }, { id: 3, text: "Załadowanie okna aplikacji" }],
                goodAnswer: 0
            },
            {
                id: 245,
                title: "Jak zostaną rozmieszczone elementy opisane poniższym kodem XAML (Xamarin.Forms, .NET MAUI)?\n\n```\n<StackLayout Orientation=\"Vertical\">\n    <Label Text=\"Fotograf\" />\n    <Image Source=\"obraz.jpg\" />\n    <StackLayout Orientation=\"Horizontal\">\n        <Button Text=\"Like\" />\n        <Button Text=\"Share\" />\n    </StackLayout>\n</StackLayout>\n```",
                answers: [{ id: 0, text: "Napis Fotograf będzie po prawej stronie obrazu" }, { id: 1, text: "Obraz będzie po lewej stronie, a pozostałe elementy po prawej" }, { id: 2, text: "Wszystkie elementy będą jeden pod drugim, w jednej kolumnie" }, { id: 3, text: "Przyciski Like i Share będą obok siebie w jednym wierszu" }],
                goodAnswer: 3
            },
            {
                id: 246,
                title: "Który typ danych jest typem rekordowym (strukturalnym)?",
                answers: [{ id: 0, text: "`float` w języku C" }, { id: 1, text: "`bool` w języku Java" }, { id: 2, text: "`struct` w języku C++" }, { id: 3, text: "`int` w języku Python" }],
                goodAnswer: 2
            },
            {
                id: 247,
                title: "W jakim języku pisze się aplikacje we frameworku Django?",
                answers: [{ id: 0, text: "C#" }, { id: 1, text: "Python" }, { id: 2, text: "JavaScript" }, { id: 3, text: "Java" }],
                goodAnswer: 1
            },
            {
                id: 248,
                title: "Które narzędzie służy do projektowania makiet interfejsu użytkownika?",
                answers: [{ id: 0, text: "Postman" }, { id: 1, text: "Figma" }, { id: 2, text: "Webpack" }, { id: 3, text: "Jenkins" }],
                goodAnswer: 1
            },
            {
                id: 249,
                title: "Czym jest framework?",
                answers: [{ id: 0, text: "Szkieletem aplikacji z gotowymi komponentami, narzucającym sposób jej budowy" }, { id: 1, text: "Zbiorem procedur i typów danych wykorzystywanych w kodzie aplikacji" }, { id: 2, text: "Narzędziem do edycji, testowania i uruchamiania oprogramowania" }, { id: 3, text: "Programem pozwalającym zbudować interfejs aplikacji metodą przeciągnij i upuść" }],
                goodAnswer: 0
            },
            {
                id: 250,
                title: "Jak zaczyna się komentarz jednowierszowy w języku Python?",
                answers: [{ id: 0, text: "`--`" }, { id: 1, text: "`//`" }, { id: 2, text: "`/*`" }, { id: 3, text: "`#`" }],
                goodAnswer: 3
            },
            {
                id: 251,
                title: "Do czego służy wzorzec projektowy Metoda szablonowa (Template Method)?",
                answers: [{ id: 0, text: "Do przechowywania obiektów różnego rodzaju w jednej, jednorodnej kolekcji" }, { id: 1, text: "Do łączenia obiektów w hierarchiczne struktury drzewiaste" }, { id: 2, text: "Do określenia szkieletu algorytmu, którego kroki definiują podklasy" }, { id: 3, text: "Do zapewnienia, że klasa ma tylko jedną instancję" }],
                goodAnswer: 2
            },
            {
                id: 252,
                title: "Które zadanie należy do warstwy back-end aplikacji internetowej?",
                answers: [{ id: 0, text: "Obsługa bazy danych" }, { id: 1, text: "Obsługa zdarzeń elementów strony" }, { id: 2, text: "Wyświetlanie danych formularza w przeglądarce" }, { id: 3, text: "Sprawdzanie pól formularza w trakcie wpisywania" }],
                goodAnswer: 0
            },
            {
                id: 253,
                title: "Który wzorzec projektowy upraszcza korzystanie ze złożonego systemu, udostępniając jeden prosty interfejs?",
                answers: [{ id: 0, text: "Obserwator" }, { id: 1, text: "Fasada" }, { id: 2, text: "Singleton" }, { id: 3, text: "Kompozyt" }],
                goodAnswer: 1
            },
            {
                id: 254,
                title: "Co powinien zawierać przypadek testowy (scenariusz testu)?",
                answers: [{ id: 0, text: "Pełną dokumentację techniczną oprogramowania" }, { id: 1, text: "Szczegółowe wytyczne dotyczące stylu i formatowania pisanego kodu" }, { id: 2, text: "Warunki początkowe, kroki do wykonania i oczekiwane wyniki" }, { id: 3, text: "Plan wdrożenia aplikacji w środowisku produkcyjnym" }],
                goodAnswer: 2
            },
            {
                id: 255,
                title: "Czym różni się struktura (`struct`) od unii (`union`) w języku C?",
                answers: [{ id: 0, text: "Unii nie obsługują współczesne kompilatory języka C" }, { id: 1, text: "Unia pozwala zmieniać typ pól w czasie działania programu" }, { id: 2, text: "Struktura może zawierać tylko pola tego samego typu, a unia dowolne" }, { id: 3, text: "Struktura przechowuje wszystkie pola naraz, a unia tylko jedno z nich" }],
                goodAnswer: 3
            },
            {
                id: 256,
                title: "Czym jest WebSocket?",
                answers: [{ id: 0, text: "Standardem zapisu danych w formacie binarnym przesyłanych do przeglądarki" }, { id: 1, text: "Protokołem dwukierunkowej komunikacji przez jedno połączenie TCP" }, { id: 2, text: "Narzędziem do automatycznego testowania aplikacji internetowych" }, { id: 3, text: "Biblioteką JavaScript do tworzenia formularzy" }],
                goodAnswer: 1
            },
            {
                id: 257,
                title: "Jakie zdarzenie obsługuje poniższy kod aplikacji na system Android, napisany w Javie?\n\n```\nprzycisk = (Button) findViewById(R.id.yes);\nprzycisk.setOnClickListener(...);\n```",
                answers: [{ id: 0, text: "Wybranie daty w kalendarzu" }, { id: 1, text: "Przełączenie kontrolki Switch" }, { id: 2, text: "Zmianę tekstu w polu edycyjnym" }, { id: 3, text: "Kliknięcie przycisku" }],
                goodAnswer: 3
            },
            {
                id: 258,
                title: "Który zapis jest komentarzem wielowierszowym w języku Java?",
                answers: [{ id: 0, text: "`/* ... */`" }, { id: 1, text: "`\"\"\" ... \"\"\"`" }, { id: 2, text: "`// ... //`" }, { id: 3, text: "`<!-- ... -->`" }],
                goodAnswer: 0
            },
            {
                id: 259,
                title: "Które wyrażenie sprawdza, czy liczba całkowita `x` jest dodatnią liczbą dwucyfrową podzielną przez 4?",
                answers: [{ id: 0, text: "`(x > 9 || x < 100) && (x / 4 == 0)`" }, { id: 1, text: "`(x > 9 && x < 100) || (x % 4 == 0)`" }, { id: 2, text: "`(x > 9 && x < 100) && (x % 4 == 0)`" }, { id: 3, text: "`(x > 0 && x < 100) && (x % 4 == 0)`" }],
                goodAnswer: 2
            },
            {
                id: 260,
                title: "Która deklaracja w klasie `Mieszkaniec` jest konstruktorem kopiującym w języku C++?",
                answers: [{ id: 0, text: "`Mieszkaniec(int rokUrodzenia);`" }, { id: 1, text: "`Mieszkaniec(const Mieszkaniec &m);`" }, { id: 2, text: "`Mieszkaniec(string imie, string nazwisko);`" }, { id: 3, text: "`Mieszkaniec();`" }],
                goodAnswer: 1
            },
            {
                id: 261,
                title: "Co zostanie wyświetlone w konsoli po wykonaniu kodu w JavaScript?\n\n```\nfunction Osoba(imie) {\n    this.imie = imie;\n}\nOsoba.prototype.przywitaj = function () {\n    return \"Cześć, \" + this.imie + \"!\";\n};\nconst o = new Osoba(\"Jan\");\nconsole.log(o.przywitaj());\n```",
                answers: [{ id: 0, text: "Cześć, [object Object]!" }, { id: 1, text: "TypeError: o.przywitaj is not a function" }, { id: 2, text: "Cześć, Jan!" }, { id: 3, text: "Cześć, undefined!" }],
                goodAnswer: 2
            },
            {
                id: 262,
                title: "Który algorytm sortowania NIE jest stabilny?",
                answers: [{ id: 0, text: "Sortowanie przez scalanie" }, { id: 1, text: "Sortowanie bąbelkowe" }, { id: 2, text: "Sortowanie przez wstawianie" }, { id: 3, text: "Sortowanie szybkie (quicksort)" }],
                goodAnswer: 3
            },
            {
                id: 263,
                title: "Które narzędzie zarządza zależnościami (pakietami) w projekcie JavaScript?",
                answers: [{ id: 0, text: "npm" }, { id: 1, text: "Docker" }, { id: 2, text: "Git" }, { id: 3, text: "Postman" }],
                goodAnswer: 0
            },
            {
                id: 264,
                title: "Który framework służy do tworzenia aplikacji z graficznym interfejsem użytkownika w języku C++?",
                answers: [{ id: 0, text: "Express.js" }, { id: 1, text: "Qt" }, { id: 2, text: "Django" }, { id: 3, text: "TensorFlow" }],
                goodAnswer: 1
            },
            {
                id: 265,
                title: "Aplikacja mobilna wyświetla listę, której elementy można dotknąć palcem, aby zobaczyć szczegóły. Jak nazywa się zdarzenie odpowiadające tej czynności?",
                answers: [{ id: 0, text: "`Tapped`" }, { id: 1, text: "`Toggled`" }, { id: 2, text: "`Scrolled`" }, { id: 3, text: "`ValueChanged`" }],
                goodAnswer: 0
            },
            {
                id: 266,
                title: "Jaką strukturę danych tworzy poniższa instrukcja w języku C#?\n\n```\nint[,] tab = new int[3, 3];\n```",
                answers: [{ id: 0, text: "Tablicę jednowymiarową" }, { id: 1, text: "Listę" }, { id: 2, text: "Tablicę dwuwymiarową" }, { id: 3, text: "Stos" }],
                goodAnswer: 2
            },
            {
                id: 267,
                title: "W którym środowisku programistycznym tworzy się aplikacje WPF (Windows Presentation Foundation)?",
                answers: [{ id: 0, text: "NetBeans" }, { id: 1, text: "PyCharm" }, { id: 2, text: "Android Studio" }, { id: 3, text: "Visual Studio" }],
                goodAnswer: 3
            },
            {
                id: 268,
                title: "Jaki algorytm realizuje poniższa metoda w języku Java?\n\n```\nstatic String fun1(String s) {\n    String w = \"\";\n    for (int i = s.length() - 1; i >= 0; i--)\n        w += s.charAt(i);\n    return w;\n}\n```",
                answers: [{ id: 0, text: "Sortowanie znaków napisu według kodów ASCII" }, { id: 1, text: "Sprawdzanie, czy napis jest palindromem" }, { id: 2, text: "Odwracanie kolejności znaków w napisie" }, { id: 3, text: "Wyszukiwanie litery w napisie" }],
                goodAnswer: 2
            },
            {
                id: 269,
                title: "Jakiego rodzaju aplikacje tworzy się z użyciem frameworka Angular?",
                answers: [{ id: 0, text: "Natywne aplikacje mobilne" }, { id: 1, text: "Aplikacje internetowe typu front-end" }, { id: 2, text: "Aplikacje serwerowe typu back-end" }, { id: 3, text: "Natywne aplikacje desktopowe" }],
                goodAnswer: 1
            },
            {
                id: 270,
                title: "Co sprawdza poniższa funkcja w języku C++?\n\n```\nbool wykonaj(int x) {\n    int T[] = {4, 15, -2, 9, 202};\n    for (int i = 0; i < 5; i++)\n        if (T[i] == x)\n            return true;\n    return false;\n}\n```",
                answers: [{ id: 0, text: "Czy wartość `x` występuje w tablicy `T`" }, { id: 1, text: "Czy `x` należy do przedziału od 0 do 4" }, { id: 2, text: "Czy wszystkie elementy tablicy `T` są równe `x`" }, { id: 3, text: "Czy tablica `T` zawiera tylko liczby dodatnie" }],
                goodAnswer: 0
            },
            {
                id: 271,
                title: "Jaką odpowiedzialność karną przewiduje polskie prawo za bezprawne rozpowszechnianie cudzego programu komputerowego?",
                answers: [{ id: 0, text: "Wyłącznie obowiązek publicznych przeprosin" }, { id: 1, text: "Unieważnienie wszystkich licencji posiadanych przez sprawcę" }, { id: 2, text: "Dożywotni zakaz korzystania z jakiegokolwiek oprogramowania open source" }, { id: 3, text: "Grzywnę, karę ograniczenia wolności lub pozbawienia wolności" }],
                goodAnswer: 3
            },
            {
                id: 272,
                title: "Czym jest ORM (Object-Relational Mapping)?",
                answers: [{ id: 0, text: "Metodą zarządzania niezawodnością serwerów w chmurze" }, { id: 1, text: "Modelem organizacji zasobów statycznych w aplikacjach webowych" }, { id: 2, text: "Techniką odwzorowania obiektów w kodzie na tabele relacyjnej bazy danych" }, { id: 3, text: "Modułem renderującym dane wyjściowe aplikacji w szablonach stron HTML" }],
                goodAnswer: 2
            },
            {
                id: 273,
                title: "Które typy liczbowe języka C++ są typami stałoprzecinkowymi?",
                answers: [{ id: 0, text: "`float`, `double`" }, { id: 1, text: "`bool`, `char`, `string`" }, { id: 2, text: "`long double`, `float`" }, { id: 3, text: "`int`, `short`, `long`" }],
                goodAnswer: 3
            },
            {
                id: 274,
                title: "Czym różnią się testy funkcjonalne od testów niefunkcjonalnych?",
                answers: [{ id: 0, text: "Funkcjonalne sprawdzają, co robi aplikacja, a niefunkcjonalne np. wydajność" }, { id: 1, text: "Funkcjonalne dotyczą interfejsu, a niefunkcjonalne zaplecza aplikacji" }, { id: 2, text: "Funkcjonalne sprawdzają wydajność, a niefunkcjonalne poprawność kodu" }, { id: 3, text: "Funkcjonalne wykonują użytkownicy, a niefunkcjonalne programiści" }],
                goodAnswer: 0
            },
            {
                id: 275,
                title: "Czym jest Service Worker w aplikacjach PWA (Progressive Web App)?",
                answers: [{ id: 0, text: "Narzędziem do mierzenia wydajności i czasu ładowania aplikacji" }, { id: 1, text: "Skryptem działającym w tle przeglądarki, niezależnie od strony" }, { id: 2, text: "Protokołem komunikacji między przeglądarką a serwerem" }, { id: 3, text: "Usługą hostingową przeznaczoną dla aplikacji webowych" }],
                goodAnswer: 1
            },
            {
                id: 276,
                title: "Jaki jest wynik dodawania liczb binarnych 1101 i 1001?",
                answers: [{ id: 0, text: "10110" }, { id: 1, text: "10111" }, { id: 2, text: "11110" }, { id: 3, text: "1110" }],
                goodAnswer: 0
            },
            {
                id: 277,
                title: "Aplikacja ma umożliwiać cofanie do 20 ostatnich operacji (undo). Która struktura danych najlepiej się do tego nadaje?",
                answers: [{ id: 0, text: "Drzewo binarne" }, { id: 1, text: "Kolejka" }, { id: 2, text: "Graf" }, { id: 3, text: "Stos" }],
                goodAnswer: 3
            },
            {
                id: 278,
                title: "Na czym polega leniwe ładowanie (lazy loading) w aplikacjach internetowych?",
                answers: [{ id: 0, text: "Na zapisywaniu danych w pamięci podręcznej przeglądarki" }, { id: 1, text: "Na kompresowaniu obrazów przed wysłaniem ich na serwer" }, { id: 2, text: "Na wczytywaniu zasobów dopiero wtedy, gdy są potrzebne" }, { id: 3, text: "Na mierzeniu czasu ładowania poszczególnych elementów strony" }],
                goodAnswer: 2
            },
            {
                id: 279,
                title: "Które narzędzie służy do automatyzacji budowania, testowania i wdrażania aplikacji (CI/CD)?",
                answers: [{ id: 0, text: "Figma" }, { id: 1, text: "Jenkins" }, { id: 2, text: "Swagger" }, { id: 3, text: "Postman" }],
                goodAnswer: 1
            },
            {
                id: 280,
                title: "Co zostanie wyświetlone po wykonaniu kodu w języku Python?\n\n```\ndane = [1, 2, 3, 4, 5]\nwynik = list(map(lambda x: x * 2,\n    filter(lambda x: x % 2 == 0, dane)))\nprint(wynik)\n```",
                answers: [{ id: 0, text: "`[2, 4]`" }, { id: 1, text: "`[2, 6, 10]`" }, { id: 2, text: "`[4, 8]`" }, { id: 3, text: "`[2, 4, 6, 8, 10]`" }],
                goodAnswer: 2
            },
            {
                id: 281,
                title: "Do czego służy polecenie `git rebase`?",
                answers: [{ id: 0, text: "Do automatycznego rozwiązania konfliktów w plikach" }, { id: 1, text: "Do przeniesienia commitów gałęzi tak, by zaczynały się od innego commita" }, { id: 2, text: "Do utworzenia kopii zapasowej całego repozytorium na zdalnym serwerze" }, { id: 3, text: "Do utworzenia nowego, pustego repozytorium w katalogu" }],
                goodAnswer: 1
            },
            {
                id: 282,
                title: "Do czego służy poniższy kod w języku C#?\n\n```\nvar r = new Random();\nstring pula = \"abcdefghijklmnopqrstuvwxyz\";\nstring wynik = \"\";\nfor (int i = 0; i < 8; i++)\n    wynik += pula[r.Next(0, pula.Length)];\n```",
                answers: [{ id: 0, text: "Tworzy losowy napis z 8 małych liter" }, { id: 1, text: "Tworzy napis z 8 kolejnych liter alfabetu" }, { id: 2, text: "Losuje jedną literę z puli znaków" }, { id: 3, text: "Wypełnia tablicę 8 liczbami pseudolosowymi" }],
                goodAnswer: 0
            },
            {
                id: 283,
                title: "Które działanie zagraża bezpieczeństwu tożsamości cyfrowej?",
                answers: [{ id: 0, text: "Włączenie uwierzytelniania dwuskładnikowego" }, { id: 1, text: "Regularna zmiana haseł do wszystkich kont internetowych" }, { id: 2, text: "Tworzenie unikalnych, silnych haseł" }, { id: 3, text: "Klikanie w podejrzane linki w wiadomościach e-mail" }],
                goodAnswer: 3
            },
            {
                id: 284,
                title: "Jak poprawnie wywołać poniższą funkcję w języku C++ dla zmiennych całkowitych `a` i `b`?\n\n```\nvoid zamien(int *a, int *b) {\n    int tmp = *a;\n    *a = *b;\n    *b = tmp;\n}\n```",
                answers: [{ id: 0, text: "`zamien(a, b);`" }, { id: 1, text: "`zamien(&a, &b);`" }, { id: 2, text: "`zamien(*a, *b);`" }, { id: 3, text: "`zamien(12, 34);`" }],
                goodAnswer: 1
            },
            {
                id: 285,
                title: "Która grupa zawiera wyłącznie typy złożone języka C++?",
                answers: [{ id: 0, text: "`class`, `struct`, `float`" }, { id: 1, text: "`unsigned`, `struct`, `float`" }, { id: 2, text: "`class`, `struct`, `union`" }, { id: 3, text: "`char`, `struct`, `union`" }],
                goodAnswer: 2
            },
            {
                id: 286,
                title: "Czym jest odśmiecanie pamięci (garbage collection)?",
                answers: [{ id: 0, text: "Usuwaniem pustych wierszy z tabel bazy danych" }, { id: 1, text: "Kompresją danych przechowywanych w tabelach relacyjnej bazy danych SQL" }, { id: 2, text: "Usuwaniem nieużywanych elementów z interfejsu użytkownika" }, { id: 3, text: "Automatycznym zwalnianiem pamięci zajmowanej przez nieużywane obiekty" }],
                goodAnswer: 3
            },
            {
                id: 287,
                title: "Który komentarz można wstawić w miejscu `???` w kodzie C#, aby był poprawny i opisywał wykonywaną operację?\n\n```\nstring[] langs = {\"C++\", \"C#\", \"Java\"};\nforeach (string s in langs) {\n    Console.WriteLine(s); ???\n}\n```",
                answers: [{ id: 0, text: "`// wyświetlenie elementu tablicy`" }, { id: 1, text: "`# wyświetlenie elementu tablicy`" }, { id: 2, text: "`// wypełnienie elementu tablicy`" }, { id: 3, text: "`# wypełnienie elementu tablicy`" }],
                goodAnswer: 0
            },
            {
                id: 288,
                title: "Czym jest Cypress?",
                answers: [{ id: 0, text: "Biblioteką gotowych komponentów UI dla Reacta" }, { id: 1, text: "Frameworkiem do testów end-to-end aplikacji internetowych" }, { id: 2, text: "Kompilatorem kodu TypeScript do starszych wersji JavaScriptu" }, { id: 3, text: "Systemem bazodanowym dla aplikacji mobilnych" }],
                goodAnswer: 1
            },
            {
                id: 289,
                title: "Do czego przede wszystkim służy biblioteka jQuery?",
                answers: [{ id: 0, text: "Do projektowania struktur relacyjnych baz danych" }, { id: 1, text: "Do tworzenia interfejsów programów desktopowych" }, { id: 2, text: "Do upraszczania operacji na DOM i obsługi zdarzeń w JavaScript" }, { id: 3, text: "Do budowania natywnych aplikacji mobilnych na systemy Android i iOS" }],
                goodAnswer: 2
            },
            {
                id: 290,
                title: "Którym poleceniem rozpoczyna się tworzenie procedury składowanej `dodajUsera` w MS SQL Server?",
                answers: [{ id: 0, text: "`CREATE PROCEDURE dodajUsera`" }, { id: 1, text: "`CREATE dodajUsera PROCEDURE`" }, { id: 2, text: "`ADD PROCEDURE dodajUsera`" }, { id: 3, text: "`ADD dodajUsera PROCEDURE`" }],
                goodAnswer: 0
            },
            {
                id: 291,
                title: "Którego diagramu można użyć do monitorowania wykonywania zadań przez członków zespołu projektowego?",
                answers: [{ id: 0, text: "Diagramu związków encji" }, { id: 1, text: "Diagramu aktywności UML" }, { id: 2, text: "Diagramu Venna" }, { id: 3, text: "Diagramu Gantta" }],
                goodAnswer: 3
            },
            {
                id: 292,
                title: "Jakiej jednostki zaleca się używać w interfejsie aplikacji na system Android, aby elementy miały ten sam rozmiar na ekranach o różnej gęstości pikseli?",
                answers: [{ id: 0, text: "mm" }, { id: 1, text: "px" }, { id: 2, text: "pt" }, { id: 3, text: "dp" }],
                goodAnswer: 3
            },
            {
                id: 293,
                title: "Jak w języku C++ zdefiniować własny typ wyjątku?",
                answers: [{ id: 0, text: "Włączyć domyślną obsługę błędów w kompilatorze" }, { id: 1, text: "Napisać blok try z pustym blokiem catch" }, { id: 2, text: "Utworzyć klasę dziedziczącą po klasie std::exception" }, { id: 3, text: "Wywołać instrukcję throw bez żadnego argumentu" }],
                goodAnswer: 2
            },
            {
                id: 294,
                title: "Do jakiej grupy należą operatory `*`, `/`, `++`, `--` i `%`?",
                answers: [{ id: 0, text: "Operatorów logicznych" }, { id: 1, text: "Operatorów arytmetycznych" }, { id: 2, text: "Operatorów przypisania" }, { id: 3, text: "Operatorów porównania" }],
                goodAnswer: 1
            },
            {
                id: 295,
                title: "Co opisuje dokumentacja wdrożeniowa aplikacji?",
                answers: [{ id: 0, text: "Instalację i konfigurację aplikacji w środowisku produkcyjnym" }, { id: 1, text: "Sposób tworzenia zadań w systemie kontroli wersji" }, { id: 2, text: "Wyniki testów wydajnościowych przeprowadzonych przed wydaniem aplikacji" }, { id: 3, text: "Strukturę tabel w bazie danych aplikacji" }],
                goodAnswer: 0
            },
            {
                id: 296,
                title: "W aplikacji zaprojektowanej obiektowo program jest sterowany przez:",
                answers: [{ id: 0, text: "definicję warunków rozwiązania końcowego" }, { id: 1, text: "moduły z funkcjami i zmiennymi globalnymi" }, { id: 2, text: "zbiór współpracujących ze sobą instancji klas" }, { id: 3, text: "pętlę dyspozytora wywołującą funkcje dla zdarzeń" }],
                goodAnswer: 2
            },
            {
                id: 297,
                title: "Jaka będzie wartość zmiennej `b` po wykonaniu kodu w języku C++?\n\n```\nint a = 1, b = 20, c = 3;\nwhile (a <= 10) {\n    b = b - c;\n    a += 2;\n}\n```",
                answers: [{ id: 0, text: "11" }, { id: 1, text: "20" }, { id: 2, text: "2" }, { id: 3, text: "5" }],
                goodAnswer: 3
            },
            {
                id: 298,
                title: "W jakim języku pisze się aplikacje we frameworku Angular?",
                answers: [{ id: 0, text: "Python" }, { id: 1, text: "TypeScript" }, { id: 2, text: "C#" }, { id: 3, text: "PHP" }],
                goodAnswer: 1
            },
            {
                id: 299,
                title: "Jaką strukturę danych tworzy poniższy zapis w języku Python?\n\n```\npierwiastki = {\"N\": \"Azot\", \"O\": \"Tlen\"}\n```",
                answers: [{ id: 0, text: "Słownik (tablicę asocjacyjną)" }, { id: 1, text: "Zbiór" }, { id: 2, text: "Kolejkę" }, { id: 3, text: "Stos" }],
                goodAnswer: 0
            },
            {
                id: 300,
                title: "Co zostanie wyświetlone w konsoli po wykonaniu kodu w JavaScript?\n\n```\nclass Zwierze {\n    constructor(i) { this.imie = i; }\n    glos() { return \"dźwięk\"; }\n}\nclass Pies extends Zwierze {\n    glos() { return \"hau\"; }\n}\nconst p = new Pies(\"Reks\");\nconsole.log(p.imie, p.glos());\n```",
                answers: [{ id: 0, text: "Reks dźwięk" }, { id: 1, text: "TypeError" }, { id: 2, text: "Reks hau" }, { id: 3, text: "undefined hau" }],
                goodAnswer: 2
            },
            {
                id: 301,
                title: "Który algorytm sortowania wykorzystuje metodę dziel i zwyciężaj?",
                answers: [{ id: 0, text: "Sortowanie bąbelkowe" }, { id: 1, text: "Sortowanie przez wstawianie" }, { id: 2, text: "Sortowanie przez wybieranie" }, { id: 3, text: "Sortowanie szybkie (quicksort)" }],
                goodAnswer: 3
            },
            {
                id: 302,
                title: "Do programowania w jakim języku powstały pierwotnie środowiska IntelliJ IDEA, Eclipse i NetBeans?",
                answers: [{ id: 0, text: "Python" }, { id: 1, text: "Java" }, { id: 2, text: "C++" }, { id: 3, text: "C#" }],
                goodAnswer: 1
            },
            {
                id: 303,
                title: "Czym jest aplikacja SPA (Single Page Application)?",
                answers: [{ id: 0, text: "Aplikacją, która podmienia treść strony bez jej ponownego przeładowania" }, { id: 1, text: "Techniką zmniejszania rozmiaru kodu JavaScript przed publikacją strony" }, { id: 2, text: "Metodą projektowania interfejsu tylko dla urządzeń mobilnych" }, { id: 3, text: "Formatem pliku używanym do przechowywania danych" }],
                goodAnswer: 0
            },
            {
                id: 304,
                title: "Do czego służy instrukcja `throw` w języku C++?",
                answers: [{ id: 0, text: "Do zgłoszenia wyjątku, który można przechwycić w bloku catch" }, { id: 1, text: "Do ograniczenia zasięgu zmiennych w bloku try" }, { id: 2, text: "Do natychmiastowego zakończenia programu bez obsługi błędu" }, { id: 3, text: "Do zdefiniowania bloku wykonywanego zawsze na końcu" }],
                goodAnswer: 0
            },
            {
                id: 305,
                title: "Jednym z etapów publikacji aplikacji w sklepie Google Play są testy beta. Kto je przeprowadza?",
                answers: [{ id: 0, text: "Wyłącznie programiści, którzy napisali aplikację" }, { id: 1, text: "Automatyczne skrypty Google, bez udziału ludzi" }, { id: 2, text: "Testerzy zatrudnieni przez firmę Google" }, { id: 3, text: "Grupa docelowych użytkowników aplikacji" }],
                goodAnswer: 3
            },
            {
                id: 306,
                title: "Który algorytm jest jednokierunkową funkcją skrótu?",
                answers: [{ id: 0, text: "DES" }, { id: 1, text: "RSA" }, { id: 2, text: "MD5" }, { id: 3, text: "AES" }],
                goodAnswer: 2
            },
            {
                id: 307,
                title: "Co zwróci poniższe zapytanie SQL?\n\n```\nSELECT COUNT(*)\nFROM pracownicy\nWHERE pensja > (SELECT AVG(pensja)\n                FROM pracownicy);\n```",
                answers: [{ id: 0, text: "Średnią pensję wszystkich pracowników" }, { id: 1, text: "Liczbę pracowników z pensją wyższą od średniej" }, { id: 2, text: "Błąd składni, bo podzapytania są niedozwolone" }, { id: 3, text: "Liczbę pracowników z najwyższą pensją" }],
                goodAnswer: 1
            },
            {
                id: 308,
                title: "Co zostanie wyświetlone w konsoli po wykonaniu kodu w JavaScript?\n\n```\nlet a = { value: 10 };\nlet b = a;\nb.value = 20;\nconsole.log(a.value);\n```",
                answers: [{ id: 0, text: "20" }, { id: 1, text: "ReferenceError" }, { id: 2, text: "10" }, { id: 3, text: "undefined" }],
                goodAnswer: 0
            },
            {
                id: 309,
                title: "Dla której wartości zmiennej `index` poniższy kod w języku Java wyświetli napis \"Błąd\"?\n\n```\ntry {\n    int[] t = {1, 2, 3, 4, 5, 6};\n    System.out.println(t[index]);\n} catch (Exception e) {\n    System.out.println(\"Błąd\");\n}\n```",
                answers: [{ id: 0, text: "1" }, { id: 1, text: "0" }, { id: 2, text: "5" }, { id: 3, text: "7" }],
                goodAnswer: 3
            },
            {
                id: 310,
                title: "Co charakteryzuje bibliotekę dynamiczną (np. plik DLL)?",
                answers: [{ id: 0, text: "Może być używana tylko przez jeden program naraz" }, { id: 1, text: "Jest ładowana do pamięci w trakcie działania programu" }, { id: 2, text: "Zawiera kod źródłowy aplikacji w postaci tekstowej" }, { id: 3, text: "Jest dołączana do pliku wykonywalnego podczas kompilacji" }],
                goodAnswer: 1
            },
            {
                id: 311,
                title: "Do czego służy środowisko Node.js?",
                answers: [{ id: 0, text: "Do tworzenia natywnych aplikacji mobilnych" }, { id: 1, text: "Do automatycznego testowania interfejsów API" }, { id: 2, text: "Do uruchamiania JavaScriptu po stronie serwera" }, { id: 3, text: "Do projektowania graficznego interfejsu użytkownika" }],
                goodAnswer: 2
            },
            {
                id: 312,
                title: "Czym jest `rysunek` w poniższym kodzie w języku Java?\n\n```\nMojaKlasa obj1 = new MojaKlasa();\nobj1.rysunek();\n```",
                answers: [{ id: 0, text: "Metodą" }, { id: 1, text: "Konstruktorem" }, { id: 2, text: "Obiektem" }, { id: 3, text: "Polem" }],
                goodAnswer: 0
            },
            {
                id: 313,
                title: "Jaki jest główny cel normalizacji relacyjnej bazy danych?",
                answers: [{ id: 0, text: "Zmniejszenie rozmiaru bazy kosztem integralności danych" }, { id: 1, text: "Przyspieszenie zapytań przez celowe powielenie danych" }, { id: 2, text: "Usunięcie nadmiarowości danych i zapewnienie ich spójności" }, { id: 3, text: "Zwiększenie liczby tabel w celu lepszego porządku" }],
                goodAnswer: 2
            },
            {
                id: 314,
                title: "Co robi poniższy kod w języku C++?\n\n```\nvector<int> liczby;\nfor (int i = 0; i < 10; i++)\n    liczby.push_back(2 * i);\n```",
                answers: [{ id: 0, text: "Usuwa w każdym obiegu pętli pierwszy element" }, { id: 1, text: "Dodaje kolejne wartości na początek wektora" }, { id: 2, text: "Usuwa w każdym obiegu pętli ostatni element" }, { id: 3, text: "Dodaje kolejne wartości na koniec wektora" }],
                goodAnswer: 3
            },
            {
                id: 315,
                title: "Co wyświetli poniższy kod w języku C#?\n\n```\nint x = 5;\nint y = 10;\nConsole.WriteLine($\"{x} + {y} = {x + y}\");\n```",
                answers: [{ id: 0, text: "5 + 10 = x + y" }, { id: 1, text: "5 + 10 = 15" }, { id: 2, text: "x + y = 15" }, { id: 3, text: "{x} + {y} = {x + y}" }],
                goodAnswer: 1
            },
            {
                id: 316,
                title: "Który poziom zgodności ze standardem WCAG 2.0 jest najwyższy?",
                answers: [{ id: 0, text: "A+" }, { id: 1, text: "AAA" }, { id: 2, text: "A" }, { id: 3, text: "AA" }],
                goodAnswer: 1
            },
            {
                id: 317,
                title: "Które zdarzenie zachodzi, gdy kontrolka lub okno staje się aktywne, np. po kliknięciu myszą?",
                answers: [{ id: 0, text: "`keyup`" }, { id: 1, text: "`blur`" }, { id: 2, text: "`focus`" }, { id: 3, text: "`change`" }],
                goodAnswer: 2
            },
            {
                id: 318,
                title: "Na czym polega błąd logiczny w poniższym kodzie w języku C++?\n\n```\nint x = 0;\nwhile (x != 0 || x != 5) {\n    cout << x << \" \";\n    x++;\n}\n```",
                answers: [{ id: 0, text: "Instrukcja cout wczytuje wartość zmiennej w pętli" }, { id: 1, text: "Zmienna x nie została zainicjalizowana przed pętlą" }, { id: 2, text: "Warunek pętli jest od razu fałszywy, więc pętla nie wykona się ani razu" }, { id: 3, text: "Warunek pętli jest zawsze prawdziwy, więc pętla jest nieskończona" }],
                goodAnswer: 3
            },
            {
                id: 319,
                title: "Co oznacza skrót MVP w projektowaniu aplikacji?",
                answers: [{ id: 0, text: "Minimum Viable Product – najprostszą działającą wersję produktu" }, { id: 1, text: "Most Valuable Program – najcenniejszy program w firmie" }, { id: 2, text: "Mobile Virtual Platform – platformę do testów aplikacji mobilnych" }, { id: 3, text: "Multiple Value Platform – platformę obsługującą wiele typów danych" }],
                goodAnswer: 0
            },
            {
                id: 320,
                title: "Czym jest Webpack?",
                answers: [{ id: 0, text: "Frameworkiem do tworzenia natywnych aplikacji mobilnych" }, { id: 1, text: "Systemem bazodanowym przeznaczonym dla aplikacji Node.js" }, { id: 2, text: "Biblioteką do pisania i uruchamiania testów jednostkowych kodu JavaScript" }, { id: 3, text: "Narzędziem łączącym moduły JavaScript i zasoby w pakiety (bundler)" }],
                goodAnswer: 3
            },
            {
                id: 321,
                title: "Czym jest REST API?",
                answers: [{ id: 0, text: "Stylem budowy API opartym na zasobach i standardowych metodach HTTP" }, { id: 1, text: "Frameworkiem do automatycznego testowania interfejsów API" }, { id: 2, text: "Biblioteką JavaScript do bezpośredniego łączenia się z bazami danych SQL" }, { id: 3, text: "Protokołem sieciowym do przesyłania danych binarnych" }],
                goodAnswer: 0
            },
            {
                id: 322,
                title: "Co zostanie wyświetlone w konsoli po wykonaniu kodu w JavaScript?\n\n```\nconst p = new Promise(resolve => {\n    setTimeout(() => resolve(\"A\"), 1000);\n});\np.then(res => {\n    console.log(res);\n    return \"B\";\n}).then(res => console.log(res));\n```",
                answers: [{ id: 0, text: "Tylko A" }, { id: 1, text: "A, a następnie B" }, { id: 2, text: "B, a następnie A" }, { id: 3, text: "Tylko B" }],
                goodAnswer: 1
            },
            {
                id: 323,
                title: "Co zostanie wyświetlone w konsoli po wykonaniu kodu w JavaScript?\n\n```\nconsole.log(0.1 + 0.2 === 0.3);\nconsole.log(0.1 + 0.2);\n```",
                answers: [{ id: 0, text: "false i 0.3" }, { id: 1, text: "true i 0.30000000000000004" }, { id: 2, text: "false i 0.30000000000000004" }, { id: 3, text: "true i 0.3" }],
                goodAnswer: 2
            },
            {
                id: 324,
                title: "Reguła zaangażowania i konsekwencji, jedna z zasad wywierania wpływu, odnosi się do skłonności ludzi do:",
                answers: [{ id: 0, text: "kierowania się zdaniem większości grupy" }, { id: 1, text: "odwzajemniania się osobie, która im pomogła" }, { id: 2, text: "ulegania osobom uważanym za autorytety" }, { id: 3, text: "doprowadzania do końca spraw, w które się zaangażowali" }],
                goodAnswer: 3
            },
            {
                id: 325,
                title: "Który operator w języku C++ zwraca adres zmiennej?",
                answers: [{ id: 0, text: "`->`" }, { id: 1, text: "`*`" }, { id: 2, text: "`&`" }, { id: 3, text: "`::`" }],
                goodAnswer: 2
            },
            {
                id: 326,
                title: "Jaki jest efekt wykonania poniższych poleceń Git w folderze projektu?\n\n```\ngit init\ngit add .\ngit commit -m \"first commit\"\n```",
                answers: [{ id: 0, text: "Utworzenie repozytorium i zatwierdzenie w nim wszystkich plików projektu" }, { id: 1, text: "Pobranie kodu projektu z istniejącego zdalnego repozytorium" }, { id: 2, text: "Zarchiwizowanie wszystkich rewizji projektu w pliku first commit" }, { id: 3, text: "Utworzenie kopii istniejącego repozytorium z jedną rewizją" }],
                goodAnswer: 0
            },
            {
                id: 327,
                title: "Jak nazywa się metoda wyszukiwania w posortowanej tablicy, która dzieli ją na bloki i przeszukuje liniowo tylko blok, w którym może być szukany element?",
                answers: [{ id: 0, text: "Exponential search" }, { id: 1, text: "Jump search" }, { id: 2, text: "Ternary search" }, { id: 3, text: "Binary search" }],
                goodAnswer: 1
            },
            {
                id: 328,
                title: "Co charakteryzuje klasę statyczną w języku C#?",
                answers: [{ id: 0, text: "Może być klasą bazową dla innych klas" }, { id: 1, text: "Może zawierać tylko statyczne pola i metody" }, { id: 2, text: "Nie może zawierać żadnych pól ani metod" }, { id: 3, text: "Jest automatycznie usuwana po zakończeniu programu" }],
                goodAnswer: 1
            },
            {
                id: 329,
                title: "Do której kategorii własności intelektualnej należą znaki towarowe?",
                answers: [{ id: 0, text: "Autorskich praw osobistych" }, { id: 1, text: "Autorskich praw majątkowych" }, { id: 2, text: "Praw pokrewnych" }, { id: 3, text: "Własności przemysłowej" }],
                goodAnswer: 3
            },
            {
                id: 330,
                title: "Czym jest Redux?",
                answers: [{ id: 0, text: "Systemem kontroli wersji dla projektów JavaScript" }, { id: 1, text: "Frameworkiem do tworzenia natywnych aplikacji mobilnych" }, { id: 2, text: "Biblioteką do zarządzania stanem aplikacji JavaScript" }, { id: 3, text: "Narzędziem do mierzenia wydajności aplikacji React" }],
                goodAnswer: 2
            },
            {
                id: 331,
                title: "Które narzędzie najczęściej wykorzystuje się do ręcznego testowania API REST?",
                answers: [{ id: 0, text: "Postman" }, { id: 1, text: "Figma" }, { id: 2, text: "Selenium" }, { id: 3, text: "Git" }],
                goodAnswer: 0
            },
            {
                id: 332,
                title: "Co oznacza poniższa definicja klasy `Car` w języku C#?\n\n```\npublic class Car : Vehicle { ... }\n```",
                answers: [{ id: 0, text: "Klasa `Car` korzysta z prywatnych pól klasy `Vehicle`" }, { id: 1, text: "Klasa `Vehicle` dziedziczy po klasie `Car`" }, { id: 2, text: "Klasa `Car` dziedziczy po klasie `Vehicle`" }, { id: 3, text: "Klasa `Car` jest zaprzyjaźniona z klasą `Vehicle`" }],
                goodAnswer: 2
            },
            {
                id: 333,
                title: "Typ `DECIMAL` w SQL wymaga podania liczby wszystkich cyfr i liczby cyfr po przecinku. Jakiego rodzaju jest to zapis liczby?",
                answers: [{ id: 0, text: "Łańcuchowy" }, { id: 1, text: "Stałoprzecinkowy" }, { id: 2, text: "Logiczny" }, { id: 3, text: "Zmiennoprzecinkowy" }],
                goodAnswer: 1
            },
            {
                id: 334,
                title: "Który protokół komunikacyjny jest powszechnie stosowany w urządzeniach Internetu rzeczy (IoT)?",
                answers: [{ id: 0, text: "FTP" }, { id: 1, text: "POP3" }, { id: 2, text: "SMTP" }, { id: 3, text: "MQTT" }],
                goodAnswer: 3
            },
            {
                id: 335,
                title: "Której kolekcji .NET należy użyć, aby powiązany z nią element interfejsu był powiadamiany o dodaniu, usunięciu lub zmianie jej zawartości?",
                answers: [{ id: 0, text: "`ObservableCollection`" }, { id: 1, text: "`ReadOnlyCollection`" }, { id: 2, text: "`List`" }, { id: 3, text: "`KeyedCollection`" }],
                goodAnswer: 0
            },
            {
                id: 336,
                title: "Która grupa zawiera wyłącznie frameworki i biblioteki do tworzenia aplikacji internetowych?",
                answers: [{ id: 0, text: "ASP.NET Core, Django, Angular, React" }, { id: 1, text: "WPF, Qt, Angular, Django" }, { id: 2, text: "Visual Studio, Eclipse, Angular, React" }, { id: 3, text: "Android Studio, Xamarin, Django, React" }],
                goodAnswer: 0
            },
            {
                id: 337,
                title: "Jaką kontrolkę definiuje poniższy kod XML w aplikacji na system Android?\n\n```\n<Switch\n    android:id=\"@+id/switch1\"\n    android:layout_width=\"wrap_content\"\n    android:layout_height=\"wrap_content\" />\n```",
                answers: [{ id: 0, text: "Listę rozwijaną" }, { id: 1, text: "Pole wyboru daty" }, { id: 2, text: "Suwak" }, { id: 3, text: "Przełącznik" }],
                goodAnswer: 3
            },
            {
                id: 338,
                title: "Który dokument standardu IEEE 829 zawiera informacje o tym, jakie przypadki testowe wykonano, kto je wykonał i czy zakończyły się sukcesem?",
                answers: [{ id: 0, text: "Specyfikacja procedury testowej" }, { id: 1, text: "Dziennik testów" }, { id: 2, text: "Raport podsumowujący testy" }, { id: 3, text: "Plan testów" }],
                goodAnswer: 1
            },
            {
                id: 339,
                title: "Które środowisko programistyczne jest przeznaczone do tworzenia aplikacji w języku Python, np. z użyciem Django?",
                answers: [{ id: 0, text: "Unity" }, { id: 1, text: "Android Studio" }, { id: 2, text: "PyCharm" }, { id: 3, text: "Xcode" }],
                goodAnswer: 2
            },
            {
                id: 340,
                title: "Jakie elementy są typowe dla środowiska IDE do tworzenia aplikacji mobilnych?",
                answers: [{ id: 0, text: "Przeglądarka internetowa, serwer WWW i edytor tekstu" }, { id: 1, text: "Arkusz kalkulacyjny, serwer poczty i system CRM" }, { id: 2, text: "Edytor grafiki, narzędzia analityczne i klient FTP" }, { id: 3, text: "Kompilator, debuger i emulator urządzenia mobilnego" }],
                goodAnswer: 3
            },
            {
                id: 341,
                title: "Czym różni się konstruktor od zwykłej metody klasy w językach C++, Java i C#?",
                answers: [{ id: 0, text: "Ma taką samą nazwę jak klasa i nie zwraca wartości" }, { id: 1, text: "Może zostać wywołany wyłącznie przez destruktor klasy" }, { id: 2, text: "Zawsze musi zwracać wartość typu bool" }, { id: 3, text: "Można go wywołać bez tworzenia obiektu, jak metodę statyczną" }],
                goodAnswer: 0
            },
            {
                id: 342,
                title: "Co zostanie wyświetlone po wykonaniu kodu w języku Python?\n\n```\ndef dodaj(x, lista=[]):\n    lista.append(x)\n    return lista\n\nprint(dodaj(1))\nprint(dodaj(2))\n```",
                answers: [{ id: 0, text: "`[1]` i `[1]`" }, { id: 1, text: "`[1]` i `[2]`" }, { id: 2, text: "`[1]` i `[1, 2]`" }, { id: 3, text: "`[1, 2]` i `[1, 2]`" }],
                goodAnswer: 2
            },
            {
                id: 343,
                title: "Co wyświetli poniższy kod w języku C++?\n\n```\nclass A {\npublic:\n    virtual void f() { cout << \"A\"; }\n};\nclass B : public A {\npublic:\n    void f() { cout << \"B\"; }\n};\n\nA *p = new B();\np->f();\n```",
                answers: [{ id: 0, text: "Błąd kompilacji" }, { id: 1, text: "B" }, { id: 2, text: "A" }, { id: 3, text: "AB" }],
                goodAnswer: 1
            },
            {
                id: 344,
                title: "Która kontrolka WPF jest elementem menu aplikacji desktopowej?",
                answers: [{ id: 0, text: "`MenuItem`" }, { id: 1, text: "`ScrollBar`" }, { id: 2, text: "`Canvas`" }, { id: 3, text: "`CheckBox`" }],
                goodAnswer: 0
            },
            {
                id: 345,
                title: "Na czym polega wstrzykiwanie zależności (dependency injection)?",
                answers: [{ id: 0, text: "Baza danych automatycznie optymalizuje wykonywane zapytania" }, { id: 1, text: "Obiekt otrzymuje z zewnątrz obiekty, od których zależy" }, { id: 2, text: "Interfejs użytkownika jest generowany na podstawie modelu danych" }, { id: 3, text: "Kompilator dołącza do programu wszystkie biblioteki statyczne" }],
                goodAnswer: 1
            },
            {
                id: 346,
                title: "Jakie wartości będą miały zmienne `x` i `y` po wykonaniu kodu w języku C++, w którym użyto preinkrementacji?\n\n```\nint x = 7;\nint y = ++x;\n```",
                answers: [{ id: 0, text: "`x = 8, y = 7`" }, { id: 1, text: "`x = 7, y = 8`" }, { id: 2, text: "`x = 8, y = 8`" }, { id: 3, text: "`x = 7, y = 7`" }],
                goodAnswer: 2
            },
            {
                id: 347,
                title: "Jaka wartość zostanie zapisana w zmiennej `b` po wykonaniu kodu w języku C++?\n\n```\ndouble x = 5.96;\nint b = (int)x;\n```",
                answers: [{ id: 0, text: "5.96" }, { id: 1, text: "6" }, { id: 2, text: "596" }, { id: 3, text: "5" }],
                goodAnswer: 3
            },
            {
                id: 348,
                title: "Do czego służy mechanizm wiązania danych (data binding) pokazany w poniższym kodzie XAML?\n\n```\n<Label Text=\"{Binding Path=Imie}\" />\n```",
                answers: [{ id: 0, text: "Do powiązania właściwości kontrolki z danymi innego obiektu" }, { id: 1, text: "Do wywoływania funkcji w odpowiedzi na zdarzenia kontrolek" }, { id: 2, text: "Do obsługi obietnic w programowaniu asynchronicznym" }, { id: 3, text: "Do łączenia i eksportowania plików z różnych modułów aplikacji" }],
                goodAnswer: 0
            },
            {
                id: 349,
                title: "Który protokół zapewnia szyfrowaną komunikację ze stroną internetową?",
                answers: [{ id: 0, text: "HTTP" }, { id: 1, text: "HTTPS" }, { id: 2, text: "SMTP" }, { id: 3, text: "FTP" }],
                goodAnswer: 1
            },
            {
                id: 350,
                title: "Który plik nagłówkowy należy dołączyć w języku C++, aby korzystać ze strumieni plikowych `ifstream` i `ofstream`?",
                answers: [{ id: 0, text: "`<string>`" }, { id: 1, text: "`<fileio.h>`" }, { id: 2, text: "`<iostream>`" }, { id: 3, text: "`<fstream>`" }],
                goodAnswer: 3
            },
            {
                id: 351,
                title: "Czym jest wskaźnik w języku C?",
                answers: [{ id: 0, text: "Zmienną przechowującą wartość logiczną" }, { id: 1, text: "Funkcją przydzielającą pamięć dynamicznie" }, { id: 2, text: "Zmienną przechowującą adres w pamięci" }, { id: 3, text: "Typem danych do przechowywania tekstu" }],
                goodAnswer: 2
            },
            {
                id: 352,
                title: "Który operator w języku Python sprawdza, czy element należy do listy?",
                answers: [{ id: 0, text: "`is`" }, { id: 1, text: "`==`" }, { id: 2, text: "`and`" }, { id: 3, text: "`in`" }],
                goodAnswer: 3
            },
            {
                id: 353,
                title: "Która funkcja w języku C dynamicznie przydziela pamięć, np. dla tablicy?",
                answers: [{ id: 0, text: "`free()`" }, { id: 1, text: "`sizeof()`" }, { id: 2, text: "`malloc()`" }, { id: 3, text: "`printf()`" }],
                goodAnswer: 2
            },
            {
                id: 354,
                title: "Jak nazywa się algorytmy stosowane do problemów, których nie da się rozwiązać dokładnie w rozsądnym czasie, np. do przewidywania pogody lub wykrywania nowych wirusów?",
                answers: [{ id: 0, text: "Rekurencyjne" }, { id: 1, text: "Heurystyczne" }, { id: 2, text: "Liniowe" }, { id: 3, text: "Iteracyjne" }],
                goodAnswer: 1
            },
            {
                id: 355,
                title: "Co zostanie wyświetlone w konsoli po wykonaniu kodu w JavaScript?\n\n```\nconsole.log(typeof [], typeof NaN);\n```",
                answers: [{ id: 0, text: "object number" }, { id: 1, text: "array undefined" }, { id: 2, text: "array number" }, { id: 3, text: "object NaN" }],
                goodAnswer: 0
            },
            {
                id: 356,
                title: "Jaką wartość otrzyma zmienna `liczba` po wykonaniu kodu w języku C++?\n\n```\nint liczba = rand() % 1000;\n```",
                answers: [{ id: 0, text: "Pseudolosową liczbę całkowitą z przedziału od 0 do 999" }, { id: 1, text: "Dowolną pseudolosową liczbę z zakresu typu int" }, { id: 2, text: "Zawsze tę samą liczbę 1000, niezależnie od ziarna generatora" }, { id: 3, text: "Pseudolosową liczbę rzeczywistą podzielną przez 1000" }],
                goodAnswer: 0
            },
            {
                id: 357,
                title: "Które narzędzie służy do emulowania urządzeń z systemem Android podczas tworzenia aplikacji?",
                answers: [{ id: 0, text: "Postman" }, { id: 1, text: "NumPy" }, { id: 2, text: "Genymotion" }, { id: 3, text: "TensorFlow" }],
                goodAnswer: 2
            },
            {
                id: 358,
                title: "Do czego służy polecenie `git merge`?",
                answers: [{ id: 0, text: "Do wycofania ostatniego commita z historii repozytorium" }, { id: 1, text: "Do scalenia zmian z innej gałęzi z bieżącą gałęzią" }, { id: 2, text: "Do utworzenia nowego repozytorium w bieżącym katalogu" }, { id: 3, text: "Do wysłania lokalnych commitów do zdalnego repozytorium" }],
                goodAnswer: 1
            },
            {
                id: 359,
                title: "Jaka cecha jest wspólna dla wszystkich kontrolek zdefiniowanych w poniższym kodzie XAML?\n\n```\n<Label Text=\"5\" BackgroundColor=\"Blue\"\n    TextColor=\"Tan\" IsVisible=\"True\" />\n<Stepper Value=\"5\" BackgroundColor=\"Blue\" />\n<Entry Placeholder=\"5\" TextColor=\"Tan\"\n    BackgroundColor=\"Blue\" />\n<Slider Value=\"5\" BackgroundColor=\"Blue\"\n    IsVisible=\"False\" />\n```",
                answers: [{ id: 0, text: "Mają ten sam kolor czcionki" }, { id: 1, text: "Mają ustawioną tę samą wartość" }, { id: 2, text: "Wszystkie są widoczne" }, { id: 3, text: "Mają tło w tym samym kolorze" }],
                goodAnswer: 3
            },
            {
                id: 360,
                title: "Czym jest zasięg (zakres) zmiennej w programowaniu?",
                answers: [{ id: 0, text: "Ilością pamięci zajmowanej przez zmienną" }, { id: 1, text: "Obszarem kodu, w którym zmienna jest dostępna" }, { id: 2, text: "Przedziałem wartości, jakie może przyjąć zmienna danego typu" }, { id: 3, text: "Czasem, przez jaki zmienna istnieje w pamięci" }],
                goodAnswer: 1
            },
            {
                id: 361,
                title: "Co wyświetli poniższy kod w języku C# (z użyciem LINQ)?\n\n```\nstring t = \"hello world\";\nvar w = string.Join(\"\", t.Split(' ')\n    .Select(s => char.ToUpper(s[0])\n        + s.Substring(1)));\nConsole.WriteLine(w);\n```",
                answers: [{ id: 0, text: "elloorld" }, { id: 1, text: "HW" }, { id: 2, text: "Hello World" }, { id: 3, text: "HelloWorld" }],
                goodAnswer: 3
            },
            {
                id: 362,
                title: "Co robi poniższa pętla w języku C++, działająca na tablicy znaków `ciag`?\n\n```\nint i = 0;\nwhile (ciag[i] != 0) {\n    if (ciag[i] > 96 && ciag[i] < 123)\n        ciag[i] = ciag[i] - 32;\n    i++;\n}\n```",
                answers: [{ id: 0, text: "Zamienia małe litery na wielkie" }, { id: 1, text: "Odejmuje 32 od kodu każdego znaku" }, { id: 2, text: "Usuwa z napisu wszystkie cyfry" }, { id: 3, text: "Zamienia wielkie litery na małe" }],
                goodAnswer: 0
            },
            {
                id: 363,
                title: "Która metoda klasy w języku Python jest wywoływana automatycznie, gdy obiekt jest usuwany?",
                answers: [{ id: 0, text: "`__init__`" }, { id: 1, text: "`__str__`" }, { id: 2, text: "`__del__`" }, { id: 3, text: "`__repr__`" }],
                goodAnswer: 2
            },
            {
                id: 364,
                title: "Jakie wartości zostaną zapisane w tablicy po wykonaniu kodu w języku Java?\n\n```\nint[] t = new int[10];\nint j = 2;\nfor (int i = 0; i < 10; i++) {\n    t[i] = j;\n    j += 2;\n}\n```",
                answers: [{ id: 0, text: "0, 2, 4, …, 18" }, { id: 1, text: "2, 2, 2, …, 2" }, { id: 2, text: "2, 4, 6, …, 20" }, { id: 3, text: "1, 2, 3, …, 10" }],
                goodAnswer: 2
            },
            {
                id: 365,
                title: "Co się stanie, gdy wyjątek zgłoszony w programie nie zostanie przechwycony przez żaden blok `catch`?",
                answers: [{ id: 0, text: "Program będzie działał dalej, pomijając błąd" }, { id: 1, text: "Program zakończy działanie z błędem" }, { id: 2, text: "Wyjątek zostanie automatycznie zapisany w bazie danych" }, { id: 3, text: "Kompilator usunie instrukcję, która zgłosiła wyjątek" }],
                goodAnswer: 1
            },
            {
                id: 366,
                title: "Która metoda tablicy w JavaScript dodaje nowy element na jej końcu?",
                answers: [{ id: 0, text: "`push()`" }, { id: 1, text: "`shift()`" }, { id: 2, text: "`unshift()`" }, { id: 3, text: "`pop()`" }],
                goodAnswer: 0
            },
            {
                id: 367,
                title: "Czym jest ESLint?",
                answers: [{ id: 0, text: "Kompilatorem nowego JavaScriptu do starszych wersji" }, { id: 1, text: "Menedżerem zależności w projektach Node.js" }, { id: 2, text: "Frameworkiem do testowania aplikacji JavaScript" }, { id: 3, text: "Narzędziem do statycznej analizy kodu JavaScript" }],
                goodAnswer: 3
            },
            {
                id: 368,
                title: "Co zostanie wyświetlone w nagłówku po wyrenderowaniu kodu `<h2>{2+2}</h2>` w React lub `<h2>{{2+2}}</h2>` w Angularze?",
                answers: [{ id: 0, text: "2+2" }, { id: 1, text: "4" }, { id: 2, text: "{2+2}" }, { id: 3, text: "{{2+2}}" }],
                goodAnswer: 1
            },
            {
                id: 369,
                title: "Czego NIE należy robić, pracując w zespole i dbając o jego skuteczność?",
                answers: [{ id: 0, text: "Brać odpowiedzialność za swoje decyzje" }, { id: 1, text: "Wykonywać zadania sumiennie i w terminie" }, { id: 2, text: "Skupiać się wyłącznie na własnych korzyściach" }, { id: 3, text: "Wspierać innych członków zespołu" }],
                goodAnswer: 2
            },
            {
                id: 370,
                title: "Gdzie w aplikacji na system Android można trwale zapisać proste ustawienia użytkownika w postaci par klucz–wartość?",
                answers: [{ id: 0, text: "W SharedPreferences" }, { id: 1, text: "Wyłącznie w pamięci RAM" }, { id: 2, text: "W pliku AndroidManifest.xml" }, { id: 3, text: "W rejestrze systemu" }],
                goodAnswer: 0
            },
            {
                id: 371,
                title: "Dlaczego poniższy kod w języku C# się nie skompiluje?\n\n```\nclass Dokument {\n    public string nazwa;\n    protected string autor;\n}\n// w metodzie Main innej klasy:\nDokument doc = new Dokument();\nConsole.WriteLine(doc.autor);\n```",
                answers: [{ id: 0, text: "Obiekt został utworzony z błędną składnią" }, { id: 1, text: "Brakuje argumentów konstruktora przy tworzeniu obiektu" }, { id: 2, text: "Klasa nie ma zdefiniowanego konstruktora" }, { id: 3, text: "Pole autor jest niedostępne poza klasą i jej potomkami" }],
                goodAnswer: 3
            },
            {
                id: 372,
                title: "Kiedy lista (np. `List` w C#) jest lepszym wyborem niż zwykła tablica?",
                answers: [{ id: 0, text: "Gdy potrzebny jest dostęp do elementu przez indeks" }, { id: 1, text: "Gdy liczba elementów nigdy się nie zmienia" }, { id: 2, text: "Gdy liczba elementów zmienia się w trakcie działania programu" }, { id: 3, text: "Gdy rozmiar kolekcji jest znany przed kompilacją" }],
                goodAnswer: 2
            },
            {
                id: 373,
                title: "Czym jest ransomware?",
                answers: [{ id: 0, text: "Oprogramowaniem, które wyświetla użytkownikowi niechciane reklamy w przeglądarce" }, { id: 1, text: "Oprogramowaniem blokującym dostęp do danych w celu wymuszenia okupu" }, { id: 2, text: "Programem zbierającym dane użytkownika bez jego zgody" }, { id: 3, text: "Programem wykorzystywanym do przeprowadzania ataków DDoS" }],
                goodAnswer: 1
            },
            {
                id: 374,
                title: "Czym jest WebAssembly (WASM)?",
                answers: [{ id: 0, text: "Binarnym formatem kodu wykonywanym przez współczesne przeglądarki" }, { id: 1, text: "Metodą łączenia kodu JavaScript z arkuszami stylów CSS" }, { id: 2, text: "Frameworkiem JavaScript do tworzenia aplikacji mobilnych" }, { id: 3, text: "Narzędziem do automatycznego testowania aplikacji webowych" }],
                goodAnswer: 0
            },
            {
                id: 375,
                title: "Jaki jest wynik bitowej operacji AND na liczbach binarnych 1010 i 1100?",
                answers: [{ id: 0, text: "0110" }, { id: 1, text: "1010" }, { id: 2, text: "1110" }, { id: 3, text: "1000" }],
                goodAnswer: 3
            },
            {
                id: 376,
                title: "Jakie elementy może przechowywać kolekcja zadeklarowana w języku C#?\n\n```\nList<int> wykaz = new List<int>();\n```",
                answers: [{ id: 0, text: "Liczby całkowite" }, { id: 1, text: "Elementy dowolnego typu" }, { id: 2, text: "Obiekty typu List" }, { id: 3, text: "Liczby rzeczywiste" }],
                goodAnswer: 0
            },
            {
                id: 377,
                title: "Dlaczego poniższy program w języku C++ wyświetla 0, a nie 50?\n\n```\nint oblicz(int x) {\n    x = x + 50;\n    return x;\n}\nint main() {\n    int x = 0;\n    oblicz(x);\n    cout << x;\n}\n```",
                answers: [{ id: 0, text: "Funkcja nie powinna zwracać żadnej wartości" }, { id: 1, text: "Zmienna x powinna mieć wartość początkową 1" }, { id: 2, text: "Argument został przekazany przez wartość, a nie przez referencję" }, { id: 3, text: "Działanie wewnątrz funkcji jest zapisane niepoprawnie" }],
                goodAnswer: 2
            },
            {
                id: 378,
                title: "Który element interfejsu aplikacji mobilnej służy do nawigacji między ekranami za pomocą wysuwanego bocznego menu?",
                answers: [{ id: 0, text: "ProgressBar" }, { id: 1, text: "Snackbar" }, { id: 2, text: "ListView" }, { id: 3, text: "Navigation Drawer" }],
                goodAnswer: 3
            },
            {
                id: 379,
                title: "Jaka liczba zostanie wyświetlona po wykonaniu kodu w języku C++?\n\n```\nint a = 0x73;\ncout << a;\n```",
                answers: [{ id: 0, text: "0" }, { id: 1, text: "115" }, { id: 2, text: "73" }, { id: 3, text: "108" }],
                goodAnswer: 1
            },
            {
                id: 380,
                title: "W jakiej sytuacji kompilator języka Java zgłosi błąd \"incompatible types\"?",
                answers: [{ id: 0, text: "Gdy do zmiennej typu int przypisuje się napis" }, { id: 1, text: "Gdy do zmiennej typu int przypisuje się liczbę 243" }, { id: 2, text: "Gdy wynik metody typu void nie zostanie nigdzie przypisany" }, { id: 3, text: "Gdy w kodzie jest nieużywana zmienna lokalna" }],
                goodAnswer: 0
            },
            {
                id: 381,
                title: "Jakie jest zadanie kontrolera we wzorcu MVC?",
                answers: [{ id: 0, text: "Szyfrowanie danych przesyłanych do bazy" }, { id: 1, text: "Przyjmowanie działań użytkownika i aktualizowanie modelu oraz widoku" }, { id: 2, text: "Przechowywanie danych aplikacji i reguł ich zapisywania w bazie danych" }, { id: 3, text: "Prezentowanie danych użytkownikowi na ekranie" }],
                goodAnswer: 1
            },
            {
                id: 382,
                title: "Klient mówi: „Potrzebuję aplikacji, która działa szybko, niezależnie od tego, czy korzysta z niej kilku, czy tysiąc użytkowników”. Która odpowiedź jest parafrazą, czyli techniką aktywnego słuchania?",
                answers: [{ id: 0, text: "Wyczuwam niepewność. Czy mogę zadać kilka pytań?" }, { id: 1, text: "Ilu dokładnie użytkowników będzie z niej korzystać?" }, { id: 2, text: "Dlaczego szuka Pani właśnie takiej aplikacji?" }, { id: 3, text: "Jeśli dobrze rozumiem, chodzi o aplikację, która dobrze się skaluje" }],
                goodAnswer: 3
            },
            {
                id: 383,
                title: "Jak nazywa się złośliwe oprogramowanie, które działa w tle i rejestruje naciśnięcia klawiszy, np. wpisywane hasła?",
                answers: [{ id: 0, text: "Rootkit" }, { id: 1, text: "Ransomware" }, { id: 2, text: "Keylogger" }, { id: 3, text: "Adware" }],
                goodAnswer: 2
            },
            {
                id: 384,
                title: "Na czym polega model prototypowy wytwarzania oprogramowania?",
                answers: [{ id: 0, text: "Na wykonaniu pełnej wersji produktu przed rozpoczęciem testów" }, { id: 1, text: "Na budowie uproszczonej wersji systemu, aby zebrać opinie użytkownika" }, { id: 2, text: "Na dostarczaniu produktu w krótkich, powtarzalnych sprintach" }, { id: 3, text: "Na szczegółowym zaplanowaniu wszystkich etapów przed realizacją" }],
                goodAnswer: 1
            },
            {
                id: 385,
                title: "Ile zmiennych poszczególnych typów zadeklarowano w poniższym kodzie w języku Java?\n\n```\nString imie = \"Anna\";\nshort wiek = 12;\nint i = 0;\nchar plec = 'K';\nboolean uczen = true;\n```",
                answers: [{ id: 0, text: "Jedną tekstową, jedną rzeczywistą, jedną całkowitą, znakową i logiczną" }, { id: 1, text: "Dwie tekstowe, dwie całkowite i jedną logiczną" }, { id: 2, text: "Jedną tekstową, trzy całkowite i jedną logiczną" }, { id: 3, text: "Jedną tekstową, dwie całkowite, jedną znakową i jedną logiczną" }],
                goodAnswer: 3
            },
            {
                id: 386,
                title: "Dla jakich danych sortowanie bąbelkowe (rosnąco), przerywane po przebiegu bez żadnej zamiany, działa najszybciej?",
                answers: [{ id: 0, text: "Dla tablicy z losowymi wartościami" }, { id: 1, text: "Dla tablicy posortowanej malejąco" }, { id: 2, text: "Dla tablicy już posortowanej rosnąco" }, { id: 3, text: "Dla tablicy z wieloma powtórzeniami" }],
                goodAnswer: 2
            },
            {
                id: 387,
                title: "Czym jest GraphQL?",
                answers: [{ id: 0, text: "Językiem zapytań do API wraz ze środowiskiem ich wykonywania" }, { id: 1, text: "Formatem zapisu danych podobnym do JSON, używanym w plikach konfiguracyjnych" }, { id: 2, text: "Systemem zarządzania grafowymi bazami danych" }, { id: 3, text: "Biblioteką do rysowania wykresów i diagramów" }],
                goodAnswer: 0
            },
            {
                id: 388,
                title: "Czym jest pętla zdarzeń (event loop) w JavaScript?",
                answers: [{ id: 0, text: "Pętlą, która co sekundę odświeża całą zawartość strony WWW" }, { id: 1, text: "Techniką obsługi zdarzeń dostępną wyłącznie w komponentach biblioteki React" }, { id: 2, text: "Protokołem komunikacji między modułami aplikacji webowej" }, { id: 3, text: "Mechanizmem, który pozwala wykonywać kod asynchronicznie w jednym wątku" }],
                goodAnswer: 3
            },
            {
                id: 389,
                title: "Co zostanie wyświetlone w konsoli po wykonaniu kodu w JavaScript?\n\n```\nconst [a, , b] = [1, 2, 3];\nconst { x, y = 5 } = { x: 10 };\nconsole.log(a, b, x, y);\n```",
                answers: [{ id: 0, text: "1 3 10 5" }, { id: 1, text: "1 3 10 undefined" }, { id: 2, text: "1 2 10 5" }, { id: 3, text: "SyntaxError" }],
                goodAnswer: 0
            },
            {
                id: 390,
                title: "Na czym polega wyszukiwanie liniowe z wartownikiem?",
                answers: [{ id: 0, text: "Na wcześniejszym posortowaniu zbioru danych wejściowych" }, { id: 1, text: "Na dzieleniu zbioru na połowy w każdym kroku" }, { id: 2, text: "Na dopisaniu szukanej wartości na końcu zbioru, by uprościć warunek pętli" }, { id: 3, text: "Na przeszukiwaniu zbioru jednocześnie od początku i od końca w dwóch pętlach" }],
                goodAnswer: 2
            },
            {
                id: 391,
                title: "Jaką wartość pokaże etykieta `label` po wykonaniu kodu w języku C#?\n\n```\nint tmp = 0;\nfor (int i = 0; i <= 100; i += 2)\n    tmp += i;\nlabel.Content = tmp;\n```",
                answers: [{ id: 0, text: "5050" }, { id: 1, text: "2550" }, { id: 2, text: "2500" }, { id: 3, text: "51" }],
                goodAnswer: 1
            },
            {
                id: 392,
                title: "Co oznacza niezmienność (immutability) obiektu?",
                answers: [{ id: 0, text: "Stanu obiektu nie można zmienić po jego utworzeniu" }, { id: 1, text: "Obiekt można przypisać do zmiennej jak funkcję" }, { id: 2, text: "Obiekt jest automatycznie usuwany z pamięci po użyciu" }, { id: 3, text: "Metody obiektu mogą działać równolegle w wielu wątkach" }],
                goodAnswer: 0
            },
            {
                id: 393,
                title: "Do czego służy operator `|` w języku C++?",
                answers: [{ id: 0, text: "Do logicznej alternatywy (OR)" }, { id: 1, text: "Do bitowej alternatywy (OR)" }, { id: 2, text: "Do bitowej różnicy symetrycznej (XOR)" }, { id: 3, text: "Do przesunięcia bitów w prawo" }],
                goodAnswer: 1
            },
            {
                id: 394,
                title: "Co wyświetli poniższy kod w języku Java?\n\n```\nString a = \"hello\";\nString b = \"hello\";\nString c = new String(\"hello\");\nSystem.out.println(a == b);\nSystem.out.println(a == c);\nSystem.out.println(a.equals(c));\n```",
                answers: [{ id: 0, text: "true, false, false" }, { id: 1, text: "false, false, true" }, { id: 2, text: "true, true, true" }, { id: 3, text: "true, false, true" }],
                goodAnswer: 3
            },
            {
                id: 395,
                title: "Co charakteryzuje szyfrowanie symetryczne?",
                answers: [{ id: 0, text: "Można nim szyfrować wyłącznie pliki tekstowe" }, { id: 1, text: "Szyfruje dane bez użycia jakiegokolwiek klucza" }, { id: 2, text: "Do szyfrowania i odszyfrowania używa się tego samego klucza" }, { id: 3, text: "Do szyfrowania i odszyfrowania używa się dwóch różnych kluczy" }],
                goodAnswer: 2
            },
            {
                id: 396,
                title: "Jaka będzie wartość zmiennej `wynik` po wykonaniu kodu w JavaScript?\n\n```\nconst items = [\n    { name: \"phone\", price: 500 },\n    { name: \"laptop\", price: 1000 },\n    { name: \"tablet\", price: 750 }\n];\nconst wynik = items\n    .filter(i => i.price > 600)\n    .map(i => i.name);\n```",
                answers: [{ id: 0, text: "`[\"laptop\", \"tablet\", \"phone\"]`" }, { id: 1, text: "`[1000, 750]`" }, { id: 2, text: "`[\"laptop\", \"tablet\"]`" }, { id: 3, text: "`[\"phone\"]`" }],
                goodAnswer: 2
            },
            {
                id: 397,
                title: "Zasada SMART opisuje dobrze sformułowany cel jako specyficzny, mierzalny, ambitny, realny i terminowy. Która cecha oznacza, że osiągnięcie celu wymaga wysiłku i jest wyzwaniem?",
                answers: [{ id: 0, text: "Specyficzny" }, { id: 1, text: "Mierzalny" }, { id: 2, text: "Terminowy" }, { id: 3, text: "Ambitny" }],
                goodAnswer: 3
            },
            {
                id: 398,
                title: "Liczba szesnastkowa A4 zapisana w systemie dwójkowym to:",
                answers: [{ id: 0, text: "10100010" }, { id: 1, text: "10100100" }, { id: 2, text: "1011100" }, { id: 3, text: "1010100" }],
                goodAnswer: 1
            },
            {
                id: 399,
                title: "Kolor ma zapis szesnastkowy #AA41FF. Jakie są dziesiętne wartości jego składowych R, G i B?",
                answers: [{ id: 0, text: "170, 65, 255" }, { id: 1, text: "170, 64, 255" }, { id: 2, text: "160, 64, 255" }, { id: 3, text: "160, 65, 255" }],
                goodAnswer: 0
            }
        ],
        available: true
    }
]

export default data