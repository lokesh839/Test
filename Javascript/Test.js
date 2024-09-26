function fdreater(){
 let months = Number(document.getElementById("input").value)
 let reat = 0

if(months<3)
    reat = 5.9
else if (months>=3 || months<=6)
    reat = 9.5
else if (months>=7 || months<=9)
    reat =10.3
else
reat = 11.2
 
let result = document.querySelector('#result')
result.innerHTML = "your interest reat is" +reat+"%"
}