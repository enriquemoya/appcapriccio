/**
 * Created by enrique on 3/04/17.
 */
'use strict';

app.controller("IndexCtrl", ["$filter", "$scope", '$location', "fireFact", function($filter, $scope, $location, fireFact) {

    $scope.LogGoogle = function (type) {
        let authGoogle = fireFact.fireAuth;
        authGoogle.$signInWithPopup(type).then(function(result) {
            let uid = result.user.uid;
            var refUsers = fireFact.fireRef('usuarios/'+uid);
            refUsers.$loaded().then(function (data) {
                if(!data.hasOwnProperty('nombre')){
                    refUsers.nombre=result.user.displayName
                    refUsers.email=result.user.email
                    refUsers.uid=uid
                    refUsers.$save().then(function (ref) {
                        if(ref.key==refUsers.$id){
                            UIkit.notification('Usuario Registrado.');
                            $('#audio_not')[0].play()
                        }else {
                            UIkit.notification('Error al registrar datos.');
                            $('#audio_not')[0].play()
                        }
                    }).catch(function (evt) {
                        console.log('catch: ',evt)
                        UIkit.notification('Error al registrar datos.');
                        $('#audio_not')[0].play()
                    })
                }else
                    UIkit.notification('Bienvenido de vuelta.');
                $('#audio_not')[0].play()
            })
        }).catch(function(error) {
            UIkit.notification('Error al registrar usuario.');
            $('#audio_not')[0].play()
        });
    }
}]).directive('pwCheck', [function () {
    return {
        require: 'ngModel',
        link: function (scope, elm, attrs, ctrl) {
            ctrl.$parsers.unshift(function (viewValue, $scope) {
                var noMatch = viewValue != scope.register_modal.register_pass.$viewValue
                ctrl.$setValidity('noMatch', !noMatch)
            })
        }
    }
}]);