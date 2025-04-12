interface IMenu {
    id: string;
    name: string;
    description: string;
    price: number;
    image_url: string;
    category: string;
    isAvaliable: string;
}

interface Icart {
    menuId: string;
    quantity: number;
    notes: string;
    menuItem?: IMenu;
}

interface IOrder {
    id: string;
    customer_name: string;
    table_number:number;
    cart: Icart[];
    status: 'PENDING' | 'PROCESSING' | 'COMPLETE';
    total: number;
}

export type {IOrder, Icart};