     
var a = moment('2016-01-01','MM/DD/YYYY'); 
console.log(a._d);
var b = a.add(1, 'week'); 
a.format();
console.log(b._d);