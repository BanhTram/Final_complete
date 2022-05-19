app.studentExpandCtrl = function ($scope, $location) {

    $scope.addStudent = function () {
        $location.path('/addStudent');
    }

    $scope.saveAddStudent = function (name, age, klass) {
        if (
            (name != null || name != undefined) &&
            (age != null || age != undefined) &&
            (klass != null || klass != undefined)
        ) {
            var tempStudent = { name: name, age: $scope.calculateAge(age), klass: klass };

            $scope.students.push(tempStudent);
            $scope.studentDefault.push(tempStudent);

            $location.path('/student');

        }
    }

    $scope.editStudent = function (student) {
        $scope.student = student;
        $location.path('/editStudent');
    }

    $scope.saveEditStudent = function (name, age, klass) {
        if ((name != null || name != undefined) && (age != null || age != undefined) && (klass != null || klass != undefined)) {
            var index = $scope.students.findIndex(temp => temp.name === name);

            $scope.students.splice(index, 1);
            $scope.students.push({ name: name, age: age, klass: klass });

            $scope.studentDefault.splice(index, 1);
            $scope.studentDefault.push({ name: name, age: age, klass: klass });

            $location.path('/student');
        }
    }

    $scope.deleteStudent = function (students) {
        var index_students = $scope.students.findIndex(temp => temp.name === students.name);
        var index_studentDefault = $scope.studentDefault.findIndex(temp => temp.name === students.name);

        $scope.students.splice(index_students, 1);
        $scope.studentDefault.splice(index_studentDefault, 1);
    }
}