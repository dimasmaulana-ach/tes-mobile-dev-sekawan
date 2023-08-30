// throttle

const Throttle = (func, delay) => {
  let timeoutId;
  let lastExecTime = 0;

  return function (...args) {
    const currentTime = Date.now();

    if (currentTime - lastExecTime > delay) {
      func?.apply(this, args);
      lastExecTime = currentTime;
    } else {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        func?.apply(this, args);
        lastExecTime = Date.now();
      }, delay);
    }
  };
};

// const Throttle = (func, delay) => {
//   let timeoutId;
//   let lastExecTime = 0;

//   return function (...args) {
//     const currentTime = Date.now();

//     if (currentTime - lastExecTime > delay) {
//       func?.apply(this, args);
//       lastExecTime = currentTime;
//     } else {
//       clearTimeout(timeoutId);
//       timeoutId = setTimeout(() => {
//         func?.apply(this, args);
//         lastExecTime = Date.now();
//       }, delay);
//     }
//   };
// };

export default Throttle;
