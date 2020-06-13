const express = require("express");
const customerRouter = express.Router();
const Customer = require('../model/Customer')

customerRouter.get('/', async (req, res) => {
    try{
        const customers = await Customer.find();
        res.json(customers);
    }catch(err){
        res.json({message : errs});
    }
});

customerRouter.post('/', async (req, res)=>{
    //console.log(req.body);
    const customers = await Customer.find({}).sort({_id: -1}).limit(1);
    console.log(customers);
    const custId = parseInt(customers[0].custId,10) + 1;
    const customer = new Customer({
        custId: custId,
        custName: req.body.custName,
        businessType: req.body.businessType,
        Status: req.body.Status,
        Purpose: req.body.Purpose,
        RMTeam: req.body.RMTeam,
        PEP: req.body.PEP,
        AnnualTurnOver: req.body.AnnualTurnOver,
        EstimateTurnOver:req.body.EstimateTurnOver
    })

    try{
    const newCustomer = await customer.save();
        res.json(newCustomer);
    }catch(err){
        res.json({message : err});
    }
    /*customer.save()
    .then( data => {
        res.json(data);
    })
    .catch(err =>{
        res.json({message:err});
    });*/
});

customerRouter.get('/:custId', async (req, res)=>{
    //console.log(req.params.custId)
    try{
        //const customer = await Customer.findById(req.params.custId);
        const customer = await Customer.find({custId : req.params.custId});
        res.json(customer);
    }catch(err){
        res.json({message : err});
    }
})

// Edit Customer by id

customerRouter.put('/edit/:custId', async (req, res)=>{
    // console.log("in edit method")
    // console.log(req.params.custId)
    var conditions = {custId: req.params.custId};
     try{
         Customer.updateOne(conditions, req.body).then(data => {
             if(!data){
                res.json({"success" : "false"})
             }
             else{
                res.json({"success" : "true"});
             }
         })
        }catch(err){
        res.json({message : err});
    }
});

// Delete Customer by id
customerRouter.delete('/delete/:custId', async (req, res)=>{
     console.log("in delete method")
     console.log(req.params.custId)
    var conditions = {custId: req.params.custId};
     try{
         const customer = Customer.findOneAndRemove(conditions, {useFindAndModify : false}).then(data => {
             if(!data){
                 res.json({"success" : "false"})
             }
             else{
                res.json({"success" : "true"});
             }
         })
        }catch(err){
        res.json({message : err});
    }
});

module.exports = customerRouter;