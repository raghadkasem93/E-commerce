
const   Category = require('../Schema/category')
const Joi = require('joi');

// Joi Validierungsschema für Kategorie
const validateCategory = (data) => {
    const schema = Joi.object({
      name: Joi.string().min(2).max(50).required(),
    });
    return schema.validate(data);
  };


//Create the category via a POST endpoint//

exports.createCategory = async function (req, res){
    try{

        const { error } = validateCategory(req.body);
        if (error) return res.status(400).send(error.details[0].message);

        const existingCategory = await Category.findOne({ name: req.body.name });
        if (existingCategory) return res.status(400).send('Kategorie is exist');
        let categorybody=  new  Category(req.body);

        let categorys= await categorybody.save()
        res.json( {data:categorys,
            message:"Category Added Succcessfully",Category:categorys});
        }
        catch(error){
    
            res.status(400).json({message:"Please try again"})
        }
    }

    exports.getCategory = async function (req,res){
try{

const category= await  Category.find();
res.status(200).json({Category:category});



}
catch (error){
  res.status(400).json({message:"Please try again cannot find Category"})
    }}