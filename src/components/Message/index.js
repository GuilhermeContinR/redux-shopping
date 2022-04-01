import React from 'react';
import { useSelector } from 'react-redux';
export default function Message(){

  const isShow = useSelector( (state) => state.layout.showMessage )

  return(
    <>
      {
        isShow && ( <div className="container mt-3">
        <div class="alert alert-success" role="alert">
          Cadastrado com sucesso!
        </div>
      </div>)
      }
    </>
  )
}