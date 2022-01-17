import axios from "axios";
import { GetStaticProps } from "next";
import { useState } from "react";
import { Button, Htag, Ptag, Tag } from "../components";
import { Rating } from '../components/Rating/Rating';
import { MenuItem } from "../interfaces/menu.interface";
import { withLayout } from "../layout/Layout";
import { Input } from './../components/Input/Input';

function Home({menu}: HomeProps): JSX.Element {
    const [rating, setRating] = useState<number>(4);

    return (
        <>
            <Htag tag='h1'> text </Htag>
            <Button
                appearance='primary'
                arrow='right'
            >
                Click
            </Button>
            <Button appearance='ghost' arrow='down'>
                Click
            </Button>
            <Ptag size='l'>Bigger</Ptag>
            <Ptag>Middle</Ptag>
            <Ptag size='s'>Smaller</Ptag>
            <Tag color='primary' href='sdsd' size='s'>
                small
            </Tag>
            <Tag color='red' href='sdsd' size='m'>
                small
            </Tag>
            <Tag color='ghost' href='sdsd'>
                small
            </Tag>
            <Tag color='gray' href='sdsd'>
                small
            </Tag>
            <Tag color='green'>small</Tag>
            <Rating rating={rating} isEditable setRating={setRating} />
            <Input placeholder="test words"/>
        </>
    );
}

export default withLayout(Home);

export const getStaticProps: GetStaticProps<HomeProps> = async () => { 
    const firstCategory = 0;
    const { data: menu } = await axios.post<MenuItem[]>(process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/find', {
        firstCategory
    })
    return {
        props: {
            menu,
            firstCategory
        }
    }
}

interface HomeProps extends Record<string, unknown> { 
    menu: MenuItem[];
    firstCategory: number;
}