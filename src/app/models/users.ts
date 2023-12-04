export interface Employer {
  id: number;
  firstName: string;
  lastName: string;
  email?: string;
  position?: string;
  img?: string;
  tip?: number;
}

export interface datePyment {
  cardNumber?: number;
  tip?: number;
}

export interface ServerEmployee {
  id: number;
  first_name: string;
  last_name: string;
  position: string;
  image_url: string;
}

export function mapServeToClient(ServerEmployee: ServerEmployee): Employer {
  return {
    id: ServerEmployee.id,
    firstName: ServerEmployee.first_name,
    lastName: ServerEmployee.last_name,
    position: ServerEmployee.position,
    img: ServerEmployee.image_url,
  };
}

function mapClientToServer() {}

export interface NewTip {
  employee_id: number;
  restaurant_id: number;
  amount: number;
  currency: string;
  card_number: string;
  payment_method: string;
}
