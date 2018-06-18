angular.module('workController', [])
	.controller('WorkController', function($scope) {
		console.log('Work template');

		$scope.title = 'Work Page';

//				--- Gallery ---

		$scope.gallery3d = [
			{
				name: "Jeysen House",
				file: "jeysen",
				cat: "3d",
				type: "img",
				description: "Jeysen House designed by that famous unknown architect"
			},
			{
				name: "Master bedroom",
				file: "bed1",
				cat: "3d",
				type: "img",
				description: "Indoor previsualisations for Jeysen House"
			},
			{
				name: "MentalPix office",
				file: "hkOffice",
				cat: "3d",
				type: "img",
				description: "MentalPix HongKong's office previsualisation"
			},
			{
				name: "Arkangels",
				file: "superpuma",
				cat: "3d",
				type: "img",
				description: "e-learning for helicopter pilots and mecanics"
			}
		];
		$scope.gallerytvc = [
			{
				name: "Acts of Godfrey",
				file: "aog",
				cat: "tvc",
				type: "img",
				description: "Feature film by Johnny Daukes"
			},
			{
				name: "London Olympic 2012",
				file: "ioc",
				cat: "tvc",
				type: "img",
				description: "International Olympic Committee campaign"
			},
			{
				name: "boby",
				file: "bobstr",
				cat: "tvc",
				type: "img",
				description: "Our 3DStereo animation"
			},
			{
				name: "Motat",
				file: "motat",
				cat: "tvc",
				type: "img",
				description: "Motat Ad for Halloween special event"
			},
			{
				name: "Ptouch",
				file: "ptouch",
				cat: "tvc",
				type: "img",
				description: "3d animation for Brother"
			}
		];
		$scope.gallerymgx = [
			{
				name: "NeoHub",
				file: "neohub",
				cat: "mgx",
				type: "img",
				description: "Motion Graphics for NeoHub"
			},
			{
				name: "Easter Hero",
				file: "koran",
				cat: "mgx",
				type: "vid",
				mp4: "../assets/gallery/koran_trailer.mp4",
				description: "Easter Hero game trailer"
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

			// asigne an initial empty object
		$scope.hero = {};

// 				--- autoscale modal viewer ---

		$scope.getRealSize = function() {

			console.info('getting real size of hero Pic');

			var heroPic = document.getElementById('heroPic');
			// console.log('heroPic element', heroPic);

			var picHeightMax = heroPic.naturalHeight;
			var picWidthMax = heroPic.naturalWidth;
			var picRatio = picHeightMax / picWidthMax;

			// console.log('pic ratio', picRatio);

			$scope.picSize = {
				height: picHeightMax,
				widht: picWidthMax,
				ratio: picRatio
			};

			console.dir('natural hero pic size :', $scope.picSize);
		}

			// calc browser's windows size 	
		$scope.getWinSize = function() {
			// console.log('get win size');
			
			var winHeight = parseInt($(window).height());
			var winWidth = parseInt($(window).width());

			$scope.winSize = {
				width: winWidth,
				height: winHeight
			};

			// console.dir('win size :', $scope.winSize);

			return $scope.winSize;
		};


		$scope.resizeModal= function() {
			console.info('resizing modal viewer');

			$scope.getWinSize();

			console.dir('win size in resizer : ', $scope.winSize);
			// console.dir('pic size in resizer', $scope.picSize);

				// positioning

				// calc displayed height from img is 100% width of win
			var picHeight = $scope.winSize.width * $scope.picSize.ratio;
			
				// center vertically
			var diffPos = ($scope.winSize.height - picHeight) / 2;
			var topPos = parseInt(diffPos < 0 ? 0 : diffPos);

			console.log('top position', topPos);

			$("#viewer .modal-content").css('top', topPos + 'px');

				// auto scaling
			var maxHeight = $scope.winSize.height;
			console.log('max height : ', maxHeight);

			var maxWidth = parseInt($scope.winSize.height / $scope.picSize.ratio);
			console.log('max width : ', maxWidth);

			$("#viewer .modal-content").css('max-width', maxWidth + 'px');
			$("#viewer .modal-content").css('max-height', maxHeight + 'px');

		}

			// calc modal size & position when displayed
		$('#viewer').on('show.bs.modal', function() {
			$(window).on('resize', $scope.resizeModal);
		});

		$('#viewer').on('hidden.bs.modal', function() {
			$(window).off('resize', $scope.resizeModal);
		});


// 				--- load hero on clicked img ---

		$scope.loadHero = function($index) {

			$scope.hero = $scope.galleryActive[$index];
			console.dir($index, $scope.hero);

			setTimeout(function() {
				console.info('150ms delay');

				$scope.getRealSize();
				
				$scope.resizeModal();
				
				$('#viewer').modal('show');
			
			}, 150);
		}

	});
