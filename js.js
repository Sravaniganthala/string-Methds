//Question-1
// .take two strings with spaces at starting of one string and at the ending 
var a="  hello"
var b="world  "
// concat both strings & removing spaces
var concat=a.concat(" ",b)
var trim=concat.trim();
//convert to combine string to uppercase
var result=trim.toUpperCase()
console.log(result)

//Question-2
var a="hello to all"
var middlestr=a.slice(6,8)
var extractstr=middlestr.lastIndexOf("to")
 var LowerCasestr=middlestr.toLowerCase()
console.log(a);
console.log(middlestr)
console.log(extractstr)
console.log(LowerCasestr);
//Question-3
var a="hello"
var b="hii every one"
var c=a.concat(" ",b)
var uppercase=c.toUpperCase()
var lastsecondchar=uppercase.charAt(uppercase.length-2)
console.log(a)
console.log(b);
console.log("c:",c);
console.log(uppercase);
console.log("Second Last Character:",lastsecondchar);

//Question-4
var str1="devara"
var  str2="part2s"
var exact1st3char=str1.slice(0,3)
var exact2ndlast3char=str2.slice(2,-1)
var result=exact1st3char.concat(exact2ndlast3char)
var uppercase=result.toUpperCase()
console.log("extract first 3 chars:",exact1st3char)
console.log("extra last 3 chars:",exact2ndlast3char);
console.log(result);
console.log(uppercase);

//Question-5
var a="  hello there  "
var trim=a.trim()
var firstchar=trim.charAt(0).toUpperCase()
var lastchar=trim.charAt(10).toUpperCase()
var middlestr=trim.slice(1,-1)
var extractstr=middlestr
var anotherstr="every one"
var result=extractstr.concat(anotherstr)
console.log(trim)
console.log(firstchar);
console.log(lastchar);
console.log(middlestr)
console.log(extractstr)
console.log(result);

// Question-6
var a="hello there,how are you"
var result=a.indexOf("are")
console.log(result)
