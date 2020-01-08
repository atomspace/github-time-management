import React from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';

import './widget.css';

export default class Widget extends React.Component {
	static propTypes = {
		className: PropTypes.string,
		rootClassName: PropTypes.string,
		children: PropTypes.node
	};

	static defaultProps = {
		className: '',
		rootClassName: '',
		children: null
	};

	constructor (props) {
		super(props);
		this.state = {
			portalRoot: document.querySelector(this.props.rootClassName),
			portalRootParent: document.querySelector(this.props.rootClassName).parentNode
		};
		this.element = document.createElement('div');
	}

	componentDidMount () {
		this.element.classList.add(this.props.className, 'sidebar-section');
		this.state.portalRootParent.insertBefore(this.element, this.state.portalRoot.nextSibling);
	}

	componentWillUnmount () {
		this.state.portalRootParent.removeChild(this.element);
	}

	render () {
		let { children } = this.props;

		return (
			<div>
				{ReactDOM.createPortal(children, this.element)}
			</div>
		);
	}
}