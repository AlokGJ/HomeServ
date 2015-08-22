(function(){
	var app;
	app = angular.module("Nilaya",  []);
	app.controller('PlaceExpenseController', function($scope, $rootScope){
		var self = this;
		this.itemName = "";
		this.amount = "";
		this.byList = ["whom?..","Alok","Ankit","Bhumit","Karthik"];
		this.breakUp = [];
		this.breakUp.Alok = 0;
		this.breakUp.Ankit = 0;
		this.breakUp.Bhumit = 0;
		this.breakUp.Karthik = 0;
		this.records = JSON.parse(localStorage.getItem("SharadaNilaya"));
		this.saveEntry = function(){
			var backBase = JSON.parse(localStorage.getItem("SharadaNilaya"));
			var submittedData = new Object();
			submittedData.ItemName = self.itemName;
			submittedData.Amount = self.amount;
			submittedData.byWhom = $scope.byList;
			submittedData.createdOn = new Date();
			backBase.push(submittedData);
			this.records = backBase;
			localStorage.setItem("SharadaNilaya",JSON.stringify(backBase));
			self.resetForm();
			self.prepareBreakUp();
			//this.records = JSON.parse(localStorage.getItem("SharadaNilaya"));
		};
		self.resetForm = function(){
			self.amount = "";
			self.itemName = "";
			$scope.byList = {};
		};
		self.prepareBreakUp = function () {
			if(this.records) {
				for(var i = 0; i < this.records.length; i++) {
					var name = this.records[i].byWhom;
					switch(name) {
						case 'Alok' : this.breakUp.Alok += parseInt(this.records[i].Amount,10);break;
						case 'Ankit' : this.breakUp.Ankit += parseInt(this.records[i].Amount,10);break;
						case 'Bhumit' : this.breakUp.Bhumit += parseInt(this.records[i].Amount,10);break;
						case 'Karthik' : this.breakUp.Karthik += parseInt(this.records[i].Amount,10);break;
					}
				}
				console.log(this.breakUp);
			}	
		};
		this.prepareBreakUp();
	});
})();