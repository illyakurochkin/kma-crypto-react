const users = [
  {email: 'illya.kurochkin@gmail.com', password: 'qwerty'},
  {email: 'valentyn.gurin@gmail.com', password: 'QWERTY'},
];

export const isAuthorized = () => users.find(u => localStorage.getItem('email') === u.email &&
localStorage.getItem('password') === u.password);

export default users;
