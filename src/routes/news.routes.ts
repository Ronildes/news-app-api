import { Router } from 'express';
import { getRepository } from 'typeorm';
import { compare } from 'bcryptjs';

import ensureAuthenticated from '@middlewares/ensureAuthenticated';
import User from '@models/User';
import ListNewsService from '../service/ListNewsService';
import CreateNewsService from '../service/CreateNewsService';

const newsRouter = Router();

newsRouter.get('/:token', ensureAuthenticated, async (request, response) => {
  try {
    const { token } = request.params;

    const listNews = new ListNewsService();

    const news = await listNews.execute();

    return response.json(news);
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

newsRouter.post(
  '/create/:token',
  ensureAuthenticated,
  async (request, response) => {
    try {
      const userRepository = getRepository(User);
      const user = await userRepository.findOne({
        where: { id: request.user.id },
      });

      if (!user) {
        throw new Error('The user is undefined');
      }

      if (user.role === 'administrator') {
        const { title, content } = request.body;

        const createNews = new CreateNewsService();

        const news = await createNews.execute({
          title,
          content,
        });

        return response.json(news);
      }

      throw new Error("You don't have permission for create a news");
    } catch (err) {
      return response.status(400).json({ error: err.message });
    }
  }
);

export default newsRouter;
