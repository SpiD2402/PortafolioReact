import { getApi } from "../helpers/consumoApi";

import { ImgItems } from "./Imgitems";

import { useState,useEffect } from "react";

export const PintadoImg =({valor})=>{

    const [infoApi,setInfoApi] = useState([])

    useEffect(()=>{
        getApi(valor).then((newImages =>setInfoApi(newImages.hits)))
    },[valor])


    return (

        <div className="centrar-pixaby">
            {
                infoApi.map((img)=>{

                    return <ImgItems key={img.id} {...img}/>
                })

            }
        </div>

    )


}




