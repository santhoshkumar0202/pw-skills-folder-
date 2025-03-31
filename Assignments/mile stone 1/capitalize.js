/*function capitalize(name){
    let firstname=name.charAt(0)
  let capitalizefirst= firstname.toUpperCase()
  let modifiedfirst= firstname==capitalizefirst? name : capitalizefirst+ name.slice(1)
  return modifiedfirst

}
cap=capitalize("santhosh")
console.log(cap)
*/
function reverseString(inputString) {
  if (inputString === "") {
      return "";
  } else {
    console.log(inputString)
      return reverseString(inputString.substr(1))+inputString[0]
  }
}
let n=reverseString("santhosh")
console.log(n)