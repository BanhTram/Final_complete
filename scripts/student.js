app.studentCtrl = function ($scope, $location) {
    $scope.students = [
        { name: 'Nam', age: new Date(2004, 01, 01), klass: 'Lop 10A1' },
        { name: 'Bede', age: new Date(2006, 01, 01), klass: 'Lop 10A2' },
        { name: 'Hoho', age: new Date(2003, 01, 01), klass: 'Lop 10A2' },
        { name: 'Kaka', age: new Date(2002, 01, 01), klass: 'Lop 11A1' },
        { name: 'Benben', age: new Date(2004, 01, 01), klass: 'Lop 11A2' },
        { name: 'Lunu', age: new Date(2006, 01, 01), klass: 'Lop 12A1' },
        { name: 'Lpaa', age: new Date(2001, 01, 01), klass: 'Lop 12A2' }
    ];

    $scope.calculateAge = function (birthdate) {
        return (new Date().getFullYear()) - (new Date(birthdate).getFullYear());
    }

    $scope.studentDefault = $scope.students.slice();
    $scope.inputDataSearch = {};

    $scope.search = function () {
        var tempName = $scope.inputDataSearch.name;
        var tempAge = $scope.inputDataSearch.age;
        var tempKlass = $scope.inputDataSearch.klass;

        $scope.students = angular.copy(_.filter($scope.studentDefault,
            function (student) {
                return ((tempAge === null || tempAge === undefined) || (tempAge !== null && tempAge !== undefined && $scope.calculateAge(student.age) == tempAge)) &&
                    ((tempKlass === null || tempKlass === undefined) || (tempKlass !== null && tempKlass !== undefined && student.klass.includes(tempKlass))) &&
                    ((tempName === null || tempName === undefined) || (tempName !== null && tempName !== undefined && student.name.includes(tempName)));
            }));
    };

}
