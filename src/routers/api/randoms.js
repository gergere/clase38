import { Router } from 'express';
import { pathLog } from '../../Services/logger.js';
import { getRandom } from '../../Controllers/random.controller.js';

const random = new Router();

random.get('/api/randoms', pathLog, getRandom)

export default random;