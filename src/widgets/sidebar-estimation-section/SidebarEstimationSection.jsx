import React from 'react';

import Icon from '../../components/icon/Icon';
import { Input, Label, Button } from '../../components/form/index';

import './sidebar-estimation-section.css';

export default class SidebarEstimationSection extends React.PureComponent {
	handleClick = () => {
	};

	render () {
		return (
			<form className="issue-sidebar-form" aria-label="Make estimations">
				<div className="details-reset details-overlay select-menu hx_rsm">
					<div className="text-bold discussion-sidebar-heading discussion-sidebar-toggle hx_rsm-trigger" aria-haspopup="menu" data-hotkey="a" role="button">
						<Icon name="trash" className="octicon" />
						Estimations
					</div>
				</div>

				<Label className="estimation-field">
					<Input />
				</Label>
				<Button className="btn-sm btn-primary" onClick={this.handleClick} type="submit">Save</Button>
				<Button className="btn-sm">Cancel</Button>
			</form>
		);
	}
}