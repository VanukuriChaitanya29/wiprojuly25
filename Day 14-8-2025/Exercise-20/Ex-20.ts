function pair<T, U>(first: T, second: U): [T, U] {
  return [first, second];
}

const a = pair(10, "ten");            
const b = pair<boolean, string>(true, "Chaitanya"); 

console.log(a); 
console.log(b); 
