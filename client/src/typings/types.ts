export interface User {
  id?: number;
  userName: string;
  userEmail: string;
  userPassword: string;
  userImage?: string;
  isArchived: boolean;
}
export interface BlogPost {
  id?: number;
  title: string;
  description: string;
  image?: string;
  user_id: number;
  is_archived: boolean;
}
