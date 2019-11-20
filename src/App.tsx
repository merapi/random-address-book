import Content from 'components/Content'
import GlobalStyle from 'components/GlobalStyle'
import Loader from 'components/Loader'
import Row from 'components/Row'
import { FlexAlign, Spacing } from 'design'
import { useRoutes } from 'hookrouter'
import NotFound from 'pages/NotFound'
import React, { Suspense } from 'react'
import routes from 'routes'

const App: React.FC = () => {
  const routeResult = useRoutes(routes)
  return (
    <>
      <GlobalStyle />
      <Content>
        <Suspense
          fallback={
            <Row padding={Spacing.Huge} justifyContent={FlexAlign.Center}>
              <Loader />
            </Row>
          }
        >
          {routeResult || <NotFound />}
        </Suspense>
      </Content>
    </>
  )
}

export default App
