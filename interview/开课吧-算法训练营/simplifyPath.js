/**
 * 简化路径
 */

function simplifyPath(path) {
  const stack = [];
  const paths = path.split("/");
  for (let i = 0; i < paths.length; i++) {
    const p = paths[i];
    if (p === "..") {
      stack.pop();
    } else if (p && p !== ".") {
      stack.push(p);
    }
  }
  return "/" + stack.join("/");
}

// test
const path = "/a/./b/../../c/";
console.log(simplifyPath(path));
