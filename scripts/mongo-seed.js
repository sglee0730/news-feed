import mongoose from 'mongoose';
import { School, User, AccessToken } from '../src/models/index.js';

(async () => {
  const db = await mongoose.connect(process.env.DB_PORT);

  console.log('Add sample users...');
  await User.create([
    {
      id: '123460u09809asdlkh',
      firstName: 'Hong',
      lastName: 'gildong',
      email: 'gildong@email.com',
      role: 'Admin',
    },
    {
      id: '123460u09809asdlkh2',
      firstName: 'Lee',
      lastName: 'sonnsin',
      email: 'soonsin@email.com',
      role: 'Student',
    },
  ]);

  console.log('Add sample tokens...');
  await AccessToken.create([
    {
      id: '23535413332sadas',
      createdBy: '123460u09809asdlkh',
      token: 'eydhkjsa0-vklsa',
    },
    {
      id: '235354133322190sadfhjlksa',
      createdBy: '123460u09809asdlkh2',
      token: 'zklqwjeoic-askldhzx',
    },
  ]);

  console.log('Add sample school...');
  await AccessToken.create([
    {
      id: '23535413332sadas',
      createdBy: '123460u09809asdlkh',
      updatedBy: '123460u09809asdlkh',
      address: 'South korea',
      name: 'sample1',
    },
  ]);
})();
