(() => {
  const myPromise = new Promise<string>((resolve, reject) => {
    const success = Math.random() > 0.5;

    if (success) {
      resolve("Promise resolved successfully");
    } else {
      reject("Failure");
    }

    myPromise
      .then((message) => console.log(message))
      .catch((message) => console.log(message));
  });
})();
