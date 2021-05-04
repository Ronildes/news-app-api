import { Router } from 'express';
import { getRepository } from 'typeorm';

import ListNewsService from '../service/ListNewsService';
import CreateNewsService from '../service/CreateNewsService';

const newsRouter = Router();

newsRouter.get('/', async (request, response) => {
  try {
    const listNews = new ListNewsService();

    const news = await listNews.execute();

    return response.json(news);
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

newsRouter.post('/create', async (request, response) => {
  try {
    const { title, content } = request.body;

    const createNews = new CreateNewsService();

    const news = await createNews.execute({
      title,
      content,
    });

    return response.json(news);
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

export default newsRouter;
