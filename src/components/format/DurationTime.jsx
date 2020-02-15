import React from 'react';
import PropTypes from 'prop-types';

import formatTimeInterval from '../../utils/format-time-interval';

export default class DurationTime extends React.PureComponent {
	static propTypes = {
		className: PropTypes.string,
		children: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
	};

	static defaultProps = {
		className: '',
		children: undefined
	};

	static format (children) {
		return formatTimeInterval(children);
	}

	static unformat () {
	}

	render () {
		let { children, className } = this.props;

		let outputTimeDuration = DurationTime.format(parseInt(children, 10));

		if (className) {
			return (
				<span className={className}>
					{outputTimeDuration}
				</span>
			);
		}

		return (
			<React.Fragment>
				{outputTimeDuration}
			</React.Fragment>
		);
	}
}