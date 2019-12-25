import React from 'react';

import Icon from './icon/Icon';
import Logo from './logo/Logo';

export default function IconSetExamples () {
	return (
		<div className="icon-color">
			<Logo />
			<h2>Icon set (color support)</h2>

			{Object.keys(Icon.icons).map(name => <span key={name} title={name}>
				<Icon name={name} fill="" />
			</span>)}
			<br />
			<br />
		</div>
	);
}