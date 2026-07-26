export const QueueNames = {
  EMAIL: 'email',
  NOTIFICATION: 'notification',
  AI: 'ai',
  IMPORT: 'import',
  EXPORT: 'export',
} as const;

export type QueueName = (typeof QueueNames)[keyof typeof QueueNames];
