// 初期化判定用に定義
var chart;

function exe() {
    var num = document.getElementById('num').value;

    if (numCheck(num) == true) {
        var resultArr = [];
        for (var n = 1; n <= num; n++) {
            var point = 0; // point定義
            for (var m = 1; m <= n; m++) {
                var randomX = ((Math.random() * 2) - 1);
                var randomY = (Math.random() * 2) - 1;
                // 半径1の円の中にあるか計算
                var checkNum = Math.pow(randomX, 2) + Math.pow(randomY, 2); //三角比
                if (checkNum <= 1) {
                    var point = point + 1;
                } else {}
            }
            var result = (point / n) * 4;
            resultArr[n - 1] = result; // 結果用配列に値を追加
        }

        // グラフ用ラベルの作成
        var label = [];
        for (var p = 1; p <= num; p++) {
            label[p - 1] = p;
        }

        // chart初期化
        if(chart){
            chart.destroy();
        }
        // グラフ関数に引き渡し
        canvas(resultArr, label);
    }
}

function numCheck(targetNum) {
    if (targetNum) {
        if (targetNum == 0) {
            window.alert('1以上の数値を入れてください.');
            return false;
        } else if (10000 < targetNum) {
            var yesno = confirm('数値が大きすぎるため時間がかかる恐れがあります.');
            if (yesno) {
                return true;
            } else {
                return false;
            }
        } else {
            return true;
        }
    } else {
        window.alert('数値を入力してください.');
    }

}

function canvas(data, label) {
    var ctx = document.getElementById('chart').getContext('2d');
    window.chart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: label,
            datasets: [{
                label: 'pi',
                backgroundColor: 'rgb(255, 99, 132)',
                borderColor: 'rgb(255, 99, 132)',
                data: data,
                borderWidth: 0,
                pointRadius: 1.5
            }]
        },
        options: {}
    })
}
