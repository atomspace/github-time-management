import { types } from 'mobx-state-tree';

const Issue = types
	.model('Issue', {
		title: 'Issue title',
		description: 'Issue description',
		changeDate: 'Date when the issue was Last updated',
		createDate: 'Date when the issue was created',
		closeDate: 'Date when the issue was closed',
		assignee: 'user id'
	})
	.views(() => ({
		get estimationTime () {
			return 'derived time from the description';
		}
	}))
	.actions(() => ({
		changeEstimationTime () {}
	}));