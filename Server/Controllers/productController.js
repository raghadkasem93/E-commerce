const Product = require("../Schema/product");

//Create the product via a POST endpoint//
exports.createProduct = async function (req, res) {
  try {
    let productbody = new Product(req.body);
    let products = await productbody.save();
    res.json({
      data: products,
      message: "Product Added Succcessfully",
      Product: products,
    });
  } catch (error) {
    res.status(400).json({ message: "Please try again" });
  }
};
//Get all products via a GET endpoint//
exports.getAllProducts = async function (req, res) {
  try {
    const { name } = req.params;

    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit);

    let filter = {};
    if (req.query.brand) {
      filter.brand = req.query.brand;
    }

    if (name) {
      filter.name = { $regex: new RegExp(name, 'i') };
    }

    const sort = {};

    if (req.query.sortByPrice) {
      sort.price = req.query.sortByPrice === "asc" ? 1 : -1;
    }
    const skip = (page - 1) * limit;
    const products = await Product
      .find(filter)
      .populate("category", "name -_id")
      .skip(skip)
      .limit(limit)
      .sort(sort);
    if (products.length === 0) {
      return res.status(404).json({ message: "No products found" });
    }

    res.json(products);
  } catch (error) {
    res
      .status(500)
      .json({ message: "An error occurred", error: error.message });
  }
};

//Get product by id via a GET endpoint//
exports.getProductById = async function (req, res) {
  try {
    const id = req.params.id;
    const selectedProduct = await Product.findById(id);
    if (!selectedProduct)
      return res.status(404).json({
        type: "error",
        message: "Product doesn't exists",
      });

    return res.status(200).json({
      type: "success",
      selectedProduct,
    });
  } catch (err) {
    res.status(500).json({
      type: "error",
      message: "Something went wrong please try again",
      err,
    });
  }
};
//update product via a PUT endpoint//
exports.updateProduct = async function (req, res) {
  try {
    const { id } = req.params;
    const { price, discount } = req.body;


const updatedProduct = await Product.findByIdAndUpdate(id,{price, discount});
if (!updatedProduct)
  return res.status(404).json({
    type: "error",
    message: "Product doesn't Updated",
  });



    return res.status(200).json({
      type: "success Update",
      updatedProduct,
    });
  } catch (err) {
    res.status(500).json({
      type: "error",
      message: "Something went wrong please try again",
      err,
    });
  }
};

//delete product via a DELETE endpoint//
exports.deleteProduct = async function (req, res) {
  try {
    const { id } = req.params;
    const deletedProduct = await Product.findByIdAndDelete(id);
    if (!deletedProduct)
      return res.status(404).json({
        type: "error",
        message: "Product doesn't exist",
      });
    return res.status(200).json({
      type: "success",
      message: "Product deleted successfully",
    });
  } catch (err) {
    res.status(500).json({
      type: "error",
      message: "Something went wrong please try again",
      err,
    });
  }
};
