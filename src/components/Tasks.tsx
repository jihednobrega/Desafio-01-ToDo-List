import { ITask } from '../App.tsx'
import { Task } from './Task.tsx'
import styles from './Tasks.module.css'
import { ClipboardText } from '@phosphor-icons/react'

interface Props {
  tasks: ITask[]
  onDelete: (taskId: string) => void
  onComplete: (taskId: string) => void
}

export function Tasks({ tasks, onDelete, onComplete }: Props) {
  const tasksQuantity = tasks.length
  const completedTasks = tasks.filter((task) => task.isCompleted).length

  return (
    <div className={styles.tasksWrapper}>
      <header className={styles.headerTasks}>
        <div className={styles.createdTasks}>
          <strong>Tarefas Criadas</strong>
          <span>{tasksQuantity}</span>
        </div>

        <div className={styles.completedTasks}>
          <strong>Concluídas</strong>
          <span>
            {completedTasks} de {tasksQuantity}
          </span>
        </div>
      </header>

      <main className={styles.list}>
        {tasks.map((task) => (
          <Task key={task.id} task={task} onDelete={onDelete} onComplete={onComplete} />
        ))}

        {tasks.length <= 0 && (
          <section className={styles.emptyTasks}>
            <ClipboardText size={50} />
            <div>
              <p>Você ainda não tem tarefas cadastradas</p>
              <span>Crie tarefas e organize seus itens a fazer</span>
            </div>
          </section>
        )}
      </main>
    </div>
  )
}
