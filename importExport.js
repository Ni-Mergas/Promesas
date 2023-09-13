const funcionPromesa = (name) => new Promise((resolve, reject) => {
    // setTimeout(() => {
      resolve([`${name}-${Math.random() * 100 }`, "perez"]);
      // else reject({ message: "ud no es carlos" });
    // }, 500);
  });

funcionPromesa("carlos")
  .then(([persona, middleName]) =>  {
    console.log(persona, middleName)
    return funcionPromesa(persona)
  })
  .then(([persona, middleName]) =>  {
    console.log(persona, middleName)
    return funcionPromesa(persona)
  })
  .catch(err => {
      console.error("Fallo !!!! ", err);
  });