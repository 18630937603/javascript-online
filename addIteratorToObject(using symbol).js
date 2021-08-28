// 给对象加入迭代功能
Object.prototype[Symbol.iterator] = function* iterEntries() {
    let keys = Object.keys(this);
    for (let i = 0; i < keys.length; i++) {
        let key = keys[i];
        yield [key, obj[key]];
    }
}

// 普通函数, ，返回[key,value]
Object.prototype[Symbol.iterator] = function () {
    const keys = Object.keys(this);
    let index = 0;
    return {
        next: () => {
            return {
                value: [keys[index], this[keys[index++]]], // 每次迭代的结果
                done: index > keys.length // 迭代结束标识 false停止迭代，true继续迭代
            };
        }
    }
}

var obj = { a: 'hello', b: 'world', c: 'hello world' }

// 效果
for (let [key, value] of obj) {
    console.log(key, value);
}
