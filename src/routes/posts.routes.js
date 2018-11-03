const express = require('express');
const db = require('../db/index')
const app = express.Router();



app.get('/', (req, res) => {

    db.query('SELECT * FROM public.posts', (err, resp) => {
        if (err) {
            return res.status(500).json({
                status: false,
                err
            });
        } else {
            return res.json({
                status: true,
                posts: resp.rows
            });
        }
    });

});

app.post('/', (req, res) => {

    const { name, description } = req.body;

    if (!name || !description || name.trim().length < 3 || description.trim().length < 5) {
        return res.status(400).json({
            status: false,
            err: 'name or description invalid'
        });
    }

    const query = {
        text: 'INSERT INTO posts(name, description) VALUES($1, $2) RETURNING *',
        values: [name, description]
    }

    db.query(query, (err, resp) => {
        if (err) {
            return res.status(500).json({
                status: false,
                err
            });
        } else {
            return res.status(201).json({
                status: true,
                post: resp.rows[0]
            });
        }
    });

});


app.delete('/:id', (req, res) => {

    const { id } = req.params;

    const query = {
        text: `DELETE FROM posts WHERE idposts=${id} RETURNING *`
    }

    db.query(query, (err, resp) => {
        if (err) {
            return res.status(500).json({
                status: false,
                err
            });
        } else {
            if (resp.rows.length === 0) {
                return res.status(400).json({
                    status: false,
                    message: 'Record does not exist'
                });
            } else {
                return res.json({
                    status: true,
                    post: resp.rows[0]
                });
            }
        }
    });

});

module.exports = app;