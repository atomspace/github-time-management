import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import './input.css';

export default class Input extends React.PureComponent {
	static propTypes = {
		className: PropTypes.string,
		name: PropTypes.string,
		value: PropTypes.string,
		type: PropTypes.string,
		required: PropTypes.bool
	};
	static defaultProps = {
		className: '',
		name: '',
		value: '',
		type: 'text',
		required: false
	};

	render () {
		let {
			className, name, value, type, required
		} = this.props;

		return (
			<input
				className={classnames('input-field', className)}
				name={name}
				value={value}
				type={type}
				required={required}
			/>
		);
	}
}