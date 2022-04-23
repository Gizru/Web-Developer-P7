const fs = require('fs');


var mongoose = require("mongoose");


const memesSchema = mongoose.Schema({
    userName: { type: String, required: true },
    imageUrl: { type: String, required: true },
    description: { type: String, required: true },
    seenBy: { type: [String], required: true },
});

var Model = mongoose.model("memesModel", memesSchema, "memes");


exports.createMeme = (req, res) => {
    var db = mongoose.connection;
    db.on("error", console.error.bind(console, "connection error:"));
    db.once("open", function () {
        console.log("Connection Successful!");
    })

    const url = req.protocol + '://' + req.get('host');

    const newMeme = req.body;
    newMeme.fileName = newMeme.fileName.split(' ').join('_');

    console.log(newMeme)

    var doc1 = new Model({
        userName: newMeme.userName,
        description: newMeme.Description,
        imageUrl: url + '/images/' + newMeme.fileName,
        seenBy: []
    });

    doc1.save().then(
        res.status(201).json({
            message: 'Meme saved successfully!'
        })
    ).catch(
        (error) => {
            res.status(404).json({
                error: error
            });
        }
    )
};

exports.getMemes = (req, res, next) => {

    Model.find().then(
        (memes) => {
            res.status(200).json(memes);
        }
    )
};

exports.memeSeen = (req, res, next) => {
    const userId = req.body.userId;
    const _id = req.body._id;
    let newMeme = false
    Model.findOne(
        { _id: _id }
    ).then(
        (meme) => {
            console.log(meme)
            if (!meme.seenBy.includes(userId)) {
                newMeme = true;
                let newList = meme.seenBy
                newList.push(userId)

                Model.updateOne(
                    { _id: _id },
                    {
                        $set:
                        {
                            seenBy: newList
                        }
                    }
                ).then(
                    res.status(201).json({
                        isNew: newMeme,
                        newList
                    })
                ).catch(
                    (error) => {
                        res.status(404).json({
                            error: error
                        });
                    }
                );


            } else {
                res.status(201).json({
                    isNew: newMeme
                })
            }
        }
    ).catch(
        (error) => {
            res.status(404).json({
                error: error
            });
        }
    );

};