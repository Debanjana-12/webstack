angular.module("Myemp",[])
.filter("myfilter",function()
{
    return function(input,option)
    {
        if(isNaN(option)||(option==""))
        {
            return input;
        }
        else {
        return input.substring(0,option).toUpperCase();
        
    }}
})
.controller("empCtrl",function($scope)
{
    var employees=[
        {name:'Jagriti',dob:new Date("July 21,1990"),gender:"Female",salary:50000.779},
        {name:'Siddharth',dob:new Date("July 20,1987"),gender:"Male",salary:80000.889},
        {name:'Sarthak',dob:new Date("August 19,1983"),gender:"Male",salary:70000.778},
        {name:'Debanjana',dob:new Date("November 21,1989"),gender:"Female",salary:100000.778},
        {name:'Pankaj',dob:new Date("June 21,1980"),gender:"Male",salary:120000.667},
        {name:'Vasav',dob:new Date("May 21,1990"),gender:"Male",salary:80000.776}
    ];
    $scope.employees=employees;
    $scope.rowlimit=6;

});