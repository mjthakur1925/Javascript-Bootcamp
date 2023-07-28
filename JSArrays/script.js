const fruits = [ "Mango","Banana","Orange","grapes"];
//console.log(fruits);
//--------------push()- Add elements to the end of the array
fruits.push("Apple", "papaya", "pineapple");
// console.log(fruits);

// ------------pop()-Removes single element from the end of the array and also returns the popped element
 const lastfruit = fruits.pop();
 // console.log(lastfruit);

// ----------------unshift(): Add elements to start of the array
fruits.unshift("Pomegranate","Avocado","Coconut");

// ---------shift(): Removes the first element and also resturns it
fruits.shift()