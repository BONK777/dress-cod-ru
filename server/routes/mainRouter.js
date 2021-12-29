const router = require("express").Router();
const fs = require("fs");

let data = "";
const readFile = (path) => {
  return fs.readFileSync(__dirname + path, "utf-8");
};

console.log(data);

const makeProducts = () => {
  return readFile("/../../data/fruit.csv")
    .split("\r\n")
    .slice(1)
    .map((row) => {
      const [name, size, color, category, image, price, brand, id] = row.split(";");
      return {
        name,
        size,
        color,
        category,
        image,
        price,
        brand,
        id
      };
    });
};
console.log(makeProducts())

router.get("/index", (req, res) => {
  res.render("index", {
    title: "DRESS-COD",
    products: makeProducts(),
  });
});
router.get("/admin", (req, res) => {
  res.render("admin", {
      title: "Админская странца",
      products: makeProducts()

  });
});
router.get("/adddre", (req, res) => {
  res.render("adddre", {
      title: "Добавить товар"
  });
});

router.get("/t-shirt", (req, res) => {
  res.render("t-shirt", {
      title: "T-SHIRTS",
      products: makeProducts(),
  });
});

router.get("/hoodies", (req, res) => {
  res.render("hoodies", {
      title: "HOODIES",
      products: makeProducts(),
  });
});

router.get("/jacket", (req, res) => {
  res.render("jacket", {
      title: "JACKETS",
      products: makeProducts(),
  });
});

router.get("/shirts", (req, res) => {
  res.render("shirts", {
      title: "SHIRTS",
      products: makeProducts(),
  });
});

router.get("/short", (req, res) => {
  res.render("short", {
      title: "SHORTS",
      products: makeProducts(),
  });
});

router.get("/trousers", (req, res) => {
  res.render("trousers", {
      title: "TROUSERS",
      products: makeProducts(),
  });
});

router.get("/sweaters", (req, res) => {
  res.render("sweaters", {
      title: "SWEATERS",
      products: makeProducts(),
  });
});

module.exports = router;
