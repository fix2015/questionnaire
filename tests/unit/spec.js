describe('Test question app', function() {
  var element, scope;

  beforeEach(module('angularApp','questions'));

  beforeEach(inject(function ($rootScope, $compile, $httpBackend, $controller) {
    scope = $rootScope.$new();
    $httpBackend.whenGET('src/modules/questions/template/form.html').respond(200, '');
    $httpBackend.whenGET('public/templates/home.html').respond(200, '');

    $controller('questionsCtrl', { $scope: scope });
  }));
  
  it("check list of question", function() {
    expect(scope.listOfQuestion.length).toBe(3);
  });

  it("check variable resultData", function() {
    expect(scope.list).toBeFalsy();
    expect(scope.resultData.length).toBe(0);
  });

  it("check function start", function() {
    scope.start()
    expect(scope.idOfQuestion).toBe(0);
    expect(scope.process).toBeTruthy();
    expect(scope.list).toBeTruthy();
  });

  it("check function next with success validation", function() {
    scope.start()
    spyOn(scope, "validation").and.returnValue(true);
    scope.next()
    expect(scope.idOfQuestion).toBe(1);
    expect(scope.process).toBeTruthy();
    expect(scope.list).toBeTruthy();
  });

  it("check function next with not success validation", function() {
    scope.start()
    spyOn(scope, "validation").and.returnValue(false);
    scope.next()
    expect(scope.idOfQuestion).toBe(0);
    expect(scope.process).toBeTruthy();
    expect(scope.list).toBeTruthy();
  });

  it("check function getQuestion", function() {
    expect(scope.getQuestion(0)).toBeTruthy();
    expect(scope.getQuestion(1).text).toBe('RocketRoute would like to give you the best product. This survey will take few seconds.');
    // if we send wrong id
    expect(scope.getQuestion(5)).toBeFalsy();
  });
  
  it("check function validation", function() {
    scope.list = {"text":"We need your address to confirm our best offer","questions":[{"id":"21","type":"text","text":"I live in __&__","name":"address","valid":{},"datalist":["Ukraine","Russia","USA","Britain","Swed"],"value":"asd"},{"id":"22","type":"text","text":"My zip code is __&__","name":"zip","valid":{},"value":"asdf"}]}
    expect(scope.validation()).toBeFalsy();
  });

})

describe('Test directive formForQuestions', function() {
  var element, scope;
  beforeEach(module('angularApp','questions'));
  beforeEach(inject(function ($rootScope, $compile, $httpBackend, $controller) {
    scope = $rootScope.$new();
    $httpBackend.whenGET('src/modules/questions/template/form.html').respond(200, '');
    $httpBackend.whenGET('public/templates/home.html').respond(200, '');

     element = angular.element("<form-for-questions></form-for-questions>");

     element = $compile(element)(scope);
     scope.$digest();
  }))

  it("check list of question", function() {
    expect(element.find('form')).toBeDefined();
    expect(element.find('result')).toBeDefined();
  });
})

describe('Test directive result', function() {
  var element, scope;
  beforeEach(module('angularApp','questions'));
  beforeEach(inject(function ($rootScope, $compile, $httpBackend, $controller) {
    scope = $rootScope.$new();
    $httpBackend.whenGET('src/modules/questions/template/result.html').respond(200, '');
    $httpBackend.whenGET('public/templates/home.html').respond(200, '');

     element = angular.element("<result data='result success'></result>");

     element = $compile(element)(scope);
     scope.$digest();
  }))

  it("check result", function() {
    expect(element.attr('data')).toBe('result success');
  });
})

describe('Test directive question', function() {
  var element, scope,
      data=JSON.stringify({"id":"21","type":"text","text":"I live in __&__","name":"address","valid":{},"datalist":["Ukraine","Russia","USA","Britain","Swed"]})

  beforeEach(module('angularApp','questions'));
  beforeEach(inject(function ($rootScope, $compile, $httpBackend, $controller) {
    scope = $rootScope.$new();
    $httpBackend.whenGET('src/modules/questions/template/question.html').respond(200, '');
    $httpBackend.whenGET('public/templates/home.html').respond(200, '');

    element = angular.element("<question data='"+data+"'></question>");

    $compile(element)(scope);
    scope.$digest();
    $rootScope.$digest();
    scope = element.isolateScope() || element.scope()

  }))

  it("check list of splitQuestion", function() {
    expect(element.attr('data')).toEqual(data);
  });
})