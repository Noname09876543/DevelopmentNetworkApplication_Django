import { FC } from 'react'
import { Card } from 'react-bootstrap'
import './SmallSpecialistCard.css'
import { Button } from 'react-bootstrap'
import { add_spec } from '../modules/get-specialist'
import { setNum } from '../specialists_store/specialistsSlice';
import { useDispatch } from 'react-redux'

interface Props {
    id: Number,
    name: string
    preview_image: string
}

 const redirect_to_spec = (id: Number) => {
    window.location.href = `/specialists/${id}`
 }


const default_image = require('../assets/noImage.jpg');

const SmallSpecialistCard: FC<Props> = ({id, name, preview_image}) => {

    const dispatch = useDispatch()

    const add_spec_to_request = async (id: Number) =>{
        let result = await add_spec(Number(id))
        dispatch(setNum(result.specialist.length))
        localStorage.setItem("specialistsNum", (result.specialist.length).toString())
    }
    
    return (
        <Card className="card" onClick={(e) => {
            e.stopPropagation();
            redirect_to_spec(id);
        }} >
            <Card.Img className="cardImage" variant="top" src={preview_image+""} height={100} width={100}  
              onError={({ currentTarget }) => {
                currentTarget.onerror = null; 
                currentTarget.src=default_image;
              }}
              />
            <Card.Body>                
                <div className="textStyle">
                    <Card.Title>{name}
                    </Card.Title>
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

export default SmallSpecialistCard;