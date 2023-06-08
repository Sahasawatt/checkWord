const prompt = require("prompt-sync")();
let wordUser;
let ans = ["A", "B", "C", "D"];
let wordCheck = [];
let round = 0;
while (true) {
  let sameWord = 0;
  let positionWord = 0;
  wordUser = prompt("Please enter a word : ");
  for (let i = 0; i < wordUser.length; i++) {
    wordCheck[i] = wordUser.slice(i, i + 1);
  }
  for (let i = 0; i < ans.length; i++) {
    for (let j = 0; j < wordCheck.length; j++) {
      if (ans[i] === wordCheck[j]) {
        sameWord++;
        break;
      }
    }

    if (ans[i] === wordCheck[i]) {
      positionWord++;
    }
  }
  round++;
  console.log("ถูก/ทั้งหมด |" + " ถูก/ตําแหน่ง | " + "ครั้งที่   ");
  console.log( "    "+sameWord+ "    |     " + positionWord+  "     |    " + round + "   ");

  if (sameWord === 4 && positionWord === 4) {
    break;
  }
}
