const express = require('express');
const router = express.Router();
const userController = require('../controllers/user');
/**
 * @swagger
 * /api/auth/login:
 *   post:
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:          # <!--- form field name
 *                type: string
 *               password:    # <!--- form field name
 *                 type: string
 *             required:
 *               - password
 *               - email
 *     responses:
 *      '200':
 *         description: A User object
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 userId:
 *                   type: string
 *                   description: The user ID.
 *                 token:
 *                   type: string
 *                   description: The user name.
 */
router.post('/login', userController.login);
/**
 * @swagger
 * /api/auth/signup:
*   post:
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:          # <!--- form field name
 *                type: string
 *               password:    # <!--- form field name
 *                 type: string
 *             required:
 *               - password
 *               - email
 *     responses:
 *      '201':
 *         description: A User object
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: The user ID.
 */
router.post('/signup',userController.signup);


module.exports = router;