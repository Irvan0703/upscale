const Tasks = require('./model');

const store = async(req, res) => {
try {
    let payload = req.body;

    let task = new Tasks(payload);
    task.save();
    return res.json(task)
} catch (err) {
    return res.json({
        error:1,
        message: err.message,
        fields: err.errors 
    });
}
}

const index = async( req, res) =>{
    try {
        let task = await Tasks.find();

        return res.json({
            data: task
        });
    } catch (err) {
        return res.json({
            error:1,
            message: err.message,
            fields: err.errors 
        });
    }
}

const view = async(req,res,next) => {
    try {
        const { id } = req.params;

        let task = await Tasks.findById({_id: ObjectId(id)});

        res.json({
            data: task
        })

    } catch (err) {
        return res.json({
            error:1,
            message: err.message,
            fields: err.errors 
        });
    }
}

const update = async(req,res) => {
    try {
        let payload = req.body;
        let { id } = req.params;

        let task = await Tasks.findByIdAndUpdate(id, payload, {
            new: true,
            runValidators: true
        })

        return res.json(task);
    } catch (err) {
        return res.json({
            error:1,
            message: err.message,
            fields: err.errors 
        });
    }
}

const destroy = async(req, res) => {
    try {
        await Tasks.findByIdAndDelete(req.params.id);

        return res.json({
            message: 'Task Successfully deleted'
        })
    } catch (err) {
        return res.json({
            error:1,
            message: err.message,
            fields: err.errors 
        });
    }
}

module.exports = {
    store,
    index,
    view,
    update,
    destroy
}