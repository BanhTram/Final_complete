app.classExpandDeleteCtrl = function ($scope, $location) {
    $scope.maxLevel = function (object) {
        var max = 0;

        for (var i = 1; i < object.length; i++) {
            if (max < object[i].level) {
                max = object[i].level;
            }
        }
        return max;
    }

    $scope.count = function (object, level, parentID) {
        var count = 0;

        for (var i = 0; i < object.length; i++) {
            if (level < object[i].level && object[i].level <= $scope.maxLevel($scope.klasses) && object[i].parentID == parentID) {
                count++;
            }
        }
        return count;
    };

    $scope.deleteClass = function (klass) {
        var index = $scope.klasses.indexOf(klass);
        var tempLevel = $scope.klasses[index].level;
        var tempParentID = $scope.klasses[index].parentID;

        $scope.klasses.splice(index, 1);

        for (var i = 0; i <= $scope.klasses.length; i++) {
            if ($scope.klasses[i].level > tempLevel &&
                $scope.klasses[i].parentID == tempParentID) {
                return $scope.klasses.splice(i, $scope.count($scope.klasses, tempLevel, tempParentID));
            }
        }
    }
}