# Task Manager CLI

A simple Command-Line Interface (CLI) to manage tasks. This script allows you to add, update, delete, and change the status of tasks. It reads and writes data to a `tasks.json` file.

## Features

* **List Tasks**: View all tasks.
* **Add Task**: Add a new task.
* **Update Task**: Modify an existing task's title.
* **Delete Task**: Remove a task.
* **Mark as In Progress**: Change task status to "in-progress."
* **Mark as Done**: Change task status to "done."

## Requirements

* **Node.js**: Make sure you have Node.js installed on your machine.

## Installation

1. **Install Node.js**:

   * If you don't have Node.js installed, download it from [here](https://nodejs.org/) and install it on your system.
   * Alternatively, use a version manager like [nvm](https://github.com/nvm-sh/nvm) to install Node.js.

2. **Clone the Repository**:

   ```bash
   git clone https://github.com/hanifas-cs50/30-Days-Challenge.git
   cd 30-Days-Challenge
   cd "Task Tracker CLI"
   ```

3. **Initialize the Project**:
   Ensure the project has a `package.json`. If not, run:

   ```bash
   npm init -y
   ```

4. **Create a `tasks.json` file**:
   Ensure there is a `tasks.json` file in the project root. The script will read and write task data from this file. Example structure:

   ```json
   [
       {
           "id": 1,
           "title": "Sample Task",
           "status": "todo",
           "createdAt": "2023-01-01T00:00:00.000Z",
           "updatedAt": "2023-01-01T00:00:00.000Z"
       }
   ]
   ```

## Usage

The script can be run with various commands from the command line.

### List All Tasks

```bash
node tasks.js list
```

### Add a Task

```bash
node tasks.js add "New Task"
```

### Update a Task

```bash
node tasks.js update <task_id> "Updated Task Title"
```

### Delete a Task

```bash
node tasks.js delete <task_id>
```

### Mark Task as In Progress

```bash
node tasks.js mark-in-progress <task_id>
```

### Mark Task as Done

```bash
node tasks.js mark-done <task_id>
```

## Example Usage

1. List all tasks:

   ```bash
   node tasks.js list
   ```

2. Add a new task:

   ```bash
   node tasks.js add "Complete the project"
   ```

3. Update a task:

   ```bash
   node tasks.js update 1 "Complete the Node.js task"
   ```

4. Delete a task:

   ```bash
   node tasks.js delete 1
   ```

5. Mark task as "in-progress":

   ```bash
   node tasks.js mark-in-progress 1
   ```

6. Mark task as "done":

   ```bash
   node tasks.js mark-done 1
   ```

## Contributing

Feel free to fork the repository and submit pull requests. Issues and feedback are also welcome!


## Challenge

Challenge Link: [Task Tracker CLI](https://roadmap.sh/projects/task-tracker)