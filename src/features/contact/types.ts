export type TContactFormData = {
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
};

export type TContactFormResponse = {
  success: boolean;
  message: string;
};
