export {};

declare global {
  interface Comment {
    postId: number;
    id: number;
    name: string;
    email: string;
    body: string;
  }
  interface TableItem {
    body: string;
    id: number;
    title: string;
    userId: number;
    comments: Comment[];
  }

  interface TableData {
    items: TableItem[];
    tableHeaders: (keyof TableItem)[];
  }
}
