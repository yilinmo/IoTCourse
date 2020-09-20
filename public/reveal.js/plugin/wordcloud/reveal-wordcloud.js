
var wordcloudData = [];

//load wordcloud2
(function () {
	let wc2 = document.createElement('script');
	wc2.type = 'text/javascript';
	wc2.src = 'reveal.js/plugin/wordcloud/wordcloud2/src/wordcloud2.js';
	// wc2.onload = activateWC;
	document.getElementsByTagName('head')[0].appendChild(wc2);
})();

Reveal.addEventListener( 'slidechanged', maybeDrawWordclouds);

function maybeDrawWordclouds(event) {
	let wordclouds = event.currentSlide.querySelectorAll('[wordcloud]');
	wordclouds.forEach(cloud => {
		if (!(cloud.getAttribute("wc-number") & cloud.getAttribute("wordcloud-activate") == "once"))
			activateWC(cloud);
	});
}

function activateWC(cloud) {

	let settings = cloud.getAttribute('wordcloud');

	if (settings.length > 0) {
		settings = JSON.parse(settings);
	}

	let words = getWords(cloud);
	cloud.innerHTML = '';

	// workaround: Scaling and placement gets confused because of
	// the global scaling on .reveal div.slides. If we temporarily
	// disable this scaling, it all works out. We don’t see any
	// jump in scaling the visible "placing" (that can take time
	// with wait) is probably done after all calculations
	let wrapper = document.querySelectorAll('.reveal div.slides')[0];
	let oldtrans = wrapper.style.transform;

	wrapper.style.transform = "";

	WordCloud(cloud,
			  {
				  list: words,
				  shrinkToFit: true,
				  shape: 'square',
				  weightFactor: 5,
				  gridSize: 25,
				  wait: 30,
				  backgroundColor: '',
				  ...settings
			  } );

	wrapper.style.transform = oldtrans;

};


function getWords(cloud) {
	if (number = cloud.getAttribute('wc-number')) {
		return wordcloudData[number]; // if this fails, something is wrong
	} else {
		let someWeights = 0;
		let text = cloud.innerHTML;
		let words = text.split(/\n/).filter(item => {
			return item.trim() !== ''; //remove empty lines
		})
			.map(item => {
				let words = item.trim().split(/ /);
				let count = parseFloat(words[0]);
				if (count) {
					words.shift();
					someWeights++;
				} else {
					count = 1;
				}
				return([words.join(' '), count]);
			});

		if (someWeights == 0) { //randomize weights
			words = words.map(word => [word[0], Math.random() * 15 + 5]);
		}

		cloud.setAttribute('wc-number', wordcloudData.push(words) - 1);
		return words;
	}
}
