let inputphysics;
let inputchemistry;
let inputbiology;
inputphysics = prompt('Nhập điểm vật lý');
inputchemistry = prompt('Nhập điểm hóa học');
inputbiology = prompt('Nhập điểm sinh học');
let physic = parseInt(inputphysics);
let chemistry = parseInt(inputchemistry);
let biology = parseInt(inputbiology);
let average = (physic + chemistry + biology) /3
let total = physic + chemistry + biology
document.write('Điểm trung bình là: ',average)
document.write('<br/>');
document.write('Điểm tổng là: ',total)

