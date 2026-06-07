export const storage = (file: string) => `${import.meta.env.BASE_URL}manus-storage/${file}`;

export const storageFolder = (folder: string, file: string) => storage(`${folder}/${file}`);
