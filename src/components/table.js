import React, {useEffect, useState } from 'react'
import {Table, Button} from 'react-bootstrap';
import Container from 'react-bootstrap/Container';



let servicesData = [
    {
      id: 1,
      icon: 'fas fa-clone',
      title: 'Responsive Design',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis, vel! Accusantium hic fugiat laudantiu earum consequuntur, unde nam et mollitia eaque incidunt sed.'
    },
    {
      id: 2,
      icon: 'fas fa-snowflake',
      title: 'Creative Design',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis, vel! Accusantium hic fugiat laudantiu earum consequuntur, unde nam et mollitia eaque incidunt sed.'
    },
    {
      id: 3,
      icon: 'fas fa-plug',
      title: 'SEO Optimized',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis, vel! Accusantium hic fugiat laudantiu earum consequuntur, unde nam et mollitia eaque incidunt sed.'
    },
    {
      id: 4,
      icon: 'fas fa-desktop',
      title: 'Retina Ready',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis, vel! Accusantium hic fugiat laudantiu earum consequuntur, unde nam et mollitia eaque incidunt sed.'
    },
    {
      id: 5,
      icon: 'fas fa-trophy',
      title: 'Brower Compatibility',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis, vel! Accusantium hic fugiat laudantiu earum consequuntur, unde nam et mollitia eaque incidunt sed.'
    },
    {
      id: 6,
      icon: 'fas fa-life-ring',
      title: 'Customer Support',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis, vel! Accusantium hic fugiat laudantiu earum consequuntur, unde nam et mollitia eaque incidunt sed.'
    }
  ]
  let servicesData1=servicesData
export const BasicTable = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        setData(servicesData)
     
      }, [data])
    
const handleDelete = (id) => {
    
   
    let newdata=data.filter(row =>
         {
        console.log("current row id", typeof(row.id));
       return  Number(row.id) !== Number(2)


    }
      
    
      
    )
    setData(newdata)
    console.log("New data", newdata)
}
    
   

      
    
        
           
   
   
    
  return (
    <section>
        <Container fluid>
        <Table striped bordered hover style={{margin: "0 0 0px"}}>
      <thead>
        <tr>
          <th>#</th>
          <th>Title</th>
          <th>Description</th>
          <th>Icon</th>
        </tr>
      </thead>
      <tbody>
      {     
            data.map(services => (
                <tr key={services.id}>  
                    <td>{services.id} </td>
                    <td>{services.title} </td>
                    <td>{services.description} </td>
                    <td> 
                        
                    <Button className='my-3' onClick={()=>handleDelete(services.id)}>
            <i className='fas fa-plus'></i> Create Product
          </Button>                    
                       
                </td>
                </tr>
            ))

        }
       
      </tbody>
      </Table>
      </Container> 
    </section>
  )
}
