const express = require("express");
const router = express.Router();

const {
    createFood,
    getFoods,
    updateFood,
    deleteFood
} = require("../controllers/food.controller"); // Import food controller

// Routes cho food
router.route("/")
    .post(createFood) // Tạo món ăn mới
    .get(getFoods);   // Lấy danh sách món ăn

router.route("/:id")
    .patch(updateFood) // Cập nhật món ăn theo id
    .delete(deleteFood); // Xóa món ăn theo id

module.exports = router; // Xuất router
