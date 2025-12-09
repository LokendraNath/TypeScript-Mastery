function show(x: string | number) {
  if (typeof x === "string") {   // <-- type guard
    console.log(x.toUpperCase()); // Here x is narrowed to string
  } else {
    console.log(x.toFixed(2));    // Here x is narrowed to number
  }
}
