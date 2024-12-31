(() => {
  const make_car = (
    manufacturer: string,
    model: string,
    ...option: [string, any][]
  ) => {
    let car = { manufacturer, model };
    option.forEach(([key, value]) => (car[key] = value));
    return car;
  };

  console.log(make_car("Toyota", "Carolla", ["color", "red"], ["year", 2020]));

  console.log(make_car("Ford", "Fiesta", ["color", "blue"], ["sunroof", true]));
})();
