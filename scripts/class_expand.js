app.classExpandCtrl = function ($scope, $location) {
    
    $scope.saveEditClass = function (name, belong) {
        if ((name != null || name != undefined) &&
            (belong != null || belong != undefined)
        ) {
            var index_delete = $scope.klasses.findIndex(temp => temp.name === name);
            var index = $scope.klasses.findIndex(temp => temp.name === belong);

            $scope.klasses.splice(index_delete, 1);

            var tempOrderByBefore = $scope.klasses[index].orderBy * 1;
            var tempOrderByAfter = $scope.klasses[index + 1].orderBy * 1;
            var result = (tempOrderByBefore + tempOrderByAfter) / 2;

            var tempKlass = {
                name: name,
                parentID: $scope.klasses[index].parentID,
                prefix: $scope.klasses[index].prefix + '__',
                belong: belong,
                orderBy: result,
                level: $scope.klasses[index].level + 1
            };

            $scope.klasses.push(tempKlass);

            $location.path('/class');
        }
    }
}
