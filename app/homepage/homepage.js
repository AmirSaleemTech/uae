import React from 'react'
import PackagesCard from '../packagescard/page'
import datas from '../data/page'

function Homepage() {
 
  return (
    <>
    
   <p>UAE Desert Safaris. Adventure beckons! Satisfy your thirst for adventure! We invite you to experience the sensational culture, traditions, and customs of Desert Safari Dubai with us. The tour packages we offer for our special desert safari Dubai tours are priced reasonably and based on extensive knowledge of travelers’ needs and expectations. Through our years of experience in this field, we have learned how to deliver offers and deals to travelers from around the world that will more than meet their needs. There are plenty of activities here, whether you’re looking for a simple camel ride to experience the UAE Desert Safaris vibes, or you’re interested in thrilling activities like sandboarding, dune bashing or watching a live belly dance show, we have it all.

UAE Desert Safaris offers economical desert safaris in Dubai. Have you seen them? What about one of them? Hills include full entertainment in all the tour packages we offer. Our team is fully committed to meeting your needs and providing a memorable Desert Journey to Dubai. While living in Emirates life, you can save money while enjoying it to the fullest. Whether traveling by airport shuttle or by our 4×4 land cruiser, we guarantee your safety and comfort.</p>
    
    
{datas.map((dataa) => (
        <PackagesCard
        // key={dataa.id}
        imgg={dataa.imgg}
         title={dataa.title} 
         price={dataa.price} 
         favour1={dataa.favour1}
         favour2={dataa.favour2}
         favour3={dataa.favour3}
         favour4={dataa.favour4}
         favour5={dataa.favour5}
         favour6={dataa.favour6}
         favour7={dataa.favour7}
         favour8={dataa.favour8}
         favour9={dataa.favour9}
         favour10={dataa.favour10}
         favour11={dataa.favour11}
         favour12={dataa.favour12}
         favour13={dataa.favour13}
         favour14={dataa.favour14}

         
         />
      ))}
      
    
    
    
    </>
  )
}

export default Homepage