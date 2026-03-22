import { createClient } from './utils/supabase/server'

type Todo = {
  id: string
  name: string
}

export default async function Page() {
  let cookieStore: unknown = undefined

  try {
    const headers = await import('next/headers')
    cookieStore = headers.cookies()
  } catch {
    // next/headers is not available in this environment
  }

  const supabase = createClient(cookieStore)

  const { data: todos } = (await supabase.from<Todo>('todos').select('id, name')) as {
    data: Todo[] | null
  }

  return (
    <ul>
      {(todos ?? []).map((todo: Todo) => (
        <li key={todo.id}>{todo.name}</li>
      ))}
    </ul>
  )
}