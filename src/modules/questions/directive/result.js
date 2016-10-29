/**
 * Created by semianchuk on 29.10.16.
 */
angular.module('questions')
    .directive('result', ['questionsFactory', function(questionsFactory) {
        return {
            restrict: 'E',
            scope: {},
            templateUrl: 'src/modules/questions/template/result.html',
            link: function (scope, element, attrs) {
                scope.data = questionsFactory.getResult()
                angular.forEach(scope.data, function (val, ind) {
                    val.text = val.text.replace('__&__', '<b>'+val.value+'</b>');
                })
            }
        }
    }])