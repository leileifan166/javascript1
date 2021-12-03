var num = 7;
var str = "我爱你～中国～";
console.log(num > 5 && str.length >= num);//true 
console.log(num < 5 && str.length >= num);//false
console.log(!(num < 10));//false
console.log(!(num < 10 || str.length ==num));//false

var age = prompt('あなたの年齢を入力してください');
if(age >= 18){
    alert('18才以上だから入室できます');
} else {
   alert('18才未満だから、入室できません');
}

var score = prompt('あなたの点数を入力してくだい');
if(score >= 90){
    alert('あなたの成績はAランクです');
} else if(score >= 80){
    alert('あなたの成績はBランクです');
} else if(score >=70){
    alert('あなたの成績はCランクです');
} else if(score >= 60){
    alert('あなたの成績はDランクです');
} else {
    alert('あなたの成績はEランクです');
}

var numb = 10;
var result = numb > 5 ? 'Yes' : 'No';
alert(result);

var numbe = prompt('数字を一つ入力してくだい');
var result2 = numbe >= 10 ? numbe : "0" + numbe;
alert(result2);

var grade = prompt('こんにちは、あなたの学年を教えてください');
switch(grade){
    case "1":
    alert('あなたは1年生ですね');
    break;
    case '2':
    alert('あなたは2年生ですね');
    break;
    case '3':
    alert('あなたは3年生ですね');
    break;
    default:
    alert('何年生かわかりません');
}  

var fruit = prompt('好きな果物を入力してくだい');
switch(fruit){
    case 'りんご':
    alert('150円//1個');
    break;
    case 'バナナ':
    alert('30円//1個');
    break;
    case 'みかん':
    alert('90円//1個');
    break;
    default:
    alert('該当する果物がありませんでした');
}








 
