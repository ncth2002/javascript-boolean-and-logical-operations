let isOver18;
let hasCriminalBlacklist;

let isAllow;

/* จากโค้ดตั้งต้นเราได้ Declare ตัว Variable ไว้ทั้งหมด 3 ตัวได้แก่ isOver18, hasCriminalBlacklist และ isAllow โดยกำหนดให้ทั้ง 3 ตัวมี Type เป็น Boolean 
ซึ่ง Variable ทั้ง 3 ตัวนี้ ใช้เก็บข้อมูลผู้คนที่เข้ามาร่วมงาน Event แห่งหนึ่ง โดยมีรายละเอียดดังต่อไปนี้
isOver18 จะเป็น true ถ้าผู้เข้าร่วมงานคนนี้มีอายุมากกว่า 18 ปีขึ้นไป
hasCriminalBlacklist จะเป็น true ถ้าผู้ร่วมงานคนนี้เคยมีประวัติอาชญากรรม
isAllow จะเป็น true ถ้าผู้เข้าร่วมงานคนนี้มีสิทธิ์เข้าร่วมงาน
สมมติว่าเราเขียนโปรแกรมในการตรวจสอบผู้คนที่เข้ามาร่วมงาน Event แห่งหนึ่ง โดยมีเงื่อนไขในการเข้าร่วมก็คือ

1.ผู้เข้าร่วมงานต้องมีอายุมากกว่า 18 ปีขึ้นไป 
2.และต้องไม่เคยมีประวัติอาชญากรรมมาก่อน (&&)


ผู้ร่วมงานคนหนึ่งชื่อว่า James มีคุณสมบัติดังนี้
James มีอายุ 18 ปี
James ไม่เคยมีประวัติอาชญากรรม
ให้ Reassign ค่าของ isOver18 และ hasCriminalBlacklist ตามคุณสมบัติของ James

ให้ Reassign ค่าของ isAllow เป็น Expression ของ isOver18 และ hasCriminalBlacklist ตามเงื่อนไขข้างต้น

หลังจากนั้นลอง console.log ค่าของ isAllow เพื่อดูว่า James มีสิทธิ์เข้างานหรือไม่ */
// Start coding here

isOver18 = false;
hasCriminalBlacklist = false;

isAllow = isOver18 && !hasCriminalBlacklist;

console.log(isAllow);
