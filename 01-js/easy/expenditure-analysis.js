/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]

  Once you've implemented the logic, test your code by running
  - `npm run test-expenditure-analysis`
*/

function calculateTotalSpentByCategory(transactions) {
  var ans = {};
  var h = [];
  for (var i = 0; i < transactions.length; i++) {
    var ch = transactions[i];
    if (ans[ch.category]) {
      ans[ch.category] = ans[ch.category] + ch.price;
    }
    else {
      ans[ch.category] = ch.price;
    }
  }
  var keys = Object.keys(ans);
  var values = Object.values(ans);
  for (var i = 0; i < values.length; i++) {
    var temp = {};
    temp.category = keys[i];
    temp.totalSpent = values[i];
    h[i] = temp;
  }
  return h;
}

module.exports = calculateTotalSpentByCategory;
