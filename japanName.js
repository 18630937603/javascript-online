let a = "123"

let url = 'https://www.behindthename.com/names/gender/masculine/usage/english'

// 匹配字符串是否是日语罗马音拼音(没有排除tu)
console.log(a.match(/^([aknhmrgbp]?[aiueo]|[zdst][aueo]|[kgjnhbpmr]?(ya|yu|yo)|[sc](ha|hu|ho)|[sc]hi|tsu|w[ao]|n|ji)*$/g))
