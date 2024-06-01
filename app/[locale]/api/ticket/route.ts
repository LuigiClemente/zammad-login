import ZammadApi from '@/lib/zammad'
import { headers } from 'next/headers'
import { writeFile } from 'fs/promises'
import path from 'path'

const cubeContext = {
  securityContext: {
    // TODO: Change tenant_id
    tenant_id: 'undefined',
  },
  contextToAppId: ({ securityContext }: typeof cubeContext) => {
    return `CUBE_APP_${securityContext.tenant_id}`
  },

  contextToOrchestratorId: ({ securityContext }: typeof cubeContext) => {
    return `CUBE_APP_${securityContext.tenant_id}`
  },
}

const zammadApi = new ZammadApi(process.env.NEXT_PUBLIC_ZAMMAD_HOST as string, cubeContext)

const handler = async (req: Request) => {
  const headersList = headers()
  const signature = headersList.get('x-hub-signature')
  if (!signature) {
    return new Response('Invalid signature', { status: 400 })
  }

  const blob = await req.blob()
  const arrayBuffer = await blob.arrayBuffer()
  const buf = Buffer.from(arrayBuffer)

  await zammadApi.verifyRequest(signature, buf)

  const json = JSON.parse(buf.toString())
  console.log(json)

  // const authorFilePath = path.resolve(`data/authors/author-${json.article.id}.mdx`)
  // await writeFile(
  //   authorFilePath,
  //   `---\nname: ${json.article.created_by.firstname} ${json.article.created_by.lastname}\nemail: ${json.article.created_by.email}\n---\n\nProfile`
  // )

  // const articleFilePath = path.resolve(`data/blog/article-${json.article.id}.mdx`)
  // await writeFile(
  //   articleFilePath,
  //   `---\ntitle: ${json.article.body.substr(0, 30)}\ndate: '${json.article.created_at.substr(
  //     0,
  //     10
  //   )}'\nauthors: ['author-${json.article.id}']\n---\n\n${json.article.body}`
  // )

  return new Response('OK', { status: 200 })
}
export { handler as POST }
