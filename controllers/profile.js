

const handleProfileGet = (req,res,database)=>{
    const {id} = req.params;
    database.select('*').from('users').where({ id :id}).then(user=>{
       if(user.length){
            res.json(user[0]);
        } else{
            res.status(400).json('Error getting user'); 
        }    
    }).catch(err=>res.status(400).json("Catch error"));
}

module.exports={
    handleProfileGet : handleProfileGet
}