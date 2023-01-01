const db = require('../model');

exports.get = async (req, res) => {
    const body = req.body;
    try {
       const todos = await db.todos.findOne(body);
       if(!todos || todos?.delete) {
        res.status(400).json({
            success: false,
            message: 'List not found'
        })
    }
    else {
    res.status(200).json({
        success: true,
        message: 'List found',
        todos
    })
   }
    }
    catch {
        res.status(400).json({
            success:false,
            message: 'List not found',
        })
    }

}

exports.post = async (req,res) => {
    const body = req.body;
    try {
    const todos = new db.todos(body);
    const response = await todos.save();
    res.status(200).json({
        success:true,
        message: 'Item added',
        todos: response
    })
    }
    catch {
        res.status(400).json({
            success:false,
            message: 'Item not added',
        })
    }
}

exports.put = async (req,res) => {
    const body = req.body;
    try {
        const todos = await db.todos.findOneAndUpdate({id: body?.id}, body, { new:true });
        res.status(200).json({
            success:true,
            message: 'User updated',
            todos
        })
    } catch {
        res.status(400).json({
            success:false,
            message: 'User not updated'
        })
    }
}

exports.patch = async (req,res) => {
    const body = req.body;
    try {
        const todos = await db.user.findOneAndUpdate({id: body?.id}, body, { new:true });
        res.status(200).json({
            success:true,
            message: 'User fields updated',
            todos
        })
    } catch {
        res.status(400).json({
            success:false,
            message: 'User fields not updated'
        })
    }
}

exports.delete = async (req,res) => {
    const body = req.body;
    try {
        const todos = await db.user.findOneAndUpdate({id: body?.id}, body, { new:true });
        res.status(200).json({
            success:true,
            message: 'Item deleted',
            todos
        })
    } catch {
        res.status(400).json({
            success:false,
            message: 'Item not deleted'
        })
    }
}