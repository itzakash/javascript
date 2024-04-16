Array.prototype.customPush = function (element) {
  this[this.length] = element;
  return this.length;
};

Array.prototype.customePop = function () {
  let item = this[this.length - 1];
  this.length -= 1;

  return item;
};

const arr = [];
arr.customPush("akash");
arr.customPush("Talawar");
arr.customPush("Sky");

console.log(arr);
console.log(arr.customePop());
console.log(arr);
