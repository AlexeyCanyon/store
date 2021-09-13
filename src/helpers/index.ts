export const convertPhone = (phone: string) => phone.replace(/^\+?[7,8]?(\d{3})(\d{3})(\d{2})(\d{2})$/, '+7 ($1) $2-$3-$4');
