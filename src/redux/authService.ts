const users = [
    { email: 'test@mail.com', password: '123456' },
    { email: 'fayis@mail.com', password: '123456' },
    { email: 'hello@mail.com', password: '123456' },
    { email: 'hulk@mail.com', password: '123456' },
  ];
  
  export const loginWithEmailAndPassword = (email: string, password: string): boolean => {
    const user = users.find((user) => user.email === email && user.password === password);
    return Boolean(user);
  };