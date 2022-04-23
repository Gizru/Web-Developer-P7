
var mongoose = require("mongoose");

const forumSchema = mongoose.Schema({
    userId: { type: String, required: true },
    userName: { type: String, required: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    seenBy: { type: [String], required: true },
});
const Model = mongoose.model("forumModel", forumSchema, "forum");
const fs = require('fs');

exports.createForum = (req, res, next) => {

    console.log("ready to connect");

    var db = mongoose.connection;
    db.on("error", console.error.bind(console, "connection error:"));
    db.once("open", function () {
        console.log("Connection Successful!");
    })

    const newPost = req.body;

    var doc1 = new Model({
        userId: newPost.userId,
        userName: newPost.userName,
        title: newPost.title,
        description: newPost.post,
        seenBy: []
    });

    doc1.save().then(
            res.status(201).json({
                message: 'Post saved successfully!'
            })
    )
};

exports.getForums = (req, res, next) => {
    Model.find().then(
        (forums) => {
            res.status(200).json(forums);
        }
    ).catch(
        (error) => {
            res.status(400).json({
                error: error
            });
        }
    );
};

exports.postSeen = (req, res, next) => {
    const userId = req.body.userId;
    const _id = req.body._id;
    let newForum = false
    Model.findOne(
        { _id: _id }
    ).then(
        (forum) => {
            if (!forum.seenBy.includes(userId)) {
                newForum = true;
                let newList = forum.seenBy
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
                        isNew: newForum,
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
                    isNew: newForum
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