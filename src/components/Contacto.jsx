import React, { useState, useEffect } from 'react'
import { db } from '../firebase/firebase'
import { collection, getDoc, addDoc, doc, updateDoc, /*deleteDoc*/ } from 'firebase/firestore'
import { useParams, } from "react-router-dom";
import Swal from 'sweetalert2';

const Contacto = () => {
  const { id } = useParams();
  const [clientes, setClientes] = useState({
    nombre: '',
    reservacion: ''
  });

  const cargarCliente = async (id) => {
    const coleccion = collection(db, 'clientes ');
    const clientes = await getDoc(doc(coleccion, id));
    setClientes(clientes.data())
  }

  async function guardarInformacion(event) {
    event.preventDefault();
    if (!id) {
      await addDoc(collection(db, "clientes "), clientes);
    } else {
      await updateDoc(doc(db, "clientes ", id), clientes);
    }
    Swal.fire(
      'Mensaje',
      'Formulado enviado a la base de datos',
      'success'
    ).then(() => {
      window.location.href = "/Reservaciones";
    });
  }

  useEffect(() => {
    if (id) {
      console.log(id);
      cargarCliente(id);
    }
  }, [id])

  return (
    <>
      < div className="container mt-2" > <h2>Reservacion</h2>
        <hr />
        <div className="row">
          <div className="col-4">
            <h3>Ingresa tus datos</h3>
            <form onSubmit={guardarInformacion}>
              <input
                id="nombre"
                type="text"
                placeholder="Nombre"
                autoComplete="off"
                className="form-control"
                value={clientes.nombre}
                onChange={(e) => {
                  setClientes({ ...clientes, nombre: e.target.value });
                }}
              />
              <input
                id="reservacion"
                type="datetime-local"
                placeholder="reservacion"
                autoComplete="off"
                className="form-control"
                value={clientes.reservacion}
                onChange={(e) => {
                  setClientes({ ...clientes, reservacion: e.target.value });
                }}
              />

              <button
                className="btn btn-primary btn-block mt-2"
                type="submit"
              >
                Agregar
              </button>
            </form>
          </div>
        </div>

      </div>
    </>
  )
}

export default Contacto





























