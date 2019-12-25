import React from 'react';

import Widget from '../components/widget/Widget';

export default function Main () {
	return (
		<React.Fragment>
			<Widget className="some-github-class" after>
				{/* <EditEstimation /> */}
				adfkadfknknad
			</Widget>
			{/* <Widget className="other-github-class" before>
				<EstimationTime />
			</Widget> */}
		</React.Fragment>
	);
}

// import SidebarEstimationSection from './components/SidebarEstimationSection';

// let componentRoot = document.querySelector('.sidebar-labels');
// let sidebarEstimationSection = document.createElement('div');

// sidebarEstimationSection.classList.add('discussion-sidebar-item');

// let sidebar = componentRoot.parentNode;

// sidebar.insertBefore(sidebarEstimationSection, componentRoot);