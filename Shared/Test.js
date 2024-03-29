import { StyleSheet, Text, View } from 'react-native'
import {FormControl, Box, HelperText,Input, Stack, WarningOutlineIcon } from 'native-base'
import React from 'react'

const Test = () => {
  return (<Box alignItems="center">
  <Box w="100%" maxWidth="300px">
    <FormControl isRequired>
      <Stack mx="4">
        <FormControl.Label>Password</FormControl.Label>
        <Input type="password" defaultValue="12345" placeholder="password" />
        <FormControl.HelperText>
          Must be atleast 6 characters.
        </FormControl.HelperText>
        <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
          Atleast 6 characters are required.
        </FormControl.ErrorMessage>
      </Stack>
    </FormControl>
  </Box>
</Box>
  )
}

export default Test

const styles = StyleSheet.create({})