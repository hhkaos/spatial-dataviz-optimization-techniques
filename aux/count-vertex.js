data.features[0].geometry.coordinates[0].length


let callback = (accumulator, currentValue) => {
  let polyVertex = 0;
  currentValue.geometry.coordinates.forEach(element => {
    polyVertex += element.length;
  });
  return accumulator + polyVertex;
};

const sumWithInitial = data.features.reduce(callback, 0);

console.log(sumWithInitial);