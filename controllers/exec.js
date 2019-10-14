var exec = require('child_process').exec, child;
const fs = require("fs");

module.exports = {
    exe: (req, res, next) => {
        const content = req.body.content;
        fs.writeFile('input.moe', content, (error) => {
            console.log(error);
            child = exec(`java -jar jar/spegmoe.jar input.moe`, (error, stdout, stder) => {
                console.log(error);
                fs.readFile("output/output.txt", 'utf8', (err, data) => {
                    fs.readFile("output/errors.txt", "utf8", (er, dat) => {
                        if (err) {
                            console.log('error: ', err);
                        } else {
                            console.log(data);
                            return res.status(200).json({
                                ok: true,
                                returnedCode: data,
                                error: dat
                            });
                        }
                    })
                })
            });
        })
    }
}