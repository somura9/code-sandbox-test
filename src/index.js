/**
 * const let等の変数宣言
 */

var val1 = "var変数";
console.log(val1);

val1 = "var変数改変後";
console.log(val1);

var val1 = "var変数を再宣言";
console.log(val1);

//letは上書き可能
let val2 = "let変数";
console.log(val2);

val2 = "let変数を上書き";
console.log(val2);

// constは上書きも不可能
const val3 = "const変数";
console.log(val3);

/**
 * オブジェクト
 */

// constで定義していてもオブジェクトは上書きできる
const val4 = {
  name: "somura",
  age: 24
};
//プロパティの上書き
val4.name = "曽村";
//プロパティを追加
val4.addres = "Gifu";

console.log(val4);

/**
 * 配列
 */

// constで定義していても配列も上書きできる
const val5 = ["dog", "cat"];
// 配列の値の変更
val5[0] = "bird";
// 配列に値を追加
val5.push("monkey");
console.log(val5);
