import { API_SEED, API_URL } from 'config/consts'
import { Nationality, User } from 'types'

interface FetchOptions {
  signal?: AbortSignal
}

export interface FetchUsersResponse {
  results: User[]
  info: {
    results: number
    page: number
  }
}

const user = {
  fetchUsers: async function(
    page: number,
    limit: number,
    nationalities: Nationality[],
    abortController?: AbortController,
  ): Promise<FetchUsersResponse> {
    const options: FetchOptions = {}
    if (abortController) {
      options.signal = abortController.signal
    }
    const nat = nationalities.join(',')
    return await fetch(
      `${API_URL}/?seed=${API_SEED}&inc=name,location,email,picture,phone,cell&nat=${nat}&results=${limit}&page=${page}`,
      options,
    ).then(response => response.json())
  },
}

export default {
  user,
}
