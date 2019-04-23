import * as express from 'express';
import knex from '../../db';

const router = express.Router();

router.get('/', async (req, res, next) => {
    try {
        let data = await knex('books').select('title');
        res.json(data);
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
});

export default router;