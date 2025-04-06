import {
  AppDataSource,
  initializeDatabase,
  User,
  Settings,
} from 'shared-orm-library';

async function seed() {
  // Initialize the database connection
  await initializeDatabase();

  // Get repositories
  const userRepository = AppDataSource.getRepository(User);
  const settingsRepository = AppDataSource.getRepository(Settings);

  // Create users
  const usersData = [
    {
      firstName: 'John',
      lastName: 'Doe',
      email: 'john@example.com',
      password: 'password123',
    },
    {
      firstName: 'Jane',
      lastName: 'Smith',
      email: 'jane@example.com',
      password: 'password456',
    },
    {
      firstName: 'Bob',
      lastName: 'Johnson',
      email: 'bob@example.com',
      password: 'password789',
    },
  ];

  for (const userData of usersData) {
    const user = new User();
    Object.assign(user, userData);
    await userRepository.save(user);

    // Create settings for each user
    const settings = new Settings();
    settings.isNotificationEnabled = Math.random() > 0.5;
    settings.isNewDashboardEnabled = Math.random() > 0.5;
    settings.timezone = ['UTC', 'America/New_York', 'Europe/London'][
      Math.floor(Math.random() * 3)
    ];
    settings.user = user;
    await settingsRepository.save(settings);
  }

  console.log('Seed data inserted successfully!');

  // Close the connection
  await AppDataSource.destroy();
}

seed().catch((error) => console.error('Seed error:', error));
