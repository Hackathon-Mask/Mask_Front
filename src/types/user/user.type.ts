export interface User {
  id: number;
  name: string;
  school: string;
  generation: number;
  belong: string;
  majorTag: {
    id: number;
    name: string;
  };
  skills: [
    {
      id: number;
      name: string;
    }
  ];
}

export interface StudentsResponse {
  users: User[];
}
