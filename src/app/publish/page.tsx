'use client'
import React from "react";
import {Tabs, Tab, Card, CardBody} from "@nextui-org/react";
import Proform from "@/components/publish/proform";
import Manform from "@/components/publish/manform";

export default function Register() {
  return (
     <div>
      <main className="flex flex-col md:flex-row h-screen">
      <link href="https://fonts.googleapis.com/css2?family=EB+Garamond:ital,wght@0,400..800;1,400..800&display=swap" rel="stylesheet"></link>
      <div style={{position: "relative", fontFamily: "EB Garamond"}} className="flex flex-col w-full h-full ">
  <div style={{
    content: '""',
    backgroundImage: 'url("https://image.lexica.art/full_webp/529f83bf-724d-4637-a883-3e456cb05d5d")',
    backgroundSize: "cover",
    filter: "brightness(70%) blur(1px)",
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    zIndex: -1,
  }}></div>
  <div className="relative p-8 space-y-3">
  <div className="flex w-full flex-col ">
      <Tabs aria-label="Options">
        <Tab key="Manual" title="Manual">
          <Card>
            <CardBody>
              <Manform />
            </CardBody>
          </Card>  
        </Tab>
        <Tab key="Professional" title="Professional">
          <Card>
            <CardBody>
              <Proform />
            </CardBody>
          </Card>  
        </Tab>
      </Tabs>
    </div>  
  </div>
</div>

     
    </main>
     </div>
  );
}