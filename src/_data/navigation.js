export default [
	{ label: 'grammar', url: '/grammar/' },
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
