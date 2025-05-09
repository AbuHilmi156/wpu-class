
import { Link, useParams } from "react-router-dom"
import { Icart, IOrder } from "../../../types/order";
import { getOrderById } from "../../../services/order.service";
import styles from './DetailOrder.module.css';
import Button from "../../ui/Button";
import { useEffect, useState } from "react";

const DetailOrder = () => {
    const {id} = useParams();
    const [order, setOrder] = useState<IOrder | null>(null)

    useEffect(() => {
        const fetchOrder = async () => {
            const result = await getOrderById(`${id}`);
            setOrder(result);
        };
        fetchOrder()
    }, [id]);

    return(
        <main className={styles.detail}>
            <section className={styles.header}>
                <h1>Detail Order</h1>
                <Link to="/orders">
                    <Button>Back</Button>
                </Link>
            </section>
            <section>
                <div className={styles.order}>
                    <div className={styles.info}>
                        <div className={styles.item}>
                            <p>Order ID:</p>
                               <h4>{order?.id}</h4>
                        </div>
                        <div className={styles.item}>
                            <p>customer:</p>
                               <h4>{order?.customer_name}</h4>
                        </div>
                        <div className={styles.item}>
                            <p>Table:</p>
                               <h4>{order?.table_number}</h4>
                        </div>
                        <div className={styles.item}>
                            <p>Status:</p>
                               <h4>{order?.status}</h4>
                        </div>
                        <div className={styles.item}>
                            <p>Total:</p>
                               <h4>{order?.total}</h4>
                        </div>
                    </div>
                </div>
                <div className={styles.cart}>
                    <h3>Order Item</h3>
                    <div className={styles.list}>
                        {order?.cart?.map((item: Icart)=>(
                            <div className={styles.item} key={item.menuId}>
                                <img className={styles.image} src={item?.menuItem?.image_url} alt={item?.menuItem?.name} />
                                <p className={styles.name}>
                                    {item.quantity} x {item?.menuItem?.name}
                                </p>
                            </div>
                            // 1.27.52
                        ))}
                    </div>
                </div>
            </section>
        </main>
    )
};

export default DetailOrder