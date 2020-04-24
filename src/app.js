const express = require("express");

const route = express();
const port = 3000 || process.env.PORT;

route.use(express.json());

const squareNum = (n) => {
    return new Promise((resolve,reject) => {
        resolve(n*n);
    });
}

route.post('/square', async (req,res) => {
    const inputNum = req.body.num;
    const result = await squareNum(inputNum);
    console.log(result);
    (res.send({ "output": result }));
});

route.listen(port, () => {
    console.log(`Server is up on port ${port}`);
});