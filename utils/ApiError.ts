export class ApiError extends Error {
  statusCode: number;
  message: string;
  constructor(status: number, message: string) {
    super();
    this.message = message;
    this.statusCode = status;
  }
}
