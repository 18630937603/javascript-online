interface GenericIdentityFn<T> {
    (arg: T): T;
}

function identity<T>(arg: T): T {
    console.log(arg)
    return arg;
}

let myIdentity: GenericIdentityFn<number> = identity;

myIdentity(123)
