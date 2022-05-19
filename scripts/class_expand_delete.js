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

    $scope.findIndex = function (object, level, parentID) {
        $scope.arrayIndex = [];

        for (var i = 0; i < object.length; i++) {
            if (level < object[i].level && object[i].level <= $scope.maxLevel($scope.klasses) && object[i].parentID == parentID) {
                $scope.arrayIndex.push(i);
            }
        }

        return $scope.arrayIndex;
    };

    $scope.deleteClass = function (klass) {
        var index = $scope.klasses.findIndex(temp => temp.name == klass.name);

        var tempLevel = $scope.klasses[index].level;
        var tempParentID = $scope.klasses[index].parentID;

        $scope.klasses.splice(index, 1);
        $scope.arrayIndex = $scope.findIndex($scope.klasses, tempLevel, tempParentID);

        for (var i = 0; i < $scope.arrayIndex.length; i++) {
            $scope.klasses.splice($scope.arrayIndex[i] , $scope.arrayIndex.length);
        }
    }
}