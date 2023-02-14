//you are given a string [1-N] you have to print the string as per the rules
//rule 1: if the number is multiple of 5 and 7 print "Masai School"
//rule 2: if the number is only multiple of 7 print "Masai"
//rule 3: if the numebrs is the multipal of 5 print " School"
//rule 4: if the number is rather than this print "Hurray"


var n=7;

for (var i=1; i<=n; i++){
   if(i%5==0 && i%7==0){
       console.log("Masai School");
   }else if(i%7==0){
       console.log("Masai");
   }else if(i%5==0){
       console.log("school");
   }else {
       console.log("Hurray!")
   }
}