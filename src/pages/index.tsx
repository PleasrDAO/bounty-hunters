import Header from '../components/header'
import ExtLink from '../components/ext-link'
import Features from '../components/features'
import sharedStyles from '../styles/shared.module.css'

export default function Index() {
  return (
    <>
      <Header titlePre="Home" />
      <div className={sharedStyles.layout}>
        {/* <img
          src="/vercel-and-notion.png"
          height="85"
          width="250"
          alt="Vercel + Notion"
        /> */}
        <h1>Pleasr Hub</h1>
        <br></br>
        {/* <h2>
          Blazing Fast Notion Blog with Next.js'{' '}
          <ExtLink
            href="https://github.com/vercel/next.js/issues/9524"
            className="dotted"
            style={{ color: 'inherit' }}
          >
            SSG
          </ExtLink>
        </h2> */}

        {/* <Features /> */}

        <div className="explanation">
          <p>
            In 2023, our DAO continues to be rich in talent, yet many members
            remain uninvolved, missing opportunities to engage, which, in turn,
            affects the overall vitality of the group. Secondly, we have a
            history of compensating people without always achieving our intended
            outcomes. To address this, PleasrHub will kick off as an
            outcomes-driven system to better ensure the successful completion of
            tasks and to give members the opportunity to engage and get
            meaningfully rewarded. In the near future, we will expand its scope,
            allowing the broader DAO to post their own tasks with the associated
            benefits and monetary recognition.
          </p>

          {/* <p>
            Get started by creating a new page in Notion and clicking the deploy
            button below. After you supply your token and the blog index id (the
            page's id in Notion) we will automatically create the table for you!
            See{' '}
            <ExtLink href="https://github.com/ijjk/notion-blog#getting-blog-index-and-token">
              here in the readme
            </ExtLink>{' '}
            for finding the new page's id. To get your token from Notion, login
            and look for a cookie under www.notion.so with the name `token_v2`.
            After finding your token and your blog's page id you should be good
            to go!
          </p> */}
        </div>
      </div>
    </>
  )
}
