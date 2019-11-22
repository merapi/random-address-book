import BottomMessage from 'components/BottomMessage'
import Loader from 'components/Loader'
import Modal from 'components/Modal'
import Row from 'components/Row'
import SearchBar from 'components/SearchBar'
import Title from 'components/Title'
import UserCard from 'components/UserCard'
import UserCardList from 'components/UserCardList'
import { FlexAlign, Spacing } from 'design'
import useIdle from 'hooks/useIdle'
import React, {
  MouseEvent,
  Suspense,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import * as usersActions from 'store/users/actions'
import * as usersSelectors from 'store/users/selectors'
import { User } from 'types'
import { filterByQuery, normalizeString } from 'utils/strings'
import { renderBottomElement } from './helpers'

const UserDetail = React.lazy(() => import('components/UserDetail'))

const Main = () => {
  const dispatch = useDispatch()
  const bottomIndicator = useRef<HTMLDivElement>(null)
  const list = useSelector(usersSelectors.list)
  const isLoading = useSelector(usersSelectors.isLoading)
  const isError = useSelector(usersSelectors.isError)
  const isEnd = useSelector(usersSelectors.isEnd)
  const [selectedUser, setSelectedUser] = useState<User | null>(null)
  const query = useSelector(usersSelectors.query)
  const inSearchMode = Boolean(query)
  const nextPagePrefetched = useSelector(usersSelectors.nextPageUsers)
  const isIdling = useIdle(1000 * 5)

  const bottomObserved = useCallback(
    (entries: IntersectionObserverEntry[]) => {
      if (entries.length && entries[0].target === bottomIndicator.current) {
        if (entries[0].isIntersecting) {
          dispatch(usersActions.bottomVisited())
        }
      }
    },
    [dispatch],
  )

  useEffect(() => {
    // We only use idle detection for one time next page prefetch - don't spam redux
    if (isIdling && !isEnd && !nextPagePrefetched && !isLoading) {
      dispatch(usersActions.idleDetected())
    }
  }, [isIdling, isEnd, isLoading, nextPagePrefetched, dispatch])

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
      setSelectedUser(user)
    },
    [],
  )

  const onClose = () => {
    setSelectedUser(null)
  }

  const onSearch = useCallback(
    (query: string) => {
      dispatch(usersActions.setQuery(normalizeString(query)))
    },
    [dispatch],
  )

  const exitSearchMode = () => onSearch('')
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
      <SearchBar query={query} onSubmit={onSearch} />
      {filteredList ? (
        <>
          {inSearchMode ? (
            <Row justifyContent={FlexAlign.Center}>
              <BottomMessage>
                <Title>
                  {filteredList.length
                    ? `Found: ${filteredList.length}.`
                    : `No matches.`}
                </Title>
              </BottomMessage>
            </Row>
          ) : null}

          <UserCardList>
            {filteredList.map(user => (
              <UserCard
                key={user.login ? user.login.uuid : user.email}
                onClick={onUserClick(user)}
                {...user}
              />
            ))}
          </UserCardList>
        </>
      ) : null}
      <Row
        ref={bottomIndicator}
        justifyContent={FlexAlign.Center}
        padding={`${Spacing.Base}px 0 ${Spacing.Large}px 0`}
      >
        {renderBottomElement(
          isEnd,
          isError,
          isLoading,
          inSearchMode,
          exitSearchMode,
        )}
      </Row>
    </>
  )
}

export default Main
