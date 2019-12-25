import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import Svg from '../svg/Svg';
import logoImage from './images/logo.svg';

import './logo.css';

export default class Logo extends React.PureComponent {
	static propTypes = {
		className: PropTypes.string
	};
	static defaultProps = {
		className: ''
	};
	render () {
		let { className } = this.props;

		return (
			<Svg
				src={logoImage}
				width="269"
				height="56"
				className={classnames('logo', className)}
			/>
		);
	}
}