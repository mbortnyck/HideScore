var style = document.createElement('link');
style.rel = 'stylesheet';
style.type = 'text/css';
switch (window.location.hostname) {
	case "www.avclub.com":
		style.href = chrome.extension.getURL('styles/avclub.css');
		break;
	case "www.gamespot.com":
		style.href = chrome.extension.getURL('styles/gamespot.css');
		break;
	case "www.ign.com":
		style.href = chrome.extension.getURL('styles/ign.css');
		break;
	case "www.nme.com":
		style.href = chrome.extension.getURL('styles/nme.css');
		break;
	case "pitchfork.com":
		style.href = chrome.extension.getURL('styles/pitchfork.css');
		break;
	case "www.residentadvisor.net":
		if (window.location.pathname == "/reviews.aspx") {
			style.href = chrome.extension.getURL('styles/residentadvisor_reviews.css');
		}
		else {
			style.href = chrome.extension.getURL('styles/residentadvisor.css');
		}
		break;
	case "www.rollingstone.com":
		style.href = chrome.extension.getURL('styles/rollingstone.css');
		break;
	case "www.xlr8r.com":
		style.href = chrome.extension.getURL('styles/xlr8r.css');
		break;
}
(document.head||document.documentElement).appendChild(style);