const express =require('express');
const mongoose=require('mongoose');
require('dotenv').config();
const cors=require('const');

const app= express();
app.use(cors);
app.use(express.json());
