var app=angular.modul('myApp',[]);
app.controller("myDive", function ($scope){
$scope.friends=[
   {name:'huhuh',desc:'noman'} ,
   {name:"habbawi",desc:'nadaqwi'}



];

$scope.Clickme=function(name,desc){
$scope.updatename=name;
$scope.updatedesc=desc;
}
});
