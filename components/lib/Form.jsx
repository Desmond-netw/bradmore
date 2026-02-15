import React from 'react'
import {Select, SelectContent, SelectGroup, SelectTrigger, SelectItem, SelectLabel, SelectValue} from "@/components/ui/select"
import {Input} from "../ui/input";
import { Textarea } from '../ui/textarea';
import Button from './Button';

const Form = () => {
  return (
   <form className="flex flex-col">
    <div className="flex flex-col gap-[20px] mb-[20px]">
         <div className="flex flex-col xl:flex-row gap-[20px]">
        <Input type="fullname" placeholder="Full Name"/>
        <Input type="email" placeholder="Email address"/>
         </div>
            <Input type="phone" placeholder="Phone number"/>
            <Select>
                <SelectTrigger className="w-full rounded-none h-[54px] text-secondary outline-none">
                    <SelectValue placeholder="Select a service"></SelectValue>
                </SelectTrigger>
                <SelectContent>
                    <SelectGroup>
                        <SelectLabel>Select a service</SelectLabel>
                        <SelectItem value="Planning & Expansion of Sewer Networks">Planning & Expansion of Sewer Networks</SelectItem>
                        <SelectItem value="sewer Pump Station Construction">sewer Pump Station Construction</SelectItem>
                        <SelectItem value="Sewer Pipe Supply & Installation">Sewer Pipe Supply & Installation</SelectItem>
                        <SelectItem value="Sewer Pump Installation & Maintenance">Sewer Pump Installation & Maintenance</SelectItem>
                        <SelectItem value="General Construction & Maintenance">Sewer Pipe Supply & Installation</SelectItem>
                        <SelectItem value="Environmental Impact Assessment">Environmental Impact Assessment(EIA) & Environmental Management Services</SelectItem>
                    </SelectGroup>
                </SelectContent>
            </Select>
       
    </div>
    <div>
        {/* Textarea */}
        <Textarea className="h-[180px] resize-none rounded-none" placeholder="Enter your message here .."/>
        <Button text="Send message">Send Message</Button>
    </div>

   </form>
  )
}

export default Form