import { Router } from 'express';
import { supabase } from '../db/supabaseClient';

const router = Router();

// Example route to get data from Supabase
router.get('/data', async (req, res) => {
    const { data, error } = await supabase
        .from('your_table_name')
        .select('*');

    if (error) {
        return res.status(500).json({ error: error.message });
    }

    res.json(data);
});

// Example route to insert data into Supabase
router.post('/data', async (req, res) => {
    const { body } = req;

    const { data, error } = await supabase
        .from('your_table_name')
        .insert([body]);

    if (error) {
        return res.status(500).json({ error: error.message });
    }

    res.status(201).json(data);
});

export default router;