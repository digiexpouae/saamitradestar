const map=()=>{
    return(
<div className="md:h-[80vh] h-[50vh] w-full mb-10 md:mb-20 flex items-center justify-center rounded-[30px]">
   
   <div></div>
    <div className="w-[80%] h-full">
 <iframe
 className="h-full w-full rounded md:rounded-[30px]"
    src="https://www.google.com/maps?q=Saami+Tradestar+Logistics+Ltd,+Millenium+Plaza,+204,+Andheri+Kurla+Road,+Behind+Sakinaka+Telephone+Exchange,+Saki+Naka,+Mumbai,+Maharashtra+400072,+India&output=embed"
    width="600"
    height="450"
    style={{ border: 0 }}
    allowFullScreen
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
  ></iframe>
</div>
</div>
    )
}
export default map