interface User {
  id: number,
  email: string,
  password: string,
  salt: string,
  token: string,
  isValidated: boolean,
}
