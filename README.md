#Einführung in Highcharts

Einleitungssatz blablub. Kurze Erklärung was Highcharts ist.

Dieses repository enthält:

* README.md: Der Text, den ihr gerade lest. Führt euch durch das Tutorial.
* application.js: Die Datei, in der ihr eure eigene Grafik bauen könnt.
* application_finished.js: Die fertige Grafik zum Vergleich. Aber nicht schummeln, außer im Notfall!
* data.csv: Der Beispieldatensatz, den wir für diese Übung verwenden
* index.html: Enthält die Grundstruktur der Website, auf der ihr eure Highcharts-Grafik einbindet.

Dieses Tutorial erklärt die Grundlagen von Highcharts. Es gibt aber noch viel mehr zu entdecken. Zögert also nicht, eure Grafiken anzupassen, wie ihr wollt, andere Daten zu verwenden oder zusätzliche Inhalte in eurer index.html hinzuzufügen.

##Die Leinwand: Grundstruktur einer Website

Bevor wir mit den interaktiven Grafiken loslegen, brauchen wir erstmal eine Leinwand, auf der wir sie basteln können: Die Website, auf der die Grafik eingebunden wird.

Websites bestehen vor allem aus drei Komponenten:

* HTML: xx erklärung in einem Satz, was das ist
* CSS: xx
* JavaScript: xx. Auch Highcharts-Grafiken werden in JavaScript gecoded.

All diese Komponenten laufen zusammen in der index.html Datei. Ihre grundlegende Struktur sieht so aus:

````html
<!doctype HTML>
<html>
  <head>
    ...
  </head>
  <body>
    ...
  </body>
</html>
````

xx Erklärung, was das ist.
Das ist im Prinzip schon eine fertige Website. Sie hat im jetzigen Zustand allerdings noch keinen Inhalt. Das wollen wir ändern.

Um es übersichtlich zu halten, schreiben wir in diesem Fall den JavaScript Code nicht direkt in die index.html, sondern in eine eigene .js-Datei.

Die folgenden Zeilen müssen in der index.html vermerkt werden, damit alle Ressourcen eingebunden werden:

````html
<script src='http://code.jquery.com/jquery-1.9.1.min.js' type='text/javascript'></script>
<script src='http://code.highcharts.com/highcharts.js' type='text/javascript'></script>
<script src='http://code.highcharts.com/modules/exporting.src.js' type='text/javascript'></script>
<script type='text/javascript' src="application.js"></script>
````
Die ersten drei sind URLs, die auf die Highcharts-Bibliothek und ihre Dependencies verweisen. Das letzte ist dann die Datei, in der wir unsere ganz eigene Highcharts-Grafik basteln. Wichtig ist, dass diese Datei als letztes geladen wird, denn sonst werden die Funktionen aus der Bibliothek nicht erkannt, die wir jetzt für unsere Grafik verwenden wollen.

## Die Grafik: Highcharts in Action

Einer der großen Vorteile von Highcharts ist, dass es sehr gut dokumentiert ist. Hier ein paar nützliche Links, for future reference:

* [Highcharts Documentation](http://www.highcharts.com/docs): Einführung in den Aufbau von Highcharts Grafiken
* [Highcharts Demos](http://www.highcharts.com/demo/): Beispiele mit nützlichen JSFiddles
* [Highcharts API Reference](): Ausführliche Dokumentation aller Optionen mit Beispielen

Unsere Grafik wollen wir in die Datei application.js schreiben.
Sie enthält bereits ein Grundgerüst, aber der Inhalt fehlt.

Highcharts-Grafiken können an ein Element auf der Website gebunden werden. Dort werden sie dann angezeigt. In diesem Fall ist es ein <div> mit der id "container", wie in der index.html vermerkt.
Es gibt mehrere Methoden, wie man die Grafik an dieses div hängen kann. Wir machen es mit diesem jQuery-Code:

````javascript
$(function () {
    $('#container').highcharts({

    });
});
````

Innerhalb dieser Funktion können wir unsere Grafik bauen, wie wir wollen. Highcharts tut das über ein JSON-Objekt mit verschiedenen Komponenten, die das Aussehen und das Verhalten der Grafik steuern: Die Datenreihen, die Achsen, das Tooltip, die Legende, die Zoom-Einstellungen und vieles mehr. Das macht die Arbeit recht übersichtlich. Gehen wir die grundlegenden Elemente einmal durch:

###series

Das 


