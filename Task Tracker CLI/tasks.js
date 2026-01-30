const fs = require("fs");
const path = require("path");

// create or read "tasks.json"
const json = path.join(process.cwd(), "tasks.json");

// I used chatGPT for getting args, I've never done this before
const [a, b, command, ...args] = process.argv;

// load tasks
function load_tasks() {
    const data = fs.readFileSync(json, "utf8");
    return JSON.parse(data);
}

// tasks list
function tasks_list() {
    const tasks = load_tasks();
    tasks.forEach(task => {
        console.log(
            `- [${task.id}] ${task.title} (${task.status})`
        )
    });
}

// add task
function add_task(title) {
    const tasks = load_tasks();
    const task = {
        id: tasks.length === 0 ? 1 : tasks[tasks.length - 1].id + 1,
        title,
        status: "todo",
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
    }
    tasks.push(task);
    fs.writeFileSync(json, JSON.stringify(tasks, null));
    console.log(`task added successfully, id: ${task.id}`)
}

// update task
function update_task(id, title) {
    const tasks = load_tasks();
    const task = tasks.find(t => t.id == id);

    task["title"] = title;
    task["updatedAt"] = new Date().toISOString();
    fs.writeFileSync(json, JSON.stringify(tasks, null));
    console.log(`task updated successfully, id: ${task.id}`)
}

// delete task
function delete_task(id) {
    const tasks = load_tasks();
    const filtered = tasks.filter(t => t.id != id)

    fs.writeFileSync(json, JSON.stringify(filtered, null));
    console.log(`task deleted successfully, id: ${id}`)
}

// update task status
function update_task_status(id, status) {
    const tasks = load_tasks();
    const task = tasks.find(t => t.id == id);

    task["status"] = status;
    task["updatedAt"] = new Date().toISOString();
    fs.writeFileSync(json, JSON.stringify(tasks, null));
    console.log(`task updated successfully, id: ${task.id}`)
}

// Command list
if (command == "list") {
    tasks_list();
} else if (command == "add") {
    add_task(args.join(" "));
} else if (command == "update") {
    update_task(args.splice(0, 1)[0], args.join(" "));
} else if (command == "delete") {
    delete_task(args[0]);
} else if (command == "mark-in-progress") {
    update_task_status(args[0], "in-progress");
} else if (command == "mark-done") {
    update_task_status(args[0], "done");
} else {
    console.log("node tasks.js: \n- list\n- add [To do]\n- update [id] [Replacement To Do]\n- delete [id]\n- mark-in-progress [id]\n- mark-done [id]");
}