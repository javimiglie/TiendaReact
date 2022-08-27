import './Inicio.css';

import Card from '@mui/material/Card';

const Inicio = () => {
  return (
    <div>
      <div className='container-home'>
        <img src='Banner.png' width='100%'></img>
        <h2>¿QUIÉNES SOMOS?</h2>
        <p>
          Tienda Javi fué desarrollada en el curso de React en Coderhouse por
          Javier Miglierini.
        </p>
        <p>
          En dicha plataforma podrás conseguir diferentes productos de ropa
          masculina.
        </p>
      </div>
      <div className='card-home'>
        <Card className='container-card' sx={{ maxWidth: 350 }}>
          <div className='card-item'>
            <h3>MISIÓN</h3>
            <p>
              Como una tienda online, nuestra misión es a nuestros clientes
              comodidad y confiabilidad a la hora de adquirir su producto
            </p>
          </div>
        </Card>
        <Card className='container-card' sx={{ maxWidth: 350 }}>
          <div className='card-item'>
            <h3>VISIÓN</h3>
            <p>
              Nuestro propósisto es ser reconocidos como por la satisfacción de
              nuestros clientes
            </p>
          </div>
        </Card>
        <Card className='container-card' sx={{ maxWidth: 350 }}>
          <div className='card-item'>
            <h3>VALORES</h3>
            <p>
              Nuestra compañía actúa siempre con integridad y honestidad con
              todos los que se realacionan con ella, sean proovedores, clientes
              o personal
            </p>
          </div>
        </Card>
      </div>
    </div>
  );
};
export default Inicio;
