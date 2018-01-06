function count(){
var today = new Date();
var year = today.getFullYear();
  var birthday = new Date(tuki + "/" + hi + "/"  + year);
var keisan = (birthday-today)/86400000;
var count = Math.ceil(keisan);
if (count < 0){
birthday = new Date(tuki + "/" + hi + "/" + (year + 1))
keisan = (birthday-today)/86400000;
count = Math.ceil(keisan);
}
birthday.setFullYear(today.getFullYear());

// If the user's birthday has not occurred yet this year, subtract 1.
if ((today.getMonth() == birthday.getMonth()) && (today.getDate() == birthday.getDate()))
{
    document.write("本日です");
} else {
    document.write("あと " + count + " 日");
}
}
function nenrei(){
var cbirthday = new Date( tuki + "/" + hi + "/" + nen);
var today = new Date();
var years = today.getFullYear() - cbirthday.getFullYear();
cbirthday.setFullYear(today.getFullYear());
if (today < cbirthday)
{
    years--;
}
document.write(years + "歳");
}