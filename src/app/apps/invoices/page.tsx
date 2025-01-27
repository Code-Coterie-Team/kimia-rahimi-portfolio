import AboutProject from '@/components/AboutProject'
import Challenges from '@/components/Challenges'
import Solution from '@/components/Solution'
import React from 'react'
import invoice from "@/assets/invoices.png"

export default function Invoices() {
  return (
    <div className=" w-full flex flex-col gap-52">
            <AboutProject title="Invoices App" description="The invoice management project allows users to easily create, edit, and track invoices." industry="Invoices" year={2024} service='"Invoice Management"' image={invoice}/>
            <Challenges/>
            <Solution/>
    </div>
  )
}
