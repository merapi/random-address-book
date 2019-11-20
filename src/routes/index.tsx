import React from 'react'

const Main = React.lazy(() => import('pages/Main'))
const Settings = React.lazy(() => import('pages/Settings'))

const routes = {
  '/': () => <Main />,
  '/settings': () => <Settings />,
  // '/detail/:id': ({ id }) => <Detail id={id} />,
}

export default routes
