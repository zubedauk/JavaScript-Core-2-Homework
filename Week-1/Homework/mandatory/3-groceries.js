// You're going shopping, and you need a shopping list.
// 1. Update your groceryList with the items you need: Potatoes, Orange Juice and Rice.
// 2. Loop through the groceryList object to gather the item properties into the groceriesToBuy array.
// 3. Then use console.log() to print out the list. It should print ['Potatoes', 'Orange Juice', 'Rice']

let groceriesToBuy = [];

let groceryList = {
  item1: "Potatoes",
  item2: "Orange Juice",
  item3: "Rice"
};
//1.simple way :not required
 groceriesToBuy=Object.values(groceryList);
 console.log(groceriesToBuy);
//2.loop through :required
let len=Object.keys(groceryList).length;
let cnt=1,key;
for(let i=0;i<len;i++){
  key="item".concat(cnt);
  groceriesToBuy[i]=groceryList[key];
   cnt++;
}


console.log(groceriesToBuy);
