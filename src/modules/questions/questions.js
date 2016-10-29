angular.module('questions',['ngSanitize'])
    .controller('questions', function ($scope) {

    })
    .directive('result', ['$sce', '$compile', function($sce, $compile) {
        return {
            restrict: 'E',
            scope: {
                data: '='
            },
            templateUrl: 'src/modules/questions/result.html',
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
            templateUrl: 'src/modules/questions/question.html',
            link: function (scope) {
                scope.splitQuestion = scope.data.text.split('__');
            }
        }
    }])
    .directive('formForQuestions', ['listOfQuestion', function( listOfQuestion) {
        return {
            restrict: 'E',
            templateUrl: 'src/modules/questions/form.html',
            link: function (scope, element, attrs, $rootScope) {
                scope.listOfQuestion = listOfQuestion;
                scope.resultData = [];
                scope.start = function() {
                    scope.idOfQuestion = 0;
                    scope.process = true;
                    scope.list = scope.getQuestion(scope.idOfQuestion);
                };
                scope.next = function() {
                    if(!validation()) return
                    scope.idOfQuestion++;
                    scope.resultData = scope.resultData.concat(angular.copy(scope.list.questions));
                    scope.list = scope.getQuestion(scope.idOfQuestion);
                    if(!scope.list && scope.resultData.length>0){
                        scope.process = false;
                    }
                };
                scope.getQuestion = function(id){
                    return listOfQuestion[id]
                }

                function validation(){
                    var checkValid = true;
                    angular.forEach(scope.list.questions, function (val, ind) {
                        if(val.valid && !val.valid.test(val.value) || !val.value){
                            val.error = 'write correct format'
                            checkValid=false
                        }else{
                            val.error = ''
                        }
                    })
                    return checkValid;
                }
            }
        }
    }]);
