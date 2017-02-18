#Einführung in Highcharts

Einleitungssatz blablub.

##Die Leinwand: Grundstruktur einer Website

Bevor wir mit den interaktiven Grafiken loslegen, brauchen wir erstmal eine Leinwand, auf der wir sie basteln können: Die Website, auf der die Grafik eingebunden wird.

Websites bestehen meist vor allem aus drei Komponenten:

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

Die ersten drei sind URLs, die auf die Highcharts-Bibliothek und ihre Dependencies verweisen. Das letzte ist dann die Datei, in der wir unsere ganz eigene Highcharts-Grafik basteln. Die wollen wir nun auch befüllen.

## Die Grafik: Highcharts in Action


