const BASE_URL = 'https://jsonplaceholder.typicode.com';

export const getUsers = async () => {
  try {
    const response = await fetch(`${BASE_URL}/users`);
    if (!response.ok) {
      throw new Error('Gagal mengambil data dari server');
    }
    return await response.json();
  } catch (error) {
    throw error;
  }
};
