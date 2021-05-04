import { getRepository } from 'typeorm';

import News from '../models/News';

class ListNewsService {
  public async execute(): Promise<News[]> {
    const newsRepository = getRepository(News);

    const news = await newsRepository.find();

    return news;
  }
}

export default ListNewsService;
