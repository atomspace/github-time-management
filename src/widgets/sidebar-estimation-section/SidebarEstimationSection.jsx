import React from 'react';

import Icon from '../../components/icon/Icon';
import { DurationTime } from '../../components/format';
import { Input, Label, Button } from '../../components/form/index';

import './sidebar-estimation-section.css';

export default class SidebarEstimationSection extends React.PureComponent {
	state = {
		milliseconds: '1113600002'
	};

	handleClick = () => {
	};

	render () {
		let { milliseconds } = this.state;

		milliseconds = parseInt(milliseconds, 10);

		return (
			<form className="issue-sidebar-form" aria-label="Make estimations">
				<DurationTime>{ milliseconds }</DurationTime>
				<div className="issue-sidebar-heading">
					<Icon name="trash" className="octicon" />
					Estimations
				</div>

				<Label className="estimation-field">
					<Input />
				</Label>
				<Button className="primary-button button" onClick={this.handleClick} type="submit">Save</Button>
				<Button className="secondary-button button">Cancel</Button>
			</form>
		);
	}
}