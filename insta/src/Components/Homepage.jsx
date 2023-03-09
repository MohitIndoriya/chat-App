import React from 'react'
import {Box, Container, Tab, TabList, TabPanel, TabPanels, Tabs, Text,} from "@chakra-ui/react"
import Login from './Login'
import Signup from './Signup'

function Homepage() {
  return (
    <Container maxW="xl" centerContent mb="70">
      <Box 
      d="flex" justifyContent="center" bg="white" m="40px 0 15px 0" p={3} w="100%" borderRadius="lg" borderWidth="1px">
      <Text fontSize="4xl" fontFamily="sans-serif" w="100%" ml="30%">Dimhit Chat</Text>
      </Box>
      <Box bg="white" width="100%" borderRadius="lg" borderWidth="1px" p={4}>
        <Tabs variant='soft-rounded' colorScheme='blue'>
  <TabList mb="1em">
    <Tab minW="50%" fontSize={"xl"}>Login</Tab>
    <Tab minW="50%"fontSize={"xl"}>Sign up</Tab>
  </TabList>
  <TabPanels>
    <TabPanel>
     <Login/>
    </TabPanel>
    <TabPanel>
     <Signup/>
    </TabPanel>
  </TabPanels>
</Tabs>
      </Box>

    </Container>
  )
}

export default Homepage
