export interface EmailJob {
  to: string;
  subject: string;
  template: string;
  variables: Record<string, unknown>;
}
