import express from 'express';
import { createClient } from '@supabase/supabase-js';
import { supabase } from '../db/supabaseClient';
import apiRoutes from '../routes/api';

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/api', apiRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});