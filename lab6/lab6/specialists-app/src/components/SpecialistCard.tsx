import { FC } from 'react'
import { Card } from 'react-bootstrap'
import './SpecialistCard.css'
import { Button } from 'react-bootstrap'
import { add_spec } from '../modules/get-specialist'
import { setNum } from '../specialists_store/specialistsSlice';
import { useDispatch } from 'react-redux'

interface Props {
    id: Number
    name: string
    desc: string
    preview_image: string
}


const default_image = require('../assets/noImage.jpg');

const SpecialistCard: FC<Props> = ({id, name, desc, preview_image}) => {

    const dispatch = useDispatch()

    const add_spec_to_request = async (id: Number) =>{
        let result = await add_spec(Number(id))
        dispatch(setNum(result.specialist.length))
        localStorage.setItem("specialistsNum", (result.specialist.length).toString())
    }

    return (
        <Card className="card">
            <Card.Img className="cardImage" variant="top" src={preview_image+""} height={100} width={100} 
              onError={({ currentTarget }) => {
                currentTarget.onerror = null; 
                currentTarget.src=default_image;
              }} />
            <Card.Body>                
                <div className="textStyle">
                    <Card.Title>{name}</Card.Title>
                </div>
                <div className="textStyle">
                    <Card.Text>
                        {desc}
                    </Card.Text>
                </div>
                {localStorage.getItem('username') && <Button onClick={(e) => {
                        e.stopPropagation();
                        add_spec_to_request(id);
                    }
                    } 
                className='cardButton'>Добавить</Button>}
            </Card.Body>
        </Card>
    )
} 

export default SpecialistCard;