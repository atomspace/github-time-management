import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import Svg from '../svg/Svg';
import './icon.css';
import icons from './icons';

export default class Icon extends React.PureComponent {
	static propTypes = {
		name: PropTypes.oneOf(Object.keys(icons)).isRequired,
		className: PropTypes.string,
		fill: PropTypes.string
	};
	static defaultProps = {
		className: '',
		fill: 'currentColor'
	};
	static icons = icons;

	render () {
		const SIZE = 24;
		let { name, className, fill } = this.props;
		let src = icons[name];

		return (
			<Svg
				src={src}
				width={SIZE}
				height={SIZE}
				scale={false}
				className={classnames('icon', className)}
				fill={fill}
			/>
		);
	}
}