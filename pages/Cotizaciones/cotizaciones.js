import styles from '../../styles/Home.module.css'
import Modal from '../../components/cotizacion/crear/modal'

function Cotizaciones() {
  return (
    <>
      <div>
        <h1 className={styles.title}>
          Cotizaciones
       </h1>
        <Modal />
      </div>
    </>)
}

export default Cotizaciones;