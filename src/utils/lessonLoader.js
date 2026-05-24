const lessonModules = import.meta.glob('../lessons/**/*.vue') //finds all the .vue files in the lessons folder and its subfolders

function formatTitle(text) { // Converts "my-lesson" to "My Lesson"
    return text
        .replace(/-/g, ' ') // Replace dashes with spaces
        .replace(/\b\w/g, (char) => char.toUpperCase()) // Capitalize the first letter of each word
}
export const lessons = Object.keys(lessonModules).map((path, index) => { // For each lesson file, extract the slug, title, and category from the file path
    const parts = path.split('/') // Split the path into parts
    const fileName = parts[parts.length - 1].replace('vue', '') // Get the file name without the .vue extension
    const folderName = parts[parts.length - 2] // Get the folder name, which is the category of the lesson

    const slug = fileName // Generate a slug from the file name, e.g., "my-lesson"
    const title = formatTitle(fileName) // Generate a title from the file name, e.g., "My Lesson"
    const category = formatTitle(folderName) // Generate a category name from the folder name, e.g., "JavaScript"

    return { // Return an object representing the lesson with its id, title, slug, category, path, and component
        id: index + 1,
        title,
        slug,
        category,
        path,
        component: lessonModules[path], // The component is the imported Vue component for the lesson
    }
})

export const courses = Object.values( // Group the lessons by category using reduce to create an object where each key is a category and the value is an object containing the category title and an array of lessons in that category
    lessons.reduce((groups, lesson) => { // For each lesson, check if the category already exists in the groups object. If not, create a new entry for that category with an empty lessons array. Then, push the current lesson into the appropriate category's lessons array.
        if (!groups[lesson.category]) { // If the category doesn't exist in the groups object, create a new entry for it
            groups[lesson.category] = { // Create a new entry for the category with its title and an empty lessons array
                title: lesson.category, // The title of the category is the same as the category name
                lessons: [], // The lessons array is initially empty
            }
        }
        groups[lesson.category].lessons.push(lesson) // Push the current lesson into the lessons array of the appropriate category
        return groups // Return the updated groups object for the next iteration of reduce
    }, {})
)