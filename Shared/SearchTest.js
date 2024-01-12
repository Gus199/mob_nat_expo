import { StyleSheet, Text, View,SafeAreaView } from 'react-native'
import {Stack, Input,  InputLeftElement,Icon, Icon as MaterialIcons,InputRightElement} from 'native-base'
import React from 'react'

const SearchTest = () => {
  return (<SafeAreaView>
 
  <Input w={{
  base: "98%%",
  md: "25%"
}} 
InputLeftElement={<Icon as={<MaterialIcons name="person" />} size={5} ml="2" color="muted.400"  />}
placeholder="Search" 
// onFocus={}
// onChange={() =>}
backgroundColor='gainsboro'
/>

</SafeAreaView>
  )
}

export default SearchTest

const styles = StyleSheet.create({})