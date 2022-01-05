import { useEffect, useState } from "react";
import { Button, Htag, Ptag, Tag } from "../components";
import { Rating } from '../components/Rating/Rating';
import { Layout, withLayout } from "../layout/Layout";

function Home(): JSX.Element {
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
            <Rating rating={rating} isEditable setRating={setRating}/>
        </>
    );
}

export default withLayout(Home);