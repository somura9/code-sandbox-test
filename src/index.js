// /**
//  * const let等の変数宣言
//  */

// var val1 = "var変数";
// console.log(val1);

// val1 = "var変数改変後";
// console.log(val1);

// var val1 = "var変数を再宣言";
// console.log(val1);

// //letは上書き可能
// let val2 = "let変数";
// console.log(val2);

// val2 = "let変数を上書き";
// console.log(val2);

// // constは上書きも不可能
// const val3 = "const変数";
// console.log(val3);

// /**
//  * オブジェクト
//  */

// // constで定義していてもオブジェクトは上書きできる
// const val4 = {
//   name: "somura",
//   age: 24
// };
// //プロパティの上書き
// val4.name = "曽村";
// //プロパティを追加
// val4.addres = "Gifu";

// console.log(val4);

// /**
//  * 配列
//  */

// // constで定義していても配列も上書きできる
// const val5 = ["dog", "cat"];
// // 配列の値の変更
// val5[0] = "bird";
// // 配列に値を追加
// val5.push("monkey");
// console.log(val5);

/**
 * テンプレート文字列
 */
// 文字列の中にJSを埋め込める

const name = "somura";
const age = "24";
// 私の名前はsomuraです　。年齢は２４歳です　　と表示したい

// 従来の方法
const message1 = "私の名前は" + name + "です。年齢は" + age + "です。";
console.log(message1);

// テンプレート文字列
const message2 = `私の名前は${name}です。年齢は${age}です`;
console.log(message2);

/**
 * アロー関数
 */

//　従来の関数
function func1(str) {
  return str;
}

// こうもかける
// const func1 = function(str) {
//   return str;
// }
console.log(func1("func1です"));

//アロー関数
const func2 = (str) => {
  return str;
};
// strを囲む()は省略可
// 中身が単一式ならreturnは省略可
// const func2 = str => str;
console.log(func2("func2です"));

const func3 = (num1, num2) => num1 + num2;
console.log(func3(10, 20));
