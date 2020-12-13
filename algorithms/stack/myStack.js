/**
 * 定义栈数据结构，实现以下方法和属性
 * push(item)-入栈
 * pop()-出栈
 * top()-返回栈顶的元素
 * isEmpty-判断栈是否为空
 * size-返回栈元素的大小
 * clear()-清空栈
 */
function Stack() {
  var items = []; // 使用数组保存数据
  // 入栈，无返回值
  this.push = function (item) {
    items.push(item);
  };
  // 出栈，返回删除的元素
  this.pop = function () {
    return items.pop();
  };
  // 返回栈顶的元素
  this.top = function () {
    return items[items.length - 1];
  };
  // 判断栈是否为空
  this.isEmpty = function () {
    return items.length === 0;
  };
  // 返回栈元素的大小
  this.size = function () {
    return items.length;
  };
  // 清空栈元素，无返回值
  this.clear = function () {
    items = [];
  };
}

exports.Stack = Stack;
