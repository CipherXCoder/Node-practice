const buffer = new Buffer.from("Mohamed");

buffer.write("Bouderya");

console.log(buffer.toString());
console.log(buffer);
console.log(buffer.toJSON());