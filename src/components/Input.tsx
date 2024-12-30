import { PlusCircle } from '@phosphor-icons/react'

import styles from './Input.module.css'
import { FormEvent, useState } from 'react'

interface Props {
  onAddTask: (taskTitle: string) => void
}

export function Input({ onAddTask }: Props) {
  const [title, setTitle] = useState('')

  function handleSubmit(event: FormEvent) {
    event.preventDefault()

    onAddTask(title)
    setTitle('')
  }

  function onChangeTitle(event: React.ChangeEvent<HTMLInputElement>) {
    setTitle(event.target.value)
  }

  return (
    <form className={styles.inputWrapper} onSubmit={handleSubmit}>
      <input type="text" placeholder="Adicione uma nova tarefa" onChange={onChangeTitle} value={title} />
      <button type="submit">
        Criar
        <PlusCircle size={16} weight="bold" />
      </button>
    </form>
  )
}
