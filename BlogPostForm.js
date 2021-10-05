import React, {useState} from 'react';
import {View, Text, StyleSheet, TextInput, Button} from 'react-native';

const blogPostForm = ({onSubmit, initialValues}) => {
    const [title, setTitle] = useState(initialValues.title);
    const [content, setContent] = useState(initialValues.content);


    return <View style={styles.parentView}>
    <Text style={styles.title}>Name</Text>
    <View style={styles.textInput}><TextInput value={title} onChangeText={(text) => setTitle(text)} /></View>
    <Text style={styles.title}>Content</Text>
    <View style={styles.textInput}><TextInput value={content} onChangeText={(text) => setContent(text)} /></View>
    <Button title="Save Post" onPress={() => {onSubmit(title, content)}}/>
</View>


};

blogPostForm.defaultProps = {
    initialValues: {
        title: '',
        content: '',
    }
};

const styles = StyleSheet.create({
    textInput: {
        justifyContent: "space-between",
        paddingBottom: 10,
        borderColor: 'black',
        borderWidth: 1,
        marginVertical: 3,
        marginHorizontal: 5,
        borderRadius: 5,
    },
    title: {
        marginHorizontal: 10,
        fontWeight: 'bold',

    }
}) 

export default blogPostForm;