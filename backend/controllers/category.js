const Category=require("../models/category")


exports.getCategoryById=(req,res,next,id)=>{
    Category.findById(id).exec((err,cate)=>{
        if(err){
            return res.status(400).json({
                error:"Category not found"
            })
        }
        req.category=cate;
        next();
    })    
 
}

exports.createCategory=(req,res)=>{
    const category=new Category(req.body);
    category.save((err,category)=>{
        if(err){
            return res.status(400).json({
                error:"Not able to save Category in Db"
            })
        }
        res.json({category})
    })
}

exports.getCategory=(req,res)=>{
    return res.json(req.category)
}

exports.getAllCategories=(req,res)=>{
    Category.find().exec((err,items)=>{
        if(err){
            return res.status(400).json({
                error:"NO categories"
            })
        }
        res.json(items)
    })
}

exports.updateCategory=(req,res)=>{
    const category=req.category;
    category.name=req.body.name;
    category.save((err,updatedCategory)=>{
        if(err){
            return res.status(400).json({
                error:"fail to update"
            })
        }
        res.json(updatedCategory)
    })
}

exports.removeCategory=(req,res)=>{
    const category=req.category;
    category.remove((err,category)=>{
        if(err){
            return res.status(400).json({
                error:"fail to delete"
            })
        }
        res.json({
            message:"succesfull deleted"
        })
    })
}