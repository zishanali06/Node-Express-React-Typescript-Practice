import * as express from 'express';
import knex from '../../db';

const router = express.Router();

router.get('/:id?', async (req, res, next) => {
    let id = req.params.id;
    if (id) {
        try {
            let [data] = await knex('books')
                                    .select('categories.id as id')
                                    .join('categories', 'categories.id', '=', 'books.categoryid')
                                    .where('books.id', id);
            res.json(data.id);
        } catch (error) {
            console.log(error);
            res.sendStatus(500);
        }
    } else {
        try {
            let data = await knex('categories').select('name as category');
            res.json(data);
        } catch (error) {
            console.log(error);
            res.sendStatus(500);
        }
    };
});

export default router;