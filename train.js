// Task_E
/*
📌  Task-E: shunday function tuzing unga faqat bitta musbat integer argument qilib berilsin,
 va u ushbu argumentni tub son bolsa true aksincha false return qilsin.

Masalan: 
tubSonmi(5) return true, tubSonmi(10) return false. 
Tub sonlar faqat ozi va 1soniga toliq bolinadigan sonlar.

*/
const tubSonmi = function (num) {
  if (num <= 1) return false;

  for (let i = 2; i < num; i++) {
    if (num % i == 0) {
      return false;
    }
  }
  return true;
};

const first_num = tubSonmi(3);
const second_num = tubSonmi(10);
console.log(first_num);
console.log(second_num);
