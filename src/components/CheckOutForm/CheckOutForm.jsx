import { addDoc, collection } from "firebase/firestore";
import { useContext, useState } from "react";
import { db } from "../../db/db";
import { CartCntxt } from "../../context/CartContext";
import { Link } from "react-router-dom";

const CheckOutForm = ({ listProducts }) => {
    const { clear, calculateValueCart } = useContext(CartCntxt);
    
    const [orderId, setOrderId] = useState("");
    const [error, setError] = useState("");
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        confirmEmail: "",
        tel: 0,
        date: new Date(),
        products: listProducts.map((product) => ({
        id: product.id,
        name: product.name,
        quantity: product.quantity,
        })),
        valueCart: calculateValueCart(),
    });

    const handleForm = (e) => {
        e.preventDefault();

        if (!validateForm()) {
            return;
        }

        const order = { ...formData, date: new Date() };
        sendOrder(order);
    };

    const validateForm = () => {
        if (!formData.firstName || !formData.lastName || !formData.email || !formData.confirmEmail || !formData.tel) {
            setError("Debes completar todos los datos solicitados");
            return false;
        }

        if (formData.email !== formData.confirmEmail) {
            setError("Los correos no coinciden");
            return false;
        }

        setError("");
        return true;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const sendOrder = (order) => {
        addDoc(collection(db, "orders"), order)
        .then((docRef) => {
            setOrderId(docRef.id);
            clear();
        })
        .catch(errorMsg => {
            console.log("Error al realizar la orden de compra", errorMsg);
            setError("Error al realizar la orden de compra");
        });
    };

    return (
        <div>
            {!orderId ?
                <form onSubmit={handleForm}>
                <div>
                <label htmlFor="firstName">Nombre:</label>
                <input
                    type="text"
                    name="firstName"
                    id="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                />
                </div>
                <div>
                <label htmlFor="lastName">Apellido:</label>
                <input
                    type="text"
                    name="lastName"
                    id="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                />
                </div>
                <div>
                <label htmlFor="tel">Telefono:</label>
                <input
                    type="tel"
                    name="tel"
                    id="tel"
                    value={formData.tel}
                    onChange={handleChange}
                />
                </div>
                <div>
                <label htmlFor="email">Correo electrónico:</label>
                <input
                    type="email"
                    name="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                />
                </div>
                <div>
                <label htmlFor="confirmEmail">Confirmar Correo Electrónico:</label>
                <input
                    type="email"
                    name="confirmEmail"
                    id="confirmEmail"
                    value={formData.confirmEmail}
                    onChange={handleChange}
                />
                </div>
    
                {error && <p>{error}</p>}
    
                <button type="submit">Finalizar compra</button>
    
                </form>
                :
                orderId && (
                    <>
                        <strong>Gracias por tu compra, el id de tu compra es: {orderId}</strong>
                        <Link to={"/"}><h1>Volver al Home</h1></Link>
                    </>
                    )
            
            }
        </div>
    );
};

export default CheckOutForm;