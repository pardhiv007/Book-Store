const Product=require("../models/product")
const formidable=require("formidable")
const _=require("lodash")
const fs=require("fs")


exports.getProductById=(req,res,next,id)=>{
    Product.findById(id)
    .populate("category")
    .exec((err,product)=>{
        if(err){
            return res.status.json({
                error:"product not found"
            })
        }
        req.product=product;
        next();
    })
}

exports.createProduct=(req,res)=>{
    let form =new formidable.IncomingForm();
   form.keepExtensions=true;

    form.parse(req,(err,fields,file)=>{
        if(err){
            return res.status(400).json({
                error:"problem with image"
            })
        }

        const {name,description,price,category,stock}=fields;

        if(
            !name||
            !description||
            !price||
            !category||
            !stock
        ){
            return res.status(400).json({
                error:"enter all the fields"
            })
        }
        console.log(fields)
        let product=new Product({
            name:name[0],
            description:description[0],
            price:price[0],
            stock:stock[0],
            category:category
        })

        if(file.photo){
            if(file.photo.size> 3000000){
                return res.status(400).json({
                    error:"file size too big"
                })
            }
            console.log(file.photo[0].filepath)
            product.photo.data=fs.readFileSync(file.photo[0].filepath)
           
            product.photo.contentType=file.photo[0].mimetype;
            console.log(product)
            product.save((err,product)=>{
                if(err){
                    res.status(400).json({
                        error:"savving book failed"
                    })
                }
                return res.json(product)
            })
        }
    })
}

exports.getProduct=(req,res)=>{
    req.product.photh=undefined
    return res.json(req.product)
}

exports.photo=(req,res,next)=>{
    if(req.product.photo.data){
        res.set("Content-type",req.product.photo.contentType)
        return res.send(req.product.photo.data)
    }
}

exports.deleteProduct=(req,res)=>{
    let product=req.product;
    product.remove((err,dproduct)=>{
        if(err){
            return res.status(400).json({
                error:"Failed to delete"
            }
            )
        }
        res.json({
            message:"delete was success",
            dproduct
        })
    })
}

exports.updateProduct=(req,res)=>{
        let form =new formidable.IncomingForm();
       form.keepExtensions=true;
    
        form.parse(req,(err,fields,file)=>{
            if(err){
                return res.status(400).json({
                    error:"problem with image"
                })
            }
    
            
            //console.log(fields)
            let product=req.product;
            console.log(fields)
            const up={}
            Object.keys(fields).forEach(key => {
                up[key]=fields[key][0]
               // console.log(`Key: ${key}, Value: ${value}`);
            });
            console.log(up)
            product=_.extend(product,up)
    
            if(file.photo){
                if(file.photo.size> 3000000){
                    return res.status(400).json({
                        error:"file size too big"
                    })
                }
                console.log(file.photo[0].filepath)
                product.photo.data=fs.readFileSync(file.photo[0].filepath)
               
                product.photo.contentType=file.photo[0].mimetype;
            }
                console.log(product)
                product.save((err,product)=>{
                    if(err){
                        res.status(400).json({
                            error:"update book failed"
                        })
                    }
                    return res.json(product)
                })
            
        })
    
}


exports.getAllProducts=(req,res)=>{
    let limit=req.query.limit ? parseInt(req.query.limit) :8
    let sortBy=req.query.limit ? req.query.sortBy :"_id"
    Product.find()
    .select("-photo")
    .populate("category")
    .sort([[sortBy,"asc"]])
    .limit(limit)
    .exec((err,products)=>{
        if(err){
            return res.status(400).json({
                error:"No product found"
            })
        }
        res.json(products)
    })
}

exports.getAllUniqueCategories=(req,res)=>{
    Product.distinct("category",{},(err,category)=>{
        if(err){
            return res.status(400).json({
                error:"No cate found"
            })
        }
        res.json(category)
    })
}


exports.updateStock=(req,res,next)=>{
    let myOperations=req.body.order.products.map(prod=>{
        return {
            updateOne:{
                filter:{_id:prod._id},
                update:{$inc:{stock: -prod.count,sold:+prod.count}}
            }
        }
    })


    Product.bulkWrite(myOperations,{},(err,products)=>{
        if(err){
            return res.status(400).json({
                error:"bulk op fail"
            })
        }
        next()
    })
}