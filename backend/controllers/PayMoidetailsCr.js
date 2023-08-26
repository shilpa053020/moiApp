import create from "../Schema/PayMoidetails.js";

export const createfunction = async (req, res) => {
    try {
        console.log(req.body);
        const crtfun = new create({

            function_id: req.body.function_id,
            Name: req.body.Name,
            Mobilenumber: req.body.Mobilenumber,
            Address: req.body.Address,
            Moipayment: req.body.Moipayment
        });
        await crtfun.save();
        console.log("created new function");
        res.status(200).json(crtfun)
    } catch (err) {
        res.status(404).json("try again")
    }
}

export const getfunction = async (req, res) => {
    const getAll = await create.find();
    res.status(200).json(getAll)
    console.log("get the details")
}

export const moi = async (req, res) => {
    try {
        console.log(req.params.id);
        const allmois = await create.find({ function_id: req.params.id });
        return res.status(200).json(allmois)
    }
    catch (err) {
        return res.status(404).json(err)
    }
}
