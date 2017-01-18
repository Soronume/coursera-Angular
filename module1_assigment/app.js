(function () {
    'use strict';

    angular.module('LunchCheck', [])
        .controller('LunchCheckController', LunchCheckController);

    LunchCheckController.$inject = ['$scope'];
    function LunchCheckController($scope) {
        $scope.lunchMenu = "";
        $scope.message = "";
        $scope.state = "";

        $scope.checkLunch = function () {
            var items = $scope.lunchMenu.split(',');
            items = items.filter(function (el) {  //filter empty strings
                return el.trim() != '';
            });
            var qty = items.length;
            $scope.state = "filled";
            if (qty === 0) {
                $scope.message = "Please enter data first";
                $scope.state = "empty";
            }
            else if (qty > 0 && qty <= 3) {
                $scope.message = "Enjoy!";
            }
            else if (qty > 3) {
                $scope.message = "Too much!";
            }
        };
    }

})();
