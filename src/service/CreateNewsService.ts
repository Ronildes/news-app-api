import { getRepository } from 'typeorm';

import News from '../models/News';

interface Request {
  title: string;
  content: string;
}

class CreateNewsService {
  public async execute({ title, content }: Request): Promise<News> {
    const newsRepository = getRepository(News);

    const checkNewsExists = await newsRepository.findOne({
      where: { title },
    });

    if (checkNewsExists) {
      throw new Error('News already used');
    }

    const news = await newsRepository.create({
      title,
      content,
    });

    await newsRepository.save(news);

    return news;
  }
}

export default CreateNewsService;
