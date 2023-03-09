import { Button, FormControl, FormLabel, Input, InputGroup, InputRightElement, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'

function Signup() {
    let [name,setname]=useState()
     let [email,setemail]=useState()
      let [password,setpassword]=useState()
       let [confirmpass,setconfirmpass]=useState()
       let [show,setshow]=useState(false)
       let [show2,setshow2]=useState(false)
        let [pic,setpic]=useState()
        const handlesubmit=()=>{
            
        }
  return (
   <VStack spacing={"5px"} color="black">
    <FormControl id="first-name" isRequired>
        <FormLabel>First Name</FormLabel>
        <Input placeholder='Enter your Name' onChange={(e)=>setname(e.target.value)}></Input>
    </FormControl>
     <FormControl id="email" isRequired>
        <FormLabel>Email</FormLabel>
        <Input type="email" placeholder='Enter your Email ' onChange={(e)=>setemail(e.target.value)}></Input>
    </FormControl>
     <FormControl id="password" isRequired>
        <FormLabel>Password</FormLabel>
        <InputGroup>
        <Input type={show?"text":"password" }placeholder='Enter your Password' onChange={(e)=>setpassword(e.target.value)}></Input>
        <InputRightElement w="4.5rem">
            <Button h="1.75rem" size="sm" onClick={()=>setshow(!show)}>{show?"Hide":"Show"}</Button>
        </InputRightElement>
        </InputGroup>
    </FormControl>
     <FormControl id="confirmpass" isRequired>
        <FormLabel>confirm Password</FormLabel>
        <InputGroup>
        <Input type={show2?"text":"password" }placeholder='Enter your Password' onChange={(e)=>setconfirmpass(e.target.value)}></Input>
        <InputRightElement w="4.5rem">
            <Button h="1.75rem" size="sm" onClick={()=>setshow2(!show2)}>{show2?"Hide":"Show"}</Button>
        </InputRightElement>
        </InputGroup>
    </FormControl>
    <FormControl id="pic" isRequired>
        <FormLabel>Upload Picture</FormLabel>
        <Input type="file"  accept='image/*' onChange={(e)=>setpic(e.target.files[0])}></Input>
    </FormControl> 
    <Button colorScheme={"blue"} w="100%" mt="15" onChange={handlesubmit}>Signup</Button>
   </VStack>
  )
}

export default Signup
