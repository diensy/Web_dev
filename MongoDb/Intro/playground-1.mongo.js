// Select the database to use.
use("WebDatabase");

// Insert a few documents into the courses collection.
db.getCollection("Courses").insertMany([
  {
    name: "javaq1",
    price: 20000,
  },
  {
    name: "javaq2",
    price: 20000,
  },
  {
    name: "javaq3",
    price: 20000,
  },
  {
    name: "javaq4",
    price: 20000,
  },
  {
    name: "javaq5",
    price: 20000,
  },
  {
    name: "javaq6",
    price: 20000,
  },
  {
    name: "javaq7",
    price: 20000,
  },
  {
    name: "javaq8",
    price: 20000,
  },
  {
    name: "javaq9",
    price: 20000,
  },
  {
    name: "javaq10",
    price: 20000,
  },
]);

// Print a message to the output window.
console.log("Done Inserting Data");
