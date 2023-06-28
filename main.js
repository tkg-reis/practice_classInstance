// クラスは大きい関数
// 見やすいし、管理が楽になる
// クラス内の変数はプロパティ、関数はメソッド
//クラス(クラス名の先頭は大文字にする！)
class D {

    //曜日配列を用意
    // クラスをインスタンス化したときにはじめによばれる者
    // プロパティ（変数）はコンストラクター内で宣言
    // こちらで定義したものは下の関数で利用が可能
    constructor() {
        this.day = ["日", "月", "火", "水", "木", "金", "土"];
        this.D = new Date();
    }
    //Dateオブジェクトを使えるようにする
    //年を取得
    year(){
        // const v = D();          //日付オブジェクトを取得
        return this.D.getFullYear(); //年を取得
    }
    //月を取得
    month(){
                                   //日付オブジェクトを取得
        return this.D.getMonth() + 1;  //月を取得（＋１をする）
    }
    //日を取得
    date(){
                  //日付オブジェクトを取得
        return this.D.getDate();     //日を取得
    }
    //日を取得
    days(){
                  //日付オブジェクトを取得
        return this.D.getDay();      //日を取得
    }
    //2桁0対応(1時→01時)
    _o(s) {
        return ('0' + s).slice(-2);
    }
    //年-月-日
    _D() {
        return "-";
    };
}
    
    //関数実行！
    // const ymd = year() + _D() + month() +  _D() + date();
    const data = new D();
    const y = data.year();
    console.log(y);
    const m = data.month();
    const d = data.date();
    //DOM表示
    document.querySelector("h1").innerHTML =`${y}${data._D()}${m}${data._D()}${d}`;

    class Test {
        // 初期状態で実行する内容
        constructor(val, player, money, country) {
            console.log(val);
            this.val = val;
            this.author = "katrin";
            this.player = player;
            this.money = money;
            this.country = country;
        }
        hello() {
            // returnの指定をしないとundefined
            // return内はthisの指定も可能
            console.log("hello");
            // return "aaa";
            return this.country;
        }
    
        // こちらはインスタンス化せずに使えるメソッド・静的メソッド
        // thisは（constructor）参照できない
        static good() {
            console.log("goodMorning");
            console.log(this.author);
        }
    }
    
    // 簡単に継承可能（4行目を継承）
    class CopyTest extends Test {
        constructor(val) {
            // superは必ず必要！！
            super(val);
        }
        copyHello() {
            super.hello();
            return this.author;
        }
    }
    // 逐次console.logでthisを確認していくことが大事である。
    
    // クラスを実行する・クラスを複製して再利用性を高める
    // クラスの変数や関数はインスタンスによって使用可能
    // const test = new Test(10);
    // const test2 = new Test(8);
    // const test3 = new Test("katrin");
    // const test4 = new Test(10,"kane",10000000,"england");
    // console.log(test4.hello());
    // console.log(test3.author);
    // 静的メソッド
    // Test.good();
    let copy = new CopyTest(10);
    console.log(copy.copyHello());
    
    let now = new Date();
    console.log(now);
    
    // 入力したstringを分割して配列で一つ一つ格納している。
    let str = new String("hello");
    console.log(str[1]);
    
    // ドイツ語アプリで必ず役に立つ
    let reg = new RegExp("good");
    console.log(reg);
    
    let num = new Number(3);
    console.log(num);