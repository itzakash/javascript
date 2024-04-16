const map = new Map([
  ["a", 1],
  ["b", 2],
  ["b", 4],
]);

map.set("c", 3);
console.log(map.has("b"));
map.delete("b");
console.log(map.size);
map.clear();

for (const [key, value] of map) {
  console.log(`${key} : ${value}`);
}
