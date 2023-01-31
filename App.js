import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, FlatList, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
    const [show, setShow] = useState(false);
    const [name, setName] = useState('');
    const [desc, setDesc] = useState('');
    const [data, setData] = useState([{
        id: 1,
        name: 'Nguyen Van Loc',
        desc: 'Ph20710',
    }, {
        id: 2,
        name: 'Nguyen Van Nam',
        desc: 'Ph20711',
    }, {
        id: 3,
        name: 'Nguyen Van Minh',
        desc: 'Ph20712',
    }, {
    id: 4,
        name: 'Nguyen Van Hoang',
            desc: 'Ph20713',
    } ]);
    const [id, setId] = useState(data.length + 1);
    const [list, setList] = useState(data);
    return (
        <View style={styles.container}>
            {
                show ?
                    (
                        <View>
                            <Text style={{ margin: 12, fontSize: 20 }}>Thêm Mới</Text>
                            <TextInput style={styles.input}
                                placeholder='Tên'
                                onChangeText={text => setName(text)}
                            />
                            <TextInput style={styles.input}
                                placeholder='Noi dung'
                                onChangeText={text => setDesc(text)}
                            />
                            <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                                <Button title='Hủy' onPress={() => setShow(!show)} />
                                <Button title='Lưu' onPress={() => {
                                    const newItem = {
                                        id: id,
                                        name: name,
                                        desc: desc,
                                    };
                                    const newArray = [...data, newItem];
                                    setId(id + 1);
                                    setList(newArray)
                                    setData(newArray);
                                    console.log(list);
                                    setName('');
                                    setDesc('');
                                    setShow(!show);
                                }} />
                            </View>
                        </View>

                    ) :
          <>
                        <Text style={styles.text}>Ho ten: Mguyen Van Loc</Text>
                        <Text style={styles.text}>MSV: Ph20710</Text>
                        <Button title='Thêm mới' onPress={() => setShow(!show)} />
                        <FlatList
                            data={list}
                            renderItem={({ item }) => (
                                <View style={{ flex: 1, flexDirection: 'row', marginVertical: 16 }}>
                                    <View>
                                        <Text style={{ marginVertical: 4, marginHorizontal: 6 }}> {item.name}</Text>
                                        <Text style={{ marginVertical: 4, marginHorizontal: 6 }}> {item.desc}</Text>
                                    </View>
                                </View>
                            )}
                            keyExtractor={(item) => item.id} />
                    </>
            }

            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },

    text: {
        fontSize: 20,
        marginVertical: 4,
    },

    container: {
        paddingTop: 60,
        paddingHorizontal: 30,
        backgroundColor: '#fff',
    },
});