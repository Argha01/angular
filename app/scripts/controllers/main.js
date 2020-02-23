var myApp = angular.module('myApp', []);

myApp.controller('MainController', function($scope,apiFac) {
    
  /* NOTE: 
          1. string mentioned inside double quotes are scope properties
          2. string mentioned inside single quote are id of the html elements
  */
    
  $scope.init = function() {
    // provide valid values to the corresponding properties from problem statement
    $scope.bank1host ="models";
    $scope.bank2host = "models";
    $scope.bank1BasePath = "/united-federation-bank";
    $scope.bank2BasePath = "/the-ferengi-commerce-bank";
    $scope.accountBalanceApiPath = "/account/";
    $scope.transactionsApiPath = "/transactions/";
    $scope.beneficiaryApiPath = "/beneficiaries/";
    $scope.bank1AccountId = "ufbAccount.json";
    $scope.bank2AccountId = "tfcbAccount.json";
    $scope.bank1TransactionId = "ufbTransactions.json";
    $scope.bank2TransactionId = "tfcbTransactions.json";
    $scope.bank1BeneficiariesId = "ufbBeneficiaries.json";
    $scope.bank2BeneficiariesId = "tfcbBeneficiaries.json";

    // boolean properties which are used to display or hide
    $scope.showbenificiary;
    $scope.showtransaction;
    $scope.showBeneficiaryFromBank2;
    $scope.showBeneficiaryFromBank1;
    $scope.show_bank1_dialog;
    $scope.show_bank2_dialog;
    $scope.show_agg_dialog;
      
  
    $scope.getBank1AccountBalance();
    $scope.getBank2AccountBalance();
    $scope.getBank1TransactionDetails();
    $scope.getBank2TransactionDetails();
    $scope.getBank1Beneficiaries();
    $scope.getBank2Beneficiaries();
    //get AccountBalance, TransactionDetails, Beneficiaries for both banks by default  
    $scope.falseFlag=()=>{
      $scope.showbenificiary=false;
      $scope.showtransaction=false;
      $scope.showBeneficiaryFromBank2=false;
      $scope.showBeneficiaryFromBank1=false;
      $scope.show_bank1_dialog=false;
      $scope.show_bank2_dialog=false;
      $scope.show_agg_dialog=false;
    }
    $scope.falseFlag();  
  }
  // bankhost, bankBasePath, accountBalanceApiPath, accountId
  // $scope.accountFromB1=true;
  $scope.getBank1AccountBalance = function() {
          // retrieve account balances for Bank 1 here using the factory getAccountbyId(..) and store the response in "accountFromB1"
        apiFac.getAccountbyId($scope.bank1host,$scope.bank1BasePath,$scope.accountBalanceApiPath,$scope.bank1AccountId)
        .then(()=>{
          $scope.accountFromB1=apiFac.accountResponse.data;
        })
  }
  
  $scope.getBank2AccountBalance = function() {
          // retrieve account balances for Bank 2 here using the factory getAccountbyId(..) and store the response in "accountFromB2"
          apiFac.getAccountbyId($scope.bank2host,$scope.bank2BasePath,$scope.accountBalanceApiPath,$scope.bank2AccountId)
          .then(()=>{
            $scope.accountFromB2=apiFac.accountResponse.data;
          })
  }

  $scope.getBank1TransactionDetails = function() {
      // retrieve Transaction details for Bank 1 here using the factory getTransactionsById(..) and store the response in "transactionArrayFromB1"
         apiFac.getTransactionsById($scope.bank1host,$scope.bank1BasePath,$scope.transactionsApiPath,$scope.bank1TransactionId)
         .then(()=>{
          $scope.transactionArrayFromB1=apiFac.transactionResponse.data;
         })
    }

  $scope.getBank2TransactionDetails = function() {
      // retrieve Transaction details for Bank 2 here using the factory getTransactionsById(..) and store the response in "transactionArrayFromB2"
      apiFac.getTransactionsById($scope.bank2host,$scope.bank2BasePath,$scope.transactionsApiPath,$scope.bank2TransactionId)
      .then(()=>{
         $scope.transactionArrayFromB2=apiFac.transactionResponse.data;
       })
    }

  $scope.getBank1Beneficiaries = function() {
      // retrieve Beneficiary details for Bank 1 here using the factory getBeneficiaryById(..) and store the response in "beneficiaryArrayFromB1"
      apiFac.getBeneficiaryById($scope.bank1host,$scope.bank1BasePath,$scope.beneficiaryApiPath,$scope.bank1BeneficiariesId)
      .then(()=>{
          $scope.beneficiaryArrayFromB1=apiFac.beneficiaryResponse.data;
          console.log($scope.beneficiaryArrayFromB1);
      })
    }

  $scope.getBank2Beneficiaries = function() {
      // retrieve Beneficiary details for Bank 2 here using the factory getBeneficiaryById(..) and store the response in "beneficiaryArrayFromB2"
      apiFac.getBeneficiaryById($scope.bank2host,$scope.bank2BasePath,$scope.beneficiaryApiPath,$scope.bank2BeneficiariesId)
      .then((response)=>{
         $scope.beneficiaryArrayFromB2=apiFac.beneficiaryResponse.data;
      })

  }

  $scope.firstClick = function() {
      // modify width of 'mySidebar' div tag as 250px
      // modify marginLeft of 'main' div tag as 250px  
      document.getElementById("mySidebar").style.width='250px';
      document.getElementById("main").style.marginLeft='250px';   
  }

  $scope.closeNav = function() {
      // modify width of 'mySidebar' div tag as 0px
      // modify marginLeft of 'main' div tag as 0px
      document.getElementById("mySidebar").style.width='0px';
      document.getElementById("main").style.marginLeft='0px';   

  }

  $scope.benificiaryclick = function() {
    //display only 'show-benificiary' div tag using "showbenificiary" 
    $scope.falseFlag(); 
    $scope.showbenificiary=true;
  }

  $scope.transactionclick = function() {
    //display only 'account-container' div tag using "showtransaction"
    $scope.falseFlag();
    $scope.showtransaction=true;
  }

  $scope.toggleBank1 = function() {
      //toggle only 'bank1-transactions' div tag using "show_bank1_dialog" and hide all others
      $scope.show_bank1_dialog=!$scope.show_bank1_dialog;
      $scope.show_bank2_dialog=false;
      $scope.show_agg_dialog=false;
  }

  $scope.toggleBank2 = function() {
     //toggle only 'bank2-transactions' div tag using "show_bank2_dialog" and hide all others
     $scope.show_bank2_dialog=!$scope.show_bank2_dialog;  
     $scope.show_bank1_dialog=false;
     $scope.show_agg_dialog=false;
  }

  $scope.toggleAllBank = function() {
    //toggle only 'show-agg' div tag using "show_agg_dialog" and hide all others
     $scope.show_agg_dialog=!$scope.show_agg_dialog;  
     $scope.show_bank1_dialog=false;
     $scope.show_bank2_dialog=false;
  }


  $scope.selectChanged = function(selected) {
    // display, hide 'beneficiary-bank1', 'beneficiary-bank2' div tags using "showBeneficiaryFromBank1" and "showBeneficiaryFromBank2" based on the Account ID selected by user
    if(selected=='bank1')
    {
      $scope.showBeneficiaryFromBank1=true;
      $scope.showBeneficiaryFromBank2=false;
    }
    else if(selected=='bank2')
    {
      $scope.showBeneficiaryFromBank2=true;
      $scope.showBeneficiaryFromBank1=false;
    }
    else
    {
      $scope.showBeneficiaryFromBank2=false;
      $scope.showBeneficiaryFromBank1=false; 
    }

  }

  $scope.init();
});
