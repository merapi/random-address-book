import React, { useEffect, useState, MouseEvent } from 'react'
import GlobalStyle from 'components/GlobalStyle'
import UserCard from 'components/UserCard'
import Content from 'components/Content'
import UserCardList from 'components/UserCardList'
import { User } from 'types'
import Loader from 'components/Loader'
import EndOfData from 'components/EndOfData'
import Row from 'components/Row'
import { FlexAlign } from 'design'

const App: React.FC = () => {
  const [list, setList] = useState<User[]>([])

  useEffect(() => {
    fetch(`https://randomuser.me/api/?seed=foobar&inc=name,location,email,picture,phone,cell&nat=ch&results=5&page=1`)
      .then(response => response.json())
      .then(list => setList(list.results))
  }, [])

  const onUserClick = (user: User) => (event: MouseEvent) => {
    console.log(user, event)
  }

  return (
    <>
      <GlobalStyle />
      <Content>
        <UserCardList>
          {list.map(user => (
            <UserCard key={user.email} onClick={onUserClick(user)} {...user} />
          ))}
        </UserCardList>
        <Row justifyContent={FlexAlign.Center}>
          <Loader />
        </Row>
        <Row justifyContent={FlexAlign.Center}>
          <EndOfData />
        </Row>
      </Content>
    </>
  )
}

export default App
