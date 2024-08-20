export interface User {
    email: string;
    name: string;
    password: string;
    phone: string;
    profileImage?: string; // optional if only needed when an image is uploaded
  }
  