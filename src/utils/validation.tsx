/**
 * Filter a vaild email address
 */
export function isMail(email: string): boolean {
  return /^\w+([\\.-]?\w+)*@\w+([\\.-]?\w+)*(\.\w{2,3})+$/.test(email);
}

type Toptions = {
  required?: boolean;
  email?: boolean;
  min?: number;
  max?: number;
};

export function isErrorFiled(
  name: string,
  value: string | number | null | boolean,
  options: Toptions = { required: true }
) {
  const min: number = options?.min || 0;
  const max: number = options?.min || 0;
  const fieldname: string = name.toString().trim();
  if (!value && options?.required) {
    return `The ${fieldname} field is required`;
  } else if (options?.email && !isMail(String(value))) {
    return `The email address is not valid: ${value}`;
  } else if (Number(value) < min) {
    return `The ${fieldname} field is required at least ${value}`;
  } else if (Number(value) > max) {
    return `The ${fieldname} field is riched max ${value}`;
  }
  return false;
}
