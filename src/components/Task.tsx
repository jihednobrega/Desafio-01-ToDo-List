import { Trash, Check } from '@phosphor-icons/react'
import { ITask } from '../App'

import styles from './Task.module.css'

interface Props {
  task: ITask
  onDelete: (taskId: string) => void
  onComplete: (taskId: string) => void
}

export function Task({ task, onDelete, onComplete }: Props) {
  return (
    <div className={styles.task}>
      <button className={styles.checkContainer} onClick={() => onComplete(task.id)}>
        {task.isCompleted ? (
          <div className={styles.checked}>
            <Check weight="bold" />
          </div>
        ) : (
          <div></div>
        )}
      </button>
      <p className={task.isCompleted ? styles.textCompleted : ''}>{task.title}</p>
      <button className={styles.deleteButton} onClick={() => onDelete(task.id)}>
        <Trash size={16} weight="bold" />
      </button>
    </div>
  )
}
