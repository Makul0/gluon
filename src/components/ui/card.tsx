import React from "react";
import {Card, CardHeader, CardBody, CardFooter, Image, Button} from "@nextui-org/react";

export default function Post() {
  return (
    <div className=" relative gap-2 grid grid-cols-12 grid-rows-2 mt-4">
    <Card className="col-span-12 sm:col-span-4 h-[300px]">
      <CardHeader className="absolute z-10 top-1 flex-col justify-end">
        <h4 className="text-white font-medium text-large p-2 ">I can live with doubt and uncertainty. I think it's much more interesting to live not knowing than to have answers which might be wrong.</h4>
        <p className="text-xl text-white uppercase font-bold p-2"> Prof.  Richard Feynnman</p>
      </CardHeader>
      <Image
        removeWrapper
        alt="Card background"
        className="z-0 w-full h-full object-cover brightness-50"
        src="https://image.lexica.art/full_webp/281d55dc-5f80-477f-b0ea-92ca7de49f1c"
      />
    </Card>
    <Card className="col-span-12 sm:col-span-4 h-[300px]">
      <CardHeader className="absolute z-10 top-1 flex-col justify-end">
        <h4 className="text-white font-medium text-large p-2 ">For eternally and always there is only now, one and the same now; the present is the only thing that has no end. The world is given to me only once, not one existing and one perceived. Subject and object are only one.</h4>
        <p className="text-xl text-white uppercase font-bold p-2"> Prof.  Erwin Schrödinger</p>
      </CardHeader>
      <Image
        removeWrapper
        alt="Card background"
        className="z-0 w-full h-full object-cover brightness-50 blur-sm"
        src="https://image.lexica.art/full_webp/a12c1806-16c9-4054-a061-20142e5e32d8"
      />
    </Card>
    <Card className="col-span-12 sm:col-span-4 h-[300px]">
      <CardHeader className="absolute z-10 top-1 flex-col justify-end">
        <h4 className="text-white font-medium text-large p-2 ">Look up at the stars and not down at your feet. Try to make sense of what you see, and wonder about what makes the universe exist. Be curious.</h4>
        <p className="text-xl text-white uppercase font-bold p-2"> Stephen Hawking</p>
      </CardHeader>
      <Image
        removeWrapper
        alt="Card background"
        className="z-0 w-full h-full object-cover brightness-50"
        src="https://image.lexica.art/full_webp/0f337463-3d92-4f50-b7cc-f928d68d8eec"
      />
    </Card>
    
    
    
  </div>
  );
}
