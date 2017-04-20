/**
 * Created by enrique on 3/04/17.
 */
'use strict';

app.controller("IndexCtrl", ["$filter", "$scope", '$location', "fireFact", function($filter, $scope, $location, fireFact) {

    $scope.LogGoogle = function (type) {
        let authGoogle = fireFact.fireAuth;
        authGoogle.$signInWithPopup(type).then(function(result) {
            console.log("Signed in as:", result);
            let uid = result.user.uid;
            var refUsers = fireFact.fireRef('Users/'+uid);
            refUsers.$loaded().then(function (data) {
                if(data){
                    console.log("not null")
                }else
                    console.log('null')
            })
        }).catch(function(error) {
            console.error("Authentication failed:", error);
        });
    }
}]);