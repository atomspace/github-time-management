import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import './button.css';

export default class Button extends React.PureComponent {
	static propTypes = {
		className: PropTypes.string,
		type: PropTypes.string,
		children: PropTypes.node
	};
	static defaultProps = {
		className: '',
		type: 'text',
		children: null
	};

	render () {
		let {
			className, type, children
		} = this.props;

		return (
			<button
				className={classnames('input-field', className)}
				type={type}
			>
				{children}
			</button>
		);
	}
}