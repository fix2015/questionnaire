angular.module('questions')
    .directive('formForQuestions', ['listOfQuestion', function( listOfQuestion) {
        return {
            restrict: 'E',
            templateUrl: 'src/modules/questions/template/form.html',
            controller: 'questionsCtrl',
            link: function (scope, element) {
                element.addClass("flex");
            }
        }
    }])