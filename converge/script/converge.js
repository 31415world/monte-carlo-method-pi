// 各場合の円周率の計算
var number = 10000; // 試行数
var resultArr = [];

for (var n = 1; n <= number; n++) {
    var point = 0;
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
for (var p = 1; p <= number; p++) {
    label[p - 1] = p;
}

var ctx = document.getElementById('chart').getContext('2d');
const chart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: label,
        datasets: [{
            label: 'My First dataset',
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgb(255, 99, 132)',
            data: resultArr,
            borderWidth: 0,
            pointRadius: 1.5
        }]
    },
    options: {}
})
