import React from 'react'
import { View } from 'react-native'
import { Text, Title } from 'react-native-paper'
import TextButton from '@components/TextButton'

const Profile = () => (
  <View>
    <View style={{ paddingVertical: 20, paddingHorizontal: 30 }}>
      <Title>Profile</Title>
      <Text>My profile</Text>
      <TextButton
        text="Sign out"
      />
    </View>
  </View>
)

export default Profile
