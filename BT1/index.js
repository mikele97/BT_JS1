// BÀI 1: TÍNH LƯƠNG NHÂN VIỆN
// Cho nhân viên đi làm đủ tháng 26 ngày công
// Lương 1 ngày công là 100.000

// INPUT
//gọi a là tổng số ngày làm
let a = 26;
// gọi b là lương 1 ngày công
let b = 100000;

// OUTPUT: TÍNH TỔNG TIỀN LƯƠNG
//gọi c là tổng tiền lương

// PROCESS
let c = a * b;
console.log("BT1 : Tổng tiền lương nhân viên =", c);

// BÀI 2: TÍNH TRUNG BÌNH CỦA 5 SỐ 

// INPUT
// cho 5 số bất kì lần lượt là 1, 2, 3, 4, 5 ứng với  q, w, e, r, t
let q = 1;
let w = 2;
let e = 3;
let z = 4;
let t = 5;

// OUTPUT : TÍNH TRUNG BÌNH CỦA 5 SỐ

// PROCESS
let y = (q + w + e + z + t)/5;
console.log("BT2 : Tổng giá trị trung bình của 5 số =" ,y);


// BÀI 3: QUY ĐỔI TIỀN USD -> VND

//INPUT
// gọi u là giá tiền usd hiện nay 23500
//gọi i là 5 USD cần đổi
 let u = 23500
 let i = 5

 //OUTPUT : QUY ĐỔI TIỀN USD -> VND
 let o = u * i
 console.log("BT3: Tổng số tiền 5 USD đổi ra tiền Việt =", o);

 //BÀI 4: TÍNH DIỆN TÍCH VÀ CHU VI HCN

 ////INPUT
 let d = 3 // d là chiều dài
 let r = 4 // r là chiều rộng

 //OUTPUT : TÍNH DIỆN TÍCH VÀ CHU VI HCN

 //PROCESS
 let v = ( d + r ) * 2
 console.log("BT 4: Chu vi HCN=", v);
 let s = d * r
 console.log("BT 4: Diện tích HCN=", s);

 //BÀI 5: TÍNH TỔNG 2 KÝ SỐ CỦA 12, 44, 83

 ////INPUT: 2 CHỮ SỐ BẤT KỲ 
 let n = 12;

 //OUTPUT: TÍNH TỔNG 2 KÝ SỐ

 //PROCESS
 let f = n % 10
 let g = Math.floor(n / 10)
 let h = f + g
console.log("BT5: Tổng 2 ký số của 12 =",h);

////INPUT: 2 CHỮ SỐ BẤT KỲ 
let tong2so = 44;

////INPUT: 2 CHỮ SỐ BẤT KỲ 

 //PROCESS
let k = tong2so % 10
let l = Math.floor(tong2so / 10)
let x = k + l
console.log("BT5: Tổng 2 ký số của 44 =",x);

////INPUT: 2 CHỮ SỐ BẤT KỲ 
let tong = 83;

 //OUTPUT: TÍNH TỔNG 2 KÝ SỐ

 //PROCESS
let donvi = tong % 10
let chuc = Math.floor( tong / 10)
let sum = chuc + donvi
console.log("BT5: Tổng 2 ký số của 83 =", sum);

