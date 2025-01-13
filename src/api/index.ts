import type { ArticleReq, ArticleRsp, MultiArticleRsp, Tag, UserReq, UserRsp } from '../model'
import instance from '../utils/request'

export const getTags = (): Promise<Tag> => {
  return instance({
    method: 'get',
    url: '/tags'
  })
}

export const login = (param: {user:UserReq}): Promise<{user:UserRsp}> => {
  return instance({
    method: 'post',
    url: '/users/login',
    data: param
  })
}

export const createArticle = (param: {article:ArticleReq}): Promise<{article: ArticleRsp}> => {
  return instance({
    method: 'post',
    url: '/articles',
    data: param
  })
}

export const listArticles = (limit:number=20, offset:number=0, tag?: string, author?:string, favorited?:string)
: Promise<MultiArticleRsp> => {
  return instance({
    method: 'get',
    url: '/articles',
    params:{
      tag,
      author,
      favorited,
      limit,
      offset
    }
  })
}

export const getArticle = (slug: string)
: Promise<{article: ArticleRsp}> => {
  return instance({
    method: 'get',
    url: `/articles/${slug}`,
  })
}