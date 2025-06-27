document.addEventListener('DOMContentLoaded', function () {
	const searchForms = document.querySelectorAll('.search-form');

	const pathname = window.location.pathname.split('/')[1];
	if (pathname.length === 2) {
		document.querySelector('.logoLink').href = `/${pathname}/`;
		document.querySelector('.footLogo').href = `/${pathname}/`;
	}

	// Iterate over each form and attach the submit event listener
	searchForms.forEach((form) => {
		form.addEventListener('submit', (event) => {
			event.preventDefault(); // Prevent the default form s
			// ubmission behavior

			// Find the input within the current form
			const input = form.querySelector('input[type="text"]');
			if (!input) {
				console.error('Search input field not found within the form.');
				return;
			}

			// Retrieve and trim the input value
			const query = input.value.trim();

			// Check if the input is not empty
			if (query) {
				// Encode the query to make it URL-safe
				const encodedQuery = encodeURIComponent(query);

				// if the first location.href.pathname has two digits, for example /en/ then add it to search url
				if (pathname.length === 2) {
					window.location.href = `/${pathname}/search/?q=${encodedQuery}`;
					return;
				}

				// Redirect the user to the search results page with the query parameter
				window.location.href = `/search/?q=${encodedQuery}`;
			} else {
				// Optionally, you can handle empty queries here
				alert('Por favor, introduce un término de búsqueda válido.');
			}
		});
	});

	// Optional: Handle cases where forms might not have been found
	if (searchForms.length === 0) {
		console.warn('No search forms found with the class "search-form".');
	}
});

var linkParams = '';
var width = window.innerWidth || document.documentElement.clientWidth;
var isMobile = false;
var isTablet = false;
var isPc = false;

if (width < 768) {
	isMobile = true;
} else if (width >= 768 && width < 1201) {
	isTablet = true;
} else {
	isPc = true;
}

function smoothScroll(event, targetId) {
	event.preventDefault();
	const targetElement = document.getElementById(targetId);
	if (targetElement) {
		var offsetPosition = 0;
		if (isPc) {
			offsetPosition = targetElement.offsetTop;
		} else {
			offsetPosition = targetElement.offsetTop - 50;
		}
		window.scrollTo({
			top: offsetPosition,
			behavior: 'smooth',
		});
	}
}

document.addEventListener('scroll', function () {
	var links = document.querySelectorAll('.contentsLink');
	var scrollPos = window.scrollY;

	links.forEach((link) => {
		var targetId = link.getAttribute('href').substring(1);
		var targetSection = document.getElementById(targetId);

		if (targetSection) {
			if (
				targetSection.offsetTop <= scrollPos &&
				targetSection.offsetTop + targetSection.offsetHeight > scrollPos
			) {
				links.forEach((l) => l.parentElement.classList.remove('active'));

				link.parentElement.classList.add('active');
			}
		}
	});

	if (links[0] && window.scrollY <= links[0].offsetTop) {
		links.forEach((link) => link.parentElement.classList.remove('active'));
	}
});

var body = document.getElementsByTagName('body')[0];
var menuWrap = document.getElementsByClassName('menuWrap')[0];
var menuMask = document.getElementsByClassName('menuMask')[0];
function showSearch() {
	menuWrap.style.top = '0px';
	menuMask.style.display = 'block';
	body.style.overflow = 'hidden';
}
function closeSearch() {
	menuWrap.style.top = '-100%';
	menuMask.style.display = 'none';
	body.style.overflow = 'scroll';
}

function getQueryValue(name) {
	const queryStr = window.location.search.substring(1);

	const vars = queryStr.split('&');
	for (let i = 0; i < vars.length; i++) {
		let pair = vars[i].split('=');
		if (pair[0] == name) {
			return decodeURIComponent(pair[1]);
		}
	}

	return null;
}
var urlSearchText = getQueryValue('q') || '';
if (urlSearchText) {
	var searchInput = document.getElementById('searchInput');
	searchInput.value = urlSearchText;
}

function jumpSearch(searchNode) {
	var seaTextIndex = document.querySelector(searchNode);
	var searchText = seaTextIndex.value;
	if (searchText !== '') {
		if ('') {
			window.location.href = '/search' + '?q=' + searchText + '&';
		} else {
			window.location.href = '/search' + '?q=' + searchText;
		}
	} else {
		console.log('Please enter the content of your search！');
	}
}

function enterSearch(searchNode) {
	var e = window.event;
	if (e.keyCode == 13) {
		jumpSearch(searchNode);
	}
}
const tabButtons = document.querySelectorAll('.tabButton');
const tabContents = document.querySelectorAll('.tabContent');
const tabContentPc = document.querySelectorAll('.tabContentPc');

tabButtons.forEach((button) => {
	button.addEventListener('click', function () {
		tabButtons.forEach((btn) => btn.classList.remove('active'));

		tabContents.forEach((content) => content.classList.remove('active'));

		this.classList.add('active');

		const tabId = this.getAttribute('data-tab');
		const activeTab = document.getElementById(tabId);
		activeTab.classList.add('active');

		if (isMobile) {
			tabContentPc.forEach((item, index) => {
				item.style.display = 'none';
			});
		}
	});
});
const newArticlesPc = document.querySelectorAll('.newArticlesPc');

function ajax(options) {
	var xhr = null;
	var params = formsParams(options.data);

	if (window.XMLHttpRequest) {
		xhr = new XMLHttpRequest();
	} else {
		xhr = new ActiveXObject('Microsoft.XMLHTTP');
	}

	if (options.type == 'GET') {
		xhr.open(options.type, options.url + '?' + params, options.async);
		xhr.send(null);
		if (xhr.status === 200) {
			options.success(xhr.responseText);
		}
	} else if (options.type == 'POST') {
		xhr.open(options.type, options.url, options.async);
		xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
		xhr.send(params);
		xhr.onreadystatechange = function () {
			if (xhr.readyState == 4 && xhr.status == 200) {
				options.success(xhr.responseText);
			}
		};
	}
}

function formsParams(data) {
	var arr = [];
	for (var prop in data) {
		arr.push(prop + '=' + data[prop]);
	}
	return arr.join('&');
}

function lazyImg() {
	const images = document.querySelectorAll('.lazyImg');
	const observer = new IntersectionObserver((entries = []) => {
		entries.forEach((item) => {
			if (item.isIntersecting) {
				const img = item.target;
				img.setAttribute('src', img.getAttribute('data-src'));
				observer.unobserve(img);
			}
		});
	});

	images.forEach((image) => {
		observer.observe(image);
	});
}
lazyImg();

function marquee(swiperUl, swiperItem, rightBtn, leftBtn, swiperDateList) {
	var moveLength = 500;

	var moveTotal = 0;
	var swiperBox = document.getElementsByClassName(swiperUl)[0];

	var swiperBoxWidth = swiperBox.offsetWidth;
	var swiperList = 0;
	var list = swiperDateList;
	var listLength = list.length;
	for (let index = 0; index < listLength; index++) {
		var item = document.getElementsByClassName(swiperItem)[index];
		var itemWidth = item.offsetWidth;
		swiperList += itemWidth;
	}

	var boxWidth = swiperList - swiperBoxWidth;
	var rightBtn = document.getElementById(rightBtn);
	var leftBtn = document.getElementById(leftBtn);

	if (swiperDateList == null || swiperBoxWidth >= swiperList) {
		rightBtn.style.display = 'none';
	} else
		rightBtn.addEventListener('click', function () {
			if (boxWidth > moveLength) {
				boxWidth -= moveLength;
				moveTotal += moveLength;
				swiperBox.setAttribute('style', '-webkit-transform: translateX(-' + moveTotal + 'px);');
				leftBtn.style.display = 'flex';
			} else if (boxWidth <= moveLength) {
				moveTotal += boxWidth;
				boxWidth = 0;
				swiperBox.setAttribute('style', '-webkit-transform: translateX(-' + moveTotal + 'px);');
				rightBtn.style.display = 'none';
				leftBtn.style.display = 'flex';
			}
		});

	leftBtn.addEventListener('click', function () {
		if (moveLength < moveTotal) {
			boxWidth += moveLength;
			moveTotal -= moveLength;
			swiperBox.setAttribute('style', '-webkit-transform: translateX(-' + moveTotal + 'px);');
			rightBtn.style.display = 'flex';
		} else if (moveLength >= moveTotal) {
			boxWidth += moveTotal;
			moveTotal = 0;
			swiperBox.setAttribute('style', '-webkit-transform: translateX(-' + moveTotal + 'px);');
			rightBtn.style.display = 'flex';
			leftBtn.style.display = 'none';
		}
	});
}

var dentalsOptionsDom = document.querySelector('.dentalsOptions');

function optionDentals() {
	dentalsOptionsDom.style.display = 'block';
}

function hideDentals() {
	dentalsOptionsDom.style.display = 'none';
}

document.addEventListener('DOMContentLoaded', function () {
	var linkElements = document.querySelectorAll('a');

	linkElements.forEach(function (linkElement) {
		var originalHref = linkElement.getAttribute('href');

		if (originalHref && (originalHref.startsWith('/') || originalHref.startsWith('https://'))) {
			if (typeof linkParams !== 'undefined' && linkParams) {
				if (originalHref.includes('?')) {
					linkElement.setAttribute('href', originalHref + '&' + linkParams);
				} else {
					linkElement.setAttribute('href', originalHref + '?' + linkParams);
				}
			}
		}
	});
});
