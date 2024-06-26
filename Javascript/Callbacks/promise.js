let prom1 = new Promise((resolved, reject) => {
  let b = Math.random();
  if (b < 0.5) {
    console.log(b);
    reject("No the random number is not supported");
  } else {
    console.log(b);
    setTimeout(() => {
      console.log("Yes I am done");
      resolved("Dinesh");
    }, 3000);
  }
});
let prom2 = new Promise((resolved, reject) => {
  let b = Math.random();
  if (b < 0.5) {
    console.log(b);
    reject("No the random number is not supported");
  } else {
    console.log(b);
    setTimeout(() => {
      console.log("Yes I am done 2");
      resolved("Rinku");
    }, 3000);
  }
});

let prom3 = Promise.allSettled([prom1, prom2]);
prom3
  .then((a) => {
    console.log(a);
  })
  .catch((err) => {
    console.log(err);
  });
