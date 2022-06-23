import React, { useState } from 'react'
import DataTable from './DataTable';
import { useAxiosGet } from './Hooks/axioshooks'
import { ordersCols } from './common/appData'

export default function Orders() {
  const {data, error, loaded} = useAxiosGet("/api/admin/allorders")

  if (loaded) {
    if(error){
      return (
        <div>{error}</div>
      )
    }else {
      console.log(data)
      return (
      <DataTable datarows={data} datacols={ordersCols} />
    )
    }
  }
  return (
    <div>Loading Orders ...</div>
  )
}
