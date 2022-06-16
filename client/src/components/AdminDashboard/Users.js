import React, { useState } from 'react'
import DataTable from './DataTable';
import { useAxiosGet } from './Hooks/axioshooks'
import { userCols } from './common/appData'

export default function Users() {
  const {data, error, loaded} = useAxiosGet("/api/admin/allusers")

  if (loaded) {
    if(error){
      return (
        <div>{error}</div>
      )
    }else {
      console.log(data, userCols)
      return (
      <DataTable datarows={data} datacols={userCols} />
    )
    }
  }
  return (
    <div>Loading Users ...</div>
  )
}
