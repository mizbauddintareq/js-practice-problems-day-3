/* 1.  জাভাস্ক্রিপ্ট কি জিনিস এইটা কি জানো?
Yes. */

/* 2. জাভাস্ক্রিপ্ট কিভাবে কাজ করে সেটা কি জানো?
Yes. */

/* 3. ভেরিয়েবল কি জিনিস ?
Variable means anything that can vary. */

/* 4. ভেরিয়েবল কিভাবে ডিক্লেয়ার করে ?
 var name ="Mizba" */

/* 5. ভেরিয়েবল এর মান কিভাবে চেইঞ্জ করে বা আপডেট করে ?
 name ="Mizba Uddin Tareq" */

/*  6. কি কি ধরণের ভেরিয়েবল হয়? সেগুলা কি কি (হিন্টস: Numeric, String, Boolean)
var myMoney = 700;
var myName = "Mizba Uddin Tareq";
var isYourName = true; */

/* 7. জাভাস্ক্রিপ এ primitive and non primitive data types কি কি ? উদাহরণ হিসেবে বলো।
The Primitive Data types in JavaScript include Number, String, Boolean, Undefined, Null and Symbol.
The non primitive data types in JS include Array, Object, RegExp  */

/* 8. ভেরিয়েবল এর নাম কিভাবে কিভাবে ডিক্লেয়ার করতে হয়। কোন কোন জিনিস নাম এ লেখা যাবে না। অর্থাৎ Variable এর naming convention সম্পর্কে বলো। 
Don't use Reserve keyword, - and and it can't be started with a Number. */

/* 9. দুইটা ভেরিয়েবল এর মধ্যে =, -, *, /, % কিভাবে করে? 
var num1 = 20;
var num2 = 4;

var sum1 = num1 + num2;
var sum2 = num1 - num2;
var sum3 = num1 * num2;
var sum4 = num1 / num2;
var sum5 = num1 % num2; */

/* 10. শর্টহ্যান্ড গুলো জানতে হবে। বিশেষ করে +=, -=, *=, /= জানতে হবে। 
+= Means addition of new number with existing one. 
-= Means substraction of new number from existing one.
*= Means multiplication of new number with existing one.
/= Means divided of new number by existing one. */

/* 11. ++ এবং-- এর কাজ কি ? এইটা কি জানো। 
++ Means increasing one by one.
-- Means diccreasing one by one.
 */

/* 12. parseInt, parseFloat, toFixed এইগুলা কি করে ? 
    The parseInt() function parses a string argument and returns an integer of the specified radix(the base in mathematical numeral systems).
    The parseFloat() function parses an argument(converting it to a string first if needed) and returns a floating point number.
    The toFixed() method converts a number to a string. The toFixed() method rounds the string to a specified number of decimals. */

/* 13. Array কি জিনিস। এইটা কিভাবে কাজ করে? কিভাবে Array ডিক্লেয়ার করতে হয়
var numbs = ["One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight"]; */

/* 14. array এর মধ্যে কয়টা উপাদান(element) আছে সেটা কিভাবে বের করে ?
 var numbs = ["One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight"];
numbs.length; */

/* 15. array এর উপাদান গুলা এর পজিশন(index) কিভাবে কাজ করে। কত দিয়ে শুরু হয়। এবং মান কিভাবে চেইঞ্জ হয়।
Index started with 0. 
var numbs = ["One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight"];
numbs[1] = "Nine";
console.log(numbs); */

/* 16. কোন একটা উপাদানের index এর মান -১ বলতে কি বুঝায় ?
    That means this elements does not exist on the array elements.  */

/* 17. কিভাবে index দিয়ে কোন একটা array এর মধ্যে উপাদান এর মান খুঁজে বের করতে পারো
var numbs = ["One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight"];
console.log(numbs.[3]); */

/* 18. কিভাবে কোন একটা index পজিশন এ array এর উপাদান এর মান চেইঞ্জ করতে পারবে ?
    var numbs = ["One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight"];
    numbs[1] = "Nine"; */

/*  19. একটা Array এর মধ্যে কোন একটা উপাদান এর মান তোমাকে দেয়া আছে এখন সেটার index তুমি কিভাবে খুঁজে বের করতে পারো? 
var numbs = ["One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight"];
console.log(numbs.indexOf("Three")); */

/* 20. ধরো, কোন একটা ইনডেক্স দিয়ে উপাদান খুঁজতে গেছো। কিন্তু সেটার মান না দিয়ে তোমাকে undefined দেখাচ্ছে। সেটা দেখে তুমি কি বুঝবে ? (একটু গুগলে সার্চ দাও। আমরা কোর্স এ এইটা আলোচনা করিনি। তারপরেও চেষ্টা করে দেখো)
You get undefined when you try to access the array value at index 0, but it's not that the value undefined is stored at index 0, it's that the default behavior in JavaScript is to return undefined if you try to access the value of an object for a key that does not exist. */

/* 21. কোন একটা Array এর মধ্যে লাস্ট উপাদান হিসেবে কোন উপাদান হিসেবে যোগ করতে চাইলে কিভাৱে যোগ করবে। আবার Array থেকে শেষের উপাদান টা বের করে দিতে চাইলে কিভাবে বের করে দিবে ?
var numbs = ["One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight"];
numbs.push("Nine");
numbs.pop(); */

/* 22. কোন একটা Array এর মধ্যে প্রথম উপাদান হিসেবে কোন উপাদান হিসেবে যোগ করতে চাইলে কিভাৱে যোগ করবে। আবার Array থেকে প্রথম উপাদান টা বের করে দিতে চাইলে কিভাবে বের করে দিবে ?
    var numbs = ["One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight"];
    numbs.unshift("Nine");
    numbs.shift();  */

/* 23. তুলনা কিভাবে করতে হয়। এইগুলার মানে কি: >, <, ==, !=, <=, >=, ===, !==, &&, ।। 
   > Gretter Then
    < Less Then
   == Equal
    != Not Equal
    <= Greeter then or Equal
    >= Less then or Equal
    === Equal (type and value)
    !== not equal(type and value)
    && And
    || Or */

/* 24. তোমার কাছে: ৮০০০০ টাকার বেশি হলে তুমি mac কিনবে, ৬০ টাকার বেশি হলে gaming ল্যাপটপ কিনবে, ৪০ হাজার টাকার বেশি হলে lenovo yoga কম্পিউটার কিনবে, ২০ হাজার টাকার বেশি হলে পুরান ল্যাপটপ কিনবে। না হয় তুমি মোবাইল দিয়ে কাজ চালাবে।

var myMoney = 17000;
if (myMoney > 80000) {
  console.log("I will buy MAC");
} else if (myMoney > 60000) {
  console.log("I will buy gaming laptop");
} else if (myMoney > 40000) {
  console.log("I will buy lenovo yoga laptop");
} else if (myMoney > 20000) {
  console.log("I will buy old laptop");
} else {
  console.log("I will buy a Xiomi phone");
} */

/* 25. ২৫. আসকে আমার মন ভালো নেই-- এই কথা ৩৯ বার আউটপুট হিসেবে দেখাও।

var i = 1;
while (i <= 39) {
  console.log("আসকে আমার মন ভালো নেই", i);
  i++;
} */

/* 26. while লুপ কিভাবে কাজ করে ?
    The while loop loops through a block of code as long as a specified condition is true. */

/* 27. for লুপ কিভাবে কাজ করে? 
    A for loop repeats until a specified condition evaluates to false. */

/* 28. while লুপ এর মধ্যে লুপ ভেরিয়েবল চেইঞ্জ না করলে কি সমস্যা হয়। 
 It will be an Infinity loop. */

/*  29. একটা কোড লিখে ৫৮ থেকে ৯৮ পর্যন্ত যত সংখ্যা আছে সেগুলাকে দেখাও ?
for (var i = 58; i <= 98; i++) {
  console.log(i);
} */

/*  30. একটা কোড লিখে ৪১২ থেকে ৪৫৬ পর্যন্ত যত জোর সংখ্যা আছে সেগুলাকে দেখাও
for (var i = 412; i <= 456; i += 2) {
  console.log(i);
}
 */

/*  31. একটা কোড লিখে ৫৮১ থেকে ৬২৩ পর্যন্ত যত বিজোড় সংখ্যা আছে সেগুলাকে দেখাও
var i = 581;
while (i <= 623) {
  console.log(i);
  i = i + 2;
} */

/* 32. while আর for loop এর মধ্যে পার্থক্য কি ?
The major difference between for loop and while loop is that in the case of for loop the number of iterations is known whereas in the case of the while loop number of iterations is unknown and the statement will run until the condition is proved false. */

/* 33. তুমি এতদিন যা যা জিনিস শিখছো সেগুলার নাম দিয়ে একটা array বানাও। তারপর একটা for লুপ দিয়ে সেই array এর সব উপাদান কে আউটপুট হিসেবে দেখাও।

var knowledge = ["variable", "oparetor", "array", "condition", "loop"];

for (var i = 0; i < knowledge.length; i++) {
  console.log(knowledge[i]);
} */

/* 34. তুমি এতদিন পর্যন্ত যে যে মডেলের মোবাইল ফোন ইউজ করেছো সেগুলার নাম দিয়ে একটা array বানাও। তারপর একটা while লুপ দিয়ে সেই array এর উপাদান গুলা একটা একটা করে আউটপুট হিসেবে দেখাও?

var mobiles = ["Nokia", "Samsung", "Symphony", "Walton", "Apple", "Xiaomi"];

var i = mobiles.length - 1;
while (i >= 0) {
  var singlePhone = mobiles[i];
  console.log(singlePhone);
  i--;
} 

 var i = 0;
while (i < mobiles.length) {
  console.log(mobiles[i]);
  i++;
}  */

/* 35. একটা ফর লুপ চালাও। ৩০ থেকে ৮৬ পর্যন্ত। আর এই লুপ ৪৪ এ গেলে ব্রেক করবে। সেই জিনিস কোড করে দেখাও
for (var i = 30; i <= 86; i++) {
  if (i == 44) {
    break;
  }
  console.log(i);
} */

// 36. তোমার যত বই আছে সেগুলার দাম নিয়ে একটা array লিখে ফেলো। যে বই গুলোর দাম ২০০ টাকার উপরে সেগুলাকে স্কিপ করবে। অর্থাৎ সেগুলাকে আউটপুট হিসেবে দেখাবে না। বাকিদের কে আউটপুট হিসেবে দেখাবে। দেখো করতে পারো কিনা।

/* var booksPrice = [100, 123, 204, 350, 90, 99, 450, 367, 876, 1000, 500, 34, 67];

for (var i = 0; i < booksPrice.length; i++) {
  var singleBookPrice = booksPrice[i];
  if (singleBookPrice > 200) {
    continue;
  }
  console.log(singleBookPrice);
}

var i = 0;
while (i < booksPrice.length) {
  var singleBookPrice = booksPrice[i];
  i++;
  if (singleBookPrice > 200) {
    continue;
  }
  console.log(singleBookPrice);
} */
