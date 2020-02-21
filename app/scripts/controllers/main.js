var myApp = angular.module('myApp', []);

myApp.controller('MainController', function($scope,apiFac) {
    
  /* NOTE: 
          1. string mentioned inside double quotes are scope properties
          2. string mentioned inside single quote are id of the html elements
  */
    
  $scope.init = function() {
    // provide valid values to the corresponding properties from problem statement
    $scope.bank1host ="";
    $scope.bank2host = "";
    $scope.bank1BasePath = "";
    $scope.bank2BasePath = "";
    $scope.accountBalanceApiPath = "";
    $scope.transactionsApiPath = "";
    $scope.beneficiaryApiPath = "";
    $scope.bank1AccountId = "";
    $scope.bank2AccountId = "";
    $scope.bank1TransactionId = "";
    $scope.bank2TransactionId = "";
    $scope.bank1BeneficiariesId = "";
    $scope.bank2BeneficiariesId = "";

    // boolean properties which are used to display or hide
    $scope.showbenificiary;
    $scope.showtransaction;
    $scope.showBeneficiaryFromBank2;
    $scope.showBeneficiaryFromBank1;
    $scope.show_bank1_dialog;
    $scope.show_bank2_dialog;
    $scope.show_agg_dialog;
      
    // get AccountBalance, TransactionDetails, Beneficiaries for both banks by default  
    
  }

  $scope.getBank1AccountBalance = function() {
      
          // retrieve account balances for Bank 1 here using the factory getAccountbyId(..) and store the response in "accountFromB1"
  }

  $scope.getBank2AccountBalance = function() {
          // retrieve account balances for Bank 2 here using the factory getAccountbyId(..) and store the response in "accountFromB2"
  }

  $scope.getBank1TransactionDetails = function() {
      // retrieve Transaction details for Bank 1 here using the factory getTransactionsById(..) and store the response in "transactionArrayFromB1"
  }

  $scope.getBank2TransactionDetails = function() {
      // retrieve Transaction details for Bank 2 here using the factory getTransactionsById(..) and store the response in "transactionArrayFromB2"
  }

  $scope.getBank1Beneficiaries = function() {
      // retrieve Beneficiary details for Bank 1 here using the factory getBeneficiaryById(..) and store the response in "beneficiaryArrayFromB1"
  }

  $scope.getBank2Beneficiaries = function() {
      // retrieve Beneficiary details for Bank 2 here using the factory getBeneficiaryById(..) and store the response in "beneficiaryArrayFromB2"
  }


  $scope.firstClick = function() {
      // modify width of 'mySidebar' div tag as 250px
      // modify marginLeft of 'main' div tag as 250px  
  }

  $scope.closeNav = function() {
      // modify width of 'mySidebar' div tag as 0px
      // modify marginLeft of 'main' div tag as 0px
  }

  $scope.benificiaryclick = function() {
    //display only 'show-benificiary' div tag using "showbenificiary"
  }

  $scope.transactionclick = function() {
    //display only 'account-container' div tag using "showtransaction"
  }

  $scope.toggleBank1 = function() {
      //toggle only 'bank1-transactions' div tag using "show_bank1_dialog" and hide all others
  }

  $scope.toggleBank2 = function() {
     //toggle only 'bank2-transactions' div tag using "show_bank2_dialog" and hide all others
  }

  $scope.toggleAllBank = function() {
    //toggle only 'show-agg' div tag using "show_agg_dialog" and hide all others
  }


  $scope.selectChanged = function(selected) {
    // display, hide 'beneficiary-bank1', 'beneficiary-bank2' div tags using "showBeneficiaryFromBank1" and "showBeneficiaryFromBank2" based on the Account ID selected by user
  }

  $scope.init();
});
