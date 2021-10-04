import React, {useEffect} from 'react'
import { useHistory } from 'react-router-dom'

const useUnProtectedPage = () => {
  const history = useHistory()

  useEffect(()=>{
      const token = window.localStorage.getItem('token')

      if(token){
          history.push('/admin/trips/list')
      }
  }, [history])

}

export default useUnProtectedPage
