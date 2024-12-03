const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Định nghĩa các route
router.get('/', userController.getAllUsers); // Lấy danh sách người dùng
router.post('/', userController.createUser); // Tạo người dùng mới
router.get('/:id', userController.getUserById); // Lấy thông tin người dùng theo ID
router.delete('/:id', userController.deleteUser); // Xóa người dùng theo ID

module.exports = router;
