angular.module('aboutController', [])
	.controller('AboutController', function($scope) {
		console.log('About template');

		$scope.title = "About Page";

			//team members
		$scope.members = [
			{
				name: 'Jerry Conrad',
				title: 'CEO and Founder',
				description: 'Jerry is a fun guy to work with'
			},
			{
				name: 'Akira Kondo',
				title: 'Creative Director',
				description: 'Our solution finder'
			},
			{
				name: 'Paolo Segretti',
				title: 'Head of production',
				description: 'Tic tac'
			},
			{
				name: 'Geoffray Lami',
				title: 'Designer',
				description: 'The art guy, our dreaming pencil. Working along with Akira, they are our award winning team.'
			}
		];
	});
