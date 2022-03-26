import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav>
      <h1>Logo</h1>
      <Link to='/'>Home</Link>
      <Link to='/tentang'>Tentang</Link>
      <Link to='/produk'>Produk</Link>
      <Link to='/biodata'>Form Biodata</Link>
    </nav>
  );
}