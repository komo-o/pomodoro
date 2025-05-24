import { MoreHorizontal, PlusCircle, CheckCircle } from 'lucide-react'

export interface Task {
  id: number
  title: string
}

interface TaskBoardProps {
  title: string
  count: number
  color: string
  tasks: Task[]
}

const TaskBoard = ({ title, count, color, tasks }: TaskBoardProps) => {
  return (
    <div className="mx-2 min-w-md flex-1 rounded-md border bg-gray-50 p-4 shadow-sm">
      <div className="mb-2 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <span className={`text-base font-bold ${color}`}>{title}</span>
          <span className={`text-base font-bold ${color}`}>{count}</span>
        </div>
        <MoreHorizontal className="text-gray-400" />
      </div>
      <button className="mb-4 flex w-full items-center justify-center rounded-md border border-dashed border-gray-300 bg-white py-2 font-medium text-[#3B9AE1] hover:bg-blue-50">
        <PlusCircle className="mr-1 h-5 w-5" />
        タスクを追加
      </button>
      <div className="space-y-4">
        {tasks.map((task) => (
          <div key={task.id} className="flex items-start justify-between rounded-lg border bg-white p-4 shadow">
            <div className="flex items-center space-x-2">
              <CheckCircle className="h-5 w-5 text-blue-200" />
              <div>
                <div className="text-xs font-medium text-gray-400">#{task.id}</div>
                <div className="text-base font-normal text-gray-800">{task.title}</div>
              </div>
            </div>
            <MoreHorizontal className="text-gray-400" />
          </div>
        ))}
      </div>
    </div>
  )
}

export default TaskBoard
