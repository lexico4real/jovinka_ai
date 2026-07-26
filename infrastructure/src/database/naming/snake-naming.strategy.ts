import { SnakeNamingStrategy } from 'typeorm-naming-strategies';

export const namingStrategy = new SnakeNamingStrategy();

// export const createTypeOrmOptions = (...) => ({
//     ...
//     namingStrategy: new SnakeNamingStrategy(),
// });