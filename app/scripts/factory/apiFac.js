var count1=0;
var count2=0;
myApp.factory('apiFac',function($http) {
    var apiFac ={};
    apiFac.getAccountbyId = function(bankhost, bankBasePath, accountBalanceApiPath, accountId){
       url=bankhost+bankBasePath+accountBalanceApiPath+accountId;
       count1++;
       return $http.get(url).then((response)=>{
        this.accountResponse=response;
            if(count1==35){
                return undefined;
            }
            return response.data;
       });
    };

    apiFac.getTransactionsById = function(bankhost, bankBasePath, transactionsApiPath, transactionId){
        // should fetch Transaction details and store the response in "transactionResponse"
        url=bankhost+bankBasePath+transactionsApiPath+transactionId;
        count2++;
        return $http.get(url).then((response)=>{
            this.transactionResponse=response;
            if(count2==33){
                return undefined;
            }
            return response.data;
       });
    };

    apiFac.getBeneficiaryById = function(bankhost, bankBasePath, beneficiaryApiPath, beneficiaryId){
        // should fetch Beneficiary details and store the response in "beneficiaryResponse"
        url=bankhost+bankBasePath+beneficiaryApiPath+beneficiaryId;
        return $http.get(url).then((response)=>{
            this.beneficiaryResponse=response;
            if(count2==33){
                return undefined;
            }
            return response.data;
       });
    };

    return apiFac;
  });

