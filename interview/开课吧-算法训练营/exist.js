/**
 * 单词搜索
 */

function exist(board, word) {
  // 1.怎么找
  // 2.什么时候终止
  // 3.find内部 怎么找下一步（缓存存储中间的的过程）
  if (!board.length) return false;
  if (!word.length) return true;
  const row = board.length;
  const col = board[0].length;
  // 怎么找
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      const ret = find(i, j, 0);
      if (ret) return true;
    }
  }
  return false;

  function find(i, j, cur) {
    // 越界要停止
    if (i >= row || i < 0) return false;
    if (i >= col || j < 0) return false;
    const letter = board[i][j];
    if (letter !== word[cur]) return false;
    if (cur === word.length - 1) return true;
    board[i][j] = null;
    const ret =
      find(i + 1, j, cur + 1) ||
      find(i - 1, j, cur + 1) ||
      find(i, j + 1, cur + 1) ||
      find(i, j - 1, cur + 1);
    board[i][j] = letter;
    return ret;
  }
}
