import React, { useState } from 'react'
import DataTable from './DataTable';
import { useAxiosGet } from './Hooks/axioshooks'
import { payCols } from './common/appData'

export default function Payments() {
  const {data, error, loaded} = useAxiosGet("/api/admin/allpayments")

  if (loaded) {
    if(error){
      return (
        <div>{error}</div>
      )
    }else {
      return (
      <DataTable datarows={data} datacols={payCols} />
    )
    }
  }
  return (
    <div>Loading Payments ...</div>
  )
}
