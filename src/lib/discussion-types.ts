export type Role = "Student" | "Faculty" | "Staff" | "Alumni" | "Other";
export type Category = "thought" | "classroom";

export type Post = {
  id: string;
  name: string;
  role: Role;
  category: Category;
  body: string;
  createdAt: string;
};
