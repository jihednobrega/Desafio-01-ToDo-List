import { Header } from './components/Header'
import { Input } from './components/Input'
import { Tasks } from './components/Tasks'
import { useState } from 'react'

import styles from './App.module.css'

import './global.css'

export interface ITask {
  id: string
  title: string
  isCompleted: boolean
}

export function App() {
  const [tasks, setTasks] = useState<ITask[]>([])

  function addTask(taskTitle: string) {
    if (!taskTitle) {
      return
    }

    setTasks([
      ...tasks,
      {
        id: crypto.randomUUID(),
        title: taskTitle,
        isCompleted: false,
      },
    ])
  }

  function deleteTaskById(taskId: string) {
    const newTasks = tasks.filter((task) => task.id !== taskId)
    setTasks(newTasks)
  }

  function toggleTaskCompletion(taskId: string) {
    const newTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return { ...task, isCompleted: !task.isCompleted }
      }
      return task
    })
    setTasks(newTasks)
  }

  return (
    <div>
      <Header />

      <main className={styles.wrapper}>
        <Input onAddTask={addTask} />
        <Tasks tasks={tasks} onDelete={deleteTaskById} onComplete={toggleTaskCompletion} />
      </main>
    </div>
  )
}
