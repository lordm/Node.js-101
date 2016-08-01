var buf = new Buffer(10);

buf.write("abdefghj", 0, "ascii");
console.log(buf.toString('base64')); // YWJkZWZnaGowvQ==

buf = buf.slice(0,5);
console.log(buf.toString('utf8')); // abdef
