export default [
	{ label: 'grammar', url: '/grammar/' },
	{
		label: 'lexicon',
		url: '/lexicon/',
		children: [
			{
				label: 'profile',
				children: [
					{ label: 'vocabulary', url: '/lexicon/profile/vocabulary/' },
					{ label: 'profile-test', url: '/lexicon/profile/profile-test/' },
				],
			},
			{
				label: 'document',
				children: [{ label: 'document-test', url: '/lexicon/document/document-test/' }],
			},
		],
	},
];
