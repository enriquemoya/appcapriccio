/**
 * Created by enrique on 20/04/17.
 */
app.directive('nomatch', [function () {
    return {
        require: 'ngModel',
        link: function (scope, elm, attrs, ctrl) {
            ctrl.$parsers.unshift(function (viewValue, $scope) {
                var noMatch = viewValue != scope.register_modal['register_pass']
                console.log(noMatch)
                ctrl.$setValidity('nomatch', !noMatch)
                return viewValue;
            })
        }
    }
}]);