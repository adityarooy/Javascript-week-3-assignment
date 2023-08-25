function hasProperty(obj, PropertyName){
    return obj.hasOwnProperty(PropertyName)
}
const exampleObject = {name: "Alex", age: 25};
console.log(hasProperty(exampleObject, "age"));
console.log(hasProperty(exampleObject, "email"));