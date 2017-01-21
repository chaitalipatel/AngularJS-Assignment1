(function () {
	'use strict';

	angular.module('LunchCheck', [])
	.controller('LunchCheckController', LunchCheckController);

	LunchCheckController.$inject = ['$scope'];

	function LunchCheckController($scope) {
		
		$scope.msg = "Please enter data first";

		$scope.checkIfTooMuch = function () {			

			if($scope.list == "" || $scope.list == undefined){
				$scope.msg = "Please enter data first";				
			}
			else {				
				var dishes = $scope.list.split(",")

				if (dishes.length <=3)
					$scope.msg = "Enjoy!"
				else
					$scope.msg = "Too much!"					
			}			
				
					
			setColor();
		}

		var setColor = function(){
			$scope.customStyle = {};			
			if($scope.msg == "Enjoy!" || $scope.msg == "Too much!" ){
				$scope.customStyle.style = {"color":"green"};
				$scope.customStyle.borderStyle = {"border": "1px solid green"};
			}
			else {
				$scope.customStyle.style = {"color":"red"};
				$scope.customStyle.borderStyle  = {"border": "1px solid red"};
			}
		}
		setColor();
		
	};



})();