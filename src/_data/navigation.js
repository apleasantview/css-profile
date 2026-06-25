export default [
	{
		label: 'orientation',
		url: '/orientation/',
	},
	{
		label: 'grammar',
		url: '/grammar/',
		children: [
			{ label: 'is vs for', url: '/grammar/is-vs-for/' },
			{ label: 'earn its place', url: '/grammar/earn-its-place/' },
			{ label: 'element/block joint', url: '/grammar/element-block-joint/' },
			{ label: 'package vs presentation', url: '/grammar/package-vs-presentation/' },
			{ label: 'admitted, not assumed', url: '/grammar/admitted-not-assumed/' },
		],
	},
	{
		label: 'lexicon',
		url: '/lexicon/',
		children: [
			{ label: 'vocabulary', url: '/lexicon/vocabulary/' },
			{ label: 'profile', url: '/lexicon/profile-test/' },
		],
	},
	{
		label: 'texts',
		url: '/texts/',
		children: [{ label: 'document', url: '/texts/document-test/' }],
	},
];
