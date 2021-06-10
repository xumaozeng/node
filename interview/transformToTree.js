/**
 * 请实现一个方法将data结构转换为tree结构
 */

const data = [
  { parent_id: null, id: "a", value: "xxxx" },
  { parent_id: "a", id: "c", value: "xxxx" },
  { parent_id: "d", id: "f", value: "xxxx" },
  { parent_id: "c", id: "e", value: "xxxx" },
  { parent_id: "b", id: "d", value: "xxxx" },
  { parent_id: "a", id: "b", value: "xxxx" }
];

function transformToTree(data) {
  let result = {};
  let newData;
  data.sort((a, b) => a.id.codePointAt() - b.id.codePointAt());
  newData = data.filter(item => !item.parent_id);
  newData.forEach(item => {
    result[item.id] = {
      value: item.value
    };
  });

  function loop(result) {
    for (const key in result) {
      let newData = data.filter(item => item.parent_id === key);
      if (newData.length) {
        newData.forEach(item => {
          result[key].children = result[key].children || {};
          result[key].children[item.id] = {
            value: item.value
          };
          loop(result[key].children);
        });
      }
    }
  }
  loop(result);
  return result;
}

const tree = transformToTree(data);
console.log(tree);
