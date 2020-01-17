import React from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';

import './widget.css';

export default class Widget extends React.Component {
	static propTypes = {
		className: PropTypes.string,
		rootSelector: PropTypes.string,
		children: PropTypes.node
	};

	static defaultProps = {
		className: '',
		rootSelector: '',
		children: null
	};

	constructor (props) {
		super(props);
		this.portalRoot = document.querySelector(this.props.rootSelector);
		this.portalRootParent = document.querySelector(this.props.rootSelector).parentNode;
		this.element = document.createElement('div');
	}

	componentDidMount () {
		let classNames = this.props.className.split(' ');

		classNames.forEach(className => {
			this.element.classList.add(className);
		});

		this.portalRootParent.insertBefore(this.element, this.portalRoot.nextSibling);
	}

	componentWillUnmount () {
		this.portalRootParent.removeChild(this.element);
	}

	render () {
		let { children } = this.props;

		return (
			<React.Fragment>
				{ReactDOM.createPortal(children, this.element)}
			</React.Fragment>
		);
	}
}