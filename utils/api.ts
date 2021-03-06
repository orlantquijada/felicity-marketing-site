import { gqlClient, restClient } from './fetcher'
import { Article, Author, CoverImage } from './types'

export interface RelativeArticleMeta {
  title: string
  slug: string
}

export async function getRelativeArticles(createdAt: string) {
  const { next, prev } = await gqlClient<{
    previousArticle: RelativeArticleMeta[] | null
    nextArticle: RelativeArticleMeta[] | null
  }>(
    `
		query {
			previousArticle: articles(
				limit: 1
				where: { created_at_lt: "${createdAt}"}
			) {
				title
				slug
			}

			nextArticle: articles(
				limit: 1
				where: { created_at_gt: "${createdAt}"}
			) {
				title
				slug
			}
		}
	`,
    { createdAt }
  )
    .then((res) => res.data)
    .then((data) => ({
      prev: data.previousArticle?.[0] || null,
      next: data.nextArticle?.[0] || null,
    }))

  return { prev, next }
}

export async function getAllArticleSlugs() {
  return await gqlClient<{ articles: Array<{ slug: string }> }>(
    `{ articles { slug } }`
  ).then((res) =>
    res.data.articles.map((article: { slug: string }) => article.slug)
  )
}

export async function getArticle(slug = '') {
  return gqlClient<{ articles: Article[] }>(
    `
		query {
			articles(where: { slug: "${slug}"}) {
				slug
				excerpt
				title
				author {
					name
					picture {
						url
					}
				}
				created_at
				updated_at
				content
				coverImage {
					url
					width
					height
					formats
				}
				categories {
					name
					slug
				}
				readTimeEstimate
			}
		}
		`,
    { slug }
  ).then((res) => res.data.articles[0])
}

export interface RelatedArticleMeta extends RelativeArticleMeta {
  coverImage: CoverImage
}

export async function getRelatedArticles({
  categories,
  slug,
}: {
  categories: string[]
  slug?: string
}) {
  return gqlClient<{ articles: RelatedArticleMeta[] }>(
    `
		query {
			articles(
				where: {
					categories: { name: ${JSON.stringify(categories)} }
					slug_ne: "${slug}"
				}
				limit: 3
			) {
				title
				slug
				coverImage {
					url
					width
					height
					formats
				}
			}
		}
		`,
    { categories, slug }
  ).then((res) => res.data.articles)
}

export async function subscribeToBlog(email: string) {
  return restClient('subscribers', { body: JSON.stringify({ email }) })
}

export async function notifyOnLaunch(email: string) {
  return restClient('launch-subscribers', { body: JSON.stringify({ email }) })
}

export type ArticleCard = Pick<
  Article,
  | 'title'
  | 'created_at'
  | 'excerpt'
  | 'readTimeEstimate'
  | 'slug'
  | 'coverImage'
> & { author: Pick<Author, 'name'> }

export type ArticlesListMeta = Array<ArticleCard>

export async function articlesList(props: { limit?: number } = {}) {
  const { limit } = props
  return gqlClient<{ articles: ArticlesListMeta }>(`
		query {
			${limit !== undefined ? `articles(limit: ${limit})` : 'articles'} {
				title
				author {
					name
				}
				coverImage {
					url
					width
					height
					formats
				}
				created_at
				excerpt
				readTimeEstimate
				slug
			}
		}
	`).then((res) => res.data.articles)
}

export interface ContactFields {
  firstName: string
  lastName: string
  email: string
  message: string
}

export function contact(values: ContactFields) {
  return restClient('messages', { body: JSON.stringify(values) })
}
