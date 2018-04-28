angular.module('workController', [])
	.controller('WorkController', function($scope) {
		console.log('Work template');

		$scope.title = 'Work Page';

		//		--- Gallery ---

		var gallery3d = [
			{
				name: "Jeysen House",
				file: "jeysen",
				type: "3d",
				description: "Jeysen House designed by that famous unknown architect"
			},
			{
				name: "Master bedroom",
				file: "bed1",
				type: "3d",
				description: "Indoor previsualisations for Jeysen House"
			},
			{
				name: "MentalPix office",
				file: "hkOffice",
				type: "3d",
				description: "MentalPix HongKong's office previsualisation"
			},
			{
				name: "Arkangels",
				file: "superpuma",
				type: "3d",
				description: "3D Models and animations for helicopter pilots and mecanics e-learning"
			}
		];
		var gallerypost = [
			{
				name: "Acts of Godfrey",
				file: "aog",
				type: "post",
				description: "Feature film by Johnny Daukes"
			},
			{
				name: "London Olympic 2012",
				file: "ioc",
				type: "post",
				description: "International Olympic Committee Campagne for London 2012"
			},
			{
				name: "boby",
				file: "bobstr",
				type: "post",
				description: "Our 3DStereo animation"
			},
			{
				name: "Motat",
				file: "motat",
				type: "post",
				description: "Motat Ad for Halloween special event"
			}
		];
		var gallerymgx = [
			{
				name: "NeoHub",
				file: "neohub",
				type: "post",
				description: "Motion Graphics for NeoHub"
			},
			{
				name: "Ptouch",
				file: "ptouch",
				type: "post",
				description: "3d animation for Brother"
			}
		];

		$scope.gallery3d = gallery3d;
		$scope.gallerypost = gallerypost;
		$scope.gallerymgx = gallerymgx;

		galleryAll = gallery3d.concat(gallerypost, gallerymgx);
		$scope.galleryAll = $scope.gallery3d.concat($scope.gallerypost, $scope.gallerymgx);

	});
