// Transform DOM prop/attr names applicable to `<svg>` element but react-limited

const DATA_ATTR_PREFIX = 'data-';

function toReactPropName (name) {
	return name.replace(/[-:|]([a-z])/g, chars => chars[1].toUpperCase());
}

function startsWith (str, substring) {
	return str.indexOf(substring) === 0;
}

function toReactProps (attributes) {
	let reactProps = {};

	Array.from(attributes).forEach(function (attr) {
		let prop;
		let { name, value } = attr;
		let nameIsNotDataAttribute = !startsWith(name, DATA_ATTR_PREFIX);

		if (nameIsNotDataAttribute) {
			prop = toReactPropName(name);
		}
		reactProps[prop] = value;
	});

	return reactProps;
}

export function toSvgDom (html) {
	let parentElem = document.createElement('div');
	let svgElem;

	parentElem.innerHTML = html;
	svgElem = parentElem.removeChild(parentElem.firstElementChild);

	return svgElem;
}

export function getReactProps (svgDom) {
	let { attributes } = svgDom;

	return toReactProps(attributes);
}

export function fillSvg (svgDom, color) {
	const COLOR_ATTR = 'fill';
	let coloredSvgDom = svgDom.cloneNode(true);
	let coloredElements = coloredSvgDom.querySelectorAll(`[${COLOR_ATTR}]`);

	Array.from(coloredElements).forEach(function (elem) {
		elem.setAttribute(COLOR_ATTR, color);
	});
	coloredSvgDom.removeAttribute(COLOR_ATTR);

	return coloredSvgDom;
}

export function half (number) {
	const DEVIDER = 2;

	return number / DEVIDER;
}