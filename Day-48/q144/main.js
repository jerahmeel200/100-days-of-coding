const myPromise = new Promise((resolve, reject) => {
  const success = Math.random() > 0.5;

  if (success) {
    resolve("Success");
  } else {
    reject("Failure");
  }
});

myPromise
  .then((message) => console.log(message))
  .catch((message) => console.log(message));
