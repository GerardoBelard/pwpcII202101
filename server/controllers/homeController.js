const index = function(req, res)  {

        res.render('index', { 
            title: 'ProjNotes', 
        
        });
      
      };
const greetin = function(req , res) {
    res.status(200).json
    ({message:'Que pasa chaval'});
  };

export default{
    index,
    greeting,
};