"use client"

import { useEffect } from "react"
import {Crisp} from "crisp-sdk-web"


const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("5518367d-55be-4d6a-8284-1fe29a4f8829")
  
    }, [])
  return null;
}
 
export default CrispChat;

