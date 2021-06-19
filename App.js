import React, { useState } from 'react';
import { SafeAreaView, View, Image, Text, Button } from 'react-native';


const Cat = (props) => {
  const [isHungry, setIsHungry] = useState(true);

    return (
      <View>
        <Text>I am {props.name}, and I am { isHungry ? "hungry" : "full"} </Text>

        <Button onPress={() => {
          setIsHungry(false)
        }}
        disabled={!isHungry} title={isHungry ? "Pour some milk please" : "I'm done"}>
        </Button>
        </View>  
  );
}

const Cafe = () => {
  return (
<SafeAreaView style={{flex: 1}}>
<>
<Cat name="Amy"></Cat>
<Cat name="Hannah"></Cat>
</>
</SafeAreaView>
  )
}

export default Cafe




