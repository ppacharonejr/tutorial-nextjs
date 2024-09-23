'use client'
import { deleteTask } from "../utils/actions"
import { useFormStatus } from 'react-dom'

const SubmitButton = () => {
  const { pendind } = useFormStatus

  return <button className="btn btn-xs btn-error" disabled={pendind}>
    {pendind? 'pendind...' : 'delete'}
  </button>
}

const DeleteForm = ({id}) => {
  return (
    <form action={deleteTask}>
      <input type="hidden" name="id" value={id}></input>
      <SubmitButton />
    </form>
  )
}

export default DeleteForm

