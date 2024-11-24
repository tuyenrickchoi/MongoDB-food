require('dotenv').config();
const express = require("express");
const bodyParser = require('body-parser');
const app = express();
const connectDB = require("./configs/database");
const router = require("./routers");

// Nhận file controller
const foodControllers = require('./controllers/food.controller'); // Thay đổi thành food.controller

const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));

// Kết nối cơ sở dữ liệu
connectDB();

// Đăng ký routes
router(app);

// Sử dụng EJS làm view engine
app.set('view engine', 'ejs');
app.set('views', './views');

// Route chính để render trang EJS với dữ liệu Food
app.get('/', foodControllers.getData); // Sử dụng foodControllers.getData

// Lắng nghe cổng
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
