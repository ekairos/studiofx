angular.module('workController', [])
	.controller('WorkController', function($scope) {
		console.log('Work template');

		$scope.title = 'Work Page';

//				--- Gallery ---

		$scope.gallery3d = [
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
		$scope.gallerytvc = [
			{
				name: "Acts of Godfrey",
				file: "aog",
				type: "tvc",
				description: "Feature film by Johnny Daukes"
			},
			{
				name: "London Olympic 2012",
				file: "ioc",
				type: "tvc",
				description: "International Olympic Committee Campagne for London 2012"
			},
			{
				name: "boby",
				file: "bobstr",
				type: "tvc",
				description: "Our 3DStereo animation"
			},
			{
				name: "Motat",
				file: "motat",
				type: "tvc",
				description: "Motat Ad for Halloween special event"
			},
			{
				name: "Ptouch",
				file: "ptouch",
				type: "tvc",
				description: "3d animation for Brother"
			}
		];
		$scope.gallerymgx = [
			{
				name: "NeoHub",
				file: "neohub",
				type: "mgx",
				description: "Motion Graphics for NeoHub"
			}
		];

		$scope.galleryAll = $scope.gallery3d.concat($scope.gallerytvc, $scope.gallerymgx);
		$scope.galleryActive = $scope.galleryAll;
		console.log($scope.galleryActive);

//				--- Filter functions ---

		$scope.showAll = function() {
			// sorts alphatically - optional
			var reArrange = function(a, b) {
			//	console.log(a.name);
			//	console.log(b.name);
				if(a.name < b.name) return -1;
				if(a.name > b.name) return 1;
				return 0;
			}
			$scope.galleryAll.sort(reArrange);
			// console.log('gallery all', $scope.galleryAll);
			$scope.galleryActive = $scope.galleryAll;
			console.log('gallery Active = ', $scope.galleryActive);
		}
		$scope.show3d = function() {
			$scope.galleryActive = $scope.gallery3d;
			console.log($scope.galleryActive);
		}
		$scope.showTvc = function() {
			$scope.galleryActive = $scope.gallerytvc;
			console.log($scope.galleryActive);
		}
		$scope.showMgx = function() {
			$scope.galleryActive = $scope.gallerymgx;
			console.log($scope.galleryActive);
		}

// 				--- load hero on clicked img ---

		$scope.loadViewer = function($index){
			// console.log($index);
			$scope.hero = $scope.galleryActive[$index];
			console.log('hero :', $scope.hero);
			
			$('#viewer').modal('show');
		}

	});
