import { FC } from 'react'
import { Card } from 'react-bootstrap'
import { IServiceRequest, delete_service_request, form_service_request } from '../modules/get-service_requests';
import { Col, Row } from 'react-bootstrap'
import SpecialistCardInRequest from './SpecialistCardInRequest'
import SpecialistCardInRequestWithButton from './SpecialistCardInRequestWithButton'
import { Button } from 'react-bootstrap'
import './ServiceRequestCard.css'


const redirect = () => {
    window.location.href = '/service_requests'
 }

const delete_request = async (id: Number) =>{
    await delete_service_request(Number(id))
    redirect()
}


const form_request = async (id: Number) =>{
    await form_service_request(Number(id))
    redirect()
}



const ServiceRequestTableRow: FC<IServiceRequest> = ({id, creator, comment, status, specialist, created_at, formed_at, finished_at}) => (    
    <tr>
                {/* {specialist.map((item, index)=> (
                    <Col key={index}>
                            {status=="CREATED" ? <SpecialistCardInRequestWithButton {...item} />:  <SpecialistCardInRequest {...item} />}
                    </Col>
                ))} */}
            <td>{id.toString()}</td>
            <td>{creator}</td>
            <td>{comment}</td>
            <td>{status}</td>
            <td>{created_at}</td>
            <td>{formed_at}</td>
            <td>{finished_at}</td>
    </tr>
)

export default ServiceRequestTableRow;