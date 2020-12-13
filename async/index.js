const logTime = name => {
  console.log(`Log...${name}` + new Date().toLocaleTimeString());
};

// Callback
exports.callback = () => {
  setTimeout(() => {
    logTime("callback 1");
    setTimeout(() => {
      logTime("callback 2");
    }, 100);
  }, 100);
};

// Promise
const promise = (name, delay = 100) =>
  new Promise(resolve => {
    setTimeout(() => {
      logTime(name);
      resolve();
    }, delay);
  });

exports.promise = () => {
  promise("Promise1")
    .then(promise("Promise2"))
    .then(promise("Promise3"));
};

// Generator
