//Nhập data giá trị height, weight
let inputheight = prompt('Giá trị Height là');
let inputWeight = prompt('Giá trị Weight là');
//sử dụng hàm parseInt() để chuyển kiểu dữ liệu từ chuỗi sang số nguyên
let height = parseInt(inputheight);
let weight = parseInt(inputWeight);
//Tính diện tích hình chữ nhật
let area = height * weight;
//Hiển thị ra màn hình
document.write('Diện tích hình chữ nhật là '+ area)
