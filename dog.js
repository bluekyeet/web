<script src=
"https://ajax.googleapis.com/ajax/libs/jquery/1.12.0/jquery.min.js">
</script>
<script>
	(function() {
	var detector = function() {
		setTimeout(function() {
			if(!document.getElementsByClassName) return;
			var ads =
			document.getElementsByClassName('banner_ad'),
			ad = ads[ads.length - 1];

			if(!ad || ad.innerHTML.length == 0 
			|| ad.clientHeight === 0) {
				console.log('Ad Blocker Detected');
				location.reload();
			} else {
				console.log('No Ad Blocker');
			}
		}, 2000);
	}
	/* Add a page load listener */
	if(window.addEventListener) {
		window.addEventListener('load', detector, false);
	}
	})();
</script>
