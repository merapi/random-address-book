import EndOfData from 'components/EndOfData'
import Loader from 'components/Loader'
import Modal from 'components/Modal'
import Row from 'components/Row'
import SearchBar from 'components/SearchBar'
import UserCard from 'components/UserCard'
import UserCardList from 'components/UserCardList'
import { FlexAlign } from 'design'
import React, { MouseEvent, Suspense, useEffect, useState } from 'react'
import { User } from 'types'

const UserDetail = React.lazy(() => import('components/UserDetail'))

const Main = () => {
  const [list, setList] = useState<User[]>([])
  const [selectedUser, setSelectedUser] = useState<User | null>(null)

  useEffect(() => {
    fetch(`https://randomuser.me/api/?seed=foobar&inc=name,location,email,picture,phone,cell&nat=ch&results=50&page=1`)
      .then(response => response.json())
      .then(list => setList(list.results))
  }, [])

  const onUserClick = (user: User) => (event: MouseEvent) => {
    console.log(user, event)
    setSelectedUser(user)
  }

  const onClose = () => {
    setSelectedUser(null)
  }

  return (
    <>
      {selectedUser && (
        <Modal onClose={onClose}>
          <Suspense fallback={<Loader withOuter />}>
            <UserDetail {...selectedUser} />
          </Suspense>
        </Modal>
      )}
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
