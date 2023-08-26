import event from "../Schema/function.js"

export const eventnew = async (req, res) => {
      console.log(req.body);
      try {
            const even = new event({
                  BrideGroomsandBrideName: req.body.BrideGroomsandBrideName,
            })
            await even.save();
            res.status(200).json(even)
            console.log("new function created")
      } catch (err) {
            res.status(404).json("Function is already existed")
      }
}

export const getevent = async (req, res) => {
      const getall = await event.find();
      res.status(200).json(getall)
      console.log("all event");
}