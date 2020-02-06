import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import './button.css';

export default class Button extends React.PureComponent {
	static propTypes = {
		className: PropTypes.string,
		type: PropTypes.string,
		children: PropTypes.node,
		onClick: PropTypes.func
	};
	static defaultProps = {
		className: '',
		type: 'button',
		children: null,
		onClick: null
	};

	handleClick = () => {
		this.props.onClick();
	};

	render () {
		let {
			className, type, children
		} = this.props;

		return (
			<button
				className={classnames('button', className)}
				type={type}
				onClick={this.handleClick}
			>
				{children}
			</button>
		);
	}
}