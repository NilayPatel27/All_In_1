import { View, Text } from 'react-native'
import React, { useState } from 'react'
import DocumentPicker, {
    DirectoryPickerResponse,
    DocumentPickerResponse,
    isInProgress,
    types,
  } from 'react-native-document-picker';
import { Button } from 'react-native-elements';

const App = () => {
    const [singleFile, setSingleFile] = useState()
    const openDocumentFile = async () => {
        try {
            const file = await DocumentPicker.pickSingle({
                type: [DocumentPicker.types.images]
            })
            console.log('file : ' + JSON.stringify(file.uri))

            setSingleFile(file)
        }
        catch (err) {
            setSingleFile(null)
            if (DocumentPicker.isCancel(err)) {
                alert('Canceled')
            } else {
                alert('unknown error: ' + JSON.stringify(err))
                throw err
            }
        }
    }

       
       
    
    
    


  return (
    <View style={{flex:1,justifyContent:'center'}}>
      <Button
        title="Open Document Picker"
        onPress={openDocumentFile}
        />

    </View>
  )
}

export default App