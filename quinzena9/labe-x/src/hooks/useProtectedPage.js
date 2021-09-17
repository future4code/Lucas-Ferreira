import React, {useEffect} from 'react'
import { useHistory } from 'react-router-dom'

const useProtectedPage = () => {
  const history = useHistory()

  useEffect(()=>{
      const token = window.localStorage.getItem('token')

      if(token === null){
          history.push('/login')
      }
  }, [history])

  return <div>
      <h1>Essa página deve ser acessada apenas por usuários logados</h1>
  </div>
}

export default useProtectedPage
