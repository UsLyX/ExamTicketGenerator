const express = require('express');
const mongoose = require('mongoose');
const authRouter = require('./router/authRouter');
const userRouter = require('./router/userRouter');
const ticketRouter = require('./router/ticketRouter');
const questRouter = require('./router/questRouter');
const cors = require('cors');

const PORT = process.env.PORT || 8081;

const app = express();
app.use(cors());

app.use(express.json());
app.use('/auth', authRouter);
app.use('/user', userRouter);
app.use('/tickets', ticketRouter);
app.use('/questions', questRouter)

mongoose.connect('mongodb+srv://asalnikov07:dN254HvUlugrjS2z@cluster0.ck2gklf.mongodb.net/examTicketGenerator?retryWrites=true&w=majority');

app.listen(PORT, () => console.log(`Server started on port: ${PORT}`));