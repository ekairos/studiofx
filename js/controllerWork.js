angular.module('workController', [])
	.controller('WorkController', function($scope) {
		console.log('Work template');

		$scope.title = 'Work Page';

			// initial values for gallery
		$scope.hero,
		$scope.loader = {};
		$scope.initGallery = false;

		console.dir('hero : ', $scope.hero);
		console.dir('loader : ', $scope.loader);

//				--- Gallery Obj ---

		$scope.gallery = {
			g3d: [
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
			],
			gtvc: [
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
					description: "Our 3D Stereo animation"
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
			],
			gmgx: [
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
			],
			gall: function(ord) {
				// sorts alphabatically 
				var reArrange = function(a, b) {
					if(a.name < b.name) return -1;
					if(a.name > b.name) return 1;
					return 0;
				}
				// rearrange alphabatically only after gallery initiated
				if (ord == true) {
					return this.g3d.concat(this.gtvc, this.gmgx).sort(reArrange);
				} else {	
					return this.g3d.concat(this.gtvc, this.gmgx);
				}
			}
		}

		// Loading gallery
		$scope.galleryActive = $scope.gallery.gall($scope.initGallery);

		$scope.filter = function(gal) {

			$scope.hero = {};
			// trigers ng-leave animation
			$scope.galleryActive = [];

			setTimeout(function() {
				// triggers ng-enter animation
				$scope.galleryActive = gal;
				$scope.$digest();
			}, 500); // ng animation delay
		}
		

// 				--- autoscale modal viewer ---

		$scope.getRealSize = function() {

			console.info('ctr - getting hero real size');

			if ($scope.hero.type == "img") {

				var heroPic = document.getElementById('heroPic');

				var heroHeightMax = heroPic.naturalHeight;
				var heroWidthMax = heroPic.naturalWidth;
				
			} else if ($scope.hero.type == "vid") {

				var heroVid = document.getElementById("heroVid");

				var heroHeightMax = heroVid.videoHeight;
				var heroWidthMax = heroVid.videoWidth;

			}
			
			var heroRatio = heroHeightMax / heroWidthMax;

			$scope.heroSize = {
				height: heroHeightMax,
				widht: heroWidthMax,
				ratio: heroRatio
			};

			return $scope.heroSize;
		}

			// calc browser's window size 

		$scope.getWinSize = function() {
			
			var winHeight = parseInt($(window).height());
			var winWidth = parseInt($(window).width());

			$scope.winSize = {
				width: winWidth,
				height: winHeight
			};

			return $scope.winSize;
		};

// 				--- Fits viewer to browser's window size ---

		$scope.resizeModal = function() {
			console.info('resizing modal viewer');

			$scope.getWinSize();

			console.table('win size in resizeModal : ', $scope.winSize);

			// Positioning

				// calc displayed height from img is 100% width of win
			var picHeight = $scope.winSize.width * $scope.heroSize.ratio;
			
				// center vertically
			var diffPos = ($scope.winSize.height - picHeight) / 2;
			var topPos = parseInt(diffPos < 0 ? 0 : diffPos);

			$("#viewer .modal-dialog").css('top', topPos + 'px');

				// auto scaling
			var maxHeight = $scope.winSize.height;

			var maxWidth = parseInt($scope.winSize.height / $scope.heroSize.ratio);

			$("#viewer .modal-dialog").css('max-width', maxWidth + 'px');
			$("#viewer .modal-dialog").css('max-height', maxHeight + 'px');

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
		
		// Delay viewer whdn new hero assigned
		$scope.$watch('loader.name', function(newVal, oldVal) {

			if (newVal !== oldVal) {
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

		// show modal when no hero change
		$scope.loadHero = function($index) {
			console.log('figure clicked');
			
			// change image in loader, init watcher loader.name
			$scope.loader = $scope.galleryActive[$index]
			
			if ($scope.hero == $scope.loader)  {
				$("#viewer").modal('show');
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
