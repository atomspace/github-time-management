let path = require('path');

let loaderMerge = require('@neutrinojs/loader-merge');

module.exports = function (neutrino) {
	const NODE_MODULES_PATH = path.join(__dirname, '../node_modules');
	let reactOptions = {
		plugins: [
			[
				require.resolve('babel-plugin-transform-react-jsx'),
				{ pragma: 'createElement' }
			],
			[
				require.resolve('babel-plugin-jsx-pragmatic'),
				{
					module: 'react',
					export: 'createElement',
					import: 'createElement'
				}
			],
			...(
				process.env.NODE_ENV === 'development' ?
					[
						[require.resolve('babel-plugin-transform-class-properties'), { spec: true }],
						require.resolve('babel-plugin-transform-es2015-classes')
					] :
					[
						[require.resolve('babel-plugin-transform-class-properties'), { spec: true }]
					]
			)
		],
		presets: [require.resolve('babel-preset-react')]
	};

	neutrino.use(loaderMerge('compile', 'babel'), reactOptions);

	neutrino.config.module.rule('compile').test(neutrino.regexFromExtensions());

	neutrino.config.module
		.rules.delete('style')
			.end()
		.rule('style')
			.test(/\.css$/)
			.use('style')
				.loader(require.resolve('style-loader'))
				.end()
			.use('css')
				.loader(require.resolve('css-loader'))
				.end();

	neutrino.config
	 .resolve
		.modules
			.add(NODE_MODULES_PATH)
			.end()
	   .extensions
			.merge(['.jsx'])
			.end()
		.end();
};