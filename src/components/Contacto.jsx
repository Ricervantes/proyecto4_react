import React, {useState, useEffect} from 'react'
import {db} from '../firebase/firebase'
import { collection, getDoc, getDocs, addDoc, doc, updateDoc, /*deleteDoc*/ } from 'firebase/firestore'

const initialForm = {
  nombre: '',
   reservacion: ''
}

const Contacto = () => {

  const [/*clientes*/, setClientes]  = useState([]);
  const [form, setForm] = useState(initialForm);

  const getClientes  = async () => {
    const respuesta = await getDocs(collection(db, 'clientes '));
    const clientes  = respuesta.docs.map(doc => ({id: doc.id, ...doc.data()}));
    setClientes (clientes);
    console.log(clientes );
}

const createClientes = async () => {
    const coleccion = collection(db, 'clientes ');
    await addDoc(coleccion, form);
    await getClientes ();
}

const updateClientes = async (id) => {
    /* Colocamos los datos del campo y lo llevamos al formulario */
    const coleccion = collection(db, 'clientes ');
    const clientes = await getDoc(doc(coleccion, id));
    console.log(clientes.data());
    setForm(clientes.data())

    /* Actualizamos los datos del formulario */
    await updateDoc(doc(coleccion, id), form);
    await getClientes ();

}

/*const deleteClientes = async (id) => {
    const coleccion = doc(db, 'clientes ', id)
    await deleteDoc(coleccion)
    await getClientes()
}*/

useEffect(() => {
  getClientes()
}, [])

  return (
    <>
        < div className = "container mt-2" > <h2>Reservacion</h2>
        <hr/>
        <div className="row">
            <div className="col-4">
                <h3>Ingresa tus datos</h3>
                <form>
                    <input
                    id="nombre"
                    type="text"
                    placeholder="Nombre"
                    autoComplete="off"
                    className="form-control"
                    value={form.nombre}
                    onChange={(e) => {
                      setForm({ ...form, nombre: e.target.value });
                    }}
                  />
                    <input
                    id="reservacion"
                    type="datetime-local"
                    placeholder="reservacion"
                    autoComplete="off"
                    className="form-control"
                    value={form.reservacion}
                    onChange={(e) => {
                        setForm({ ...form, reservacion: e.target.value });
                    }}
                    />

                    <button
                    className="btn btn-primary btn-block mt-2"
                    onClick={async (e) => {
                        e.preventDefault();
                        await createClientes();
                        setForm(initialForm);
                    }}
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

export default  Contacto



























