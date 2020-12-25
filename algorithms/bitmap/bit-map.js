function BitMap(size) {
  var bit_arr = new Array(size);

  for (var i = 0; i < bit_arr; i++) {
    bit_arr[i] = 0;
  }

  this.addMember = function (member) {
    var arr_index = Math.floor(member / 32);
    var bit_index = member % 32;
    bit_arr[arr_index] = bit_arr[arr_index] | (1 << bit_index);
  };

  this.isExist = function (member) {
    var arr_index = Math.floor(member / 32);
    var bit_index = member % 32;
    var value = bit_arr[arr_index] & (1 << bit_index);
    if (value !== 0) {
      return true;
    }
    return false;
  };
}

// test
var bit_map = new BitMap(4);
var arr = [0, 3, 5, 6, 9, 34, 23, 78, 99];
for (var i = 0; i < arr.length; i++) {
  bit_map.addMember(arr[i]);
}

console.log(bit_map.isExist(3));
console.log(bit_map.isExist(7));
console.log(bit_map.isExist(78));
