let map = new Map();

map.set('key1',20);
map.set('key2',30);

for(let [k,v] of map){
    console.log(k,v+20)
}
