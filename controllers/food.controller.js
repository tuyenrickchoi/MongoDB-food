const foodModel = require("../models/food.model"); // Thay đổi tên model thành foodModel

const foodController = {
    // Lấy dữ liệu và render ra giao diện
    getData: async (req, res) => {
        try {
            // Gọi API sử dụng fetch
            const response = await fetch('http://localhost:3000/api/foods'); // URL API food
            const data = await response.json();
            
            // Truyền dữ liệu vào view EJS
            res.render('index', { data }); // Render dữ liệu food ra view
        } catch (error) {
            console.error(error);
            res.status(500).send('Error fetching food data');
        }
    },

    // Tạo món ăn mới
    createFood: async (req, res) => {
        const body = req.body;
        try {
            const newFood = await foodModel.create(body); // Tạo food mới
            res.status(201).json(newFood); // Trả về food vừa tạo
        } catch (error) {
            res.status(500).send('Error creating food');
        }
    },

    // Lấy danh sách tất cả món ăn
    getFoods: async (req, res) => {
        try {
            const foods = await foodModel.find(); // Truy vấn danh sách food
            res.status(200).json(foods); // Trả về danh sách foods
        } catch (error) {
            res.status(500).send('Error fetching foods');
        }
    },

    // Cập nhật thông tin món ăn
    updateFood: async (req, res) => {
        const id = req.params.id; // Lấy id từ URL
        const body = req.body;   // Lấy dữ liệu cập nhật từ request body
        try {
            const updatedFood = await foodModel.findByIdAndUpdate(id, body, { new: true }); // Cập nhật food
            res.status(200).json(updatedFood); // Trả về food sau khi cập nhật
        } catch (error) {
            res.status(500).send('Error updating food');
        }
    },

    // Xóa món ăn
    deleteFood: async (req, res) => {
        const id = req.params.id; // Lấy id từ URL
        try {
            const deletedFood = await foodModel.findByIdAndDelete(id); // Xóa food theo id
            res.status(200).json(deletedFood); // Trả về food đã xóa
        } catch (error) {
            res.status(500).send('Error deleting food');
        }
    }
};

module.exports = foodController; // Xuất module foodController
