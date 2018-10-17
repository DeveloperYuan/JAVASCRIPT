// 原始冒泡排序算法
function bubbleSort(arr) {
    var len = arr.length;
    var tmp;
    console.time('原始冒泡排序耗时');
    for (var i = 0; i < len; i++) {
        for (var j = 0; j < len - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                temp = arr[j + 1]; arr[j + 1] = arr[j]; arr[j] = temp;
            }
        }
    }
    console.timeEnd('原始冒泡排序耗时');
    return arr;
}

// 改进后冒泡排序方法1
// 加入冒泡标识位pos
// pos为上一次冒泡位置
function bubbleSort1(arr) {
    var i = arr.length - 1;  //初始时,最后位置保持不变
    console.time('改进后冒泡排序一耗时');
    while (i > 0) {
        var pos = 0; //每趟开始时,无记录交换
        for (var j = 0; j < i; j++) {
            if (arr[j] > arr[j + 1]) {
                pos = j; //记录交换的位置
                var tmp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = tmp;
            }
        }
        i = pos; //为下一趟排序作准备
    }
    console.timeEnd('改进后冒泡排序一耗时');
    return arr;
}

// 改进后冒泡排序方法2
// 每趟排序中进行正向和反向两遍冒泡
// 一次可以得到两个最终值(最大者和最小者)
function bubbleSort2(arr) {
    var low = 0;
    var high = arr.length - 1; // 设置变量的初始值
    var tmp, j;
    console.time('改进后冒泡排序二耗时');
    while (low < high) {
        for (j = low; j < high; ++j) { // 正向冒泡,找到最大者
            if (arr[j] > arr[j + 1]) {
                tmp = arr[j]; arr[j] = arr[j + 1]; arr[j + 1] = tmp;
            }
        }
        --high;                 // 修改high值, 前移一位
        for (j = high; j > low; --j) { // 反向冒泡,找到最小者
            if (arr[j] < arr[j - 1]) {
                tmp = arr[j]; arr[j] = arr[j - 1]; arr[j - 1] = tmp;
            }
        }
        ++low;                  // 修改low值,后移一位
    }
    console.timeEnd('改进后冒泡排序二耗时');
    return arr;
}

// 测试
var arr = [3, 44, 38, 5, 47, 15, 36, 26, 27, 2, 46, 4, 19, 50, 48];
console.log(bubbleSort(arr)); // 原始冒泡排序耗时: 0.02880859375ms [2, 3, 4, 5, 15, 19, 26, 27, 36, 38, 44, 46, 47, 48, 50]
console.log(bubbleSort1(arr)); // 改进后冒泡排序一耗时: 0.00732421875ms [2, 3, 4, 5, 15, 19, 26, 27, 36, 38, 44, 46, 47, 48, 50]
console.log(bubbleSort2(arr)); // 改进后冒泡排序二耗时: 0.01611328125ms [2, 3, 4, 5, 15, 19, 26, 27, 36, 38, 44, 46, 47, 48, 50]