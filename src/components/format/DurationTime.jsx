import React from 'react';
import PropTypes from 'prop-types';

import formatTimeInterval from '../../utils/format-time-interval';

export default class DurationTime extends React.PureComponent {
	static propTypes = {
		className: PropTypes.string,
		children: PropTypes.node
	};

	static defaultProps = {
		className: '',
		children: null
	};

	render () {
		let { children, className } = this.props;

		children = formatTimeInterval(children);

		if (className) {
			return (
				<span className={className}>
					{children}
				</span>
			);
		}

		return ({ children });
	}
}