(function () {
    'use strict';

    angular.module('ShoppingListCheckOff', [])
        .controller('ToBuyController', ToBuyController)
        .controller('AlreadyBoughtController', AlreadyBoughtController)
        .service('ShoppingListCheckOffService',ShoppingListCheckOffService)
    ;

    ToBuyController.$inject = ['ShoppingListCheckOffService'];
    function ToBuyController(ShoppingListCheckOffService) {
        var toBuy=this;
        toBuy.items=ShoppingListCheckOffService.getToBuyItems();
        toBuy.moveToBought=function(index){
            ShoppingListCheckOffService.moveToBought(index);
        };
        toBuy.listIsEmpty=function(){
            return toBuy.items.length===0;
        };
    }

    AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
    function AlreadyBoughtController(ShoppingListCheckOffService) {
        var alreadyBought=this;
        alreadyBought.items=ShoppingListCheckOffService.getAlreadyBoughtItems();
        alreadyBought.listIsEmpty=function(){
            return alreadyBought.items.length===0;
        };
    }


    function ShoppingListCheckOffService() {
        var service = this;

        // List of shopping items
        var items = [{ name: "plomeek soup ", quantity: 10 },
            { name: "Jestral tea", quantity: 2 },
            { name: "horta's eggs", quantity: 100 },
            { name: "romulan ale", quantity: 4 },
            { name: "gagh", quantity: 3 }];

        var toBuyItems=items;
        var boughtItems=[];

        service.getToBuyItems = function () {
            return toBuyItems;
        };

        service.getAlreadyBoughtItems = function () {
            return boughtItems;
        };

        service.moveToBought = function (index) {
            var item=toBuyItems.splice(index, 1)[0];
            boughtItems.push(item);
        };
    }
})();