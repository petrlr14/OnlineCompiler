var exec = require('child_process').exec, child;
const fs = require("fs");

module.exports = {
    exe: (req, res, next) => {
        const content = req.body.content;
        fs.writeFile('input.moe', content, (error) => {
            if (error) {
                return res.status(500).json({
                    error1: error,
                })
            }
            child = exec(`java -jar jar/spegmoe.jar input.moe`, (erro, stdout, stder) => {
                if (erro) {
                    return res.status(500).json({
                        error1: erro,
                    })
                }
                fs.readFile("output/output.txt", 'utf8', (err, data) => {
                    if (err) {
                        return res.status(500).json({
                            error1: err
                        })
                    }
                    fs.readFile("output/errors.txt", "utf8", (er, dat) => {
                        if (err) {
                            return res.status(500).json({
                                error1: err,
                                error2: er
                            })
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