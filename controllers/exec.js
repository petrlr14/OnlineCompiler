var exec = require('child_process').exec, child;
const fs = require("fs");

module.exports = {
    exe: (req, res, next) => {
        console.log(req);
        const content = req.body.content;
        fs.writeFile('input.moe', content, (error) => {
            console.log(error);
            child = exec(`java -jar jar/spegmoe.jar input.moe`, (error, stdout, stder) => {
                fs.readFile("output.txt", 'utf8', (err, data) => {
                    if (err) {
                        console.log('error: ', err);
                    } else {
                        console.log(data);
                        return res.status(200).json({
                            ok: true,
                            returnedCode: data
                        });
                    }
                })
            });
        })
    }
}