import {Link} from 'react-router-dom';

const Products = () => {
    return (
        <section>
            <h2>Products</h2>
            <ul>
                <li><Link to="/products/ABook">A Book</Link></li>
                <li><Link to="/products/ACarpet">A Carpet</Link></li>
                <li><Link to="/products/OnlneCource">Online Course</Link></li>
            </ul>
        </section>
    );
}
export default Products;