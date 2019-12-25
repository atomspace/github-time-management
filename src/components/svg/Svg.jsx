import React from 'react';
import PropTypes from 'prop-types';

import { getReactProps, toSvgDom, fillSvg, half } from './utils';

const DATA_URI_REGEXP = /^data:image\/svg\+xml,/;
const HASH_TAG_CODE_REGEXP = /%23/g;

export default class Svg extends React.PureComponent {
	static propTypes = {
		// id: PropTypes.string,
		src: PropTypes.string.isRequired,
		className: PropTypes.string,
		fill: PropTypes.string,
		width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
		height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
		scale: PropTypes.bool
	};
	static defaultProps = {
		// id: ''
		className: '',
		fill: '',
		width: '',
		height: '',
		scale: true
	};

	static isSvgUrl (url) {
		return DATA_URI_REGEXP.test(url);
	}
	render () {
		let {
			src, className, fill, width, height, scale
		} = this.props;
		let svgXml = decodeURI(src.replace(DATA_URI_REGEXP, '')).replace(HASH_TAG_CODE_REGEXP, '#');
		let svgDom = toSvgDom(svgXml);
		let coloredSvgDom = fill ? fillSvg(svgDom, fill) : svgDom;
		let svgProps = getReactProps(coloredSvgDom);
		let svgInnerXml = coloredSvgDom.innerHTML;
		let { viewBox, width: originWidth, height: originHeight } = svgProps;
		let preserveAspectRatio = `xMidYMid meet`;

		width = Number(width || originWidth);
		height = Number(height || originHeight);

		if (!scale) {
			let offsetLeft = half(width - Number(svgProps.width));
			let offsetTop = half(height - Number(svgProps.height));

			viewBox = `-${offsetLeft} -${offsetTop} ${width} ${height}`;
			preserveAspectRatio = `xMidYMid slice`;
		}

		return (
			<svg
				{...svgProps}
				className={className}
				aria-hidden="true"
				focusable="false"
				width={width}
				height={height}
				viewBox={viewBox}
				preserveAspectRatio={preserveAspectRatio}
				dangerouslySetInnerHTML={{ __html: svgInnerXml }} // eslint-disable-line react/no-danger
			/>
		);
	}
}