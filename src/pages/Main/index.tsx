import Div from 'components/Div'
import EndOfData from 'components/EndOfData'
import Loader from 'components/Loader'
import Modal from 'components/Modal'
import Row from 'components/Row'
import SearchBar from 'components/SearchBar'
import UserCard from 'components/UserCard'
import UserCardList from 'components/UserCardList'
import { FlexAlign } from 'design'
import React, { MouseEvent, Suspense, useCallback, useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import * as usersActions from 'store/users/actions'
import * as usersSelectors from 'store/users/selectors'
import { User } from 'types'

const UserDetail = React.lazy(() => import('components/UserDetail'))

const Main = () => {
  const dispatch = useDispatch()
  const bottomIndicator = useRef<HTMLDivElement>(null)
  const list = useSelector(usersSelectors.list)
  const isLoading = useSelector(usersSelectors.isLoading)
  const isError = useSelector(usersSelectors.isError)
  const isEnd = useSelector(usersSelectors.isEnd)
  const [selectedUser, setSelectedUser] = useState<User | null>(null)
  const [query, setQuery] = useState('')

  // useEffect(() => {
  //   dispatch(usersActions.fetchUsers(1, 10, []))
  // }, [dispatch])

  const bottomObserved = useCallback(
    (entries: IntersectionObserverEntry[]) => {
      if (entries.length && entries[0].target === bottomIndicator.current) {
        if (entries[0].isIntersecting) {
          console.log('bottom', entries[0])
          dispatch(usersActions.bottomVisited())
        }
      }
    },
    [dispatch],
  )

  useEffect(() => {
    const target = bottomIndicator.current
    const observer = new IntersectionObserver(bottomObserved)
    if (target) {
      observer.observe(target)
    }

    return () => {
      if (target) {
        observer.unobserve(target)
      }
    }
  }, [bottomObserved])

  const onUserClick = useCallback(
    (user: User) => (event: MouseEvent) => {
      console.log(user, event)
      setSelectedUser(user)
    },
    [],
  )

  const onClose = () => {
    setSelectedUser(null)
  }

  const normalizeString = (str: string) => {
    return str
      .trim()
      .replace(/\s\s+/g, ' ') // remove multiple spaces
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '') // remove accents/diacritics
      .toLowerCase()
  }

  const onSearch = useCallback((query: string) => {
    setQuery(normalizeString(query))
  }, [])

  const filterByQuery = (query: string) => {
    console.log(`filterByQuery`)
    return (user: User) => {
      const searchable = normalizeString(`${user.name.first} ${user.name.last}`)
      console.log(searchable, query)
      return searchable.includes(query)
    }
  }

  const filteredList = query && list ? list.filter(filterByQuery(query)) : list

  return (
    <>
      {selectedUser && (
        <Modal onClose={onClose}>
          <Suspense fallback={<Loader withOuter />}>
            <UserDetail {...selectedUser} />
          </Suspense>
        </Modal>
      )}
      <SearchBar onSubmit={onSearch} />
      {filteredList ? (
        <UserCardList>
          {filteredList.map(user => (
            <UserCard key={user.login ? user.login.uuid : user.email} onClick={onUserClick(user)} {...user} />
          ))}
        </UserCardList>
      ) : null}
      <Row ref={bottomIndicator} justifyContent={FlexAlign.Center}>
        {isLoading && <Loader />}
        {isError && <Div>Error: {isError}</Div>}
        {isEnd && <EndOfData />}
      </Row>
    </>
  )
}

export default Main
