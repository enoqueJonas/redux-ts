interface RepositoriesState {
  loading: boolean;
  error: string | null;
  data: string[];
}

const reducer = (state: RepositoriesState, action: any) => {
  const { type, payload} = action;

  switch(type) {
    case 'search_repositories':
      return { loading: true, error: null, data: [] }
    case 'serach_repositories_success':
      return { loading: false, error: null, data: payload }
    case 'serch_repositories_error':
      return { loading: false, error: payload, data: [] }
    default:
      return state;
  }
}

export default reducer;