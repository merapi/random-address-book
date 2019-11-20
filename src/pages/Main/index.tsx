import EndOfData from 'components/EndOfData'
import Loader from 'components/Loader'
import Row from 'components/Row'
import SearchBar from 'components/SearchBar'
import UserCard from 'components/UserCard'
import UserCardList from 'components/UserCardList'
import { FlexAlign } from 'design'
import React, { MouseEvent, useEffect, useState } from 'react'
import { User } from 'types'

const Main = () => {
  const [list, setList] = useState<User[]>([])

  useEffect(() => {
    fetch(`https://randomuser.me/api/?seed=foobar&inc=name,location,email,picture,phone,cell&nat=ch&results=16&page=1`)
      .then(response => response.json())
      .then(list => setList(list.results))
  }, [])

  const onUserClick = (user: User) => (event: MouseEvent) => {
    console.log(user, event)
  }

  return (
    <>
      <SearchBar />
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
    </>
  )
}

export default Main
