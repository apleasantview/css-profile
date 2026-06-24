export default [
	{ label: 'grammar', url: '/grammar/' },
	{
		label: 'lexicon',
		url: '/lexicon/',
		children: [
			{ label: 'vocabulary', url: '/lexicon/vocabulary/' },
			{ label: 'profile-test', url: '/lexicon/profile-test/' },
		],
	},
	{
		label: 'texts',
		url: '/texts/',
		children: [{ label: 'document-test', url: '/texts/document-test/' }],
	},
];
