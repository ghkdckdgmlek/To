import React, {useState} from 'react';
import { KeyboardAvoidingView, StyleSheet, Text, View, TextInput, TouchableOpacity, Keyboard, ScrollView } from 'react-native';
import Task from './components/Task';
import {NavigationContainer} from '@react-navigation/native'
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs"
const Tab = createBottomTabNavigator()
import { createStackNavigator } from '@react-navigation/stack';

function HomeScreen({ taskItems, handleAddTask, completeTask }) {
  const [task, setTask] = useState('');

  return (
    <View style={styles.screenContainer}>
      <View style={styles.container}>
        <ScrollView
          contentContainerStyle={{
            flexGrow: 1,
          }}
          keyboardShouldPersistTaps="handled"
        >
          <View style={styles.tasksWrapper}>
            <Text style={styles.sectionTitle}>오늘의 할일</Text>
            <View style={styles.items}>
              {taskItems.map((item, index) => (
                <TouchableOpacity key={index} onPress={() => completeTask(index)}>
                  <Task text={item} />
                </TouchableOpacity>
              ))}
            </View>
          </View>
        </ScrollView>

        <KeyboardAvoidingView style={styles.writeTaskWrapper}>
          <TextInput
            style={styles.input}
            placeholder="할일 추가"
            value={task}
            onChangeText={(text) => setTask(text)}
          />
          <TouchableOpacity onPress={() => handleAddTask(task)}>
            <View style={styles.addWrapper}>
              <Text style={styles.addText}>+</Text>
            </View>
          </TouchableOpacity>
        </KeyboardAvoidingView>
      </View>
    </View>
  );
}

function SettingsScreen({ taskItems, handleAddTask, completeTask }) {
  const [task, setTask] = useState('');

  return (
    <View style={styles.screenContainer}>
      <View style={styles.container}>
        <ScrollView
          contentContainerStyle={{
            flexGrow: 1,
          }}
          keyboardShouldPersistTaps="handled"
        >
          <View style={styles.tasksWrapper}>
            <Text style={styles.sectionTitle}>내일의 할일</Text>
            <View style={styles.items}>
              {taskItems.map((item, index) => (
                <TouchableOpacity key={index} onPress={() => completeTask(index)}>
                  <Task text={item} />
                </TouchableOpacity>
              ))}
            </View>
          </View>
        </ScrollView>

        <KeyboardAvoidingView style={styles.writeTaskWrapper}>
          <TextInput
            style={styles.input}
            placeholder="할일 추가"
            value={task}
            onChangeText={(text) => setTask(text)}
          />
          <TouchableOpacity onPress={() => handleAddTask(task)}>
            <View style={styles.addWrapper}>
              <Text style={styles.addText}>+</Text>
            </View>
          </TouchableOpacity>
        </KeyboardAvoidingView>
      </View>
    </View>
  );
}

export default function App() {
  const [taskItems, setTaskItems] = useState([]);
  const [taskItems1, setTaskItems1] = useState([]);

  const handleAddTask = (task) => {
    if (task.trim() !== '') {
      alert('추가했습니다');
      Keyboard.dismiss();
      setTaskItems([...taskItems, task]);
    }
  };

  const completeTask = (index) => {
    alert('삭제했습니다');
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index, 1);
    setTaskItems(itemsCopy);
  };

  const handleAddTask1 = (task) => {
    if (task.trim() !== '') {
      alert('추가했습니다');
      Keyboard.dismiss();
      setTaskItems1([...taskItems1, task]);
    }
  };

  const completeTask1 = (index) => {
    alert('삭제했습니다');
    let itemsCopy = [...taskItems1];
    itemsCopy.splice(index, 1);
    setTaskItems1(itemsCopy);
  };

  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="오늘 할일"
          component={() => (
            <HomeScreen
              taskItems={taskItems}
              handleAddTask={handleAddTask}
              completeTask={completeTask}
            />
          )}
        />
        <Tab.Screen
          name="내일 할일"
          component={() => (
            <SettingsScreen
              taskItems={taskItems1}
              handleAddTask={handleAddTask1}
              completeTask={completeTask1}
            />
          )}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
 screenContainer: {
    flex: 1,
    backgroundColor: '#E8EAED',
  },
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',
  },
  tasksWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  items: {
    marginTop: 20,
  },
  writeTaskWrapper: {
    position: 'absolute',
    bottom: 30,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: '#FeFF',
    borderRadius: 60,
    borderColor: '#C0C1C1',
    borderWidth: 1,
    width: 250,
  },
  addWrapper: {
    width: 60,
    height: 60,
    backgroundColor: '#FFF',
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#C0C0C20',
    vorderWidth: 1,
  },
  addText: {},
});