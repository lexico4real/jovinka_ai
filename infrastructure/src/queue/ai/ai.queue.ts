export interface AIJob {
  to: string;
  subject: string;
  template: string;
  variables: Record<string, unknown>;
}
