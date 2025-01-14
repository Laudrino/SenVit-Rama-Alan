import React, { useState } from 'react';
import { Button, VStack, Text, Box, Center, Pressable,HStack, useTheme, Image, View, ArrowBackIcon } from 'native-base'
import CustomColors from '../theme/colors';
import Connected from '../modules/Connected';
import Disconnected from '../modules/Disconnected';



const ConnectionScreen = ({ navigation }) => {
    const [isConnected, setIsConnected]=useState(false);

const SenVitConnection=()=>{
    if(isConnected){
        return <Connected navigation={navigation}/>
    }else{
        return <Disconnected setIsConnected={setIsConnected}/>
    }
}
    return (
        <Center w={"100%"} flex={1} m={0} bg={"white"}>
            <HStack
             alignItems='center'
             justifyContent="center"
             w="full"
             position="relative"
             p={1}
            >
                <Pressable onPress={() => navigation.goBack()}
                    position="absolute"
                    left={5}
                    zIndex={1}
                    >
                    <ArrowBackIcon color="black" size="md"/>
                </Pressable>
                <Text
                pt={16}
                maxW={180}
                fontSize={"2xl"}
                textAlign={"center"}
                >Connect to my SenVit</Text>
            </HStack>
            <SenVitConnection/>
        </Center>
    )
}
export default ConnectionScreen;