import React from 'react'

const Main = React.lazy(() => import('pages/Main'))

const routes = {
  '/': () => <Main />,
  // '/settings': () => <Settings />,
  // '/detail/:id': ({ id }) => <Detail id={id} />,
}

export default routes
