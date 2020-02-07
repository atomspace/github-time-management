import React from 'react';

import Icon from '../../components/icon/Icon';
import DurationTime from '../../components/format/DurationTime';
import { Input, Label, Button } from '../../components/form/index';

import './sidebar-estimation-section.css';

export default class SidebarEstimationSection extends React.PureComponent {
	handleClick = () => {
	};

	render () {
		return (
			<form className="issue-sidebar-form" aria-label="Make estimations">
				<DurationTime className="ddd">111360000</DurationTime>
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