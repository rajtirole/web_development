// import { type } from "os";
import aa from "./file.json" assert { type: "json" };
// const aa = require('./file.json')
// import * as aa from "./file.json"

let listt = document.querySelector(".list1");
let list = document.querySelector(".list");
let list5 = document.querySelector(".list5");
let list4 = document.querySelector(".list4");
let list2 = document.querySelector(".list2");
let list3 = document.querySelector(".list3");
listt.addEventListener("click", function () {
  let list1 = "";
  let data1 = foodname(aa);
  data1.map((data) => {
    list1 = list1.concat(`<li>${data}</li>`);
  });
  list.innerHTML = list1;
});
list5.addEventListener("click", function () {
  let category1 = document.querySelector(
    "input[type='radio'][name='category']:checked"
  );
  let list1 = "";
  if (category1 == null) {
    console.log("fdjsfks");
    list1 = list1.concat("please select a category");
    list.innerHTML = list1;
  }
  category1 = category1.value;
  let data1 = Category(aa, category1);
  console.log(data1);

  data1.map((data) => {
    console.log(data);
    list1 = list1.concat(`<li> Food name: ${data.foodname}<br/>
    Calorie: ${data.calorie}<br/>
    Category: ${data.category}<br/>
    Cab: ${data.cab}<br/>
    protiens : ${data.protiens}</li>`);
  });
  console.log(list1);
  list.innerHTML = list1;
});
list3.addEventListener("click", function () {
  let list1 = "";

  let data1 = calorie(aa);

  data1.map((data) => {
    list1 = list1.concat(`<li> Food name: ${data.foodname}<br/>
    Calorie: ${data.calorie}<br/>
    Category: ${data.category}<br/>
    Cab: ${data.cab}<br/>
    protiens : ${data.protiens}</li>`);
  });
  list.innerHTML = list1;
});
list2.addEventListener("click", function () {
  let list1 = "";

  let data1 = calories(aa);

  data1.map((data) => {
    list1 = list1.concat(`<li> Food name: ${data.foodname}<br/>
    Calorie: ${data.calorie}<br/>
    Category: ${data.category}<br/>
    Cab: ${data.cab}<br/>
    protiens : ${data.protiens}</li>`);
  });
  list.innerHTML = list1;
});
list4.addEventListener("click", function () {
  let category1 = document.querySelector(
    "input[type='radio'][name='sort']:checked"
  );
  let list1 = "";
  if (category1 == null) {
    list1 = list1.concat("please select a category");
    list.innerHTML = list1;
  }
  category1 = category1.value;
  let data1 = soring(aa, category1);

  data1.map((data) => {
    list1 = list1.concat(`<li> Food name: ${data.foodname}<br/>
    Calorie: ${data.calorie}<br/>
    Category: ${data.category}<br/>
    Cab: ${data.cab}<br/>
    protiens : ${data.protiens}</li>`);
  });
  list.innerHTML = list1;
});

function foodname(dataa) {
  let data = dataa.map((data) => {
    return data.foodname;
  });
  return data;
}
function Category(dataa, category) {
  let data1 = [];
  dataa.map((data) => {
    if (data.category == category) {
      data1.push(data);
    }
  });
  return data1;
}
function calorie(dataa) {
  let data1 = [];
  dataa.map((data) => {
    if (data.calorie > 100) {
      data1.push(data);
    }
  });
  return data1;
}
function calories(dataa) {
  let data1 = [];
  dataa.map((data) => {
    if (data.calorie < 100) {
      data1.push(data);
    }
  });
  return data1;
}
function soring(dataa, method) {
  dataa.sort((a, b) => {
    return b[method] - a[method];
  });
  console.log(dataa);
  return dataa;
}

// foodname(aa);
// Category(aa, "Vegetable");
// Category(aa, "Fruit");
// Category(aa, "Protein");
// Category(aa, "Nuts");
// Category(aa, "Grain");
// Category(aa, "Dairy");
// calories(aa);
// calorie(aa);
// soring(aa, "protiens");
// soring(aa, "cab");
