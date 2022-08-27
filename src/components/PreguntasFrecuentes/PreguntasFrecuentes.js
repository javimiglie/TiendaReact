import './PreguntasFrecuentes.css';

const PreguntasFrecuentes = () => {
  return (
    <div className='container-preg'>
      <h2>PREGUNTAS FRECUENTES</h2>
      <h3 className='subtitle-preg'>
        ¿Cuánto demora el envió y por donde se realizan?
      </h3>
      <p className='text-preg'>
        Realizamos envíos con “ANDREANI” y tienen una demora de 5 días hábiles a
        provincias limítrofes y 7 días hábiles a no limítrofes.
      </p>
      <hr color='#1769aa' />
      <h3 className='subtitle-preg'>¿Qué pasa si mi producto no llega?</h3>
      <p className='text-preg'>
        Si tu pedido se extravío no te preocupes nosotros nos hacemos cargo y te
        reintegramos el total de la compra
      </p>
      <hr color='#1769aa' />
      <h3 className='subtitle-preg'>¿Seguimiento de pedidos?</h3>
      <p className='text-preg'>
        Acá te dejamos el link para seguir el pedido
        https://seguimientotiendajavi.com.ar
      </p>
      <p className='text-preg'>
        Si no encontras tu código de seguimiento escribinos WhatsApp
      </p>
      <hr color='#1769aa' />
      <h3 className='subtitle-preg'>
        ¿Dónde retiro mi pedido si soy de Córdoba capital?
      </h3>
      <p className='text-preg'>
        Los pedidos se retiran por cualquiera de nuestras cuatro sucursales con
        tu número de pedido, detalle de la compra y DNI en sus respectivos
        horarios. Anunciar en la entrada que tenés que retirar un pedido.
      </p>
      <p className='text-preg'>
        Una vez que el pedido llega a sucursal permanecerá en la misma 14 días
        hábiles. De no ser retirado volverá a deposito y tendrás que comunicarte
        por WhatsApp para coordinar el nuevo día de entrega.
      </p>
      <hr color='#1769aa' />
      <h3 className='subtitle-preg'>
        ¿Dónde tienen locales y horario de atención?
      </h3>
      <p className='text-preg'>Tenemos 4 locales:</p>
      <ul>
        <li className='list-preg'>
          Av. Aaa 2601, Barrio San Vicente, Cordoba Capital, Cordoba. Horario de
          Atención: Lunes a Sábados de 9 a 13 y de 16:30 a 20:30hs.
        </li>
        <li className='list-preg'>
          9 de julio 1385, Barrio Nueva Córdoba, Cordoba Capital, Cordoba.
          Horario de Atención: De lunes a viernes de 10 a 18hs. Sábados de 9.30
          a 14hs.
        </li>
        <li className='list-preg'>
          Acosta 1234, Barrio Altamira, Córdoba Capital, Cordoba. Horario de
          Atención: Lunes a sábados de 10 a 21 hs.
        </li>
        <li className='list-preg'>
          Los Artesanos 111, Carlos Paz, Cordoba. Horario de Atención: de Lunes
          a sábados de 10 a 13 hs y de 17 a 21 hs.
        </li>
      </ul>
    </div>
  );
};

export default PreguntasFrecuentes;
