"use client"

import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

import useDebonce from "@/hooks/useDebonce";

import qs from "query-string"
import Input from "./Input";

const SearchInput = () => {

  const router = useRouter();
  const [value, setValue] = useState<string>("");
  const debouncedValue = useDebonce<string>(value, 500);

  useEffect(() => {
    const query = {
      title: debouncedValue,
    };

    const url = qs.stringifyUrl({
      url: '/search',
      query
    });

    router.push(url);
  }, [debouncedValue, router]);


  return (  
    <Input 
      placeholder="What do youy want to list to?"
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
    );
}
 
export default SearchInput;