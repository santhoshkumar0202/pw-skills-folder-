function reverse(str){

    if (str== ""){
        return ""
    }
    else{
        console.log(str)
        return reverse(str.substr(1))+str.charAt(0);
        console.log(str)
    }
}

console.log(reverse("hello"))