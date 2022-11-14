export interface Iphone {
    id: number | string,
    model: string,
    title: string,
    memory: string,
    color: Tcolor,
    thumbnail: string,
    stock: number,
    price: number,
    counter: number
}

type Tcolor = {
    name: string,
    color: string
}

export interface filters {
	filters: any
    filterDisplay: string,
	filterCoast: filterCoast,
	filterMemory: string,
	filterColor: string
}
export type filterCoast = {
    ot: number,
    do: number
}

export type propsAppModal = {
	active: boolean;
	setActive: React.Dispatch<React.SetStateAction<boolean>>;
};
export type propsBasketForm = {
	items: JSX.Element[] | Iphone[];
	SetStatus: React.Dispatch<React.SetStateAction<boolean>>;
};

export interface TBasketItem extends Iphone{
	onChangeCountInc : () => any
	onChangeCountDec: () => any
	onDelete: () => void
}

export type TonAddItem = (obj:Iphone) => void

export interface TIphone {
    id: number | string
    name: string,
    color: Tcolor[]
    thumbnail: string
    memory: string[]
}

export interface TTrandeItem {
    id: number | string,
    model: string,
    price: number
}