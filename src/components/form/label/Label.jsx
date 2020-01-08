import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import './label.css';

export default class Label extends React.PureComponent {
	static propTypes = {
		className: PropTypes.string,
		title: PropTypes.string,
		children: PropTypes.node
	};
	static defaultProps = {
		className: '',
		title: '',
		children: null
	};

	render () {
		let {
			className,
			children,
			title
		} = this.props;

		return (
			<label className={classnames('input-field', className)}>
				<span className="label-text">{title}</span>
				{children}
			</label>
		);
	}
}