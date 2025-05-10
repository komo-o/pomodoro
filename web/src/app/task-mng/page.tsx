import MainLayout from '@/components/layouts/main-layout'
import TaskBoard, { Task } from '@/components/features/task-mng/TaskBoard'

const todayTasks: Task[] = [
  { id: 3, title: '今日のタスク1' },
  { id: 4, title: '今日のタスク2' },
  { id: 5, title: '今日のタスク3' }
]
const allTasks: Task[] = [
  { id: 7, title: '全てのタスク2' },
  { id: 6, title: '全てのタスク1' }
]

export default function TaskManagementPage() {
  return (
    <MainLayout>
      <div className="flex h-full w-full gap-2 px-8 py-8">
        <TaskBoard title="今日のタスク" count={todayTasks.length} color="text-blue-500" tasks={todayTasks} />
        <TaskBoard title="全てのタスク" count={allTasks.length} color="text-green-500" tasks={allTasks} />
      </div>
    </MainLayout>
  )
}
