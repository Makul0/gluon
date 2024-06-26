import React from "react";
import {Tabs, Tab, Card, CardBody} from "@nextui-org/react";
import SignIn from "./forms/signin";
import SignUp from "./forms/signup";


export default function TabForm() {
  return (
    <div className="flex w-full flex-col text-black">
      <Tabs aria-label="Options">
        <Tab key="Sign In" title="Sign In">
          <Card>
            <CardBody>
             <SignIn />
            </CardBody>
          </Card>  
        </Tab>
        <Tab key="Sign Up" title="Sign Up">
          <Card>
            <CardBody>
              <SignUp />
            </CardBody>
          </Card>  
        </Tab>
      </Tabs>
    </div>  
  );
}
