'use strict'
/**
 * ボタンをクリックしたらスタート画面が消えて問題が出る処理
 * 問題を20問から5問ランダムに出題する関数
 * 点数を計算して表示する処理
 */
const questionArea = document.getElementById('question-area');
const resultArea = document.getElementById('result-area');
const startButton = document.getElementById('start');

startButton.onclick = function(){
    // TODO 乱数を使って20問から5問出す
    console.log('ボタンが押されました')
    for ( let i = 0 ; i < 5 ; i++){
        let num = Math.floor(Math.random() * 100) % 20;
        let p = document.createElement('p');
        p.innerText = questions[num];
        questionArea.appendChild(p)
    };
    //問題を表示する
};