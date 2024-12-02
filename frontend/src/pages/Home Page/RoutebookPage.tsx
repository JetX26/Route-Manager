// Routebook Page

import { useQuery } from '@tanstack/react-query'
import { useLocation } from 'react-router-dom'
import getOrgInfo from '../../utils/getOrg'

const RoutebookPage = (): React.ReactNode => {
  // Take the Org ID passed from the Org Selection page
  const history = useLocation()

  // Uses the Org Id to fetch the Org data, stores it in "data" variable
  const { data } = useQuery({
    queryKey: ["CurrentOrg"],
    queryFn: () => getOrgInfo(history.state)
  })

  return (
    <div>
      <p>Routebook Page</p>
      <p>{data?.name}</p>
    </div>
  )
}

export default RoutebookPage