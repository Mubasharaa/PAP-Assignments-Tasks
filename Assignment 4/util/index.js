
exports.object = (res, statusobjectNum,{successmessage,updated, todos:[TODOS] }) =>
{
    res.status(statusobjectNum).json({
        success: successmessage,
        message:updated,
        todos : [TODOS]
        
        })
    }