var i = 1;
function init(){
$('#table1 tbody').append('<tr class="child"><td id = "result'+ i++ +'"></td><td  id = "result'+ i++ +'"></td><td  id = "result'+ i++ +'"></td><td  id = "result'+ i++ +'"></td><td  id = "result'+ i++ +'"></td><td  id = "result'+ i++ +'"></td><td id = "result'+ i++ +'"></td><td id = "result'+ i++ +'"></td><td id = "result'+ i++ +'"></td><td id = "result'+ i++ +'"></td><td id = "result'+ i++ +'"></td><td id = "result'+ i++ +'"></td></tr>');
document.getElementById("result1").innerHTML = localStorage.getItem("Value1");
document.getElementById("result2").innerHTML = localStorage.getItem("Value2");
document.getElementById("result3").innerHTML = localStorage.getItem("Value3");
document.getElementById("result4").innerHTML = localStorage.getItem("Value4");
document.getElementById("result5").innerHTML = localStorage.getItem("Value5");
document.getElementById("result6").innerHTML = localStorage.getItem("Value6");
document.getElementById("result7").innerHTML = localStorage.getItem("Value7");
document.getElementById("result8").innerHTML = localStorage.getItem("Value8");
document.getElementById("result9").innerHTML = localStorage.getItem("Value9");
document.getElementById("result10").innerHTML = localStorage.getItem("Value10");
document.getElementById("result11").innerHTML = localStorage.getItem("Value11");
document.getElementById("result12").innerHTML = localStorage.getItem("Value12");
}

