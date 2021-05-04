import { Router } from 'express';

import CreateUserService from '../service/CreateUserService';

const usersRouter = Router();

usersRouter.post('/', async (request, response) => {
  try {
    const { username, email, password } = request.body;

    const createUser = new CreateUserService();

    const user = await createUser.execute({
      username,
      email,
      password,
    });

    // @ts-expect-error
    delete user.password;

    return response.json(user);
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

export default usersRouter;
