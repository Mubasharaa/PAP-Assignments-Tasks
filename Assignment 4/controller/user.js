const {db} =require('../config');//configuration

const { responseApi  } = require('../util'); //it is better to restructure util



exports.get = (req, res) => {
    const body = req.body;
    const args = db.todos[body.id];
    if(args.delete){
     object(res, 400, {success: false, message: 'List updated'});
    }else{
      object(res, 200, {success: true, message: 'List not yet updatednpm install dotenv --save', todos: [args]}); 
    
  }
  }
//configuration
exports.get = (req, res) => {
    console.log(object);
    const body = req.body;
    if(db.user[body.id].delete){
      res.status(400).json({
        success: false,
        message: 'todo item not found'
      })
    }else{
    res.status(200).json({
      success: true,
      message: 'todo item found',
      todos: db.todos[body.id]
    })
  }
  }
  exports.post=(req,res) => {
    const body = req.body;
    db.todos.push.name=body.name; //for array we use push method
    res.status(200).json({
      success:true,
      message: 'List  Added',
      "todos": [
        {
          "id":0,
          name: 'TODO LIST NAME',
      List: ['items1','items2'],
      delete: false
        },
        {
          "id":1,
          name: 'TODO LIST NAMES Aliens',
      List: ['Alien1','Alien2'],
        }
      ]
      
      
    })
  }
  exports.put=(req,res) => {
    const body = req.body;
    db.todos[0] = body;
      res.status(200).json({
      success:true,
      message: 'Successfully Todo item  Updated',
      "todos": [
      {
        "id":1,
        name: ' Aliens',
      
      }
    
    ]
    })
  }
  
  exports.patch=(req,res) => {
    const body = req.body;
    db.todos[0] = body;
      res.status(200).json({
      success:true,
      message: 'Successfully Todo item  Updated',
      "todos": [
      {
        "id":1,
        name: ' Aliens',
      
      }
    
    ]
    })
  }
  (req,res) => {
    const body = req.body;
    db.todos[body.id].name = body.name;
    res.status(200).json({
      success:true,
      message: 'List Name Updated',
      todos: db.todos[body.id]
    })
  }
  exports.delete=(req,res) => {
    db.todos[0]
    res.status(200).json({
    
      success: true,
      message: 'id name deleted',
     
    })
  
      
    }
  
  
  