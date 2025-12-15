export const getUsers = () =>
  JSON.parse(localStorage.getItem("users")) || [];

export const saveUsers = (users) =>
  localStorage.setItem("users", JSON.stringify(users));

export const getCurrentUser = () => {
  const data = localStorage.getItem("currentUser");
  if (!data) return null;

  const { id } = JSON.parse(data);
  return getUsers().find((u) => u.id === id) || null;
};

export const register = (user) => {
  const users = getUsers();

  const exists = users.some((u) => u.email === user.email);
  if (exists) throw new Error("Пользователь уже существует");

  users.push(user);
  saveUsers(users);

  localStorage.setItem(
    "currentUser",
    JSON.stringify({ id: user.id })
  );
};

export const login = (email, password) => {
  const user = getUsers().find(
    (u) => u.email === email && u.password === password
  );

  if (!user) return null;

  localStorage.setItem(
    "currentUser",
    JSON.stringify({ id: user.id })
  );
  return user;
};

export const logout = () => {
  localStorage.removeItem("currentUser");
};
