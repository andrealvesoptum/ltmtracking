var app = angular.module('LTMApp', []);
app.controller('ltmController', function($scope) {
  var softSkill = {
    softSkillTotal : 100,
    softSkillWeight : {
      id_1: 6,
      id_2: 5,
      id_3: 5,
      id_4: 4
    },
    softSkillSelect : {
      id_1: "5",
      id_2: "5",
      id_3: "5",
      id_4: "5"
    }
  };

  var mainframeSkill = {
    mainframeSkillTotal : 100,
    mainframeSkillWeight : {
      id_1: 6,
      id_2: 6,
      id_3: 4,
      id_4: 4
    },
    mainframeSkillSelect : {
      id_1: "5",
      id_2: "5",
      id_3: "5",
      id_4: "5"
    }
  };

  var modernSkill = {
    modernSkillTotal : 100,
    modernSkillWeight : {
      id_1: 6,
      id_2: 6,
      id_3: 4,
      id_4: 4
    },
    modernSkillSelect : {
      id_1: "5",
      id_2: "5",
      id_3: "5",
      id_4: "5"
    }
  };

  $scope.softSkillTotal = softSkill.softSkillTotal;
  $scope.mainframeSkillTotal = mainframeSkill.mainframeSkillTotal;
  $scope.modernSkillTotal = modernSkill.modernSkillTotal;

  $scope.softSkillWeight = softSkill.softSkillWeight;
  $scope.softSkillSelect = softSkill.softSkillSelect;

  $scope.mainframeSkillWeight = mainframeSkill.mainframeSkillWeight;
  $scope.mainframeSkillSelect = mainframeSkill.mainframeSkillSelect;

  $scope.modernSkillWeight = modernSkill.modernSkillWeight;
  $scope.modernSkillSelect = modernSkill.modernSkillSelect;


  $scope.calculateSkill = function() {
      $scope.softSkillTotal = ($scope.softSkillWeight.id_1 * $scope.softSkillSelect.id_1) + ($scope.softSkillWeight.id_2 * $scope.softSkillSelect.id_2) + ($scope.softSkillWeight.id_3 * $scope.softSkillSelect.id_3) + ($scope.softSkillWeight.id_4 * $scope.softSkillSelect.id_4);
      $scope.mainframeSkillTotal = ($scope.softSkillWeight.id_1 * $scope.mainframeSkillSelect.id_1) + ($scope.mainframeSkillWeight.id_2 * $scope.mainframeSkillSelect.id_2) + ($scope.mainframeSkillWeight.id_3 * $scope.mainframeSkillSelect.id_3) + ($scope.mainframeSkillWeight.id_4 * $scope.mainframeSkillSelect.id_4);
      $scope.modernSkillTotal = ($scope.modernSkillWeight.id_1 * $scope.modernSkillSelect.id_1) + ($scope.modernSkillWeight.id_2 * $scope.modernSkillSelect.id_2) + ($scope.modernSkillWeight.id_3 * $scope.modernSkillSelect.id_3) + ($scope.modernSkillWeight.id_4 * $scope.modernSkillSelect.id_4);
  }
})
