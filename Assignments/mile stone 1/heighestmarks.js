function hmarks(marks){
   let heighestmarks=0;
    for(i=0;i<marks.length;i++){
       heighestmarks =heighestmarks < marks[i]? marks[i]:heighestmarks 
    }
    return heighestmarks;
}

let finalresult=hmarks([45,25,85,1,2,65,84,20,200])

console.log(`heighest marks: ${finalresult}`)