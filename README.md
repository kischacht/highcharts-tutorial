#Einführung in Highcharts

Highcharts ist eine praktische Javascript-Bibliothek, mit der sich relativ einfach interaktive Grafiken erstellen lassen, die stark indi

Dieses repository enthält:

* *README.md*: Der Text, den ihr gerade lest. Führt euch durch das Tutorial.
* *application.js*: Die Datei, in der ihr eure eigene Grafik bauen könnt.
* *application_finished.js*: Die fertige Grafik zum Vergleich. Aber nicht schummeln, außer im Notfall!
* *data.csv*: Der Beispieldatensatz, den wir für diese Übung verwenden
* *index.html*: Enthält die Grundstruktur der Website, auf der ihr eure Highcharts-Grafik einbindet.

Dieses Tutorial erklärt die Grundlagen von Highcharts. Es gibt aber noch viel mehr zu entdecken. Zögert also nicht, eure Grafiken anzupassen, wie ihr wollt, andere Daten zu verwenden oder zusätzliche Inhalte in eurer index.html hinzuzufügen.

##Die Leinwand: Grundstruktur einer Website

Bevor wir mit den interaktiven Grafiken loslegen, brauchen wir erstmal eine Leinwand, auf der wir sie basteln können: Die Website, auf der die Grafik eingebunden wird.

Websites bestehen vor allem aus drei Komponenten:

* HTML: *HyperText Markup Language*. Bestimmt die grundlegende Struktur von Websites.
* CSS: *Cascading Style Sheets*. Bestimmt das Aussehen von Grafiken
* JavaScript: Scriptsprache, die das Verhalten von Websites bestimmt – also alles, was interaktiv ist. CSS oder HTML können ebenfalls über JavaScript manipuliert werden. Auch Highcharts-Grafiken werden in JavaScript gecoded.

All diese Komponenten laufen zusammen in der *index.html* Datei. Ihre grundlegende Struktur sieht so aus:

````html
<!doctype HTML>
<html>
  <head>

  </head>
  <body>

  </body>
</html>
````

Die Worte in den spitzen Klammern sind *Tags*. Sie beschreiben die Art des Elements, was zwischen dem jeweiligen *<start tag>* und dem *</end tag>* steht.
Im `<head>` des HTML-Dokumentes können Meta-Informationen vermerkt und externe Ressourcen eingebunden werden. Er produziert aber keinen sichtbaren Inhalt auf der Seite. Der wird im `<body>` hinzugefügt.

Der Code oben ist im Prinzip schon eine fertige Website. Sie hat im jetzigen Zustand allerdings noch keinen Inhalt. Das wollen wir im nächsten Schritt ändern.

Damit die Funktionen von Highcharts überhaupt verwendet werden können, muss die entsprechende Bibliothek erst eingebunden werden. Dazu fügen wir folgende Zeilen hinzu, zum Beispiel im `<head>`:

````html
<script src='http://code.jquery.com/jquery-1.9.1.min.js' type='text/javascript'></script>
<script src='http://code.highcharts.com/highcharts.js' type='text/javascript'></script>
<script src='http://code.highcharts.com/modules/exporting.src.js' type='text/javascript'></script>
<script type='text/javascript' src="application.js"></script>
````
Die ersten drei sind URLs, die auf die Highcharts-Bibliothek und ihre Dependencies verweisen. Das letzte ist dann die lokale Script-Datei, in der wir unsere ganz eigene Highcharts-Grafik basteln. Wichtig ist, dass diese Datei als letztes geladen wird, denn sonst werden die Funktionen aus der Bibliothek nicht erkannt, die wir jetzt für unsere Grafik verwenden wollen.

Im `<body>` der *index.html* muss nun noch eine Zeile eingefügt werden:

````html
<div id = 'container'></div>
````

Dieses `<div>`-Element dient als Platzhalter, an den später die Grafik gebunden wird.


##Die Grafik: Highcharts in Action

Einer der großen Vorteile von Highcharts ist, dass es sehr gut dokumentiert ist. Hier ein paar nützliche Links dazu:

* [Highcharts Documentation](http://www.highcharts.com/docs): Einführung in den Aufbau von Highcharts Grafiken
* [Highcharts Demos](http://www.highcharts.com/demo/): Beispiele mit nützlichen JSFiddles
* [Highcharts API Reference](http://api.highcharts.com/highcharts): Ausführliche Dokumentation aller Optionen mit Beispielen

Unsere Grafik wollen wir in die Datei application.js schreiben.
Sie enthält bereits ein Grundgerüst, aber der Inhalt fehlt.

Highcharts-Grafiken können an ein Element auf der Website gebunden werden. Dort werden sie dann angezeigt. In diesem Fall ist es das `<div>` mit der id "container", Das wir eben in der *index.html* eingefügt haben. Die id kann natürlich auch anders lauten; Hauptsache, sie ist die gleiche, die in *application.js* auch verwendet wird.
Es gibt mehrere Methoden, wie man die Grafik an dieses div hängen kann. Wir machen es mit diesem jQuery-Code:

````javascript
$(function () {
    $('#container').highcharts({

    });
});
````

Innerhalb dieser Funktion können wir unsere Grafik bauen, wie wir wollen. Highcharts tut das über ein JSON-Objekt mit verschiedenen Komponenten, die das Aussehen und das Verhalten der Grafik steuern: Die Datenreihen, die Achsen, das Tooltip, die Legende, die Zoom-Einstellungen und vieles mehr. Das macht die Arbeit recht übersichtlich. Gehen wir die grundlegenden Elemente einmal durch:

###series

Ohne Daten funktioniert keine Grafik. Über das Element `series` können Datenreihen eingelesen werden.

````javascript
series: {
	name: 'Niederschlag',
	type: 'column',
	data: [42.4, 33.2, 34.5, 39.7, 52.6, 75.5, 57.4, 60.4, 47.6, 39.1, 46.8, 51.1],
}
````

Die Attribute sind relativ selbsterklärend: `name` weist der Datenreihe eine Beschriftung zu, `type` bestimmt die Art der Visualisierung (hier zum Beispiel ein Balkendiagramm) und `data` lädt die eigentlichen Daten. Das können Arrays mit einem Datenvektor sein, wie hier, oder auch komplexere Arrays oder JSON-Objekte. Sie können, wie hier, explizit in den Code geschrieben werden, aber auch vorher als Variable deklariert werden und/oder aus externen Dateien wie CSVs oder Google Spreadsheets geladen werden.

Sobald die Daten geladen und der `type` festgelegt ist, kann Highcharts bereits eine Grafik darstellen. Alle anderen Elemente sind dazu da, das Aussehen und das Verhalten dieser Grafik so anzupassen, wie ihr es euch vorstellt. So lassen sich etwa die Achsen verändern.

###xAxis und yAxis

Die Daten in unserem Beispiel sind Monatsdurchschnitte. Also liegt es ja nahe, die x-Achse auch mit Monaten zu beschriften. Das lässt sich im Element `xAxis` über das Attribut `categories`tun.

````javascript
xAxis: {
	categories: ['Januar', 'Februar', 'März', 'April', 'Mai', 'Juni',
             'Juli', 'August', 'September', 'Oktober', 'November', 'Dezember'],
	crosshair: true
}
````

`crosshair` ist ein nützliches kleines Attribut. Es sorgt dafür, dass der Datenpunkt, über dem man mit dem Cursor hovert, farblich hinterlegt wird.

````javascript
yAxis: {
	labels: {
		format: '{value}°C',
        },
        title: {
                text: 'Temperatur',
                style: {
                      color: 'black',
                }
        }
}
````

Sowohl für die x- als auch für die y-Achse gibt es noch viele weitere Einstellungen. Über `title` etwa lässt sich die Achsenbeschriftung und sogar deren CSS-style anpassen, über `labels.format` lässt sich eine Maßeinheit definieren.

###Weitere

In der [Highcharts API Reference](http://api.highcharts.com/highcharts), die weiter oben bereits verlinkt wurde, findet ihr eine ausführliche Übersicht über alle möglichen Attribute. In diesem Tutorial können wir noch eine Grafikbeschriftung mit `title` und `subtitle` hinzufügen, die Legende (`legend`) und das Tooltip (`tooltip`) anpassen sowie den Zoom-Typ im `chart` Element einstellen, dass allgemeine Standardeinstellungen für die Grafik festlegt. Kopiert einfach das entsprechende Element aus dem auskommentierten Abschnitt in *application.js* an die entsprechende Stelle im Code und seht nach, was passiert. Was geschieht, wenn ihr einzelne Zeilen auskommentiert? Oder neue hinzufügt? Probiert es aus!

