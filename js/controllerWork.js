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
				description: "Jeysen House designed by that famous architect"
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
				type: "vid",
				mp4: "../assets/gallery/tvc/motat_360p.mp4",
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
				name: "Eastern Hero",
				file: "eastern_hero",
				cat: "mgx",
				type: "vid",
				mp4: "../assets/gallery/mgx/eastern_hero_trailer.mp4",
				description: "Eastern Hero game trailer"
			}
		];

		$scope.galleryAll = $scope.gallery3d.concat($scope.gallerytvc, $scope.gallerymgx);
		$scope.galleryActive = $scope.galleryAll;
		console.dir('Active Gallery :', $scope.galleryActive);


//				--- Filter functions ---

		$scope.showAll = function() {
				//reset active gallery and hero
			$scope.hero = {};
			$scope.galleryActive = [];

			// sorts alphatically - optional
			var reArrange = function(a, b) {
			//	console.log(a.name);
			//	console.log(b.name);
				if(a.name < b.name) return -1;
				if(a.name > b.name) return 1;
				return 0;
			}
			setTimeout(function() {
					//reset active gallery and hero
				$scope.hero = {};
				$scope.galleryAll.sort(reArrange);
				// console.log('gallery all', $scope.galleryAll);
				$scope.galleryActive = $scope.galleryAll;
				console.log('gallery Active = ', $scope.galleryActive);
				$scope.$digest();
			}, 500);
		}
		$scope.show3d = function() {
				//reset active gallery and hero
			$scope.hero = {};
			$scope.galleryActive = [];

			setTimeout(function() {
				$scope.galleryActive = $scope.gallery3d;
				console.log($scope.galleryActive);
				$scope.$digest();
			}, 500);
		}
		$scope.showTvc = function() {
				//reset active gallery and hero
			$scope.hero = {};
			$scope.galleryActive = [];

			setTimeout(function() {
				$scope.galleryActive = $scope.gallerytvc;
				console.log($scope.galleryActive);
				$scope.$digest();
			}, 500);
		}
		$scope.showMgx = function() {
				//reset active gallery and hero
			$scope.hero = {};
			$scope.galleryActive = [];

			setTimeout(function() {
				$scope.galleryActive = $scope.gallerymgx;
				console.log($scope.galleryActive);
				$scope.$digest();
			}, 500);
		}

			// initial values for gallery
		$scope.hero = {};
		$scope.loader = {};
		$scope.initGallery = false;
		

// 				--- autoscale modal viewer ---

		$scope.getRealSize = function() {

			console.info('ctr - getting hero real size');

			if ($scope.hero.type == "img") {

				var heroPic = document.getElementById('heroPic');
				// console.log('heroPic element', heroPic);

				var heroHeightMax = heroPic.naturalHeight;
				var heroWidthMax = heroPic.naturalWidth;
				
			} else if ($scope.hero.type == "vid") {

				var heroVid = document.getElementById("heroVid");

				var heroHeightMax = heroVid.videoHeight;
				var heroWidthMax = heroVid.videoWidth;

			}
			
			var heroRatio = heroHeightMax / heroWidthMax;

			// console.log('hero ratio', heroRatio);

			$scope.heroSize = {
				height: heroHeightMax,
				widht: heroWidthMax,
				ratio: heroRatio
			};
			// console.dir('natural hero size :', $scope.heroSize);

			return $scope.heroSize;
		}

			// calc browser's window size 

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

// 				--- Fits viewer to browser's window size ---

		$scope.resizeModal = function() {
			console.info('resizing modal viewer');

			$scope.getWinSize();

			console.table('win size in resizeModal : ', $scope.winSize);
			// console.dir('hero size in resizer', $scope.heroSize);

			// Positioning

				// calc displayed height from img is 100% width of win
			var picHeight = $scope.winSize.width * $scope.heroSize.ratio;
			
				// center vertically
			var diffPos = ($scope.winSize.height - picHeight) / 2;
			var topPos = parseInt(diffPos < 0 ? 0 : diffPos);

			console.log('hero top position', topPos);

			$("#viewer .modal-content").css('top', topPos + 'px');

				// auto scaling
			var maxHeight = $scope.winSize.height;
			//console.log('hero max height : ', maxHeight);

			var maxWidth = parseInt($scope.winSize.height / $scope.heroSize.ratio);
			//console.log('hero max width : ', maxWidth);

			$("#viewer .modal-content").css('max-width', maxWidth + 'px');
			$("#viewer .modal-content").css('max-height', maxHeight + 'px');

		}

			// triggers on / off resizing on viewer display on / off
		
		$('#viewer').on('show.bs.modal', function() {
			$scope.resizeModal();
			$(window).on('resize', $scope.resizeModal);
		});

		$('#viewer').on('hidden.bs.modal', function() {
			$(window).off('resize', $scope.resizeModal);
		});

// 				--- load hero on clicked img ---


		$scope.$watch('loader.name', function(newVal, oldVal) {

			console.info('ctr - watch - initGallery', $scope.initGallery);

			if (newVal !== oldVal) {
				// console.warn('ctr - load watch - different hero');
					// clear and reassign hero item
				$scope.hero = {};

				setTimeout(function() { // digest cycle timeout
					$scope.hero = $scope.loader;
					console.dir('hero', $scope.hero);
					$scope.$digest();
				}, 250);

				setTimeout(function() { // 2nd digest cycle
					$scope.getRealSize();
					$("#viewer").modal('show');
				}, 400);
			}
			else {
				console.info('no hero loded yet');
			}
		});

		$scope.loadHero = function($index) {

			console.log('figure clicked');

			$scope.loader = $scope.galleryActive[$index]
			
			if ($scope.initGallery == true && $scope.hero == $scope.loader)  {
				$("#viewer").modal('show');
			}
			else {
				$scope.initGallery = true;
			}			
		}

//				--- vid player specific behaviour ---

		$("#viewer").on("shown.bs.modal", function() {
			if ($scope.hero.type == "vid") {
				console.log("hero type is vid - resuming video");
				document.getElementById("heroVid").play();
			}
		});

		$("#viewer").on("hide.bs.modal", function() {
			if ($scope.hero.type == "vid") {
				console.log("hero type is vid - pausing video");
				document.getElementById("heroVid").pause();
			}
		});
	});
