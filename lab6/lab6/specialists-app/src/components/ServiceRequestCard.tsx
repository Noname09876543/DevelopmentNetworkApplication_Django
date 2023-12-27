import { FC, useState } from 'react'
import { Card } from 'react-bootstrap'
import { IServiceRequest, delete_service_request, form_service_request, get_service_request } from '../modules/get-service_requests';
import { Col, Row } from 'react-bootstrap'
import SpecialistCardInRequest from '../components/SpecialistCardInRequest'
import SpecialistCardInRequestWithButton from '../components/SpecialistCardInRequestWithButton'
import { Button } from 'react-bootstrap'
import './ServiceRequestCard.css'
import { useDispatch } from 'react-redux'
import { setNum } from '../specialists_store/specialistsSlice';


const ServiceRequestCard: FC<IServiceRequest> = ({id, creator, comment, status, specialist, created_at, formed_at, finished_at}) =>{

    const dispatch = useDispatch()

    const [delCard, setDelCard] = useState(false)

    const [formCard, setFormCard] = useState(false)

    const [loading, setLoading] = useState(false)

    const [statusInRequest, setStatusInRequest] = useState(status)

    const [formedInRequest, setFormedInRequest] = useState(formed_at)


    const delete_request = async (id: Number) =>{
        await setLoading(true)
        await delete_service_request(Number(id))
        localStorage.setItem("specialistsNum", (0).toString())
        dispatch(setNum(0))
        setDelCard(true)
        await setLoading(false)
    }
    
    
    const form_request = async (id: Number) =>{
        await setLoading(true)
        await form_service_request(Number(id))
        const formedRequest = await get_service_request(Number(id))
        setStatusInRequest(formedRequest.status)
        setFormedInRequest(formedRequest.formed_at)
        localStorage.setItem("specialistsNum", (0).toString())
        dispatch(setNum(0))
        setFormCard(true)
        await setLoading(false)
    }

    if (!delCard){
        if (!formCard){
            return (    
                <Card className="card">
                    <Card.Body>                
                        <div className="textStyle">
                            {/* <Card.Title>{creator}</Card.Title> */}
                            <Card.Title>Заявка на услуги специалистов {id.toString()}</Card.Title>
                        </div>
                        <Row xs={4} md={4} className="g-4">
                            {specialist.map((item, index)=> (
                                <Col key={index}>
                                    {/* <a href={`/specialists/${item.id}`} style={{textDecoration: 'none'}}> */}
                                        {status=="CREATED" ? <SpecialistCardInRequestWithButton {...item} />:  <SpecialistCardInRequest {...item} />}
                                    {/* </a> */}
                                </Col>
                            ))}
                        </Row>
                        <div className='fields'>
                            <p>Комментарий:</p>
                            <p>{comment}</p>
                            <p>Статус: {statusInRequest}</p>
                            <p>Создана: {created_at}</p>
                            <p>Сформирована: {formedInRequest}</p>
                            <p>Завершена: {finished_at}</p>

                        </div>
                        {status=="CREATED" && <Button onClick={(e) => {
                                    e.stopPropagation();
                                    form_request(id);
                                }} className='cardButton'>Сформировать заявку</Button>}
                            {status=="CREATED" && <Button onClick={(e) => {
                                    e.stopPropagation();
                                    delete_request(id);
                                }} className='deleteCardButton'>Удалить</Button>}
                    </Card.Body>
                </Card>
            )
        } else {
            return (    
                <Card className="card">
                    <Card.Body>                
                        <div className="textStyle">
                            {/* <Card.Title>{creator}</Card.Title> */}
                            <Card.Title>Заявка на услуги специалистов {id.toString()}</Card.Title>
                        </div>
                        <Row xs={4} md={4} className="g-4">
                            {specialist.map((item, index)=> (
                                <Col key={index}>
                                    {/* <a href={`/specialists/${item.id}`} style={{textDecoration: 'none'}}> */}
                                        {<SpecialistCardInRequest {...item} />}
                                    {/* </a> */}
                                </Col>
                            ))}
                        </Row>
                        <p>Комментарий:</p>
                        <p>{comment}</p>
                        <p>Статус: {statusInRequest}</p>
                        <p>Создана: {created_at}</p>
                        <p>Сформирована: {formedInRequest}</p>
                        <p>Завершена: {finished_at}</p>
                    </Card.Body>
                </Card>
            )
        }
    }
} 

export default ServiceRequestCard;