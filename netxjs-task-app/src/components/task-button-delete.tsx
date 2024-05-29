import { Button } from "./ui/button";
import { removeTask } from "@/actions/tasks-actions";

// Esto se puede ejcutar con código del lado del cliente
export function TaskButtonDelete({ taskId }: { taskId: number }) {
    return (
        <form action={removeTask}>
            <input type="hidden" name="taskId" value={taskId} />
            <Button variant="destructive">Delete</Button>
        </form>
    );
}
