import { Link } from 'react-router-dom';

export default function Produk() {
  return (
    <div className='content'>
      <h3>Kopi</h3>
      <div className='produk'>
        {[1, 2, 3, 4].map((p) => {
          return (
            <div>
              <Link to={`/produk/${p}`}>
                <img src='https://via.placeholder.com/250x125' alt='produk' />
              </Link>
            </div>
          );
        })}
      </div>

      <h3>Susu</h3>
      <div className='produk'>
        {[1, 2, 3, 4].map((p) => {
          return (
            <div>
              <Link to={`/produk/${p}`}>
                <img src='https://via.placeholder.com/250x125' alt='produk' />
              </Link>
            </div>
          );
        })}
      </div>

      <h3>Teh</h3>
      <div className='produk'>
        {[1, 2, 3, 4].map((p) => {
          return (
            <div>
              <Link to={`/produk/${p}`}>
                <img src='https://via.placeholder.com/250x125' alt='produk' />
              </Link>
            </div>
          );
        })}
      </div>

      <h3>Indomie</h3>
      <div className='produk'>
        {[1, 2, 3, 4].map((p) => {
          return (
            <div>
              <Link to={`/produk/${p}`}>
                <img src='https://via.placeholder.com/250x125' alt='produk' />
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}
