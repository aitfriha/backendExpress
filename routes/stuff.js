const express = require('express');
const auth = require('../middleware/auth');
const router = express.Router();
const multer = require('../middleware/multer-config');
const stuffController = require('../controllers/stuff')

//Routes
/**
 * @swagger
 * /api/stuff/:
 *   post:
 *     summary: Add new stuff
 *     requestBody:
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               thing:
 *                 type: object
 *                 properties:
 *                   title:
 *                     type: string
 *                   description:
 *                     type: string
 *                   price:
 *                     type: integer
 *                   userId:
 *                     type: string
 *               image:
 *                 type: string
 *                 format: binary
 */
router.post('/',auth,multer, stuffController.createThing);
/**
 * @swagger
 * /api/stuff/{id}:
 *   get:
 *     summary: Find stuff by id
 *     description: Welcome to swagger-jsdoc!
 *     parameters:
 *     - in: path
 *       name: id   # Note the name is the same as in the path
 *       required: true
 *       type: string
 *       minimum: 1
 *       description: The user ID.
 *     responses:
 *       200:
 *         description: find thing by id.
 */
router.get('/:id',auth, stuffController.findThing);
/**
 * @swagger
 * /api/stuff:
 *   get:
 *     summary: Find all stuff
 *     description: Welcome to swagger-jsdoc!  
 *     responses:
 *       200:
 *         description: find all thing.
 */
router.get('/',auth, stuffController.findAllThing);
/**
 * @swagger
 * /api/stuff/{id}:
 *   put:
 *     summary: Update stuff
 *     parameters:
 *     - in: path
 *       name: id   # Note the name is the same as in the path
 *       required: true
 *       type: string
 *     requestBody:
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               thing:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: string
 *                   title:
 *                     type: string
 *                   description:
 *                     type: string
 *                   price:
 *                     type: integer
 *                   userId:
 *                     type: string
 *               image:
 *                 type: string
 *                 format: binary
 *     responses:
 *       200:
 *         description: update thing by id.
 */
router.put('/:id',auth,multer, stuffController.updateThing);
/**
 * @swagger
 *  /api/stuff/{id}/:
 *   delete:
 *     summary: Delete stuff by id
 *     parameters:
 *     - in: path
 *       name: id   # Note the name is the same as in the path
 *       required: true
 *       type: string
 *       minimum: 1
 *       description: The user ID.
 *     responses:
 *       200:
 *         description: delete thing by id.
 */
router.delete('/:id',auth, stuffController.deleteThing);




module.exports = router;