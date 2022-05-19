app.classCtrl = function ($scope, $location) {
    $scope.klasses = [
        { name: 'Lop', parentID: 0, prefix: '', belong: 'none', orderBy: 1000, level: 1 },
        { name: 'Lop 10', parentID: 10, prefix: '', belong: 'Lop', orderBy: 2000, level: 1 },
        { name: 'Lop 10A1', parentID: 10, prefix: '____', belong: 'Lop 10', orderBy: 2750, level: 3 },
        { name: 'Lop 10A2', parentID: 10, prefix: '____', belong: 'Lop 10', orderBy: 2850, level: 3 },
        { name: 'Lop 11', parentID: 11, prefix: '', belong: 'Lop', orderBy: 3000, level: 1 },
        { name: 'Lop 11A', parentID: 11, prefix: '__', belong: 'Lop 11', orderBy: 3500, level: 2 },
        { name: 'Lop 11A1', parentID: 11, prefix: '____', belong: 'Lop 11', orderBy: 3625, level: 3 },
        { name: 'Lop 11A2', parentID: 11, prefix: '____', belong: 'Lop 11', orderBy: 3687, level: 3 },
        { name: 'Lop 11B', parentID: 11, prefix: '__', belong: 'Lop 11', orderBy: 3750, level: 2 },
        { name: 'Lop 11C', parentID: 11, prefix: '__', belong: 'Lop 11', orderBy: 3875, level: 2 },
        { name: 'Lop 12', parentID: 12, prefix: '', belong: 'Lop', orderBy: 4000, level: 1 },
        { name: 'Lop 12A', parentID: 12, prefix: '__', belong: 'Lop 12', orderBy: 4500, level: 2 },
        { name: 'Lop 12A1', parentID: 12, prefix: '____', belong: 'Lop 12', orderBy: 4625, level: 3 },
        { name: 'Lop 12A2', parentID: 12, prefix: '____', belong: 'Lop 12', orderBy: 4687, level: 3 },
        { name: 'Lop 12B', parentID: 12, prefix: '__', belong: 'Lop 12', orderBy: 4750, level: 2 }
    ];

    $scope.addClass = function () {
        $location.path('/addClass');
    }

    $scope.saveAddClass = function (name, belong) {
        if ((name != null || name != undefined) &&
            (belong != null || belong != undefined)
        ) {
            var index = $scope.klasses.findIndex(temp => temp.name === belong);

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

    $scope.editClass = function (klass, belong) {
        if (belong == 'none') {
            alert("Ban khong the sua lop nay!");
        } else {
            $scope.klass = klass;
            $location.path('/editClass');
        }
    }
}
