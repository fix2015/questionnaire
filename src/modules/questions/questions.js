angular.module('questions',['ngSanitize'])
    .controller('questionsCtrl', ['$scope','listOfQuestion', function ($scope, listOfQuestion) {
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
                    val.error = 'write correct format'
                    checkValid=false
                }else{
                    val.error = ''
                }
            })
            return checkValid;
        }
    }])
    .directive('result', ['$sce', '$compile', function($sce, $compile) {
        return {
            restrict: 'E',
            scope: {
                data: '='
            },
            templateUrl: 'src/modules/questions/template/result.html',
            link: function (scope, element, attrs) {
                angular.forEach(scope.data, function (val, ind) {
                    val.text = val.text.replace('__&__', '<b>'+val.value+'</b>');
                })
            }
        }
    }])
    .directive('question', [ function() {
        return {
            restrict: 'E',
            scope: {
                data: '='
            },
            templateUrl: 'src/modules/questions/template/question.html',
            controller: function ($scope) {
                $scope.splitQuestion = $scope.data.text.split('__');
            }
        }
    }])
    .directive('formForQuestions', ['listOfQuestion', function( listOfQuestion) {
        return {
            restrict: 'E',
            templateUrl: 'src/modules/questions/template/form.html',
            controller: 'questionsCtrl',
        }
    }]);
