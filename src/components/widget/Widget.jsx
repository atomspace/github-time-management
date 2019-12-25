import React from 'react';
import PropTypes from 'prop-types';
import createPortal from 'react-dom';

export default class Widget extends React.Component {
	static propTypes = {
		className: PropTypes.string,
		children: PropTypes.node
	};

	static defaultProps = {
		className: '',
		children: null
	};

	render () {
		let { className, children } = this.props;

		return (
			<div className={className}>
				123
				
				{ReactDOM.createPortal(children, container)}
			</div>

		);
	}
}