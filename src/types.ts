export interface Comment {
  id: string;
  username: string;
  content: string;
  likes: number;
  timestamp: string;
}

export interface Video {
  id: string;
  title: string;
  url: string;
  description: string;
  views: number;
  likes: number;
  shares: number;
}