function a() {
    console.log('a',this)
}

let b = () => {
    console.log('b',this)
}

let obj = {
    c: function () {
        console.log('c',this)
    },
    d: () => {
        console.log('d',this)
    },
    e: function () {
        a();
        b();
        (function(){
            b();
        })();
    }
}

a();
b();
obj.c();
obj.d();
obj.e();
