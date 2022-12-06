function plot() {
    var num = document.getElementById('num').value;
    if (numCheck(num) == true) {
        var point = 0; // point定義
        var xys = []; // グラフ描画のための配列を定義
        
        for (var i = 1; i <= num; i++) {
            var randomX = ((Math.random() * 2) - 1);
            var randomY = (Math.random() * 2) - 1;
            
            // 半径1の円の中にあるか計算
            var checkNum = Math.pow(randomX, 2) + Math.pow(randomY, 2); //三角比
            if (checkNum <= 1) {
                var point = point + 1;
                xys[i - 1] = [Math.abs(randomX), Math.abs(randomY), true]; // 配列に追加
            } else {
                xys[i - 1] = [Math.abs(randomX), Math.abs(randomY), false]; // 配列に追加
            }
            // 一つ一つの座標を出力
            // console.log(i + "(" + randomX + ", " + randomY + ")");
        }
        var result = (point / num) * 4;
        
        canvas(xys); // グラフ関数に引き渡し
        document.getElementById('result-num').innerHTML = result; // 数値結果出力
    }
}

function numCheck(targetNum) {
    if (targetNum) {
        if (targetNum == 0) {
            window.alert('1以上の数値を入れてください.');
            return false;
        } else if (10000 < targetNum) {
            var yesno = confirm('数値が大きすぎるため時間がかかる恐れがあります.');
            if(yesno){
                return true;
            }else{
                return false;
            }
        } else {
            return true;
        }
    } else {
        window.alert('数値を入力してください.');
    }

}

function canvas(xys) {
    var ctx = document.getElementById('canvas').getContext('2d');

    ctx.clearRect(0, 0, ctx.canvas.clientWidth, ctx.canvas.clientHeight); // リセット

    for(var i = 0; i < xys.length; i++){
        var x = xys[i][0] * 300;
        var y = Math.abs(300 - (xys[i][1] * 300));

        if(xys[i][2] == true){

            ctx.beginPath();
            ctx.fillStyle = 'blue';
            ctx.arc(x, y, 2, 0, Math.PI*2, false);
            ctx.fill(); 
        }else{
            ctx.beginPath();
            ctx.fillStyle = 'gray';
            ctx.arc(x, y, 2, 0, Math.PI*2, false);
            ctx.fill(); 
        }
    }

}
