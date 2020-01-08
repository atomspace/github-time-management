import React from 'react';

import Widget from '../components/widget/Widget';
import SidebarEstimationSection from '../widgets/sidebar-estimation-section/SidebarEstimationSection';

export default function Main () {
	return (
		<React.Fragment>
			<Widget className="discussion-sidebar-item" rootClassName=".sidebar-assignee">
				<SidebarEstimationSection />
			</Widget>
			{/* <Widget className="other-github-class" before>
				<EstimationTime />
			</Widget> */}
		</React.Fragment>
	);
}