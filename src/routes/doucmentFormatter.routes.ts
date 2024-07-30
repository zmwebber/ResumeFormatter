import express from 'express';
import * as controller from '../controllers/documentFormatter.controller';


const router = express.Router();

router.route('/')
    /**
 * @swagger
 * /api/resume:
 *   post:
 *     summary: Create a new resume from JSON data
 *     description: Creates a new resume.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               // Define your request body properties here
 *     responses:
 *       201:
 *         description: Booking successfully created
 *       401:
 *         description: Unauthorized access
 */
    .post(controller.createResume);

export default router;