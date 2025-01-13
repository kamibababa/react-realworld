
export interface Tag {
  tags: string[];
}

export interface UserReq {
  email: string;
  password: string;
}

export interface UserRsp {
  email: string;
  token: string;
  username: string;
  bio: string;
  image?: any;
}

export interface ArticleReq {
  title: string;
  description: string;
  body: string;
  tagList: string[];
}

export interface MultiArticleRsp{
  articles: ArticleRsp[]
}

export interface ArticleRsp {
  slug: string;
  title: string;
  description: string;
  body: string;
  tagList: string[];
  createdAt: string;
  updatedAt: string;
  favorited: boolean;
  favoritesCount: number;
  author: Author;
}

interface Author {
  username: string;
  bio: string;
  image: string;
  following: boolean;
}

