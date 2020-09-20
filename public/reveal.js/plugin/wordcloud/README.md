# reveal-wordcloud
A plugin for [reveal.js](https://github.com/hakimel/reveal.js) using [wordcloud2.js](https://github.com/timdream/wordcloud2.js) for beautiful wordclouds in your slides.

## Setup
Clone the repository (or download + download wordcloud2) and place in reveal plugin folder.
Include the plugin in your reveal.js configuration under dependencies:
```js
dependencies:
 [
  // ...
  { src: 'plugin/wordcloud/reveal-wordcloud.js',
    condition: function() { return !!document.querySelector( '[wordcloud]' ); } },
  // ...
 ]
```

## Usage

Add an element to contain the wordcloud (with attribute `wordcloud`) to a slide and add the words and weights as below:
```html
<section>
<h2>Slide with wordcloud</h2>
<p class="stretch" wordcloud>
30 Les Misérables
20 Victor Hugo
15 Jean Valjean
15 Javert
15 Fantine
15 Cosette
12 Éponine
12 Marius
12 Enjolras
10 Thénardiers
10 Gavroche
10 Bishop Myriel
10 Patron-Minette
10 God
8 ABC Café
8 Paris
8 Digne
8 Elephant of the Bastille
5 silverware
5 Bagne of Toulon
5 loaf of bread
5 Rue Plumet
5 revolution
5 barricade
4 sewers
4 Fex urbis lex orbis
</p>
</section>
```
It is also possible to leave out weights, they will then get randomized (between 5 and 20).

It is important that your element gets a good width and height for the wordcloud to fill up. One way is to use the [stretch class from reveal.js](https://github.com/hakimel/reveal.js#stretching-elements).

## Configuration

Configuration options as per [wordcloud 2 config options](https://github.com/timdream/wordcloud2.js/blob/gh-pages/API.md#option) can be added JSON-encoded to the wordcloud attribute.
For example:
```html
<p class="stretch"  wordcloud='{"weightFactor": 12, "fontFamily": "Fivo Sans Modern, sans-serif", "wait": 70, "shuffle": false, "drawOutOfBound": false}'>
30 Les Misérables
20 Victor Hugo
…

```

reveal-wordcloud defines some default options differently to the defaults in wordcloud2.js. These usually give a good result for presentations:
```js
shrinkToFit: true,
shape: 'square',
weightFactor: 5,
gridSize: 25,
wait: 30,
backgroundColor: ''
```

Experimentation with `weightFactor` and `gridSize` is often neccessary for best results, depending on the specific words and weights.

Wordclouds are by default drawn each time a slide is reached (with the default `wait` of 30ms this is seen as a fast animation).
If for some reason you navigate back and forward between slides and only want the wordcloud to be drawn on the first activation, add `wordcloud-activate="once"` to the wordcloud element.

## Caveats
Providing the options in JSON format means there is no way to add custom functions for `weight`, `color` etc. I’m looking for good solutions for this...
