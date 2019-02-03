// var colors = ['red', 'green', 'blue'];

// for (var i = 0; i < colors.length; i++) {
// 	console.log(colors[i]);
// }

// colors.forEach(function(color) {
// 	console.log(color);
// });



// Create an array of numbers
var numbers = [1, 2, 3, 4, 5, 6, 7];

// Create a variable to hold the sum
var sum = 0;

// // loop over the array, incrementing the sum variable
// numbers.forEach(function(number) {
//     sum += number;
// });
// // print the sum variable
// sum;


// another way to write it using afunction
function adder(number) {
    sum += number

};

numbers.forEach(adder);


// Moving away from For Loops

// The code below is calling 'savePost" three times, 
// but is doing so using a forloop. This works but makes
// it hard to understand the purpose of the code
// refactor the code to use a forEach

function handlePosts() {
    var posts = [
        { id: 23, title: 'Daily JS News' },
        { id: 52, title: 'Code Refactor City' },
        { id: 105, title: 'The Brightest Ruby' }
    ];

    // for (var i = 0; i < posts.length; i++) {
    //   savePost(posts[i]);
    // }

    posts.forEach(function (post) {
        savePost(post)
    });

}

// Processing Values:

// The array below contains an array of objects, each
// of which is a representation of an image. Using forEach
// helper, calculate the area of each image and store
// it in a new array called areas. The area of an image
// can be calculated as image.height * image.width.

var images = [
    { height: 10, width: 30 },
    { height: 20, width: 90 },
    { height: 54, width: 32 }
];
var areas = [];

// images[0].height

images.forEach(function (image) {
    var area = image.height * image.width;
    areas.push(area);
});

console.log(areas)


// Doubling numbers

var numbers = [1, 2, 3];
var doubleNumbers = [];

for (var i = 0; i < numbers.length; i++) {
    doubleNumbers.push(number[i] * 2);
}

// Or write using map

var doubled = numbers.map(function (number) {
    return number * 2;
});

doubled;
doubleNumbers;


// Using map

var cars = [
    { model: 'Buick', price: 'cheap' },
    { model: 'Camaro', price: 'expensive' }
];

var prices = cars.maps(function (car) {
    return car.price;
});


// Plucking Values

// Using map, create a new array that contains
// the 'height' property of each object. Assign
// this new array to the variable heights. Don't 
// forgetto use the return keyword in the function

var images = [
    { height: '34px', width: '39px' },
    { height: '54px', width: '19px' },
    { height: '83px', width: '75px' },
];

var heights;

heights = images.map(function (image) {
    return image.height;
});

heights;

// Usiing map, create a new array that contains
// distance/time value from each trip. The new array 
// should containt the distance/time value and
// assign the retuls to variable speeds
var trips = [
    { distance: 34, time: 10 },
    { distance: 90, time: 50 },
    { distance: 59, time: 25 }
];

var speeds;

speeds = trips.map(function (trip) {
    return trip.distance / trip.time;
});

speeds;




// Really hard - Implementing 'Pluck"

// This is a hard one! Implement a 'pluck' function. Pluck should 
// accept an array and a string representing a property name
// and return an array contain that property from each
// object.

// Example: 
// var person = {name: 'Bill'};
// person['name'] // returns "Bill"

function pluck(array, property) {

    var newarray = array.map(function (paint) {
        return paint[property];
    });
    return newarray;
}
var paints = [{ color: 'red' }, { color: 'blue' }, { color: 'yellow' }];
pluck(paints, 'color');


// Learning about filtering
// Here is an example using a loop
var products = [
    { name: "cucumber", type: 'vegetable' },
    { name: "banana", type: 'fruit' },
    { name: "celery", type: 'vegetable' },
    { name: "orange", type: 'fruit' }
];

var filterProducts = [];

for (var i = 0; i < products.length; i++) {
    if (products[i].type === 'fruit') {
        filteredProducts.push(products[i]);
    }
}

// example using a filter instead of a loop

products.filter(function (product) {
    return product.type === 'vegetable'
});

// More complex examples
var products = [
    { name: "cucumber", type: 'vegetable', quantity: 0, price: 1 },
    { name: "banana", type: 'fruit', quantity: 10, price: 15 },
    { name: "celery", type: 'vegetable', quantity: 30, price: 9 },
    { name: "orange", type: 'fruit', quantity: 3, price: 5 }
];

// how can we filter where the quantity is greater than zero an the
// price is less than 10. Also just type is vegetable

products.filter(function (product) {
    // DON"T FORGEt tO RETURN
    return product.type === 'vegetable'
        && product.quantity > 0
        && product.price < 10
});

// When is filtering a good idea?
// Using an example of a blog post. Filter out the comments
// that are relavent to the blog post you are interested in

var post = { id: 4, title: "New Post" };

var comments = [
    { postId: 4, content: 'awesome post' },
    { postId: 3, content: 'it was ok' },
    { postId: 4, content: 'neat' }
];

function commentsForPost(post, comments) {
    return comments.filter(function (comment) {
        return comment.postId === post.id;

    });
}

commentsForPost(post, comments);


// Filtering Values

// FIlter the array of numbers using the filter helper
// Creating a new array that only contains the numbers greater
// than 50. Assign this new array to a variaable called filtered numbers.
// don't forget to tuse the return keyword


var numbers = [15, 25, 35, 45, 55, 65, 75, 85, 95];

var filteredNumbers;

filteredNumbers = numbers.filter(function (number) {
    return number > 50;

});

// Handling Perimissions with Filter
// Filter the array of users, only returning users who have admin
// level access. Assign the return to varialbe filteredUsers.

var users = [
    { id: 1, admin: true },
    { id: 2, admin: false },
    { id: 3, admin: false },
    { id: 4, admin: false },
    { id: 5, admin: true },
];

var filteredUsers;

filteredUsers = users.filter(function (user) {
    return user.admin === true;
});


// Stuck on this one
// Create a reject function

// var numbers = [10, 20, 30]

// function reject(array, number) {
//     return array.filter(function (number) {
//         return number === false;
//     });


// }

// var lessThanFifteen = reject(numbers, function(number){
// 	return number > 15;
// });

// Querying for records to find
// we have an array of very specific usernames
// How would we find a particular user??

// Here is one way using a for loop
var users = [
    { name: 'Jill' },
    { name: 'Alex' },
    { name: 'Bill' }
];

var user;

for (var i = 0; i < users.length; i++) {
    if (users[i].name === 'Alex') {
        user = user[i];
        // if we find the user, we don't need to keep looking for them
        break;
        // break will stop the loop when we find what we are lookingfor
    };
};


// How else can we write it? Use the find function
users.find(function (user) {
    return user.name === 'Alex';
});

// This will only return the FIRST element that matchies
// 


// "new" operator 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/new


function Car(model) {
    this.model = model;
};

var cars = [
    new Car('Buick'),
    new Car('Camaro'),
    new Car('Focus')
];

// use the find function to look for a Focus

cars.find(function (car) {
    return car.model === 'Focus';
});


// Another example

var posts = [
    { id: 1, title: "new post" }
    { id: 2, title: "old post" }
];

var comment = { postId: 1, content: 'Great Post' }

function postForComment(posts, comment) {
    return posts.find(function (post) {
        return post.id === comment.postId;
    });
};

postForComment(posts, comment);


// Finding Admin users

// Find the user in the users's array who is an admin.
// Assign this user to the variable 'admin.

var users = [
    { id: 1, admin: false },
    { id: 2, admin: false },
    { id: 3, admin: true }
];

var admin;

admin = users.find(function (user) {
    return user.admin === true;
});

// What's your balance?

// Find the account with a balance of 12 and assignt it
// to the variable 'account'

var accounts = [
    { balance: -10 },
    { balance: 12 },
    { balance: 0 }
];

var account;

account = accounts.find(function (account) {
    return account.balance === 12;
});



// JERM's

function findWhere(ladders, { height: ladvalue }) {
    return ladders.find(function (ladder) {
        //   var height = Object.keys(criteriaKey)[0];
        //   var ladvalue = Object.values(criteriaKey)[0];
        return ladder[height] === ladvalue;
    });

}

// mine
function findWhere(ladders, criteriaKey) {
    return ladders.find(function (ladder) {
        var height = Object.keys(criteriaKey)[0];
        var ladvalue = Object.values(criteriaKey)[0];
        return ladder[height] === ladvalue;
    });

}

// Up until this point, we have looked at helps where we looked 
// through an array and returned a single value or a new array.
// Now we are going to cover helpers where we CONDENSE an array into a
// single value

// Exapmle one

var computers = [
    {name: 'Apple', ram: 24},
    {name: 'Compaq', ram: 4},
    {name: 'Acer', ram: 32}
];

// Lecture 16
// We want to find all of the computers that have greater than 16
// gigs of ram
// So create a loop that will tell you whether or not any of the
// computers you have in stock have greater than 16 gigs of ram

var allComputersCanRunProgam = true;

var onlySomeComputersCanRunProgram = false;

for (var i = 0; i < computers.length; i++) {
    var computer = computers[i];

    if (computer.ram <16) {
        // This will flip the logic which is why you set the bollean
        // earlier
        allComputersCanRunProgram = false;
    } else {
        onlySomeComputersCanRunProgram = true;
    }
    
}
"---"
allComputersCanRunProgam;
onlySomeComputersCanRunProgram;

// This is super tedious! It will also be harder for others to follow.

// Same example using the every function