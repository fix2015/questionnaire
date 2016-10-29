/**
 * Created by semianchuk on 29.10.16.
 */
angular.module('questions')
    .controller('questionsCtrl', ['$scope','listOfQuestion', 'questionsFactory', function ($scope, listOfQuestion, questionsFactory) {
        $scope.listOfQuestion = listOfQuestion;
        $scope.resultData = [];

        $scope.start = function() {
            $scope.idOfQuestion = 0;
            $scope.process = true;
            $scope.list = $scope.getQuestion($scope.idOfQuestion);
        };

        $scope.next = function() {
            if(!$scope.validation()) return
            $scope.idOfQuestion++;
            $scope.resultData = $scope.resultData.concat(angular.copy($scope.list.questions));
            questionsFactory.postResult(angular.copy($scope.list.questions));
            $scope.list = $scope.getQuestion($scope.idOfQuestion);
            if(!$scope.list && $scope.resultData.length>0){
                $scope.process = false;
            }
        };

        $scope.getQuestion = function(id){
            return listOfQuestion[id]
        }

        $scope.validation = function (){
            var checkValid = true;
            angular.forEach($scope.list.questions, function (val, ind) {
                if(!val.value || val.valid && !val.value.match(val.valid)){
                    val.error = 'write correct format';
                    checkValid=false;
                }else{
                    val.error = '';
                }
            })
            return checkValid;
        }
    }])