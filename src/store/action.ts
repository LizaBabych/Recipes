export class Action {
  readonly type: string | undefined;

  payload?: any;

  toJSON(): Record<string, any> {
    return { ...this };
  }
}
