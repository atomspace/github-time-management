import React from 'react';

import Icon from '../../components/icon/Icon';
import { Input, Label, Button } from '../../components/form/index';

import './sidebar-estimation-section.css';

export default function SidebarEstimationSection () {
	return (
		<form className="js-issue-sidebar-form" aria-label="Make estimations">
			<details className="details-reset details-overlay select-menu hx_rsm">
				<summary className="text-bold discussion-sidebar-heading discussion-sidebar-toggle hx_rsm-trigger" aria-haspopup="menu" data-hotkey="a" role="button">
					<Icon name="trash" className="octicon" />
					Estimations
				</summary>
			</details>

			<Label className="estimation-field">
				<Input />
			</Label>
			<Button className="btn-sm btn-primary">Save</Button>
			<Button className="btn-sm">Cancel</Button>
		</form>
	);
}