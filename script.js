Vue.filter('currency', function(value)
{
return '$' + value.toFixed(2);
});

var demo = new Vue({
el: '#main',
data: {
services: [
{
name: 'Adult Hair Cut',
price: 13,
active: false
} , {
name: 'Child Hair Cut',
price: 8,
active: false
}, {
name: 'French Braid',
price: 10,
active: false
} , {
name: 'Blow Dry',
price: 10,
active: false
} , {
name: 'Basic Perm',
price: 22,
active: false
} , {
name: 'Chemical Relaxer',
price: 25,
active: false
} , {
name: 'Single Process Color',
price: 30,
active: false
} ,{
name: 'Manicure',
price: 15,
active: false
} , {
name: 'Pedicure',
price: 25,
active: false
} , {
name: 'Facial',
price: 35,
active: false
}, {
name: 'Eyebrow Wax',
price: 9,
active: false
}
]
},
methods: {
toggleActive:function(s) {
s.active = !s.active;
},
total: function() {
var total = 0;

this.services.forEach(function(s)
{
if (s.active){
total += s.price;
}
});
return total;
}
}
});
